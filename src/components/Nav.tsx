import { Li, MyNavLink, Nav, Ul } from "../styles/style";

function Sidebar () {
    return(
        <Nav>
            <Ul>
                <Li>
                    <MyNavLink to="/" >Inicio</MyNavLink>
                </Li>
                <Li>
                    <MyNavLink to="/CV" >Resumen</MyNavLink>
                </Li>
                <Li>
                    <MyNavLink to="/projects" >Proyectos</MyNavLink>
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