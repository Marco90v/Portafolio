import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-template-columns: 10rem auto;
    grid-template-rows: auto;
    height: 100vh;
`;

export const Container = styled.div`
    position: relative;
    overflow: hidden;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #00081B;
    box-shadow: 0rem 0rem 1rem 0.1rem #061539;
`;
export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 5rem;
    align-items: center;
    list-style: none;
    overflow: hidden;
    width: 100%;
`;

export const Li = styled.li`
    font-weight: bold;
    width: 100%;
    text-align: center;
    cursor: pointer;
`;

export const MyNavLink = styled(NavLink)<any>`
    color: white;
    text-decoration: none;
    transition: all ease-in-out 0.25s;
    &.active{
        color: #09853F;
        text-shadow: 0rem 0rem 0.3rem black;
    }
`;

export const ContentTransition = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
`;