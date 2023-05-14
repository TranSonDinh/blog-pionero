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
    margin: "16px"
  },
  input: {
    marginBottom: "16px"
  },
}));

const LoginDialog = ({ open, onClose }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter your username and password to login.
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
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleLogin} color="primary" variant="contained">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
