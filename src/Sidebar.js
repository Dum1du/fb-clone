import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <SidebarRow title= {user.displayName} src= {user.photoURL} />
            <SidebarRow title = "Pages" Icon={EmojiFlagsIcon}/>
            <SidebarRow title = "Friends" Icon={PeopleIcon}/>
            <SidebarRow title= "Messanger" Icon={ChatIcon}/>
            <SidebarRow title= "Marketplace" Icon={StorefrontIcon} />
            <SidebarRow title= "Videos" Icon={VideoLibraryIcon} />
            <SidebarRow Icon={ExpandMoreIcon} />
            
        </div>
    );
}

export default Sidebar;