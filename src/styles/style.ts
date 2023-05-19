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
    /* background-color: #1b202a; */
    background: rgb(49,57,75);
    background: linear-gradient(90deg, rgba(49,57,75,1) 0%, rgba(27,32,42,1) 50%, rgba(13,16,20,1) 100%);
    color: white;
    padding: 2rem;
    overflow: auto;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: #060912; */
    background: rgb(6,9,18);
    background: radial-gradient(circle, rgba(6,9,18,1) 50%, rgba(16,25,48,1) 100%);
    box-shadow: 0rem 0rem 1rem 0.1rem black;
    z-index: 9;
`;
export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    align-items: center;
    list-style: none;
    overflow: hidden;
    width: 100%;
    padding: 3rem 0;
`;

export const Li = styled.li`
    position: relative;
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
    height: 5rem;
    color: white;
    text-decoration: none;
    transition: all ease-in-out 0.25s;
    &.active{
        color: #09853F;
        text-shadow: 0rem 0rem 0.3rem black;
        &:before{
            background-color: orange;
            box-shadow: 0 0 1rem 1rem orange;
        }
    }
    &:before{
        content: "";
        width: 4rem;
        height: 4rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        border-radius: 4rem;
        opacity: 0.2;
        transition: all ease-in-out 0.15s;
    }
    &:hover{
        &:before{
            background-color: orange;
            box-shadow: 0 0 1rem 1rem orange;
        }
    }
`;

export const ContentTransition = styled.div`
    margin: auto;
    min-height: 100%;
`;

const ContentSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContentHome = styled(ContentSection)`
    height: 100%;
    min-height: 93vh;
    row-gap: 5rem;
    max-width: 65rem;
    margin: auto;
    >h1{
        font-size: 3rem;
        color: #09853F;
    }
    >div{
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto auto auto;
        column-gap: 2rem;
        h2{
            margin-bottom: 1rem;
            font-size: 2rem;
            grid-row: 1/3;
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
        >ul{
            grid-column: 2/3;
            grid-row: 5/6;
            list-style: none;
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            margin-top: 0.5rem;
            >li>a>img{
                border-radius: 1rem;
                padding: 0.2rem;
                cursor: pointer;
                transition: all ease-in-out 0.15s;
                &:hover{
                    background-color: orange;
                    box-shadow: 0 0 0.5rem 0.1rem orange;
                }
            }
        }
    }
`;

export const ContentResumen = styled(ContentSection)`
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
    border-radius: 0.3rem;
    margin: 0.25rem 0;
    font-weight: bold;
    overflow: hidden;
    >img{
        border-radius: 0.3rem;
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
    >span{
        line-height: 1.2rem;
    }
`;

export const ListWork = styled.li`
    &:before{
        content: "";
        width: 1rem;
        height: 1rem;
        background-color: green;
        position: absolute;
        left: -0.55rem;
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

export const ListStudy = styled(ListWork)`
    >p:last-child{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 1.2rem;
        font-size: 0.9rem;
        color: #dddddd;
        >img{
            width: 1rem;
        }
    }
`;

export const ContentProjects = styled(ContentSection)`
    row-gap: 3rem;
    padding: 0 2rem;
    div.title{
        text-align: center;
        >h1{
            margin-bottom: 1rem;
            font-size: 3rem;
            color: #09853F;
        }
        >span{
            font-size: 1.3rem;
            letter-spacing: 0.1rem;
        }
    }
    div.projetsOrChallengesList>ul{
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
        padding-bottom: 2rem;
    }
`;

export const ContentChallenges = styled(ContentProjects)``;

export const ListProjects = styled.li`
    position: relative;
    transition: all ease-in-out .5s;
    >img{
        width: 25rem;
        height: 15rem;
        object-fit: cover;
        border-radius: 1rem;
        border: 0.15rem solid orange;
        transition: all ease-in-out .5s;
    }
    >div.info{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        row-gap: 2rem;
        width: 100%;
        height: 99%;
        background: rgb(0 0 0 / 50%);
        border-radius: 1rem;
        opacity: 0;
        transition: all ease-in-out .5s;
        >h2{
            color: ${COLORS.orange};
            text-shadow: 0rem 0rem 1rem black;
            font-size: 2rem;
            text-align: center;
        }
        div.icons{
            display: flex;
            column-gap: 2rem;
            >button{
                background-color: transparent;
                cursor: pointer;
            }
            img{
                background-color: white;
                border-radius: 1rem;
                padding: 0.1rem;
                transition: all ease .25s;
                &:hover{
                    box-shadow: 0 0 1rem 0.1rem white;
                }
            }
        }
    }
    &:hover{
        transform: scale(1.05);;
        >img{
            box-shadow: 0rem 0rem 0.5rem 0.2rem ${COLORS.black};
        }
        >div.info{
            opacity: 1;
        }
    }
`;

export const ContentDetails = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0 0 0 / 50%);
    width: 100%;
    height: 100%;
    z-index: 9;
    >div.modal{
        position: relative;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-content: center;
        justify-content: center;
        max-width: 75rem;
        padding: 2rem;
        border-radius: 0.5rem;
        background-color: white;
        box-shadow: 0 0 0.5rem 0.25rem grey;
        >div.title{
            grid-row: 1/2;
            grid-column: 1/3;
            background-color: #d9d9d9;
            padding: 0.5rem;
            border-radius: 0.5rem;
            h2{
                margin-bottom: 0.5rem;
                color: ${COLORS.green};
            }
            >button.close{
                background-color: transparent;
                position: absolute;
                right: 0;
                top: 0;
                margin: 0.5rem;
                cursor: pointer;
                >img{
                    border-radius: 1rem;
                    transition: all ease-in-out 0.15s;
                }
                &:hover>img{
                    background-color: orange;
                    box-shadow: 0 0 0.5rem 0.1rem orange;
                }
            }
        }
        >div.description{
            grid-row: 2/3;
            grid-column: 1/2;
            >p{
                margin: 0.5rem 0;
                font-weight: 100;
                &:last-child{
                    margin-top: 1rem;
                    line-height: 1.5rem;
                }
            }
        }
        >div.info{
            grid-row: 2/3;
            grid-column: 2/3;
            >img{
                width: 40rem;
                border: 0.15rem solid black;
                border-radius: 0.5rem;
                margin: 1rem 0;
            }
            >p>span{
                margin-left: 0.5rem;
                color: ${COLORS.orange};
                font-weight: bold;
            }
            >div.link{
                display: flex;
                flex-direction: row;
                column-gap: 0.5rem;
                justify-content: left;
                align-items: center;
                >p{
                    font-weight:bold;
                }
                >a>img{
                    border-radius: 1rem;
                    transition: all ease-in-out 0.15s;
                    &:hover{
                        background-color: orange;
                        box-shadow: 0 0 0.5rem 0.1rem orange;
                    }
                }
            }
        }
    }
`;

export const ContentContact = styled(ContentSection)`
    display: flex;
    height: 93vh;
    align-items: center;
    >div.title{
        text-align: center;
        >h1{
            font-size: 3rem;
            color: #09853F;
            margin-bottom: 2rem;
        }
    }
    >form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto 1fr auto auto;
        gap: 2rem;
        margin-top: 5rem;
        width: 55rem;
        >input, >textarea{
            background-color: #2a2e36;
            padding: 1rem 0.5rem;
            font-size: 1rem;
            color: white;
            letter-spacing: 0.1rem;
            border-radius: 0.5rem;
            border: 0.1rem solid transparent;
            outline: none;
            &:active, &:focus{
                border-color: orange;
            }
        }
        >input[type="text"]:nth-child(3){
            grid-column: 1/3;
        }
        >textarea{
            grid-column: 1/3;
            resize: none;
        }
        >input[type="submit"]{
            grid-column: 2/3;
            margin-left: 10rem;
            cursor: pointer;
            font-weight: bold;
            color: orange;
            transition: all ease-in-out 0.25s;
            &:hover{
                box-shadow: 0rem 0rem 0.5rem 0.1rem black;
                background-color: orange;
                color: black;
            }
        }
    }
`;

export const AlertContact = styled.span`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    grid-column: 1/3;
    font-weight: bold;
    line-height: 2rem;
    padding: 0.5rem;
    height: 2rem;
    font-size: 1rem;
    text-align: center;
    border-radius: 0.5rem;
    opacity: 0;
    transition: all ease-in-out 0.15s;
    &.error{
        opacity:1;
        color:${COLORS.red};
        background-color: rgb(255 255 255 / 10%);
    }
    &.success{
        opacity:1;
        color:${COLORS.green};
        background-color: rgb(255 255 255 / 10%);
    }
`;