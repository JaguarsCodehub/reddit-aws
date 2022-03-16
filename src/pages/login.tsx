import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Grid, Snackbar, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Auth } from "aws-amplify";
import { useUser } from "../context/AuthContext";
// import { CognitoUser } from "@aws-amplify/auth";
import { useRouter } from "next/router";

// Passing the attributes...
interface IFormInput {
  username: string;
  password: string;
}

export default function Login() {
  // State variables
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useUser(); // UseUser Hook
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [signInError, setSignInError] = useState<string>("");

  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  // When user submits their information
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const amplifyUser = await Auth.signIn(data.username, data.password);

    if (amplifyUser) {
      router.push("/");
    } else {
      throw new Error("Something went wrong, Please sign up first");
    }
  };

  // Nothing just close this handle :()
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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

        <Grid>
          <Button variant="contained" type="submit">
            Sign In
          </Button>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {signInError}
        </Alert>
      </Snackbar>
    </form>
  );
}
