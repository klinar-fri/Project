import "./NavBar.css";
import logo from "./icons.png";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();

    const handlePricingClick = () => {
        navigate('/pricing');
    };

    const handelLoginClick = () => {
        navigate('/login');
    };

    const handleCreateAccClick = () =>{
        navigate('/register');
    }

    const [isRotated, setIsRotated] = useState(false);
    const [isRotatedTwo, setIsRotatedTwo] = useState(false);
  
    const handleRotateClick = () => {
      setIsRotated(!isRotated);
      setIsRotatedTwo(false); 
    };
  
    const handleRotateClickTwo = () => {
      setIsRotatedTwo(!isRotatedTwo);
      setIsRotated(false); 
    };
    


    return(
        <div className="wrapper">
            <div className="wrapperLeft">
                <div className="image">
                    <img className="logo" src={logo} alt="logo" onClick={() => location.reload()}/>
                    <label className="logoLabel" htmlFor="logo" onClick={() => location.reload()}>Data Tunnel</label>
                </div>
                <div className={`features ${isRotated ? 'rotated' : ''}`} onClick={handleRotateClick}>
                    <div className={`featureMenu ${isRotated ? 'featuresTxt' : 'featuresTxTBack'}`}>Features</div>
                    <div className={`tick ${isRotated ? 'rotate' : 'rotateBack'}`}>{'<'}</div>
                </div>
                <div className="pricing">
                    <div className="pricingLink" onClick={handlePricingClick}>Pricing</div>
                </div>
                <div className={`download ${isRotatedTwo ? 'rotated' : ''}`} onClick={handleRotateClickTwo}>
                    <div className={`downloadMenu ${isRotatedTwo ? 'downTxt' : 'downTxTBack'}`}>Download</div>
                    <div className={`tickTwo ${isRotatedTwo ? 'rotate' : 'rotateBack'}`}>{'<'}</div>
                </div>
            </div>
            <div className="wrapperRight">
                <div className="login">
                    <div className="loginBtn" onClick={handelLoginClick}>Log in</div>
                </div>
                <div className="createAcc">
                    <button className="createAccBtn" onClick={handleCreateAccClick}>Create account</button>
                </div>
                <div className="burgerMenu">
                    <div className="burger">-</div>
                    <div className="burger">-</div>
                    <div className="burger">-</div>
                </div>
            </div>
        </div>
        
    );
}

export default NavBar;      