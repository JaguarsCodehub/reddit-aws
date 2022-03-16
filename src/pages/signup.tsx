import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Grid, Snackbar, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Auth } from "aws-amplify";
import { useUser } from "../context/AuthContext";
import { CognitoUser } from "@aws-amplify/auth";
import { useRouter } from "next/router";

// Passing the attributes...
interface IFormInput {
  username: string;
  email: string;
  password: string;
  code: string;
}

export default function Signup() {
  // State variables
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useUser(); // UseUser Hook
  const [open, setOpen] = useState(false);
  const [signUpError, setSignUpError] = useState<string>("");
  const [showCode, setShowCode] = useState<boolean>(false);

  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  // When user submits their information
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      if (showCode) {
        confirmSignUp(data);
      } else {
        //   Execute the AWS Auth function
        await signUpWithEmailAndPassword(data);
        setShowCode(true);
      }
    } catch (err) {
      setSignUpError(err.message);
      setOpen(true);
    }
  };

  // Nothing just close this handle :()
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  //   AWS Auth function to signup the user
  async function signUpWithEmailAndPassword(
    data: IFormInput
  ): Promise<CognitoUser> {
    const { username, password, email } = data;

    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
        },
      });
      console.log("Signed up a user:", user);
      return user;
    } catch (error) {
      throw error;
    }
  }

  // Sign in the Amplify User
  async function confirmSignUp(data: IFormInput) {
    const { username, password, code } = data;
    try {
      await Auth.confirmSignUp(username, code);
      const amplifyUser = await Auth.signIn(username, password);
      console.log("Success, signed in a use", amplifyUser);

      if (amplifyUser) {
        router.push("/");
      } else {
        throw new Error("Something went wrong, Please sign up first");
      }
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  console.log("The value of the user from the hook is:", user);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <TextField
            id="username"
            label="Username"
            type="text"
            error={errors.username ? true : false}
            helperText={errors.username ? errors.username.message : null}
            {...register("username", {
              required: { value: true, message: "Please enter a username" },
              min: {
                value: 3,
                message: "Please enter a username between 3-16 characters",
              },
              maxLength: {
                value: 16,
                message: "Please enter a username betwween 3-16 characters",
              },
            })}
          />
        </Grid>

        <Grid item>
          <TextField
            id="email"
            label="Email"
            type="email"
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : null}
            {...register("email", {
              required: { value: true, message: "Please enter a valid email" },
            })}
          />
        </Grid>

        <Grid item>
          <TextField
            id="password"
            label="Password"
            type="password"
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password.message : null}
            {...register("password", {
              required: { value: true, message: "Please enter a password" },
              min: {
                value: 8,
                message: "Please enter a stronger password",
              },
            })}
          />
        </Grid>

        {showCode && (
          <Grid item>
            <TextField
              id="code"
              label="Verification Code"
              type="text"
              error={errors.code ? true : false}
              helperText={errors.code ? errors.code.message : null}
              {...register("code", {
                required: { value: true, message: "Please enter the code" },
                min: {
                  value: 6,
                  message: "Please enter the code",
                },
              })}
            />
          </Grid>
        )}

        <Grid>
          <Button variant="contained" type="submit">
            {showCode ? "Confirm Code" : "Signup"}
          </Button>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {signUpError}
        </Alert>
      </Snackbar>
    </form>
  );
}
