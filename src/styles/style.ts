import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-template-columns: 10rem auto;
    grid-template-rows: auto;
    height: 100vh;
`;

export const Container = styled.section`
    background-color: #1b202a;
    color: white;
    padding: 2rem;
    overflow: hidden;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #00081B;
    box-shadow: 0rem 0rem 1rem 0.1rem black;
    z-index: 9;
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

export const MyNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 0.5rem;
    color: white;
    text-decoration: none;
    transition: all ease-in-out 0.25s;
    &.active{
        color: #09853F;
        text-shadow: 0rem 0rem 0.3rem black;
    }
`;

export const ContentTransition = styled.div`
    margin: auto;
    height: 100%;
`;

export const ContentHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    row-gap: 5rem;
    width: 60rem;
    margin: auto;
    >h1{
        font-size: 2rem;
        color: #09853F;
    }
    >div{
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        column-gap: 2rem;
        >p{
            line-height: 2rem;
            font-weight: 100;
        }
        >img{
            grid-row: 1/3;
            grid-column: 2/3;
            width: 20rem;
            border-radius: 1rem;
            box-shadow: 0rem 0rem 1rem 0.1rem black;
        }
    }
`;