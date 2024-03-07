import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

function Sidebar({setSelect, setUser}){
    let navigate = useNavigate();
    function handleClick(){
        fetch('/logout', 
        { method: 'DELETE' })
        .then((r)=>{
            if(r.ok){
                setUser()
                navigate('/')
            }
        })
    }

    return(
        <div id="header">
            <ProSidebar >
                <SidebarHeader onClick={() => navigate('/home')}>
                    <Row>
                    <Col id="home-icon">
                    <Player autoplay loop src="https://assets9.lottiefiles.com/packages/lf20_lo1kfjkb.json"
                        style={{ height: '40px', width: '40px' }}>
                            <Controls  visible={false} buttons={['play', 'frame', 'debug']} />
                    </Player> 
                    </Col>
                    <Col id="home">
                    HOME
                    </Col>
                    </Row>
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
                <MenuItem >HEALTH PARTNER
                        <Player autoplay loop src="https://assets8.lottiefiles.com/packages/lf20_czke1jsq.json"
                        style={{ height: '80px', width: '80px' }}>
                            <Controls  visible={false} buttons={['play', 'frame', 'debug']} />
                        </Player> 
                    </MenuItem>
                   
                    </Menu>
                    </SidebarFooter>
                    <SidebarFooter>
                        <Menu>
                        <MenuItem onClick={()=>handleClick()}>
                    LOG OUT
                    </MenuItem>
                </Menu>
                </SidebarFooter>
            </ProSidebar>
        </div>

);
}

export default Sidebar