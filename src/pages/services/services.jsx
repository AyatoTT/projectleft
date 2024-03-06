import Sidebar from "../Components/Sidebar";
import AppAppBar from "../Components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import dayjs from 'dayjs';
import {Tab, Tabs} from "@mui/material";
import PropTypes from "prop-types";
import OzonService from "../Components/OzonService";
import WbService from "../Components/WbService";
import YamaService from "../Components/YamaService";
import Popupw from "../Components/popupw/popupw";


function CustomTabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Home() {
    const [modalActiveW, setModalActiveW] = useState(false);
    const [modalActiveO, setModalActiveO] = useState(false);
    const [modalActiveY, setModalActiveY] = useState(false);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{display: 'flex', minHeight: '100dvh',}}>
            <AppAppBar/>
            <Box
                component="main"
                className="MainContent"
                sx={{

                    paddingLeft: "0 !important",
                    px: {xs: 0, md: 0},
                    pt: {
                        xs: 15,
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
                        px: {xs: 0, md: 0},
                        pt: {
                            xs: 'calc(12px + var(--Header-height))',
                            sm: 'calc(12px + var(--Header-height))',
                            md: 3,
                        },
                        pb: {xs: 2, sm: 2, md: 3},
                        flex: 1,
                        display: 'flex',
                        flexDirection: {md: 'row', lg: 'column'},
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
                            minHeight: "80vh",
                            p: {xs: 3, md: 10},
                            pt: {xs: 2, md: 2},
                            background: "",
                            borderRadius: "25px",
                            flexDirection: {xs: 'row', sm: 'column'},
                            flexWrap: 'wrap',
                            justifyContent: 'inherit',

                        }}
                    >
                        <Box sx={{borderBottom: 1, borderColor: 'divider', marginX: "auto", mt: 2, pb: 2,}}>
                            <Button sx={{
                                ml: 2,
                                mt: 2,
                                px: 4,
                                py: 2,
                                color: 'white',
                                borderRadius: "25px",
                                maxWidth: "20rem",
                                minWidth: "20rem",
                                textAlign: "center",
                                background: "#242F3D",
                                transition: '0.5s',
                                '&:hover': {
                                    boxShadow: '0px 0px 20px #7177F8',
                                    background: "#7177F8",
                                }
                            }}
                                    onClick={() => setModalActiveW(true)}
                            >
                                <img src={"static/wildber.svg"} style={{
                                    width: '32px',
                                    height: '32px',
                                    verticalAlign: 'middle',
                                    marginRight: '8px'
                                }} alt="Wildberries"/>
                                Создать Wildberries
                            </Button>
                            <Button sx={{
                                ml: 2,
                                mt: 2,
                                px: 4,
                                py: 2,
                                color: 'white',
                                borderRadius: "25px",
                                maxWidth: "20rem",
                                minWidth: "20rem",
                                textAlign: "center",
                                background: "#242F3D",
                                transition: '0.5s',
                                '&:hover': {
                                    boxShadow: '0px 0px 20px #7177F8',
                                    background: "#7177F8",
                                }
                            }} onClick={() => setModalActiveO(true)}
                            > <img src={"static/ozon.png"} style={{
                                width: '32px',
                                height: '32px',
                                verticalAlign: 'middle',
                                marginRight: '8px'
                            }} alt="Wildberries"/> Создать Ozon
                            </Button>
                            <Button sx={{
                                ml: 2,
                                mt: 2,
                                px: 4,
                                py: 2,
                                color: 'white',
                                borderRadius: "25px",
                                maxWidth: "20rem",
                                minWidth: "20rem",
                                textAlign: "center",
                                background: "#242F3D",
                                transition: '0.5s',
                                '&:hover': {
                                    boxShadow: '0px 0px 20px #7177F8',
                                    background: "#7177F8",
                                }
                            }} onClick={() => setModalActiveY(true)}
                            > <img src={"static/yam.png"} style={{
                                width: '32px',
                                height: '32px',
                                verticalAlign: 'middle',
                                marginRight: '8px'
                            }} alt="Wildberries"/> Создать Яндекс маркет
                            </Button>
                        </Box>
                        <Box sx={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: {xs: 'column', md: 'column'},
                        }}>
                            <WbService initialText="Сервис 1"/>
                            <OzonService initialText="Сервис 1"/>
                            <YamaService initialText="Сервис 1"/>

                        </Box>

                    </Box>
                </Box>
            </Box>
            <Popupw active={modalActiveW} setActive={setModalActiveW}>
                <Typography sx={{color: "black"}}>WB</Typography>

            </Popupw>
            <Popupw active={modalActiveO} setActive={setModalActiveO}>
                <Typography sx={{color: "black"}}>Ozon</Typography>

            </Popupw>
            <Popupw active={modalActiveY} setActive={setModalActiveY}>
                <Typography sx={{color: "black"}}>Yama</Typography>

            </Popupw>
        </Box>
    )
        ;
}