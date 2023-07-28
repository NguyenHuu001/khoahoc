import Header from "~/components/Layout/DefaultLayout/Header";
import SideBar from "~/components/Layout/DefaultLayout/SideBar";
function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container-fluid" >
                <SideBar />
                <div className="container-fluid">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;