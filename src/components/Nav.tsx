import { Li, MyNavLink, Nav, Ul } from "../styles/style";
import data from "../utils/navDataBase";

function Sidebar () {
    return(
        <Nav>
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