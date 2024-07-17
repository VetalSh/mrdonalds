import React from "react";
import styled from "styled-components";
import logoImg from "../image/logo.svg";

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const SignInBtn = styled.button`
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    background: #fff;
    box-shadow: 0px 0px 2px 0px #000;
    color: #595959;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo" />
            <H1>MrDonald`s</H1>
        </Logo>
        <SignInBtn>Sign in</SignInBtn>
    </NavBarStyled>
)