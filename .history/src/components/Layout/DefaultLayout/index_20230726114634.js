import Header from "~/components/Layout/DefaultLayout/Header";
import SideBar from "~/components/Layout/DefaultLayout/SideBar";
function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container-fluid position-absolute" >
                <SideBar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;