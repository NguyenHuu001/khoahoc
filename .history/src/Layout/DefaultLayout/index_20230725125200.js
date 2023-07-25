import Header from "~/Header";
import SideBar from "~/SideBar";
function DefaultLayout() {
    return ( 
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">

                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;