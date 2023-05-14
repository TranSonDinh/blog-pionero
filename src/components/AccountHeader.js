import React, { useState } from "react";
import {
  Box,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginDialog from "./LoginDialog";
import SignUpDialog from "./SignUpDialog";

const AccountHeader = () => {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <>
      <Stack direction="row">
        <Box>
          <AccountCircleIcon
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            sx={{ color: "#fff" }}
          />
          <Popper
            sx={{ zIndex: 1 }}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={() => setOpen(false)}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        onClick={() => {
                          setOpen(false);
                          setOpenLogin(true);
                        }}
                      >
                        Login
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setOpen(false);
                          setOpenSignUp(true);
                        }}
                      >
                        Register
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Box>
      </Stack>
      <LoginDialog open={openLogin} onClose={() => setOpenLogin(false)} />
      <SignUpDialog open={openSignUp} onClose={() => setOpenSignUp(false)} />
    </>
  );
};

export default AccountHeader;
