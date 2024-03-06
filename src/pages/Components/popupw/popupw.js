import Box from "@mui/material/Box";
import "./popupw.css"

const Popupw = ({active,setActive, children}) => {
    return(
        <Box className={active ? "modal active" : "modal"} onClick={()=> setActive(false)}>
            <Box className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                {children}
            </Box>


        </Box>



    );



}
export default Popupw;