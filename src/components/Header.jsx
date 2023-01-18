import React from "react";
import Checkout from "../containers/Checkout";
import '../styles/components/Header.css';

const Header = ({}) => {
    return (
        <div className={'Header'}>
            <h1 className={'Header-title'}>PlatziConfg Merch</h1>
            <div className={'Header-checkout'}>
            </div>
        </div>
    )
}

export default Header;
