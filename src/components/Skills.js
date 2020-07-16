import React from 'react';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

import nodeIcon from '../images/node.png'
import gitIcon from '../images/git.png'
import gitbashIcon from '../images/gitbash.ico'
import reduxIcon from '../images/redux.png'
import muiIcon from '../images/MUI.png'
import skillTree from '../images/treealt.png'

const Wrapper = styled.div`
background-color:${props => props.theme.background};
width:100%;
display:flex;
flex-direction:column;
align-items:center;
padding:0 10%;
margin-bottom:6rem;
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
`

const PictureWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-end;
flex:1;
padding-right:8rem;
max-width:35em;
`

const SkillsWrapper = styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:space-between;
flex:1;
padding-left:8rem;
max-width:35em;
`

const SkillWrapper = styled.div`
justify-content:center;
align-items:center;
flex-direction:row;
`

const SkillTitle = styled.h2`
font-size:2rem;
margin-bottom:0.75em;
font-style:italic;
letter-spacing:1px;
`

const SkillText = styled.p`
font-size:0.9rem;
color:${props => props.theme.high};
`

const SkillTree = styled.img`
height:30em;
`

const ColorText = styled.span`
color:${props => props.theme.primaryV};
`

const Skills = () => {
    return (
        <Wrapper >
            <Header>Skills</Header>
            <ContentWrapper>
                <PictureWrapper>
                    <SkillTitle style={{ paddingRight:'2.7em' }}>
                        {'<SkillTree />'}
                    </SkillTitle>
                    <SkillTree src={skillTree} alt='tree' />
                </PictureWrapper>
                <SkillsWrapper>
                    <SkillWrapper>
                        <Fade top>
                            <SkillTitle>
                                {'<Core />'}
                            </SkillTitle>
                        </Fade>
                        <Fade left>
                            <SkillText>
                                My main area of expertice is front end development. I keep up with all the latest features of <ColorText>React</ColorText>, <ColorText>Javascript</ColorText>, <ColorText>CSS</ColorText>, and <ColorText>HTML</ColorText>. This includes, and is not limited to, React Hooks/Router, ES6, HTML5, and CSS3.
                        </SkillText>
                        </Fade>
                    </SkillWrapper>
                    <SkillWrapper>
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
                    <SkillWrapper>
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