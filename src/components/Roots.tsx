import { Route, Routes, useLocation } from "react-router-dom";
import { useSwitchTransition } from 'transition-hook';
import { Challenges, Contacts, Home, Projects, Resumen } from "./index";
import { ContentTransition } from "../styles/style";

const transSeg = 0.4;

const pathElement:any = {
    "/": Home,
    "/resumen": Resumen,
    "/projects": Projects,
    "/challenges": Challenges,
    "/contacts": Contacts,
};

function Roots() {
    const {pathname} = useLocation();
    const transition = useSwitchTransition(pathname, transSeg*1000, 'out-in');

    return(
        <>
            {pathname &&
                transition((path, stage) => {
                    return(
                        <ContentTransition style={{
                            transition: `${transSeg}s`,
                            opacity: stage ==='enter' ? 1 : 0,
                            transform: {
                                from: 'translateX(-100%)',
                                enter: 'translateX(0%)',
                                leave: 'translateX(-100%)',
                            }[stage]
                        }}>
                            <Routes>
                                <Route path="/" element={pathElement[path]?.()} />,
                                <Route path="/resumen" element={pathElement[path]?.()} />,
                                <Route path="/projects" element={pathElement[path]?.()} />,
                                <Route path="/challenges" element={pathElement[path]?.()} />,
                                <Route path="/contacts" element={pathElement[path]?.()} />,
                            </Routes>
                        </ContentTransition>
                    );
                })
            }

        </>
    );
}
export default Roots;