import React from 'react';
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useHistory } from 'react-router-dom';

const Header = ({backButton}) => {
    const history = useHistory();
    return(
        <div className="header">
            {backButton ? (
                <IconButton onClick={()=>history.replace(backButton)}>
                    <ArrowBackIcon className="header-icon" fontSize="large"/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header-icon" fontSize="large"/>
                </IconButton>
            )}
            
            <Link to="/">
                <img className="header-logo"
                src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/fire.png"
                alt="finder logo"
                />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <MessageIcon className="header-icon" fontSize="large"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;