// import React, {useState, useEffect} from 'react';
// import React from "react";
// // import { animateScroll as scroll } from 'react-scroll';
// // import { IconContext } from 'react-icons/lib';
// import {
//     Nav,
//     NavbarContainer,
//     NavLogo, 
//     MobileIcon, 
//     NavMenu, 
//     NavItem, 
//     NavLinks, 
//     NavBtn, 
//     NavBtnLink
// } from './NavbarElements';
import {FaBars} from 'react-icons/fa';
// // import { useEffect } from 'react/cjs/react.production.min';

// const Navbar = () => {
// const Navbar = ({ toggle }) => {

//     // const [scrollNav, setscrollNav] = useState(false);

//     // const changeNav = () => {
//     //     if(window.scrollY >= 80){
//     //         setscrollNav(true)
//     //     }else {
//     //         setscrollNav(false)

//     //     }
//     // }

//     // useEffect(() => {
//     //     window.addEventListener('scroll', changeNav)

//     // }, []);

//     // const toggleHome = () => {
//     //     scroll.scroollToTop();
//     // }

//   return (
      
//     <>
    
//         <Nav>
//             <NavbarContainer>
//                 <NavLogo>React Webapp</NavLogo>
//             </NavbarContainer>
//         </Nav>

//     </>
    

//     {/* <IconContext.Provider vlaue={{color: 'yellowgreen'}}>   */}

//       
//               <NavLogo to='/'>
//               {/* <NavLogo to='/' onClick={toggleHome}> */}
//                   ReactWeb
//               </NavLogo>
//               <MobileIcon onClick={toggle}>
//                   <FaBars />
//               </MobileIcon>
//               <NavMenu>
//                   <NavItem>
//                       <NavLinks to="about"
//                       smooth={true} duration={500} spy={true} excat='true' offset={-80}>About</NavLinks>
//                   </NavItem>
//                   <NavItem>
//                       <NavLinks to="discover">Discover</NavLinks>
//                   </NavItem>
//                   <NavItem>
//                       <NavLinks to="services">Services</NavLinks>
//                   </NavItem>
//                   <NavItem>
//                       <NavLinks to="signup">Sign Up</NavLinks>
//                   </NavItem>
//               </NavMenu>
            //   <NavBtn>
            //       <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            //   </NavBtn>
            
//           </NavbarContainer>
          
//       </Nav> 
//       {/* </IconContext.Provider>  */}

//    );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { NavbarContainer, 
    NavLogo, 
    Nav, 
    MobileIcon, 
    NavItem, 
    NavMenu, 
    NavLinks, 
    NavBtn, 
    NavBtnLink
} from './NavbarElements';

import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {

    const [scrollNav, setscrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setscrollNav(true);
        }else{
            setscrollNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };
  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    ReactWeb
                </NavLogo>
                <MobileIcon onClick={ toggle }>
                    <FaBars></FaBars>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={500} spy={true} excat='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks to='discover' smooth={true} duration={500} spy={true} excat='true' offset={-80}>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                       <NavLinks to='services' smooth={true} duration={500} spy={true} excat='true' offset={-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                       <NavLinks to='signup' smooth={true} duration={500} spy={true} excat='true' offset={-80}>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='/signin'>Sign In</NavBtnLink>
              </NavBtn>

            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  );
};

export default Navbar;
