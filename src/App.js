import React, { useState } from 'react';
import styled, { css } from 'styled-components'
import { FaBars, FaTimes, FaGithubAlt, FaMobileAlt, FaUser, FaHome } from 'react-icons/fa'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'


//SC Styles
const Main = styled.div`
background-color:${props => props.theme.elevated};
overflow:hidden;
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
background-color:${props => props.theme.primary};
border-bottom-right-radius:100%;
`

const StyledOpen = styled(FaBars)`
position:absolute;
top:50%;
left:50%;
font-size:1.2rem;
margin-top: -15px;
margin-left: -12px;
transition: transform 0.7s cubic-bezier(1, 0.005, 0.24, 1);
transform-origin: -100px -100px;
${ props => props.isOpen && css`
    transform: rotate(-20deg);
  `}
`

const StyledClose = styled(FaTimes)`
position:absolute;
top:50%;
left:50%;
font-size:1.2rem;
margin-top: -15px;
margin-left: -12px;
transition: transform 0.7s cubic-bezier(1, 0.005, 0.24, 1);
transform-origin: -100px -160px;
transform: ${props => props.isOpen ? 'rotate(0deg)' : 'rotate(20deg)'};
`

const MenuItems = styled.ul`
position:fixed;
bottom:0;
left:1.5em;
list-style:none;
margin:0;
padding:0;
`

const MenuItem = styled.li`
display:flex;
height: 7.95vh;
margin-bottom:1em;
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
line-height:2.25em;
text-decoration:none;
text-transform: uppercase;
letter-spacing: 2px;
font-family: 'Raleway', sans-serif;
color: ${props => props.theme.medium};
transition: color 0.2s;

&:hover{
color: ${props => props.theme.high};
cursor:pointer;
}
`

const Content = styled.main`
transform-origin: top left;
transition: transform 0.7s cubic-bezier(1,0.005,0.24,1);
background-color:${props => props.theme.background};
${ props => props.isOpen && css`
    transform: rotate(-30deg);
  `}
`

const ContentInner = styled.div`

`

const iconStyles = `
position: relative;
width:2.25em;
height:2.25em;
display: inline-block;
margin-right: 20px;
color: rgba(255,255,255,0.87);
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
const P = styled.p`
color: ${props => props.theme.high};
`

const Header = styled.p`
color: ${props => props.theme.primary};
font-size:2rem;
font-weight:700;
font-family: 'Raleway', sans-serif;
letter-spacing: 1px;
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
          <Home />
          <About />
          <About />
          <Footer />
        </ContentInner>
      </Content>
    </Main>
  );
}

export default App;
