import Sidebar from "../Components/Sidebar";
import AppAppBar from "../Components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import dayjs from 'dayjs';
import {Tab, Tabs} from "@mui/material";
import PropTypes from "prop-types";


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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{display: 'flex', minHeight: '100dvh'}}>
            <AppAppBar/>
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
                            background: "#17212B",
                            borderRadius: "25px",
                            flexDirection: {xs: 'column', sm: 'column'},
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box sx={{borderBottom: 1, borderColor: 'divider', marginX: "auto"}}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label={<div><img src={"static/wildber.svg"} style={{
                                    width: '32px',
                                    height: '32px',
                                    verticalAlign: 'middle',
                                    marginRight: '8px'
                                }} alt="Wildberries"/> Wildberries
                                </div>} {...a11yProps(0)} />
                                <Tab label={<div><img src={"static/ozon.png"} style={{
                                    width: '32px',
                                    height: '32px',
                                    verticalAlign: 'middle',
                                    marginRight: '8px'
                                }} alt="Wildberries"/> Ozon
                                </div>} {...a11yProps(1)} />
                                <Tab label={<div><img src={"static/yam.png"} style={{
                                    width: '32px',
                                    height: '32px',
                                    verticalAlign: 'middle',
                                    marginRight: '8px'
                                }} alt="Wildberries"/> Яндекс маркет
                                </div>} {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            Item One
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            Item Two
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            Item Three
                        </CustomTabPanel>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
        ;
}