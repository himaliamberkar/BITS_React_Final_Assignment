import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = { email: "user1@example.com", password: "admin@123" };

const Login = () => {
  const navigator = useNavigate();
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [isChanged, setIsChanged] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuthData((prevAuthData) => ({
      ...prevAuthData,
      [name]: value,
    }));
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setIsChanged(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = data.email;
    const storedPassword = data.password;
    if (
      storedEmail === authData.email &&
      storedPassword === authData.password
    ) {
      localStorage.setItem("isAuthenticated", "authenticated");
      navigator("/DashBoard");
    } else {
     alert('Wrong Crendentials');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60vh'
    }}>
    <Form>
      <Form.Group className="mb-3 --bs-black" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={authData.email}
          onChange={(e) => handleInputChange(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={authData.password}
          onChange={(e) => handleInputChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
   </div>
  );
};
export default Login;