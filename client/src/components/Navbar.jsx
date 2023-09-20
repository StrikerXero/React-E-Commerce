import React from 'react'
import { 
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined,
} from '@mui/icons-material';
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import profileMessage from '../assests/profile.jpeg';
import {
    Toolbar,
    useTheme,
    AppBar,
    IconButton,
    Icon,
    InputBase
} from '@mui/material';

function Navbar({
    isSidebarOpen,
    setIsSidebarOpen,
}) {
    const dispatch = useDispatch();
    const theme = useTheme();

  return <AppBar
    sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
    }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Left */}
            <FlexBetween>
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon />
                </IconButton>
                <FlexBetween 
                    backgroundColor={theme.palette.background.alt}
                    borderRadius="9px"
                    gap="3rem"
                    p="0.1rem 1.5rem"
                >
                    <InputBase placeholder="Search..." />
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
            </FlexBetween>

            {/* Right */}     
            <FlexBetween gap="1.5rem">
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === "dark" ? (
                        <LightModeOutlined  sx={{ fontSize: "25px" }}/>
                    ) : (
                        <LightModeOutlined sx={{ fontSize: "25px" }}/>                       
                    )}
                </IconButton>
                <IconButton>
                    <SettingsOutlined sx={{ fontSize: "25px" }}/>
                </IconButton>
            </FlexBetween>
        </Toolbar>
  </AppBar>
};

export default Navbar