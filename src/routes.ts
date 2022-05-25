import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Art from "./pages/Art";

// other
import { FC } from "react";
import { Article, Brush, Code, Psychology } from '@mui/icons-material';
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>,
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }
}

export const routes: Route[] = [
    {
        key: 'about-route',
        title: 'About',
        path: '/',
        enabled: true,
        component: About,
        icon: Psychology
    },
    {
        key: 'resume-route',
        title: 'Resume',
        path: '/resume',
        enabled: true,
        component: Resume,
        icon: Article
    },
    {
        key: 'art-route',
        title: 'Art',
        path: '/art',
        enabled: true,
        component: Art,
        icon: Code
    },
    {
        key: 'projects-route',
        title: 'Projects',
        path: '/projects',
        enabled: true,
        component: Projects,
        icon: Brush
    }
]