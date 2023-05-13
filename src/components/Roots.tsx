import { Route, Routes, useLocation } from "react-router-dom";
import { useSwitchTransition } from 'transition-hook';
import {CV, Challenges, Contacts, Home, Projects} from "./index";
import { ContentTransition } from "../styles/style";

const transSeg = 1;

const pathElement:any = {
    "/": Home,
    "/CV": CV,
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
                                <Route path="/cv" element={pathElement[path]?.()} />,
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