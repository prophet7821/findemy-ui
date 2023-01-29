import { Button, styled } from "@mui/material";

const LoginButton = styled(Button)({
  border: "2px solid #000",
  borderRadius: 0,
  color:'black',
  "&:hover": {
    border: "2px solid #000",
    borderRadius: 0,
  },
});

export default LoginButton;
