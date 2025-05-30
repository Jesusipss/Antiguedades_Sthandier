import { AppBar, Toolbar, Typography, IconButton, Drawer, ListItem, ListItemText, Box, Avatar, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

//Componente Header
const Header = ({ onDrawerToggle }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">Mi Aplicación</Typography>
        </Box>
        <Avatar alt="Usuario" src="/static/images/avatar/1.jpg" />
      </Toolbar>
    </AppBar>
  );
};
export default Header; 