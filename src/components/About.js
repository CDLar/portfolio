import React from 'react';
import styled from 'styled-components'
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
background-color:${props => props.theme.background};
width:100%;
display:flex;
flex-direction:column;
align-items:center;
padding:0 15%;
@media (max-width: 980px) {
padding:0 10%;
  }
`

const CardWrapper = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
margin: 4em 0;
flex-wrap:nowrap;
@media (max-width: 980px) {
flex-wrap:wrap;
  }
  @media (max-width: 656px) {
display:none;
  }
`

const Header = styled.h1`
color: ${props => props.theme.high};
font-size:2.5rem;
text-transform: uppercase;
font-weight:700;
margin-top:1.5em;
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
@media (max-width: 656px) {
margin-bottom:3rem;
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
font-size:0.9rem;
`

const InfoWrapper = styled.div`
display:flex;
flex-wrap:nowrap;
justify-content:center;
align-items:flex-start;
margin-bottom:4em;
@media (max-width: 656px) {
      flex-direction:column;
      }
`

const TextPrimary = styled.h2`
font-size:2rem;
text-align: center;
color: ${props => props.theme.high};
font-style:italic;
letter-spacing:1.5px;
@media (max-width: 1240px) {
font-size: 1.5rem;
letter-spacing:1px;
  }
  @media (max-width: 815px) {
font-size: 1.1rem;
letter-spacing:0.7px;
  }
`

const TextSecondary = styled.p`
font-size:0.9rem;
margin:0 1em 2em 1em;
color: ${props => props.theme.medium};
max-width:25em;
`

const ColorText = styled.span`
color:${props => props.theme.primaryV};
`

const About = () => {
    return (
        <Wrapper >
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
                            UI/UX Design
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
                            Client / Server Scripts
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
                            Styling / Animation
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
                            Web Development
                        </CardSubtext>
                    </CardContent>
                </Card>
            </CardWrapper>
            <InfoWrapper>
                <Fade left>
                    <TextPrimary>Driven, Self-Motivated, Problem Solver, Critical Thinker.</TextPrimary>
                </Fade>
            </InfoWrapper>
            <InfoWrapper>
                <Fade left>
                    <TextSecondary>I'm a Canadian currently residing in Auckland, NZ.
I have serious passion for animations, UI effects, and creating dynamic, intuitive user experiences. I started off designing websites using basic <ColorText>HTML5</ColorText>.
</TextSecondary>
                    <TextSecondary> Ever since deciding to code professionally <ColorText>ReactJS</ColorText> has been my main focus and everything else that I have studied has been with
                        the purpose of furthering my understanding of it.  </TextSecondary>
                    <TextSecondary>I have also studied <ColorText>JavaScript</ColorText> extensively to increase the functionality/efficiency of my code and <ColorText>CSS3</ColorText>,
including all the latest styling options to create clean, modern designs. </TextSecondary>
                </Fade>
            </InfoWrapper>
        </Wrapper>
    );
}
export default About;