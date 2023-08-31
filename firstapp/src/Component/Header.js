import React, {Component, Fragment} from "react";
import './Header.css';

class Header extends Component {

    render() {
        return(
            <Fragment>
                <header>
                    <div className="logo">Enter some text here...</div>
                    <input id ="userText"/>
                    <div style={{color: 'white', fontSize: '20px', textAlign:'center'}}>User Text Here</div>
                </header>
            </Fragment> 
        )
    }
}




// const Header = () => {
//     return (
//         <div>
//             <center>
//                 <h2>React App</h2>
//             </center>
//             <hr/>
//         </div>
//     )
// };

export default Header;