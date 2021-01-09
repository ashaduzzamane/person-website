import { FaTimes } from 'react-icons/fa';
import { 
    SidebarContainer, 
    SidebarIcon, 
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarIcon onClick={toggle}>
                <FaTimes />
            </SidebarIcon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink activeClass="active" to="home" onClick={toggle} spy={true} smooth={true}>
                        Home                                    
                    </SidebarLink>
                    <SidebarLink activeClass="active" to="about" onClick={toggle} spy={true} smooth={true}>
                        About
                    </SidebarLink>        
                    <SidebarLink activeClass="active" to="experiences" onClick={toggle} spy={true} smooth={true}>
                        Experiences
                    </SidebarLink>
                    <SidebarLink activeClass="active" to="contact" onClick={toggle} spy={true} smooth={true}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;