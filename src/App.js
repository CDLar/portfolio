import React, { useState } from 'react';
import styled, { css } from 'styled-components'
import { FaBars, FaTimes, FaGithubAlt, FaMobileAlt, FaUser, FaHome } from 'react-icons/fa'

//SC Styles
const Main = styled.div`
height:100%;
overflow:hidden;
background-color:#584e4a;
`

const MenuToggle = styled.span`
z-index: 999;
position: fixed;
top:0;
left:0;
display:block;
cursor:pointer;
width:6.25em;
height:5em;
background-color:#f37272;
border-bottom-right-radius:100%;

&:active{
  opacity:0.8;
}
`

const StyledOpen = styled(FaBars)`
position:absolute;
top:50%;
left:50%;
margin-top: -15px;
margin-left: -12px;
transition: transform 0.7s cubic-bezier()(1,0.005,0.24,1);
transform-origin: -100px -100px;
transform: ${props => props.isOpen ? 'rotate(-20deg)' : 'none'};
`

const StyledClose = styled(FaTimes)`
position:absolute;
top:50%;
left:50%;
margin-top: -15px;
margin-left: -12px;
transition: transform 0.7s cubic-bezier()(1,0.005,0.24,1);
transform-origin: -100px -160px;
transform: ${props => props.isOpen ? 'rotate(0deg)' : 'rotate (20deg)'};
`

const MenuItems = styled.ul`
position:fixed;
bottom:0;
left:2vw;
list-style:none;
margin:0;
padding:0;
`

const MenuItem = styled.li`
display:flex;
height: 7.95vh;
margin-bottom:4vh;
transform:translateX(-300px);
transition:transform 0.7s 0s cubic-bezier(1,0.005,0.24,1);
${ props => props.isOpen && css`
    transform: translateX(0);
    transition: transform 0.35s 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  `}

&:nth-child(2){
  margin-left:2.5em;
  transition-delay: ${props => props.isOpen ? '0.47s' : '0'}

}
&:nth-child(3){
  margin-left:5em;
  transition-delay: ${props => props.isOpen ? '0.48s' : '0'}
}
&:nth-child(4){
  margin-left:7.5em;
  transition-delay: ${props => props.isOpen ? '0.49s' : '0'}
}
`

const MenuLink = styled.a`
display:flex;
text-decoration:none;
text-transform: uppercase;
letter-spacing: 2px;
color: #a4a4a4;
transition: color 0.2s;

&:hover{
color: #f0f0f0;
}
`

const Content = styled.main`
height:200%;
transform-origin: top left;
transition: transform 0.7s cubic-bezier(1,0.005,0.24,1);
background-color:#f0f0f0;
${ props => props.isOpen && css`
    transform: rotate(-30deg);
  `}
`

const ContentInner = styled.div`
height:50%;
overflow-y:auto;
padding: 50px 20%;
`

const iconStyles = `
position: relative;
width:2em;
height:2em;
display: inline-block;
margin-right: 25px;
color: #f0f0f0;
&:after{
  position: absolute;
  top: 50%;
  left: 50%;
  content: '';
  display: block;
  width: 60px;
  height: 60px;
  margin-left: -33px;
  margin-top: -32px;
  border-radius: 100%;
  border: 2px solid #f0f0f0;
  transition: border-color 0.2s;
}
`

const StyledHome = styled(FaHome)`
${iconStyles}
`
const StyledTwitter = styled(FaUser)`
${iconStyles}
`

const StyledGithub = styled(FaGithubAlt)`
${iconStyles}
`

const StyledContact = styled(FaMobileAlt)`
${iconStyles}
`


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Main >
      <MenuToggle onClick={toggleOpen}>
        <StyledOpen color={'white'} isOpen={isOpen} />
        <StyledClose color={'white'} isOpen={isOpen} />
      </MenuToggle>
      <MenuItems>
        <MenuItem isOpen={isOpen}>
          <StyledHome />
          <MenuLink>
            Home
          </MenuLink>
        </MenuItem>
        <MenuItem isOpen={isOpen}>
          <StyledTwitter />
          <MenuLink>
            About
          </MenuLink >
        </MenuItem>
        <MenuItem isOpen={isOpen}>
          <StyledGithub />
          <MenuLink>
            Projects
              </MenuLink>
        </MenuItem>
        <MenuItem isOpen={isOpen}>
          <StyledContact />
          <MenuLink>
            Contact
            </MenuLink>
        </MenuItem>
      </MenuItems>

      <Content isOpen={isOpen}>
        <ContentInner>
          <h1>Amazing design Exclusive</h1>
          <br /><br />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <br /><br />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <br /><br />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <br /><br />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </ContentInner>
      </Content>
    </Main>
  );
}

export default App;
