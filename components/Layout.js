import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
  styled,
} from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import BackgroundParticles from "./BackgroundParticles";
import CustomPaper from "./CustomPaper";
import { motion } from "framer-motion";
import theme from "../src/theme";

const pages = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Skills", route: "/skills" },
  { label: "Projects", route: "/projects" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const StyledAppBar = styled(AppBar, { theme })({
  backgroundColor: theme.palette.blue.shadow.dark,
  color: theme.palette.blue.shadow.light,
  height: "5vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ContentContainer = styled(Box, { theme })({
  height: "95vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.blue.shadow.dark,
});

const StyledBox = styled(Box, { theme })({
  backgroundColor: theme.palette.blue.dark,
});

export default function Layout({ children }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledBox>
      <StyledAppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              My Portfolio
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  opacity: 0.9,
                  "& .MuiMenu-paper": {
                    widthMin: "20vw",
                    paddingLeft: "1vw",
                    paddingRight: "2vw",
                    backgroundColor: theme.palette.blue.shadow.dark,
                    border: `1px solid ${theme.palette.blue.transparent.medium}`,
                  },
                }}
              >
                {pages.map((page) => (
                  <Link href={page.route}>
                    <MenuItem
                      key={page.route}
                      onClick={handleCloseNavMenu}
                      disableGutters
                    >
                      <Typography
                        textAlign="left"
                        sx={{
                          color: theme.palette.blue.shadow.light,
                          paddingRight: "1.5vw",
                        }}
                        component={motion.div}
                        whileHover={{
                          x: "1.5vw",
                          scale: 1.2,
                          fontWeight: "bold",
                        }}
                      >
                        {page.label}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              My Portfolio
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link href={page.route}>
                  <Button
                    key={page.route}
                    onClick={handleCloseNavMenu}
                    component={motion.div}
                    sx={{
                      my: 2,
                      color: theme.palette.blue.shadow.light,
                      display: "block",
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    {page.label}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Get in contact">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, color: "white" }}
                >
                  <ConnectWithoutContactIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          type: "tween",
        }}
      >
        <BackgroundParticles />
        <ContentContainer>
          <CustomPaper>
            <Box>{children}</Box>
          </CustomPaper>
        </ContentContainer>
      </motion.div>
    </StyledBox>
  );
}
