import React from 'react';
import styled, { keyframes } from 'styled-components'
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import useToggle from '../hooks/useToggle'
import Carousel from 'nuka-carousel';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';
import Tooltip from './Tooltip'

import twitt1 from '../images/twitt-1.png'
import twitt2 from '../images/twitt-2.png'
import twitt3 from '../images/twitt-3.png'
import twitt4 from '../images/twitt-4.png'
import twitt5 from '../images/twitt-5.png'

import battler1 from '../images/battler1.png'
import battler2 from '../images/battler2.png'
import battler3 from '../images/battler3.png'
import battler4 from '../images/battler4.png'
import battler5 from '../images/battler5.png'

import bank1 from '../images/bank-1.png'
import bank2 from '../images/bank-2.png'
import bank3 from '../images/bank-3.png'
import bank4 from '../images/bank-4.png'
import bank5 from '../images/bank-5.png'

import gm1 from '../images/gm-1.jpg'
import gm2 from '../images/gm-2.jpg'
import gm3 from '../images/gm-3.jpg'
import gm4 from '../images/gm-4.png'

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
@media (max-width: 475px){
    width:22em;
    min-width:22em;
    height: 14em;
    margin: 1em;
}
@media (max-width: 375px){
    width:17em;
    min-width:17em;
    height: 11em;
    margin: 1em;
    margin:0.5em;
}
`

const ImageContainer = styled.div`
position:relative;
background-color: #2a4051;
height:84.706%;
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
@media (max-width: 475px){
    margin-top:-0.4em;
}
@media (max-width: 375px){
    margin-top:-0.65rem;
}
`

const LinkWrapper = styled.div`
display:flex;
`

const ProjectTitle = styled.h3`
font-size:1.1rem;
font-weight:500;
@media (max-width: 475px){
    font-size:0.9rem;
}
@media (max-width: 375px){
    font-size:0.7rem;
}
`

const ProjectLink = styled.a`
font-size:0.75rem;
font-weight:400;
font-family:sans-serif;
cursor:pointer;
&:first-of-type{
    padding-right:0.75em;
}
&:nth-of-type(2){
    padding-left:0.75em;
}
&:hover{
    color:${props => props.theme.primary};
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
@media (max-width: 1005px) {
flex-direction:column;
}
`

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
font-size:1rem;
@media (max-width: 475px){
    font-size:0.9rem;
}
@media (max-width: 375px){
    font-size:0.7rem;
}
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
    @media (max-width: 475px){
    padding: 0 2em;
    }
    @media (max-width: 375px){
    padding: 0 1rem;
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
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    border-radius: 50px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    &:hover{
        background: ${props => props.theme.primary};
    }
    @media (max-width: 475px){
font-size:0.9rem;
}
@media (max-width: 375px){
    font-size:0.7rem;
    padding: 5px 20px;
}
`


const ModalImage = styled.div`
background-size: 100% 100%;
cursor:default;
width:80em;
height:40em;
@media(max-width: 1400px){
    width:70em;
    height:35em;
}
@media(max-width: 1200px){
    width:64em;
    height:32em;
}
@media(max-width: 1140px){
    width:61em;
    height:28em;
}
@media(max-width: 1075px){
    width:56em;
    height:25em;
}
@media(max-width: 850px){
    width:43em;
    height:20em;
}
@media(max-width: 770px){
    width:39em;
    height:18em;
}
@media(max-width: 690px){
    width:35em;
    height:16em;
}
@media(max-width: 610px){
    width:31.5em;
    height:14.5em;
}
@media(max-width: 530px){
    width:27em;
    height:13em;
}
@media(max-width: 450px){
    width:25em;
    height:12em;
}
@media(max-width: 400px){
    width:23em;
    height:11em;
}
@media(max-width: 370px){
    width:21em;
    height:10em;
}
@media(max-width: 340px){
    width:19em;
    height:9em;
}
@media(max-width: 310px){
    width:17em;
    height:8em;
}
`

const StyledContent = styled(DialogContent)`
width:80em;
height:40em;
padding:0;
border-radius:5px;
animation: ${fade} .2s ease-in;
@media(max-width: 1400px){
    width:70em;
    height:35em;
}
@media(max-width: 1200px){
    width:64em;
    height:32em;
}
@media(max-width: 1140px){
    width:61em;
    height:28em;
}
@media(max-width: 1075px){
    width:56em;
    height:25em;
}
@media(max-width: 850px){
    width:43em;
    height:20em;
}
@media(max-width: 770px){
    width:39em;
    height:18em;
}
@media(max-width: 690px){
    width:35em;
    height:16em;
}
@media(max-width: 610px){
    width:31.5em;
    height:14.5em;
}
@media(max-width: 530px){
    width:27em;
    height:13em;
}
@media(max-width: 450px){
    width:25em;
    height:12em;
}
@media(max-width: 400px){
    width:23em;
    height:11em;
}
@media(max-width: 370px){
    width:21em;
    height:10em;
}
@media(max-width: 340px){
    width:19em;
    height:9em;
}
@media(max-width: 310px){
    width:17em;
    height:8em;
}
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
@media(max-width: 850px){
    font-size:1rem;
}
@media(max-width: 690px){
    display:none;
}
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
letter-spacing:1px;
font-weight:300;
margin-bottom:2rem;
display:block;
&:first-of-type{
    margin-bottom:0.2rem;
}
@media (max-width: 540px) {
font-size:1rem;
}
@media (max-width: 440px) {
font-size:0.8rem;
}
@media (max-width: 365px) {
font-size:0.7rem;
}
`

const TextWrapper = styled.div`
display:flex;
@media (max-width: 1005px) {
display:block;
}
`

const StyledExternal = styled(FaExternalLinkAlt)`
font-size:1.2rem;
color:${props => props.theme.high};
margin-top:0.1em;
@media (max-width: 475px) {
    font-size:0.8rem;
    margin-top:0.15em;
}
`

const StyledCode = styled(FaCode)`
color:${props => props.theme.high};
font-size:1.55rem;
@media (max-width: 475px) {
    font-size:1rem;
    margin-top:0.05em;
}
`


const arrowStyles = `
font-size:60px;
color:#03DAC5;
&:hover{
    cursor:pointer;
}
@media(max-width: 690px){
    font-size:50px;
}
@media(max-width: 530px){
    font-size:40px;
}
@media(max-width: 375px){
    font-size:30px;
}
`

const StyledBackArrow = styled(IoIosArrowBack)`
${arrowStyles}
`

const StyledForwardArrow = styled(IoIosArrowForward)`
${arrowStyles}
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
                            <ControlButton onClick={previousSlide}><StyledBackArrow /></ControlButton>
                        )}
                        renderCenterRightControls={({ nextSlide }) => (
                            <ControlButton onClick={nextSlide}><StyledForwardArrow /></ControlButton>
                        )}
                    >
                        <ModalImage title='Home screen ft. light/dark modes'style={{ backgroundImage: `url(${twitt1})` }} />
                        <ModalImage title='Two different quiz choices' style={{ backgroundImage: `url(${twitt2})` }} />
                        <ModalImage title='A tweet is displayed with the ID'style={{ backgroundImage: `url(${twitt3})` }} />
                        <ModalImage title='Making a selection will reveal the answer'style={{ backgroundImage: `url(${twitt4})` }} />
                        <ModalImage title='Your score is displayed at the end of a quiz'style={{ backgroundImage: `url(${twitt5})` }} />
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
                    <Carousel enableKeyboardControls={true}
                        renderCenterLeftControls={({ previousSlide }) => (
                            <ControlButton onClick={previousSlide}><StyledBackArrow /></ControlButton>
                        )}
                        renderCenterRightControls={({ nextSlide }) => (
                            <ControlButton onClick={nextSlide}><StyledForwardArrow /></ControlButton>
                        )}
                    >
                        <ModalImage title='Battle feature, two github usernames are entered' style={{ backgroundImage: `url(${battler1})` }} />
                        <ModalImage title='A prompt to confirm the choices' style={{ backgroundImage: `url(${battler2})` }} />
                        <ModalImage title='Results + information is displayed for each user' style={{ backgroundImage: `url(${battler3})` }} />
                        <ModalImage title='Fetching github repository data from an API' style={{ backgroundImage: `url(${battler4})` }} />
                        <ModalImage title='Displaying the most popular repositories for the selected language' style={{ backgroundImage: `url(${battler5})` }} />
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
            <StyledDialogOverlay isOpen={modalThree} onDismiss={toggleModalThree}>
                <StyledContent>
                    <Carousel enableKeyboardControls={true}
                        renderCenterLeftControls={({ previousSlide }) => (
                            <ControlButton onClick={previousSlide}><StyledBackArrow /></ControlButton>
                        )}
                        renderCenterRightControls={({ nextSlide }) => (
                            <ControlButton onClick={nextSlide}><StyledForwardArrow /></ControlButton>
                        )}
                    >
                        <ModalImage title='Sample landing page' style={{ backgroundImage: `url(${bank1})` }} />
                        <ModalImage title='Dynamic language support' style={{ backgroundImage: `url(${bank2})` }} />
                        <ModalImage title='Real-time fetching of exchange rates' style={{ backgroundImage: `url(${bank3})` }} />
                        <ModalImage title='Auth contexts used to validate login details' style={{ backgroundImage: `url(${bank4})` }} />
                        <ModalImage title='Sample dashboard for a user once logged in' style={{ backgroundImage: `url(${bank5})` }} />
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
            <StyledDialogOverlay isOpen={modalFour} onDismiss={toggleModalFour}>
                <StyledContent>
                    <Carousel enableKeyboardControls={true}
                        renderCenterLeftControls={({ previousSlide }) => (
                            <ControlButton onClick={previousSlide}><StyledBackArrow /></ControlButton>
                        )}
                        renderCenterRightControls={({ nextSlide }) => (
                            <ControlButton onClick={nextSlide}><StyledForwardArrow /></ControlButton>
                        )}
                    >
                        <ModalImage title='Scores assigned to teams based on historic playoff data' style={{ backgroundImage: `url(${gm1})` }} />
                        <ModalImage title='Cards can be flipped to reveal overall league stats' style={{ backgroundImage: `url(${gm2})` }} />
                        <ModalImage title='Team list with stats for each GM with additional season stats' style={{ backgroundImage: `url(${gm4})` }} />
                        <ModalImage title='Different themes for each NHL team' style={{ backgroundImage: `url(${gm3})` }} />
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
            <Header>Projects</Header>
            <Fade left>
                <TextWrapper>
                    <TextPrimary>Here are some of my recent <ColorText>projects</ColorText>.&nbsp;</TextPrimary>
                    <TextPrimary>Hover a project card to view more <ColorText>details</ColorText>.</TextPrimary>
                </TextWrapper>
            </Fade>
            <SelectionWrapper>
                <SelectionRow>
                    <SelectionCard>
                        <ImageContainer>
                            <ProjectImage style={{ backgroundImage: `url(${twitt1})` }} />
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
                                <ProjectLink href='https://github.com/CDLar/twitter-guessr/' target='_blank'><Tooltip text='View Source Code'><StyledCode /></Tooltip></ProjectLink>
                                <ProjectLink href='https://twitter-guessr.netlify.app/' target='_blank'><Tooltip text='Visit Website'><StyledExternal /></Tooltip></ProjectLink>
                            </LinkWrapper>
                        </InfoWrapper>
                    </SelectionCard>
                    <SelectionCard>
                        <ImageContainer>
                            <ProjectImage onClick={toggleModalTwo} style={{ backgroundImage: `url(${battler1})` }} />
                            <ModalOverlay>
                                <OverlayContainer>
                                    <OverlayText>App with two main functionalities, can display most popular Github repos based on programming language, or choose two Github profiles to battle. Coding project from UI.dev.</OverlayText>
                                    <OverlayButton onClick={toggleModalTwo} >See More</OverlayButton>
                                </OverlayContainer>
                            </ModalOverlay>
                        </ImageContainer >
                        <InfoWrapper>
                            <ProjectTitle>Github Battler</ProjectTitle>
                            <LinkWrapper>
                                <ProjectLink href='https://github.com/CDLar/Battleproject' target='_blank'><Tooltip text='View Source Code'><StyledCode /></Tooltip></ProjectLink>
                                <ProjectLink href='https://githubbattler.netlify.app/' target='_blank'><Tooltip text='Visit Website'><StyledExternal /></Tooltip></ProjectLink>
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
                                    <OverlayText>Bank design template with language/login contexts utilizing the MUI framework. Contains a user dashboard and can request current exchange rates for different currencies.</OverlayText>
                                    <OverlayButton onClick={toggleModalThree} >See More</OverlayButton>
                                </OverlayContainer>
                            </ModalOverlay>
                        </ImageContainer >
                        <InfoWrapper>
                            <ProjectTitle>Bank Template</ProjectTitle>
                            <LinkWrapper>
                                <ProjectLink href='https://github.com/CDLar/bank-demo' target='_blank'><Tooltip text='View Source Code'><StyledCode /></Tooltip></ProjectLink>
                                <ProjectLink href='https://demo-bank.netlify.app/' target='_blank'><Tooltip text='Visit Website'><StyledExternal /></Tooltip></ProjectLink>
                            </LinkWrapper>
                        </InfoWrapper>
                    </SelectionCard>
                    <SelectionCard>
                        <ImageContainer>
                            <ProjectImage onClick={toggleModalFour} style={{ backgroundImage: `url(${gm1})` }} />
                            <ModalOverlay>
                                <OverlayContainer>
                                    <OverlayText>Web app for Fantasy Hockey, contains historic league data and takes live data from Fantrax.com. Has 31 unique style themes that can be toggled at any time.</OverlayText>
                                    <OverlayButton onClick={toggleModalFour} >See More</OverlayButton>
                                </OverlayContainer>
                            </ModalOverlay>
                        </ImageContainer >
                        <InfoWrapper>
                            <ProjectTitle>Fantasy Sports App</ProjectTitle>
                            <LinkWrapper>
                                <ProjectLink href='https://github.com/CDLar/gm-profiles' target='_blank'><Tooltip text='View Source Code'><StyledCode /></Tooltip></ProjectLink>
                                <ProjectLink href='https://gm-stats.netlify.app/' target='_blank'><Tooltip text='Visit Website'><StyledExternal /></Tooltip></ProjectLink>
                            </LinkWrapper>
                        </InfoWrapper>
                    </SelectionCard>
                </SelectionRow>
            </SelectionWrapper>
        </Wrapper>);
}
export default Projects;