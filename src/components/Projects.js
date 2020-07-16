import React from 'react';
import styled, { keyframes } from 'styled-components'
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import useToggle from '../hooks/useToggle'
import Carousel from 'nuka-carousel';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Fade from 'react-reveal/Fade';

import twitter1 from '../images/twitter1.png'
import battler1 from '../images/battler1.png'
import bank1 from '../images/bank1.png'
import gm1 from '../images/gm1.png'


const Wrapper = styled.div`
background-color:${props => props.theme.background};
width:100%;
display:flex;
flex-direction:column;
align-items:center;
padding:0 5%;
`

const Header = styled.h1`
color: ${props => props.theme.high};
font-size:2.5rem;
text-transform: uppercase;
font-weight:700;
margin:1.5rem 0 3rem 0;
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

const SelectionCard = styled.div`
height: 17em;
width: 28em;
min-width:28em;
background-color: ${props => props.theme.elevated};
color:${props => props.theme.high};
font-family:'raleway';
margin:1.5rem;
display:block;
border-radius:5px;
`

const ImageContainer = styled.div`
position:relative;
background-color: #2a4051;
height:14.4em;
margin: 0.2em;
border-radius:5px;
`

const ProjectImage = styled.div`
height:100%;
width:100%;
cursor:pointer;
border-radius:5px;
background-size:cover;

`

const InfoWrapper = styled.div`
margin-top:-0.2em;
height:2.4em;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 1.5em;
`

const LinkWrapper = styled.div`
`

const ProjectTitle = styled.h3`
font-size:1rem;
font-weight:500;
`

const ProjectLink = styled.a`
font-size:0.75rem;
font-weight:400;
&:first-of-type{
    padding-right:0.75em;
}
&:nth-of-type(2){
    padding-left:0.75em;
}
`

const SelectionWrapper = styled.div`
display:flex;
flex-flow: column nowrap;
width:100%;
justify-content:center;
align-items:center;
`
const SelectionRow = styled.div`
display:flex;
flex-flow: row nowrap;
width:100%;
justify-content:center;
align-items:center;
`

const ModalImage = styled.div`
background-size: 100% 100%;
width:64em;
height:32em;`

const fade = keyframes`
  from {
    transform: scale(0.8);
    opacity:0;
  }

  to {
    transform: scale(1);
    opacity:1;
  }
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  border-radius:5px;
  transition: .5s ease;
  background-color: ${props => props.theme.elevated2};
  &:hover{
      opacity:1
  }
`

const OverlayText = styled.p`
font-family:sans-serif;
`

const OverlayContainer = styled.div`
height:100%;
display:flex;
flex-flow:column nowrap;
justify-content:center;
align-items:center;
padding:0 3.5em;
text-align:center;
-webkit-transform: scale(1.1);
	transform: scale(1.1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
    &:hover{
        -webkit-transform: scale(1);
	transform: scale(1);
    }
`

const OverlayButton = styled.button`
    outline: 0;
    border: 2px solid;
    border-color:${props => props.theme.primary};
    background: none;
    margin: 25px;
    padding: 10px 35px;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
    border-radius: 50px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    &:hover{
        background: ${props => props.theme.primary};
    }
`

const StyledContent = styled(DialogContent)`
width:64em;
height:32em;
padding:0;
border-radius:5px;
animation: ${fade} .2s ease-in;
`

const StyledDialogOverlay = styled(DialogOverlay)`
background:rgba(55, 55, 55, 0.6);
display:flex;
justify-content:center;
align-items:center;
margin:0;
`
const ControlsContainer = styled.div`
margin-top:2em;
display:flex;
justify-content:center;
`

const ControlsText = styled.p`
color:${props => props.theme.high};
margin: 0 1em;
font-size:1.1rem;
font-weight:700;
`

const ColorText = styled.span`
color:${props => props.theme.primaryV};
font-weight:500;
`

const ControlButton = styled.button`
background:none;
border:none;
`
const TextPrimary = styled.h3`
font-size:1.3rem;
color: ${props => props.theme.high};
letter-spacing:1.5px;
font-weight:300;
margin-bottom:2rem;
`


const Projects = () => {

    const [modalOne, toggleModalOne] = useToggle(false);
    const [modalTwo, toggleModalTwo] = useToggle(false);
    const [modalThree, toggleModalThree] = useToggle(false);
    const [modalFour, toggleModalFour] = useToggle(false);

    return (
        <Wrapper>
            <StyledDialogOverlay isOpen={modalOne} onDismiss={toggleModalOne}>
                <StyledContent>
                    <Carousel enableKeyboardControls={true}
                        renderCenterLeftControls={({ previousSlide }) => (
                            <ControlButton onClick={previousSlide}><IoIosArrowBack size={60} color={'#03DAC5'} /></ControlButton>
                        )}
                        renderCenterRightControls={({ nextSlide }) => (
                            <ControlButton onClick={nextSlide}><IoIosArrowForward size={60} color={'#03DAC5'} /></ControlButton>
                        )}
                    >
                        <ModalImage style={{ backgroundImage: `url(${twitter1})` }} />
                        <ModalImage style={{ backgroundImage: `url(${battler1})` }} />
                        <ModalImage style={{ backgroundImage: `url(${bank1})` }} />
                        <ModalImage style={{ backgroundImage: `url(${gm1})` }} />
                    </Carousel>
                    <ControlsContainer>
                        <ControlsText>A: <ColorText>Previous</ColorText></ControlsText>
                        <ControlsText>D: <ColorText>Next</ColorText></ControlsText>
                        <ControlsText>Q: <ColorText>First</ColorText></ControlsText>
                        <ControlsText>E: <ColorText>Last</ColorText></ControlsText>
                        <ControlsText>ESC: <ColorText>Exit</ColorText></ControlsText>
                    </ControlsContainer>
                </StyledContent>
            </StyledDialogOverlay>
            <StyledDialogOverlay isOpen={modalTwo} onDismiss={toggleModalTwo}>
                <StyledContent>
                    <ModalImage style={{ backgroundImage: `url(${battler1})` }} />
                </StyledContent>
            </StyledDialogOverlay>
            <StyledDialogOverlay isOpen={modalThree} onDismiss={toggleModalThree}>
                <StyledContent>
                    <ModalImage style={{ backgroundImage: `url(${bank1})` }} />
                </StyledContent>
            </StyledDialogOverlay>
            <StyledDialogOverlay isOpen={modalFour} onDismiss={toggleModalFour}>
                <StyledContent>
                    <ModalImage style={{ backgroundImage: `url(${gm1})` }} />
                </StyledContent>
            </StyledDialogOverlay>
            <Header>Projects</Header>
            <Fade left>
                <TextPrimary>Here are some of my recent <ColorText>projects</ColorText>. Hover a project card to view more <ColorText>details</ColorText>.</TextPrimary>
            </Fade>
            <SelectionWrapper>
                <SelectionRow>
                    <SelectionCard>
                        <ImageContainer>
                            <ProjectImage style={{ backgroundImage: `url(${twitter1})` }} />
                            <ModalOverlay>
                                <OverlayContainer>
                                    <OverlayText>Multiple-choice quiz App based on real Tweets. Uses official Twitter API and widgets to load in Tweet data to display. Fully responsive with light/dark mode.</OverlayText >
                                    <OverlayButton onClick={toggleModalOne}>See More</OverlayButton>
                                </OverlayContainer>
                            </ModalOverlay>
                        </ImageContainer >
                        <InfoWrapper>
                            <ProjectTitle >Twitter Guessr</ProjectTitle>
                            <LinkWrapper>
                                <ProjectLink>Visit website</ProjectLink>
                                <ProjectLink>View source code</ProjectLink>
                            </LinkWrapper>
                        </InfoWrapper>
                    </SelectionCard>
                    <SelectionCard>
                        <ImageContainer>
                            <ProjectImage onClick={toggleModalTwo} style={{ backgroundImage: `url(${battler1})` }} />
                            <ModalOverlay>
                                <OverlayContainer>
                                    <OverlayText>App with two main functionalities, can display most popular Github repos based on programming language, or choose two Github profiles to battle.</OverlayText>
                                    <OverlayButton onClick={toggleModalOne} >See More</OverlayButton>
                                </OverlayContainer>
                            </ModalOverlay>
                        </ImageContainer >
                        <InfoWrapper>
                            <ProjectTitle>Github Battler</ProjectTitle>
                            <LinkWrapper>
                                <ProjectLink>Visit Website</ProjectLink>
                                <ProjectLink>View Source Code</ProjectLink>
                            </LinkWrapper>
                        </InfoWrapper>
                    </SelectionCard>
                </SelectionRow>
                <SelectionRow>
                    <SelectionCard>
                        <ImageContainer>
                            <ProjectImage onClick={toggleModalThree} style={{ backgroundImage: `url(${bank1})` }} />
                            <ModalOverlay>
                                <OverlayContainer>
                                    <OverlayText>Bank design template with language/login contexts. Contains a dashboard for user information and can request current exchange rates for different currencies.</OverlayText>
                                    <OverlayButton onClick={toggleModalOne} >See More</OverlayButton>
                                </OverlayContainer>
                            </ModalOverlay>
                        </ImageContainer >
                        <InfoWrapper>
                            <ProjectTitle>Bank Template</ProjectTitle>
                            <LinkWrapper>
                                <ProjectLink>Visit Website</ProjectLink>
                                <ProjectLink>View Source Code</ProjectLink>
                            </LinkWrapper>
                        </InfoWrapper>
                    </SelectionCard>
                    <SelectionCard>
                        <ImageContainer>
                            <ProjectImage onClick={toggleModalFour} style={{ backgroundImage: `url(${gm1})` }} />
                            <ModalOverlay>
                                <OverlayContainer>
                                    <OverlayText>Web app for Fantasy Hockey, contains historic league data and takes live data from Fantrax.com. Has 31 unique style themes that can be toggled at any time.</OverlayText>
                                    <OverlayButton onClick={toggleModalOne} >See More</OverlayButton>
                                </OverlayContainer>
                            </ModalOverlay>
                        </ImageContainer >
                        <InfoWrapper>
                            <ProjectTitle>NHL Fantasy Stats</ProjectTitle>
                            <LinkWrapper>
                                <ProjectLink>Visit Website</ProjectLink>
                                <ProjectLink>View Source Code</ProjectLink>
                            </LinkWrapper>
                        </InfoWrapper>
                    </SelectionCard>
                </SelectionRow>
            </SelectionWrapper>
        </Wrapper>);
}
export default Projects;