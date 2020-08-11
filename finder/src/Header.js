import React from 'react';
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton';

const Header = () => {
    return(
        <div className="header">
            <IconButton>
                <PersonIcon className="header-icon" fontSize="large"/>
            </IconButton>
            <img className="header-logo"
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/fire.png"
            alt="finder logo"
            />
            <IconButton>
                <MessageIcon className="header-icon" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Header;