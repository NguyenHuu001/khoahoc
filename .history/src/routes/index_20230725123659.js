import Home from "~/pages/Home";
import AboutUs from "~/pages/AboutUs";
import CourseSTEM from "~/pages/CourseSTEM";
import Course from "~/pages/Course";
import Mentor from "~/pages/Mentor";
import Blog from "~/pages/Blog";

const publicRoutes = [
    {path: '/Home', component: Home},
    {path: '/AboutUs', component: AboutUs},
    {path: '/CourseSTEM', component: CourseSTEM},
    {path: '/Course', component: Course},
    {path: '/Mentor', component: Mentor},
    {path: '/Home', component: Home},
]
const privateRoutes = [

]
export {publicRoutes, privateRoutes}