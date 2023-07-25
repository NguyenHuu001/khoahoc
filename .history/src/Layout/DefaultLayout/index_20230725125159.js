import Header from "~/Header";
import SideBar from "~/SideBar";
function DefaultLayout() {
    return ( 
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="conte">

                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;