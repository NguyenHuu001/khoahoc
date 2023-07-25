import Header from "~/Header";
import SideBar from "~/SideBar";
function DefaultLayout() {
    return ( 
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="">

                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;