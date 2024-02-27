import * as React from 'react';
import PropTypes from 'prop-types';
import {openSidebar, closeSidebar, toggleSidebar} from './utils';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import {ListItemIcon, useMediaQuery} from "@mui/material";
import Avatar from "@mui/material/Avatar";

const logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
};

function Sidebar() {


    return (
        <div>
            <Box anchor="left">
                <Box
                    sx={{
                        position: {xs: 'fixed', md: 'sticky'},
                        display: 'flex',
                        transform: {
                            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
                            md: 'none',
                        },
                        transition: 'transform 0.4s, width 0.4s',
                        flexDirection: 'column',
                        zIndex: 10000,
                        height: '100dvh',
                        width: '250px',
                        top: 0,
                        p: 2,
                        flexShrink: 0,
                        gap: 2,
                        borderRight: '1px solid',
                        borderColor: 'divider',
                    }}
                    role="presentation"
                >
                    <Box
                        className="Sidebar-overlay"
                        sx={{
                            position: 'fixed',
                            zIndex: 9998,
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            opacity: 'var(--SideNavigation-slideIn)',
                            backgroundColor: 'var(--joy-palette-background-backdrop)',
                            transition: 'opacity 0.4s',
                            transform: {
                                xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
                                lg: 'translateX(-100%)',
                            },
                        }}
                        onClick={() => closeSidebar()}
                    />
                    <Box sx={{p: 2}}>
                        <img
                            src="static/avatarexlogo2.png"
                            style={logoStyle}
                            alt="logo of sitemark"
                        />
                    </Box>
                    <Divider/>
                    <MenuItem sx={{background:"#17212B", borderRadius: "15px"}}>
                        <ListItemIcon>
                            <img src="static/wildber.svg" alt="Wildberries" style={{width: '32px', height: '32px'}}/>
                        </ListItemIcon>
                        Wildberries
                    </MenuItem>
                </Box>
            </Box>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            p: 2,
                            display: 'flex',
                            justifyContent: 'space-between',
                        })}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
        ;
}


export default Sidebar;