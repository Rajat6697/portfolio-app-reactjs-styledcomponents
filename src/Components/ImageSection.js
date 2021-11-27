import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume2.png';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className= "right-content">
                 
                <h4>I am <span>Rajat Verma</span> </h4>
                
               
                <p className= "paragraph">
                I am a full stack web developer(MERN) and I build websites using HTML, CSS, Javascript, ReactJs.I have also good grasp on Node and NoSQL(MongoDb)
                </p>

                <div className= "about-info">

                    <div className= "info-title"> 
                    <p>Full Name</p>
                    <p>Age</p>
                    <p>Nationality</p>
                    <p>Languages</p>
                    <p>Location</p>
                
                    </div>

                    <div className= "info"> 

                    <p>: Rajat Verma</p>
                    <p>: 23</p>
                    <p>: Indian</p>
                    <p>: Hindi, English</p>
                    <p>: Greater Noida, India</p>
                    
                    </div>
                    
                     </div>
                     <PrimaryButton title= "Download CV"/>

            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
