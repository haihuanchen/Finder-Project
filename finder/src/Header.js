import React from 'react';
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';

const Header = () => {
    return(
        <div className="header">
            <PersonIcon className="header-icon" fontSize="large"/>
            <img className="header-logo"
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/fire.png"
            alt="finder logo"
            />
            <MessageIcon className="header-icon" fontSize="large"/>
        </div>
    )
}

export default Header;