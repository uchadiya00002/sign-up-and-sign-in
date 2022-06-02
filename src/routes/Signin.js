import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { FaArrowLeft } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Signin = () => {
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
              fontWeight: "700",
            }}
          >
            Sign In{" "}
          </h2>
          <Stack spacing={3} direction="row">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2196F3",
                padding: 1,
                width: "300px",
              }}
            >
              <FaFacebookF />
              Login with Facebook
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "300px",
                backgroundColor: "#D14343",
                "&:hover": {
                  backgroundColor: "#ff3333",
                },
              }}
            >
              <FaGoogle /> Login with Google{" "}
            </Button>
          </Stack>
          <p
            style={{
              color: "#03045E",
              fontWeight: "1rem",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            Or login with email address{" "}
          </p>

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

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#03045E",
              "&:hover": {
                background: "#000033",
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
            Don’t have an account?{" "}
            <a
              href="/signup"
              style={{
                color: "#03045E",
                "&:hover": {
                  color: "#00004d",
                },
                border: 0,
                textDecoration: "none",
              }}
            >
              <b>Sign Up</b>
            </a>
          </p>
        </Stack>
      </FormControl>
    </div>
  );
};
export default Signin;
