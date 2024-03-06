import Sidebar from "../Components/Sidebar";
import AppAppBar from "../Components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import dayjs from 'dayjs';

export default function Home() {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    return (
        <Box sx={{display: 'flex', minHeight: '100dvh'}}>
            <AppAppBar/>
            <Sidebar/>
            <Box
                component="main"
                className="MainContent"
                sx={{
                    paddingLeft: "0 !important",
                    px: {xs: 2, md: 6},
                    pt: {
                        xs: 2,
                        sm: 3,
                        md: 10,
                    },
                    pb: {xs: 2, sm: 2, md: 3},
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 0,
                    height: '100dvh',
                    gap: 1,
                }}
            >
                <Box
                    component="main"
                    className="MainContent"
                    sx={{
                        px: {xs: 2, md: 6},
                        pt: {
                            xs: 'calc(12px + var(--Header-height))',
                            sm: 'calc(12px + var(--Header-height))',
                            md: 3,
                        },
                        pb: {xs: 2, sm: 2, md: 3},
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        height: '100dvh',
                        gap: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            mb: 1,
                            gap: 1,
                            p: 10,
                            background: "#24303F",
                            borderRadius: "25px",
                            flexDirection: {xs: 'column', sm: 'column'},
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box sx={{
                            marginX: "auto",
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignItems: {xs: 'center', sm: 'center'},
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: {xs: 'center', sm: 'center'},
                                m: 3
                            }}>
                                <Typography level="h2" component="h1">
                                    Включен:
                                </Typography>
                                <Checkbox
                                    defaultChecked
                                    sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                                />
                            </Box>
                            <Box sx={{mb: 3, ml: 3}}>
                                <TextField id="OpenAI" label="Токен OpenAI" variant="standard"/>
                            </Box>
                        </Box>
                        <Box sx={{
                            marginX: "auto",
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignItems: {xs: 'center', sm: 'center'},
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                alignItems: {xs: 'center', sm: 'center'},
                                m: 3
                            }}>
                                <TextField sx={{mb: 3, mr: 3}} id="OpenAI" label="Ссылка на базу знаний"
                                           variant="standard"/>
                                <Button variant="contained"
                                                                        size="small">Синхронизировать</Button>
                            </Box>

                        </Box>
                        <Box sx={{
                            marginX: "auto",
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignItems: {xs: 'center', sm: 'center'},
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: {xs: 'center', sm: 'center'},
                                m: 3
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: {xs: 'center', sm: 'center'},
                                }}>
                                    <Typography level="h2" component="h1">
                                        Введите контекст:
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: {xs: 'center', sm: 'center'},
                                }}>
                                    <textarea
                                        style={{
                                            padding: '5px 10px',
                                            minHeight: '100px',
                                            width: "30vw",
                                            backgroundColor: '#4D5A73',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '10px',
                                            maxWidth: "50dvw",

                                        }}>
                                    </textarea>
                                </Box>
                            </Box>

                        </Box>
                        <Box sx={{
                            marginX: "auto",
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignItems: {xs: 'center', sm: 'center'},
                        }}>
                            <Typography level="h2" component="h1">
                                Не отвечать при вмешательстве менеджера (минут):
                            </Typography>
                            <Checkbox
                                sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                            />
                            <TextField sx={{mb: 3, mr: 3}} id="ManagerInvTime" label="Кол-во минут"
                                       variant="standard"/>
                        </Box>
                        <Box sx={{
                            marginX: "auto",
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignItems: {xs: 'center', sm: 'center'},
                        }}>
                            <Typography level="h2" component="h1">
                                Работа по времени:
                            </Typography>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
        ;
}