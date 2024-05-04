import React, {useState} from 'react'
import * as S from "./Navbar.styles"

const Navbar = () => {

    const [showMenuBurguer, setShowMenuBurguer] = useState(false);

  return (
    <S.ContainerNavbar>
        <S.ContainerLogo>
            <S.ImageLogo src='/public/img/logo.png' alt='Logo Rafa'/>
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

        <S.ContainerItems showMenuBurguer = {showMenuBurguer}>
            <p>Aout Me  </p>
            <p>  Projects</p>
            <S.Button>Contact me</S.Button>
        </S.ContainerItems>
    </S.ContainerNavbar>
  )
}

export default Navbar
