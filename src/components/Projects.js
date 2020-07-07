import React from 'react';
import styled from 'styled-components'
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
background-color: #2a4051;
height:14.4em;
margin: 0.2em;
`

const ProjectImage = styled.img`
height:100%;
width:100%;
border-radius:5px;
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
    border-right: solid 1px white;
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

const Projects = () => {
    return (
        <Wrapper>
            <Header>Projects</Header>
            <SelectionWrapper>
                <SelectionRow>
                    <SelectionCard>
                        <ImageContainer>
                            <ProjectImage src={twitter1} />
                        </ImageContainer >
                        <InfoWrapper>
                            <ProjectTitle>Twitter Guessr</ProjectTitle>
                            <LinkWrapper>
                                <ProjectLink>Visit Website</ProjectLink>
                                <ProjectLink>View Source Code</ProjectLink>
                            </LinkWrapper>
                        </InfoWrapper>
                    </SelectionCard>
                    <SelectionCard>
                        <ImageContainer>
                            <ProjectImage src={battler1} />
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
                            <ProjectImage src={bank1} />
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
                            <ProjectImage src={gm1} />
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