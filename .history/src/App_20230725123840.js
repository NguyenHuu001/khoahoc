import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from '~/routes'

function App() {
    return (
    <Router>
        <div className="App">
            <Routes>
                {publicRoutes.map(route => {
                    route 
                    return <Route />
                })}
            </Routes>
        </div>
    </Router>
    );
}

export default App;
