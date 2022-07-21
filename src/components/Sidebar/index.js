// import React from 'react';
import { SidebarConatainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarRoute, SidebarMenu, SideBtnWrap } from './SidebarElements';

// const Sidebar = ({ isOpen, toggle }) => {
//   return (
//     <SidebarConatainer isOpen={isOpen} onClick={toggle}>
//         <Icon onClick={toggle}>
//             <CloseIcon>

//             </CloseIcon>
//         </Icon>
//         <SidebarWrapper>
//             <SidebarMenu>
//                 <SidebarLink to="about" onClick={toggle}>
//                     About 
//                 </SidebarLink>
//                 <SidebarLink to="discover" onClick={toggle}>
//                     Discover 
//                 </SidebarLink>
//                 <SidebarLink to="services" onClick={toggle}>
//                     Services 
//                 </SidebarLink>
//                 <SidebarLink to="signup" onClick={toggle}>
//                     Sign Up 
//                 </SidebarLink>
//             </SidebarMenu>
//             <SideBtnWrap>
//                 <SidebarRoute to='/signin'>Sign In</SidebarRoute>
//             </SideBtnWrap>
//         </SidebarWrapper>
//     </SidebarConatainer>
    
//   );
// };

// export default Sidebar;

import React from 'react'
// import { CloseIcon, SidebarConatainer } from './SidebarElements';
const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarConatainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon>

            </CloseIcon>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>
                    About

                </SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarConatainer>
  );
};

export default Sidebar;