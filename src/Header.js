import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
  return (
    <div className='header'>
      {/* header__left */}
        <div className="header__left">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/800px-2023_Facebook_icon.svg.png'></img>

            <div className="header__input">
                <SearchIcon />
                <input placeholder='Search Facebook' type='text' />
            </div>
        </div>

      {/* header__middle */}
        <div className="header__middle">
          <div className="header__options header__option__active">
            <HomeIcon fontSize = "large" />
          </div>
          <div className="header__options">
            <FlagIcon fontSize = "large" />
          </div>
          <div className="header__options">
            <SubscriptionsIcon fontSize = "large" />
          </div>
          <div className="header__options">
            <StorefrontIcon fontSize = "large" />
          </div>
          <div className="header__options">
            <SupervisedUserCircleIcon fontSize = "large" />
          </div>
        </div>

      {/* header__right */}
        <div className="header__right">
          <div className="header__info">
            <Avatar />
            <h4>Dumidu</h4>
          </div>

          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>

    </div>
  )
}

export default Header