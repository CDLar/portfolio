import React, { useState } from 'react';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

import skillTree from '../images/skilltree.png'
import skillTreeCore from '../images/skilltreeCore.png'
import skillTreeDev from '../images/skilltreeDev.png'
import skillTreeDesign from '../images/skilltreeDesign.png'


const Wrapper = styled.div`
background-color:${props => props.theme.background};
width:100%;
display:flex;
flex-direction:column;
align-items:center;
padding:0 10%;
margin-bottom:6rem;
@media (max-width: 1200px) {
    padding: 0 5%;
}
`

const Header = styled.h1`
color: ${props => props.theme.high};
font-size:2.5rem;
text-transform: uppercase;
font-weight:700;
margin:1.5rem 0 4rem 0;
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

const ContentWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
width:100%;
@media (max-width: 790px) {
    flex-direction:column;
}
`

const PictureWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-end;
flex:1;
width:100%;
padding-right:8rem;
@media (max-width: 1080px) {
    padding-right:1rem;
}
@media (max-width: 790px) {
margin-bottom:3em;
padding-right:0rem;
align-items:center;
justify-content:center;
}
`

const SkillsWrapper = styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:space-between;
flex:1;
padding-left:8rem;
max-width:35em;
@media (max-width: 1080px) {
    padding-left:7rem;
}
@media (max-width: 900px) {
    padding-left:4rem;
}
@media (max-width: 850px) {
    padding-left:1rem;
}
@media (max-width: 790px) {
    padding-left:0rem;
}
`
const ColorText = styled.span`
    color:${props => props.theme.primaryV};
`
const SkillText = styled.p`
font-size:0.85rem;
color:${props => props.theme.high};
`

const SkillWrapper = styled.div`
justify-content:center;
align-items:center;
flex-direction:row;
transition: all 0.3s;
filter: grayscale(30%);
color:${props => props.theme.high};
&:hover{
    transform:scale(1.2);
    filter: grayscale(0%);
    cursor:pointer;
}
&:hover ${ColorText}{
}
@media (max-width: 790px) {
    pointer-events:none;
    margin-bottom:3em;
    filter: grayscale(0%);
}
`

const SkillTitle = styled.h2`
font-size:2rem;
margin-bottom:0.75em;
font-style:italic;
letter-spacing:1px;
@media (max-width: 790px) {
    text-align:center;
}
`

const TreeTitle = styled(SkillTitle)`
padding-right: 2.7em;
@media (max-width: 790px) {
    padding-right:0rem;
}
`

const SkillTree = styled.img`
height:30em;
`

const Skills = () => {
    const [activeTree, setActiveTree] = useState(skillTree)
    return (
        <Wrapper >
            <Header>Skills</Header>
            <ContentWrapper>
                <PictureWrapper>
                    <TreeTitle>
                        {'<SkillTree />'}
                    </TreeTitle>
                    <SkillTree src={activeTree} alt='tree' />
                </PictureWrapper>
                <SkillsWrapper>
                    <SkillWrapper onMouseEnter={() => setActiveTree(skillTreeCore)} onMouseLeave={() => setActiveTree(skillTree)}>
                        <Fade top>
                            <SkillTitle>
                                {'<Core />'}
                            </SkillTitle>
                        </Fade>
                        <Fade left>
                            <SkillText>
                                My main area of expertice is front end development. I keep up with all the latest features of <ColorText>React</ColorText>, <ColorText>Javascript</ColorText>, <ColorText>CSS</ColorText>, <ColorText>HTML</ColorText>, and <ColorText>Redux</ColorText>. This includes, and is not limited to, React Hooks/Router, ES6, HTML5, CSS3, and complex state management.
                        </SkillText>
                        </Fade>
                    </SkillWrapper>
                    <SkillWrapper onMouseEnter={() => setActiveTree(skillTreeDev)} onMouseLeave={() => setActiveTree(skillTree)}>
                        <Fade top>
                            <SkillTitle>
                                {'<Development />'}
                            </SkillTitle>
                        </Fade>
                        <Fade left>
                            <SkillText>
                                For the development process, I set up my dev environment with <ColorText>Node.js</ColorText>, initialize projects with <ColorText>Webpack</ColorText> and handle my workflow and source control with <ColorText>Git</ColorText> and <ColorText>Git Bash</ColorText>. I am capable of rendering both client-side and server-side apps using the <ColorText>Next.js</ColorText> framework.
                        </SkillText>
                        </Fade>
                    </SkillWrapper>
                    <SkillWrapper onMouseEnter={() => setActiveTree(skillTreeDesign)} onMouseLeave={() => setActiveTree(skillTree)}>
                        <Fade top>
                            <SkillTitle>
                                {'<Design />'}
                            </SkillTitle>
                        </Fade>
                        <Fade left>
                            <SkillText>
                                I'm experienced with a wide variety of styling options, I prefer to use CSS-in-JS libraries such as <ColorText>Styled Components</ColorText> but have also created several projects with <ColorText>CSS Modules</ColorText> and other CSS preprocessors like <ColorText>SASS</ColorText>. I also have knowledge of using design frameworks such as <ColorText>Material-UI</ColorText>.
                        </SkillText>
                        </Fade>
                    </SkillWrapper>
                </SkillsWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}

export default Skills;