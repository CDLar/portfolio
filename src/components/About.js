import React from 'react';
import styled from 'styled-components'
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import Footer from './Footer'
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
background-color:${props => props.theme.background};
height:auto;
min-height:100vh;
width:100%;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
padding:0 15%;
`

const CardWrapper = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`

const Header = styled.h1`
color: ${props => props.theme.high};
font-size:2.5rem;
text-transform: uppercase;
font-weight:700;
font-family: 'Raleway', sans-serif;
letter-spacing: 2px;
&:after {
    content: ""; 
    display: block; 
    margin: 0 auto; 
    width: 45%; 
    padding-top: 0.35em; 
    border-bottom: 3px solid white;
}
`

const Card = styled.div`
width: 12em;
min-width:12em;
height: 18em;
margin:0 2em;
background-color: ${props => props.theme.primary};
transform: scale(0.95);
`

const IconContainer = styled.figure`
display:flex;
align-items:center;
justify-content:center;
height:60%;
`

const CardContent = styled.div`
padding: 0 1.25em 1.25em;
background-color:${props => props.theme.elevated};
width:100%;
position:absolute;
height: 8em;
bottom:0;
z-index:-1;
transform: scale(1.01);

clip-path: polygon(0 0, 100% 25%, 100% 100%, 0% 100%);
`

const CardText = styled.h3`
margin: 1.7em 0;
text-align:center;
`

const CardSubtext = styled.p`
text-align:center;
`

const InfoWrapper = styled.div`
display:flex;
flex-wrap:nowrap;
justify-content:center;
align-items:center;
`

const TextPrimary = styled.h2`
font-size:1.8rem;
color: ${props => props.theme.high};
font-style:italic;
letter-spacing:1.5px;
`

const TextSecondary = styled.p`
font-size:1rem;
margin-bottom:2em;
color: ${props => props.theme.medium};
`

const About = () => {
    return (
        <>
            <Wrapper>
                <Header>About</Header>
                <CardWrapper>
                    <Card>
                        <IconContainer>
                            <FaReact size={70} />
                        </IconContainer>
                        <CardContent>
                            <CardText>
                                React
                        </CardText>
                            <CardSubtext>
                                Focus: Primary
                        </CardSubtext>
                        </CardContent>
                    </Card>
                    <Card>
                        <IconContainer>
                            <FaJs size={70} />
                        </IconContainer>
                        <CardContent>
                            <CardText>
                                Js
                        </CardText>
                            <CardSubtext>
                                Focus: Secondary
                        </CardSubtext>
                        </CardContent>
                    </Card>
                    <Card>
                        <IconContainer>
                            <FaCss3Alt size={70} />
                        </IconContainer>
                        <CardContent>
                            <CardText>
                                CSS3
                        </CardText>
                            <CardSubtext>
                                Focus: Secondary
                        </CardSubtext>
                        </CardContent>
                    </Card>
                    <Card>
                        <IconContainer>
                            <FaHtml5 size={70} />
                        </IconContainer>
                        <CardContent>
                            <CardText>
                                HTML5
                        </CardText>
                            <CardSubtext>
                                Focus: Tertiary
                        </CardSubtext>
                        </CardContent>
                    </Card>
                </CardWrapper>
                <InfoWrapper>
                    <Fade left>
                        <TextPrimary>Driven, Self-Motivated, Problem-Solver, Critical Thinker.</TextPrimary>
                    </Fade>
                </InfoWrapper>
                <InfoWrapper>
                    <Fade left>
                        <TextSecondary>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TextSecondary>
                    </Fade>
                </InfoWrapper>
            </Wrapper>
            <Footer />
        </>
    );
}

export default About;