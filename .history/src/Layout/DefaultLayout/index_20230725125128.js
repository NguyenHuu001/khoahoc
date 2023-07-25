import Header from "~/Header";
import SideBar from "~/SideBar";
function DefaultLayout() {
    return ( 
        <div>
            <Header />
            <div className="container"></div>
        </div>
     );
}

export default DefaultLayout;