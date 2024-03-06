import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {Link as RouterLink} from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import {openSidebar, closeSidebar, toggleSidebar} from './utils';
import Typography from "@mui/material/Typography";
import {useLocation} from "react-router";

const handleToggleSidebar = () => {
    toggleSidebar();
};
const logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
};

function AppAppBar() {
    const location = useLocation();
    const checkSelected = (path) => {
        return location.pathname === path;
    };
    return (
        <Container sx={{position: "fixed", padding: "0 0 0 0 !important", zIndex: 3000, mt: 0, width: "100vw"}}>
            <Box
                variant="regular"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                    maxHeight: 80,
                    background: "#242F3D",
                    padding: "0 0 0 0 !important",
                    width: "100vw",
                    maxWidth: "100vw !important"
                }}
            >
                <Box sx={{ml: 3, display: {xs: 'none', sm: 'none', md: 'inherit'}}}>

                    <img
                        src="static/avatarexlogo2.png"
                        style={logoStyle}
                        alt="logo of sitemark"
                    />

                </Box>

                <Box sx={{
                    display: {xs: 'flex', md: 'flex'},
                    pt: 3,
                    pb: 3,
                    pl: 3,
                    width: "100%",
                    alignItems: {sm: 'center', md: 'center'},
                    background: '24303F',
                    ml: {xs: 0, md: 10}
                }}>
                    <Button component={RouterLink} to="/" style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        marginLeft: "12px",
                        borderRadius: "12px",
                        background: checkSelected('/') ? "#7177F8" : ""
                    }}>

                        Главная

                    </Button>


                    <Button component={RouterLink} to="/services" style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        borderRadius: "12px",
                        marginLeft: "12px",
                        background: checkSelected('/services') ? "#7177F8" : ""
                    }}>
                        Сервисы

                    </Button>

                    <Button component={RouterLink} to="" style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        borderRadius: "12px",
                        marginLeft: "12px",
                        background: checkSelected('/profile') ? "#7177F8" : ""
                    }}>
                        Профиль
                    </Button>
                    <Box
                        sx={{display: {sm: '', md: 'none'}, marginLeft: 'auto'}}
                    >
                        <Button
                            sx={{minWidth: '30px', pt: '5px'}}
                            color="primary"
                            variant="text"
                            aria-label="menu"
                            onClick={handleToggleSidebar}
                        >
                            <MenuIcon/>
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Container>
    );
}


export default AppAppBar;