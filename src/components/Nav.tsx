import { Li, MyNavLink, Nav, Ul } from "../styles/style";

function Sidebar () {
    return(
        <Nav>
            <Ul>
                <Li>
                    <MyNavLink to="/" >Inicio</MyNavLink>
                </Li>
                <Li>
                    <MyNavLink to="/cv" >Resumen</MyNavLink>
                </Li>
                <Li>
                    <MyNavLink to="/project" >Proyectos</MyNavLink>
                </Li>
                <Li>
                    <MyNavLink to="/challenges" >Retos</MyNavLink>
                </Li>
                <Li>
                    <MyNavLink to="/contacts" >Contactos</MyNavLink>
                </Li>
            </Ul>
        </Nav>
    );
}

export default Sidebar;