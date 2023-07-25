import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Course from "./pages/Course";
import CourseSTEM from "./pages/CourseSTEM";
import Home from "./pages/Home";
import Mentor from "./pages/Mentor";
function App() {
    return (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/Home"  />
            </Routes>
        </div>
    </Router>
    );
}

export default App;
