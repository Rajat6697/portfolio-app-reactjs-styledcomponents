import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                <div className= "skills">
          <ProgressBar title={"HTML5"} width={"70%"} text={"70%"} />

          <ProgressBar title={"CSS3"} width={"50%"} text={"50%"} />

          <ProgressBar title={"JAVASCRIPT"} width={"60%"} text={"60%"} />

          <ProgressBar title={"REACT JS"} width={"40%"} text={"40%"} />

          <ProgressBar title={"NODE JS"} width={"50%"} text={"50%"} />

          <ProgressBar title={"PYTHON"} width={"70%"} text={"70%"} />

          <ProgressBar title={"MACHINE LEARNING"} width={"35%"} text={"35%"} />

          <ProgressBar title={"DATA ANALYSIS"} width={"40%"} text={"40%"} />
          </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
