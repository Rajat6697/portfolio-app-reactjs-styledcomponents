import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ServiceCard from './ServiceCard';
import Title from './Title';
import design from '../img/design.svg';
import machineLearning from '../img/machine-learning.png';
import dataAnalysis from '../img/data-analysis.png';


function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title='Services' span='Services'/>
                <div className= "services">
                    <ServiceCard
                    image= {design}
                    title= {'Web Design'}
                    paragraph= {'Hi there hello jaja jsjsssj eieeie djdjdjdj'}
                    
                    />

                   <div className= "mid-card"> 

                   <ServiceCard
                    image= {machineLearning}
                    title= {'Machine Learning'}
                    paragraph= {'Hi there hello jaja jsjsssj eieeie djdjdjdj'}
                    
                    />
                   </div>

                    <ServiceCard
                    image= {dataAnalysis}
                    title= {'Data Analytics'}
                    paragraph= {'Hi there hello jaja jsjsssj eieeie djdjdjdj'}
                    
                    />
                </div>
            </ServicesSectionStyled>
            
        </InnerLayout>
    )
}
const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
