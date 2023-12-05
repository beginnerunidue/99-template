import { useState } from "react";

function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // mit zusammengefügten state
  const [data, setData] = useState({ username: "", password: "" });

  function handleFormSubmit(event) {
    event.preventDefault();
    // console.log(event.target.username.value);
    // console.log(event.target.password.value);

    const userData = {
      username: data.username,
      password: data.password,
    };
    console.log(userData);
    alert(JSON.stringify(userData));
  }
  //// teste hier die Variante mit der
  //// anonymen Funktion in JSX, im Input-Element username:

  function handleChangePassword(event) {
    setData({ ...data, password: event.target.value });
  }

  //// Universal-function für alle Input-Felder ist auch möglich
  // function handleInputChange(e, name) {
  //   setData({ ...data, [name]: e.target.value})
  // }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Username: </label>
        <input
          type="text"
          value={data.username}
          // onChange={handleChangeName}
          // das wird auch funktionieren
          onChange={(e) => setData({ ...data, username: e.target.value })}
          name="username" // eigentlich brauchen wir nicht mehr
        />
        <label>Password: </label>
        <input
          type="password"
          value={data.password}
          onChange={handleChangePassword}
          name="password" // eigentlich brauchen wir nicht mehr
        />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}

export default Login;
