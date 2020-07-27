import React from 'react';
import styled from 'styled-components'
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";


const Wrapper = styled.div`
background-color:${props => props.theme.elevated};
width:100%;
padding: 10em 0 7em 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
clip-path: polygon(50% 15%, 100% 0, 100% 100%, 0 100%, 0 0);
`

const FooterHeader = styled.h3`
transition: all .2s;
color: ${props => props.theme.high};
font-size:2.5rem;
display:flex;
text-transform: uppercase;
font-weight:700;
font-family: 'Raleway', sans-serif;
letter-spacing: 2px;
justify-content:center;
align-items:center;
margin:1em 1em 0 1em;
@media (max-width: 700px) {
    font-size:2rem;
    }
&:before{
    left:0;
    margin-left:10%;
    position:absolute;
    content:'';
    width:40vh;
    max-width:25em;
    border-bottom:5px solid white;
    @media (max-width: 1125px) {
    width:30vh;
    }
    @media (max-width: 1000px) {
    width:20vh;
    }
    @media (max-width: 700px) {
    width:15vh;
    }
    @media (max-width: 575px) {
    width:10vh;
    }
    @media (max-width: 400px) {
    width:5vh;
    }
    @media (max-width: 300px) {
    width:0vh;
    }
}
&:after{
    right:0;
    margin-right:10%;
    position:absolute;
    content:'';
    width:40vh;
    max-width:25em;
    border-bottom:5px solid white;
    @media (max-width: 1125px) {
    width:30vh;
    }
    @media (max-width: 1000px) {
    width:20vh;
    }
    @media (max-width: 700px) {
    width:15vh;
    }
    @media (max-width: 575px) {
    width:10vh;
    }
    @media (max-width: 400px) {
    width:5vh;
    }
    @media (max-width: 300px) {
    width:0vh;
    }
}
`

const FooterSubheader = styled.h3`
color: ${props => props.theme.high};
font-size:1rem;
font-family: 'Raleway', sans-serif;
letter-spacing: 2px;
margin:1em;
@media (max-width: 700px) {
    font-size:0.8rem;
    }
`

const Footertext = styled.p`
color: ${props => props.theme.medium};
font-size:0.8rem;
font-family: 'Raleway', sans-serif;
letter-spacing: 1px;
`

const ContactButton = styled.button`
height:3em;
width:13.5em;
font-size:1.2rem;
font-weight:500;
margin-top:1em;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
font-family: 'Raleway', sans-serif;
text-transform:uppercase;
background:none;
border-radius:5px;
border: 1px solid;
border-color:${props => props.theme.high};
color: ${props => props.theme.high};
transition: all .2s;
&:active{
    background:${props => props.theme.primary};
}

@media (max-width: 700px) {
width:12em;
height:2.8em;
font-size:1.1rem;
    }
`

const SocialWrapper = styled.div`
width:20em;
display:flex;
align-items:center;
justify-content:space-around;
margin:2em;
`
const SocialLink = styled.a`
width:50px;
height:50px;
text-decoration:none;
color:${props => props.theme.high};
transition: .5s;
margin: 0 10px;
cursor:pointer;
&::before{
    content:'';
    display:block;
    width:100%;
    height:1px;
    background:${props => props.theme.high};
    transform-origin:right;
    transition: transform 0.5s;
}
&:hover::before{
transform:scaleX(0);
transform-origin:left;
}
&::after{
    content:'';
    display:block;
    width:100%;
    height:1px;
    background:${props => props.theme.high};
    transform-origin:left;
    transition: transform 0.5s;
}
&:hover::after{
transform:scaleX(0);
transform-origin:right;
}
`

const SocialCenter = styled.div`
height:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
`

const SocialInner = styled.div`
height:100%;
width:100%;
display:flex;
&::before{
    content:'';
    display:flex;
    width:1px;
    height:50px;
    background:${props => props.theme.high};
    transform: scale(0);
    transform-origin:bottom;
}
&:hover::before{
transform:scale(1);
transform-origin:top;
transition:transform .5s;
}
&::after{
    content:'';
    display:flex;
    width:1px;
    height:50px;
    background:${props => props.theme.high};
    transform: scale(0);
    transform-origin:top;
}
&:hover::after{
transform:scale(1);
transform-origin:bottom;
transition:transform .5s;
}
`

const Footer = ({ isOpen }) => {
    return (
        <>
            <Wrapper>
                <FooterHeader>Thanks!</FooterHeader>
                <FooterSubheader>Want to get in touch?</FooterSubheader>
                <ContactButton>My Resume</ContactButton>
                <SocialWrapper>
                    <SocialLink rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/curtis-larsen-187727b4/'>
                        <SocialInner>
                            <SocialCenter>
                                <FaLinkedinIn alt='Linkedin' />
                            </SocialCenter>
                        </SocialInner>
                    </SocialLink>
                    <SocialLink rel='noreferrer' target="_blank" href='https://github.com/CDLar'>
                        <SocialInner>
                            <SocialCenter>
                                <FaGithub alt='Github' />
                            </SocialCenter>
                        </SocialInner>
                    </SocialLink>
                    <SocialLink rel='noreferrer' target="_blank" href='https://twitter.com/Cdlarsen91'>
                        <SocialInner>
                            <SocialCenter>
                                <FaTwitter alt='Twitter' />
                            </SocialCenter>
                        </SocialInner>
                    </SocialLink>
                    <SocialLink href='mailto:curtis@gmail.com' rel='noreferrer'>
                        <SocialInner>
                            <SocialCenter>
                                <FaEnvelope />
                            </SocialCenter>
                        </SocialInner>
                    </SocialLink>
                </SocialWrapper>
                <Footertext>Curtis Larsen ©2020</Footertext>
            </Wrapper>
        </>
    );
}

export default Footer;