import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  TextField,
  Avatar,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = styled(AppBar)({
  backgroundColor: "#F1F3F4",
  boxShadow: "none",
  width: 1200,
  marginLeft: 110,
});

const TextFieldStyle = styled(TextField)({
  backgroundColor: "#FFFFFF",
  width: 503,
  borderRadius: 20,
  marginLeft: 25,
  color: "#949494",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#FFFFFF",
      borderRadius: 20,
    },
  },
});
const Appbar = () => {
  return (
    <div>
      <Navbar position="static">
        <Toolbar>
          <MenuIcon sx={{ color: "#663399", ml: 2 }} />
          <TextFieldStyle size="small" label="search">
            <Avatar
              src="/img/search.png"
              sx={{ width: 14, height: 14, color: "#B1B1B1", zIndex: 2 }}
            />
          </TextFieldStyle>
          <Avatar
            src="/img/arrow-cross.png"
            sx={{ width: 15.74, height: 15.74, ml: 70 }}
          ></Avatar>
          <Avatar
            src="/img/bell.png"
            sx={{ width: 15.75, height: 17.66, ml: 3 }}
          ></Avatar>
          <Avatar
            src="/img/user-img.png"
            variant="square"
            sx={{ ml: 3 }}
          ></Avatar>
        </Toolbar>
      </Navbar>
    </div>
  );
};
export default Appbar;
