import CustomizePanel from "./component/Button_setting"
import HomeMain from "./component/home main/HomeMain"
import Footer from "./Flooter"
import Navbar1 from "./navbar/Navbar1"

function Home() {
    return (
        <div>
            <header>
                <Navbar1 />
            </header>
                <CustomizePanel/>
            <HomeMain />
            <Footer/>
        </div>
    )
}

export default Home
