import Box from "@mui/material/Box";
import React, {useState} from "react";

export default function WbService({initialText}) {
    const [text, setText] = useState(initialText);
    const [isEditing, setIsEditing] = useState(false);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };
    return (
        <Box sx={{
            mt: 2,
            mb: {sm: 3, md: 0},
            ml: {sm: 2, md: 0},
            pr: 4,
            pl: 2,
            py: 2,
            borderRadius: "25px",
            maxWidth: "35rem",
            minWidth: "35rem",
            textAlign: "center",
            background: "#242F3D",
            transition: '0.5s',
            '&:hover': {
                boxShadow: '0px 0px 20px #7177F8',
                 background: "#7177F8",
            }
        }}>
            {isEditing ? (
                <input style={{
                    background: "#242F3D",
                    px: 4,
                    py: 2,
                    borderRadius: "25px",
                    color: "white",
                }}
                       type="text"
                       value={text}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       autoFocus
                />
            ) : (
                <Box onDoubleClick={handleDoubleClick}
                     tabIndex={0} sx={{
                    maxWidth: "8rem",
                    minWidth: "8rem",
                }}>
                    <img src={"static/wildber.svg"} style={{
                        width: '32px',
                        height: '32px',
                        marginRight: "5px",
                        verticalAlign: 'middle',
                    }} alt="Wildberries"/> <span> {text} </span>
                </Box>
            )}
        </Box>
    )
}