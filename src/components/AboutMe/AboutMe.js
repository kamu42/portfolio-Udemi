import React from 'react'
import * as S from "./AboutMe.styles"
import logoGithub from "../../svg/github.svg"
import logoLinkedin from "../../svg/linkedin.svg"
import logoUdemy from "../../svg/udemy.svg"
import logoYoutube from "../../svg/youtube.svg"

const AboutMe = () => {
    const socialNetworks = [
        {
            name: "Github",
            link: "",
            logo: logoGithub
        },
        {
            name: "Linkedin",
            link: "",
            logo: logoLinkedin
        },
        {
            name: "Udemy",
            link: "",
            logo: logoUdemy
        },
        {
            name: "Youtube",
            link: "",
            logo: logoYoutube
        },
    ]



  return (
    <S.ContainerAboutMe id='about-me'>
      <S.ContainerFlex>

        <S.ContainerText>
            <S.Title>
                <p>Hello, i'm</p>
                <p>Camilo Corredor</p>
                <p>Front end developer</p>
            </S.Title>
            <S.DescriptionText>
                loremipsum loremipsum  loremipsum  loremipsum 
            </S.DescriptionText>
            <S.ContainerIcons>
                {socialNetworks.map((network, index)=>(
                    <a 
                    key={index} 
                    href={network.link} 
                    target='__blank' 
                    rel='noreferrer'>
                        <img src={network.logo} alt={network.name} />
                    </a>
                ))}
            </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
            <img src='/public/img/profile.png' alt='elrafa'/>
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  )
}

export default AboutMe
