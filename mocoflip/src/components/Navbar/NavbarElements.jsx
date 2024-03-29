import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: #000000;
    height: 80px;
    width: 100%;
    margin-top: -5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    z-index: 1;

    @media screen and (max-width: 960px) {
        transition: 0.8ms all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;

    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    /* max-width: 1100px; */
`;

export const NavLogo = styled(LinkR)`
    color:#fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 780px) {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 100%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    /* align-items: center; */
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    align-items: center;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover{
        border-bottom: 3px solid #EC6A9D;
    }
`;

export const SearchBar = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #EC6A9D;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color:  #010606;
    }
`;

export const Button = styled.button`
    border-radius: 50px;
    background: #EC6A9D;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    /* transition: all 0.2s ease-in-out; */
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color:  #010606;
    }
`;


