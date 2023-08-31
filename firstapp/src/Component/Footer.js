import React,{Fragment} from "react";
import './Footer.css'
const Footer = (props) => {
    console.log(props);
    return (
        <Fragment>
            <hr/>
            <footer>
            <center>    
                &copy; Developer Zubair {props.month} {props.year}
            </center>
            </footer>
        </Fragment>
    )
};

export default Footer;