import React, {useState} from 'react';
import * as S from "./Navbar.styles";

const Navbar = () => {

    const [showMenuBurguer, setShowMenuBurguer] = useState(false);

    const clickItemNav = item =>{
        document.getElementById(item).scrollIntoView({behavior: "smooth"});
    };

  return (
    <S.ContainerNavbar>
        <S.ContainerLogo>
            <S.ImageLogo src="/public/img/logo.png" alt='Logo Rafa'/>
            <div>
                <h1>Camilo Corredor</h1>
                <h2>Frontend Developer</h2>
            </div>
        </S.ContainerLogo>

        <S.ContainerBurguer onClick={()=>setShowMenuBurguer(!showMenuBurguer)}>
            <S.BurguerMenu/>
            <S.BurguerMenu/>
            <S.BurguerMenu/>
        </S.ContainerBurguer>

        <S.ContainerItems showMenuBurguer={showMenuBurguer}>
            <p onClick={()=>clickItemNav("about-me")}>About Me  </p>
            <p onClick={()=>clickItemNav("projects")}>  Projects</p>
            <S.Button onClick={()=>clickItemNav("contact-me")}>Contact me</S.Button>
        </S.ContainerItems>
    </S.ContainerNavbar>
  )
}

export default Navbar
