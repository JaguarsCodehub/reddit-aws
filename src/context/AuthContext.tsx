import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { CognitoUser } from "@aws-amplify/auth";
import { Hub, Auth } from "aws-amplify";

interface UserContextType {
  user: CognitoUser | null;
  setUser: Dispatch<SetStateAction<CognitoUser>>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

interface Props {
  children: React.ReactElement;
}

export default function AuthContext({ children }: Props): ReactElement {
  const [user, setUser] = useState<CognitoUser | null>(null);

  // This UseEffect will just check if the User exist when the <COMPONENT MOUNTS> !
  useEffect(() => {
    checkUser();
  }, []);

  // We are setting up a HUB listener to perform some action when the auth is triggered.
  useEffect(() => {
    Hub.listen("auth", () => {
      // Perform some action to update whenever an auth event is detected.
      checkUser();
    });
  }, []);

  // The AWS authentication function to check if the user Exists.
  async function checkUser() {
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();

      if (amplifyUser) {
        setUser(amplifyUser);
      }
    } catch (error) {
      // No current signed in User
      console.error(error);
      setUser(null);
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = (): UserContextType => useContext(UserContext);
