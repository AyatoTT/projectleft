import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
    typography: {
        fontFamily: 'Roboto Flex, sans-serif',
    },
    palette: {
        mode: 'dark',
        neutral: {
            800: "#17212B"
        },
        background: {
            default: "#17212B",
            body: "#17212B",
            surface: "#232F3D",
            popup: "#17212B",
            level1: "#17212B",
        },
        focusVisible: "#ffffff",

    },


    components: {
        JoyInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "white",
                }

            },
        },
    },
});
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
