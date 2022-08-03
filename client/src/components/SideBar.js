import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useNavigate } from "react-router-dom";

function Sidebar({setSelect}){
    let navigate = useNavigate();

    return(
        <div id="header">
            <ProSidebar >
                <SidebarHeader>
                    MY ACCOUNT
                </SidebarHeader>
                <SidebarContent>
                    <Menu >
                        <MenuItem onClick={()=>setSelect('profile')}>MY PROFILE</MenuItem>
                        <MenuItem onClick={()=>setSelect('medicine')}>MY MEDICINE</MenuItem>
                        <MenuItem onClick={()=>setSelect('partner')}>MY HEALTH PARTNER</MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                <Menu >
                    <MenuItem onClick={() => navigate('/home')}>HOME
                        <Player autoplay loop src="https://assets8.lottiefiles.com/packages/lf20_czke1jsq.json"
                        style={{ height: '80px', width: '80px' }}>
                            <Controls  visible={false} buttons={['play', 'frame', 'debug']} />
                        </Player> 
                    </MenuItem>
                </Menu>
                </SidebarFooter>
            </ProSidebar>
        </div>

);
}

export default Sidebar