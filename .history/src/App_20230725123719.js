import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from '~/routes'

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
