import React, { useState, useRef, useLayoutEffect } from "react";
import styled, { css } from "styled-components";
import {
  FaBars,
  FaTimes,
  FaGithubAlt,
  FaMobileAlt,
  FaUser,
  FaHome,
  FaPencilRuler,
} from "react-icons/fa";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

//SC Styles
const Main = styled.div`
  background-color: ${(props) => props.theme.elevated};
  overflow: hidden;
  height: 100vh
    ${(props) =>
      props.delay &&
      css`
        height: auto;
      `};
`;

const MenuToggle = styled.span`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  cursor: pointer;
  width: 6.25em;
  height: 5em;
  background-color: ${(props) => props.theme.primary};
  border-bottom-right-radius: 100%;
`;

const StyledOpen = styled(FaBars)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.3rem;
  margin-top: -15px;
  margin-left: -12px;
  transition: transform 0.7s cubic-bezier(1, 0.005, 0.24, 1);
  transform-origin: -100px -100px;
  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(-20deg);
    `}
`;

const StyledClose = styled(FaTimes)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.3rem;
  margin-top: -15px;
  margin-left: -12px;
  transition: transform 0.7s cubic-bezier(1, 0.005, 0.24, 1);
  transform-origin: -100px -160px;
  transform: ${(props) => (props.isOpen ? "rotate(0deg)" : "rotate(20deg)")};
`;

const MenuItems = styled.ul`
  position: fixed;
  bottom: 0;
  left: 1.5em;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-bottom: 0.5em;
`;

const MenuItem = styled.li`
  display: flex;
  height: 7.95vh;
  transform: translateX(-300px);
  transition: transform 0.7s 0s cubic-bezier(1, 0.005, 0.24, 1);
  ${(props) =>
    props.isOpen &&
    css`
      transform: translateX(0);
      transition: transform 0.35s 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `}
  &:nth-child(2) {
    margin-left: 2em;
    transition-delay: ${(props) => (props.isOpen ? "0.47s" : "0")};
  }
  &:nth-child(3) {
    margin-left: 4em;
    transition-delay: ${(props) => (props.isOpen ? "0.48s" : "0")};
  }
  &:nth-child(4) {
    margin-left: 6em;
    transition-delay: ${(props) => (props.isOpen ? "0.49s" : "0")};
  }
  &:nth-child(5) {
    margin-left: 8em;
    transition-delay: ${(props) => (props.isOpen ? "0.49s" : "0")};
  }
`;

const MenuLink = styled.a`
  display: flex;
  line-height: 2.25em;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.theme.medium};
  transition: color 0.2s;
  &:hover {
    color: ${(props) => props.theme.high};
    cursor: pointer;
  }
`;

const Content = styled.main`
  transform-origin: top left;
  transition: transform 0.7s cubic-bezier(1, 0.005, 0.24, 1);
  background-color: ${(props) => props.theme.background};
  overflow: auto;
  height: 200vh;
  ${(props) =>
    props.delay &&
    css`
      height: auto;
    `}
  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(-30deg);
    `}
`;

const Filler = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.elevated};
`;

const iconStyles = `
position: relative;
width:2.25em;
height:2.25em;
display: inline-block;
margin-right: 20px;
color: rgba(255,255,255,0.87);
&:hover{
  cursor:pointer;
}
`;

const StyledHome = styled(FaHome)`
  ${iconStyles}
`;
const StyledTwitter = styled(FaUser)`
  ${iconStyles}
`;

const StyledGithub = styled(FaGithubAlt)`
  ${iconStyles}
`;

const StyledContact = styled(FaMobileAlt)`
  ${iconStyles}
`;

const StyledSkills = styled(FaPencilRuler)`
  ${iconStyles}
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [savedPos, setSavedPos] = useState(0);
  const [delay, setDelay] = useState(true);
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();
  const contentRef = useRef();

  const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });

  useLayoutEffect(() => {
    if (isOpen) {
      contentRef.current.scrollTo(0, savedPos);
    } else if (!isOpen) {
      window.scroll(0, savedPos);
    }
  }, [isOpen, savedPos, delay]);

  const toggleOpen = () => {
    setIsOpen(true);
    setDelay(!delay);
    setSavedPos(window.pageYOffset);
  };

  const toggleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setDelay(!delay);
    }, 700);
    setSavedPos(contentRef.current.scrollTop);
  };

  const handleClick = (ref) => {
    toggleClose();
    setTimeout(() => {
      scrollTo(ref);
    }, 700);
  };

  return (
    <Main delay={delay} isOpen={isOpen}>
      <MenuToggle onClick={() => (!isOpen ? toggleOpen() : toggleClose())}>
        <StyledOpen color={"white"} isOpen={isOpen} />
        <StyledClose color={"white"} isOpen={isOpen} />
      </MenuToggle>
      <MenuItems>
        <MenuItem onClick={() => handleClick(homeRef)} isOpen={isOpen}>
          <StyledHome />
          <MenuLink>Home</MenuLink>
        </MenuItem>
        <MenuItem onClick={() => handleClick(aboutRef)} isOpen={isOpen}>
          <StyledTwitter />
          <MenuLink>About</MenuLink>
        </MenuItem>
        <MenuItem onClick={() => handleClick(skillRef)} isOpen={isOpen}>
          <StyledSkills />
          <MenuLink>Skills</MenuLink>
        </MenuItem>
        <MenuItem onClick={() => handleClick(projectRef)} isOpen={isOpen}>
          <StyledGithub />
          <MenuLink>Projects</MenuLink>
        </MenuItem>
        <MenuItem onClick={() => handleClick(contactRef)} isOpen={isOpen}>
          <StyledContact />
          <MenuLink>Contact</MenuLink>
        </MenuItem>
      </MenuItems>
      <Content delay={delay} ref={contentRef} id="content" isOpen={isOpen}>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={skillRef}>
          <Skills />
        </div>
        <div ref={projectRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Footer isOpen={isOpen} />
        </div>
        {!delay && <Filler />}
      </Content>
    </Main>
  );
}
export default App;
