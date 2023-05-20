import { Li, MyNavLink, Nav, ToggleSidebar, Ul } from "../styles/style";
import data from "../utils/navDataBase";
import iconArrow from "../assets/chevron-right-solid-24.png";
import { useContext } from "react";
import { Context } from "../context/MyContext";

function Sidebar () {
    const { state:{showSidebar}, dispatch } = useContext(Context);
    const toggle = () => dispatch({type:"toggleSidebar"});

    return(
        <Nav show={showSidebar.toString()} >
            <ToggleSidebar show={showSidebar.toString()} onClick={toggle} ><img src={iconArrow} alt="handlerToggle" /></ToggleSidebar>
            <Ul>
            {
                data.map((element:data, idx:number)=>{
                    const {name, root, imgNotActive, imgActive} = element;
                    return(
                        <Li key={idx}>
                            <MyNavLink to={root}>
                            {({isActive})=>(
                                <>
                                    <img src={isActive ? imgActive : imgNotActive} alt={name} />
                                    <span>{name}</span>
                                </>
                            )}
                            </MyNavLink>
                        </Li>
                    );
                })
            }
            </Ul>
        </Nav>
    );
}

export default Sidebar;
export { Sidebar };