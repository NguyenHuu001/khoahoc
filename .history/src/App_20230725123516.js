import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from '~/routes'
import Home from "~/pages/Home";
import AboutUs from "~/pages/AboutUs";
import CourseSTEM from "~/pages/CourseSTEM";
import Course from "~/pages/Course";
import Mentor from "~/pages/Mentor";
import Blog from "~/pages/Blog";
function App() {
    return (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/CourseSTEM" element={<CourseSTEM />} />
                <Route path="/Course" element={<Course />} />
                <Route path="/Mentor" element={<Mentor />} />
                <Route path="/Blog" element={<Blog />} />
            </Routes>
        </div>
    </Router>
    );
}

export default App;
