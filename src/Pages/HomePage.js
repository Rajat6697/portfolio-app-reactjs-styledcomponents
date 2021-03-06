import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
            <h1>Hi I'm <span>Rajat Verma</span></h1>
            <p> A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs some other cool libraries and frameworks.
            </p>
                <div className="icons">
                <a href= "https://github.com/Rajat6697" target="_blank" className= "icon i-github"> <GithubIcon/> </a >
                <a href= "https://www.linkedin.com/in/rajat-verma-1289031b6/" target="_blank" className= "icon i-linkedin"><LinkedInIcon/> </a >
                <a href= "https://www.youtube.com/channel/UC62TdZsLejmRMcGY3BvWi0w" target="_blank" className= "icon i-youutbe"> <YoutubeIcon/></a >
                   
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
