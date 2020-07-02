import React from 'react';
import styled from 'styled-components'
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import Footer from './Footer'

const Wrapper = styled.div`
background-color:${props => props.theme.background};
min-height:100vh;
height:auto;
width:100%;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
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
margin:1em;
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
height: 20em;
margin:2em;
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
                                SubText
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
                                SubText
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
                                SubText
                        </CardSubtext>
                        </CardContent>
                    </Card>
                    <Card>
                        <IconContainer>
                            <FaCss3Alt size={70} />
                        </IconContainer>
                        <CardContent>
                            <CardText>
                                Css3
                        </CardText>
                            <CardSubtext>
                                SubText
                        </CardSubtext>
                        </CardContent>
                    </Card>
                </CardWrapper>
            </Wrapper>
            <Footer />
        </>
    );
}

export default About;