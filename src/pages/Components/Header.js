import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from "@mui/material/Link";

function AppAppBar() {
    return (
        <Container maxWidth="lg" sx={{position: "fixed",zIndex: 3000,mt:4}}>
            <Box
                variant="regular"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: '999px',
                    marginLeft: {xs: 0, md: "300px"},
                    backdropFilter: 'blur(24px)',
                    maxHeight: 60,
                    border: '1px solid',
                    borderColor: 'divider',

                }}
            >
                <Box sx={{display: {xs: 'flex', md: 'flex'}, pt:3, pb: 3, pl: 3}}>
                    <Button>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={'/'}>
                            Главная
                        </Link>
                    </Button>


                    <Button>
                        Сервисы
                    </Button>

                    <Button>
                        Профиль
                    </Button>

                </Box>
            </Box>
        </Container>
    );
}


export default AppAppBar;