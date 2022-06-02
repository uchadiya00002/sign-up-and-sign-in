import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import { FaArrowLeft } from "react-icons/fa";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl>
        <Stack
          component="form"
          sx={{
            width: "600px",
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <h2
            style={{
              textAlign: "left",
              marginBottom: 1,
              // fontWeight: "700",
              marginTop: "30px",
            }}
          >
            Create a new account
          </h2>
          <p
            style={{
              color: "#03045E",
              fontWeight: "1rem",
              textAlign: "left",
              marginBottom: 10,
            }}
          >
            Use your email to create new account
          </p>
          <TextField
            label="First Name"
            variant="outlined"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Email Address"
            variant="outlined"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            id="filled-adornment-password"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            style={{
              textAlign: "left",
              fontSize: "0.9rem",
              color: "#65748B",
            }}
          >
            <Checkbox {...label} defaultChecked size="small" required />I have
            read the{" "}
            <a
              href="/"
              style={{
                color: "#03045E",
                textDecoration: "none",
                borderBottom: "0.1rem #03045E solid",
              }}
            >
              Terms and Condtions
            </a>
          </span>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#03045E",
              "&:hover": {
                backgroundColor: "#000033",
              },
            }}
          >
            Sign Up Now
          </Button>
          <p
            style={{
              textAlign: "left",
              fontSize: "0.9rem",
              color: "#65748B",
            }}
          >
            Have an account?{" "}
            <a
              href="/signin"
              style={{
                color: "#03045E",
                border: 0,
                textDecoration: "none",
              }}
            >
              <b>Sign in</b>
            </a>
          </p>
        </Stack>
      </FormControl>
    </div>
  );
};

export default Signup;
