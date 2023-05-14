import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "16px",
  },
  input: {
    marginBottom: "16px",
  },
}));

const SignUpDialog = ({ open, onClose }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Handle sign-up logic here
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter your desired username and password to sign up.
        </DialogContentText>
        <form className={classes.form}>
          <TextField
            label="Username"
            className={classes.input}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            className={classes.input}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            sx={{mt:1}}
          />
           <TextField
            label="Confirm Password"
            type="password"
            className={classes.input}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            sx={{mt:1}}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSignUp} color="primary" variant="contained">
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpDialog;
