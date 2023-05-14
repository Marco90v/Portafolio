import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const COLORS = {
    green: "#09853F",
    blue: "#2a2aff",
    red: "#d30000",
    yellow: "#cbc515",
    orange: "#eb9800",
    purple: "#800080",
    pink: "#dd0077",
    black: "#000000",
};

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
    overflow: auto;
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
    max-width: 65rem;
    margin: auto;
    >h1{
        font-size: 2rem;
        color: #09853F;
    }
    >div{
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto auto;
        column-gap: 2rem;
        h2{
            margin-bottom: 1rem;
        }
        >p{
            line-height: 2rem;
            font-weight: 100;
            margin: 0.3rem 0;
            >span{
                font-weight: bold;
                background-color: #ffffff1f;
                padding: 0.2rem 0.5rem;
                border-radius: 0.3rem;
                color: orange;
            }
        }
        >img{
            grid-row: 1/5;
            grid-column: 2/3;
            width: 23rem;
            border-radius: 1rem;
            box-shadow: 0rem 0rem 1rem 0.1rem black;
        }
    }
`;

export const ContentResumen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5rem;
    max-width: 100rem;
    margin: auto;
    >div{
        width: 100%;
        h1{
            margin-bottom: 1rem;
        }
        h2{
            text-align: center;
            width: 100%;
            margin-bottom: 1rem;
            color: ${COLORS.orange};
            font-weight: 500;
        }
        ul{
            list-style: none;
            width: 100%;
        }
    }
    >div.title{
        text-align: center;
        >h1{
            font-size: 3rem;
            color: #09853F;
        }
        >span{
            font-size: 1.3rem;
            letter-spacing: 0.1rem;
        }
    }
`;

export const ContentSkill = styled.div`
    >ul{
        display: flex;
        column-gap: 1rem;
        flex-wrap: wrap;
        background-color: #2a2e36;
        padding: 1.5rem;
        border-radius: 1rem;
    }
`;

export const Skill = styled.li`
    background-color: ${COLORS.green};
    padding: 0.25rem 1rem;
    border-radius: 10rem;
    margin: 0.25rem 0;
    font-weight: bold;
    &.green{
        background-color: ${COLORS.green};
    }
    &.red{
        background-color: ${COLORS.red};
    }
    &.yellow{
        background-color: ${COLORS.yellow};
    }
    &.blue{
        background-color: ${COLORS.blue};
    }
    &.orange{
        background-color: ${COLORS.orange};
    }
    &.purple{
        background-color: ${COLORS.purple};
    }
    &.pink{
        background-color: ${COLORS.pink};
    }
    &.black{
        background-color: ${COLORS.black};
    }
`;

export const ContentEducationalBackground = styled.div`
    margin-bottom: 3rem;
    >ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        column-gap: 1rem;
        row-gap: 2rem;
        background-color: #2a2e36;
        padding: 1.5rem;
        border-radius: 1rem;
    }
`;

export const ContentWorkExperience = styled(ContentEducationalBackground)`
    margin-bottom: 0;
    >ul{
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const Activitie = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
    color: #dddddd;
    font-size: 0.9rem;
    >img{
        width: 1rem;
    }
`;

export const ListWork = styled.li`
    &:before{
        content: "";
        width: 1rem;
        height: 1rem;
        background-color: green;
        position: absolute;
        left: -0.5rem;
        top: 1.6rem;
        border-radius: 1rem;
    }
    &:hover{
        background-color: #ffffff05;
        border-radius: 0 1rem 1rem 0;
    }
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-left: 0.15rem solid green;
    padding-left: 1rem;
    transition: all ease-in-out .5s;
    >span{
        color: #00adff;
        font-size: 0.7rem;
    }
    >p{
        font-size: 0.8rem;
        font-weight: 400;
    }
    >h4{
        margin-top: 1rem;
        text-decoration: underline;
    }
    
    &.green{
        border-color: ${COLORS.green};
        &:before{
            background-color: ${COLORS.green};
        }
    }
    &.red{
        border-color: ${COLORS.red};
        &:before{
            background-color: ${COLORS.red};
        }
    }
    &.yellow{
        border-color: ${COLORS.yellow};
        &:before{
            background-color: ${COLORS.yellow};
        }
    }
    &.blue{
        border-color: ${COLORS.blue};
        &:before{
            background-color: ${COLORS.blue};
        }
    }
    &.orange{
        border-color: ${COLORS.orange};
        &:before{
            background-color: ${COLORS.orange};
        }
    }
    &.purple{
        border-color: ${COLORS.purple};
        &:before{
            background-color: ${COLORS.purple};
        }
    }
    &.pink{
        border-color: ${COLORS.pink};
        &:before{
            background-color: ${COLORS.pink};
        }
    }
    &.black{
        border-color: ${COLORS.black};
        &:before{
            background-color: ${COLORS.black};
        }
    }
`;

export const ListStudy = styled(ListWork)``;