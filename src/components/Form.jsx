import React from "react";

import { useState } from "react";
const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};
function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Firstname:",
      firstName,
      "| LastName:",
      lastName,
      "| Email:",
      email,
      "| Password:",
      password,
      "| Role: ",
      role
    );
    setFirstName("");
    setLastName("a");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Sign Up</h2>
        <div className="Field">
          <label htmlFor="firstname">
            First name <sup>*</sup>
          </label>
          <input
            id="firstname"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="First name"
          />
        </div>
        <div className="Field">
          <label>
            Last Name <sup>*</sup>
          </label>
          <input
            name="lol"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Last name"
          />
        </div>
        <div className="Field">
          <label>
            Email <sup>*</sup>
          </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
        </div>

        <div className="Field">
          <label>
            Password<sup>* </sup>
          </label>
          <input
            value={password.value}
            type="password"
            onChange={(e) => {
              setPassword({ ...password, value: e.target.value });
            }}
            onBlur={() => {
              setPassword({ ...password, isTouched: true });
            }}
            placeholder="Password"
          />
          {password.isTouched && password.value.length < 8 ? (
            <PasswordErrorMessage />
          ) : null}
        </div>
        <div className="Field">
          <label>
            Role <sup>*</sup>
          </label>
          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            <option value="" disabled selected hidden>
              Please Choose...
            </option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Audi">Audi</option>
          </select>
        </div>
        <input
          disabled={
            !firstName ||
            !lastName ||
            !email ||
            password.value.length <= 8 ||
            !role
          }
          type="button"
          value="submit"
          onClick={handleSubmit}
        />
      </fieldset>
    </form>
  );
}

export default Form;
