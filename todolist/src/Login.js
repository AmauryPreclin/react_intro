import React from "react";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation Login($email: String!) {
    login(email: $email)
  }
`;

export default function Login() {
  const client = useApolloClient();
  const [taskName, setTaskName] = React.useState("");
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      localStorage.setItem("token", login);
      client.writeData({ data: { isLoggedIn: true } });
    },
  });

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleClick = () => {
    localStorage.setItem("token", taskName);
    setTaskName("");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <p>An error occurred</p>;

  //return <div login={login} />;
  return (
    <div>
      <div>Login</div>
      <input value={taskName} onChange={handleChange}></input>
      <button type="button" onClick={handleClick}>
        Connect
      </button>
    </div>
  );
}
