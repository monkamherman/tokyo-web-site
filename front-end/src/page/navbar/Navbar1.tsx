
import { ModeToggle } from "./mode-toggle"
import Bouton from "@/components/ui/utile/Button";
import { AiOutlineSearch } from "react-icons/ai";
import Home from "./component/nav1/Home";
import FiveColum from "./component/nav1/Fivecolum";
import ListingPage from "./component/nav1/listing page/Listtingpage";
import Template from "./component/nav1/Template";
import OtherPage from "./component/nav1/OtherPage";



function Navbar1() {
    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center space-x-4">
                <img src="/logo.svg" alt="Logo" className="w-20 h-20" />
            </div>
            <div className="flex items-center space-x-2">
                <Home />
                <FiveColum />
                <ListingPage />
                <Template />
                <OtherPage />
            </div>
            <div className="flex items-center space-x-4">
                <ModeToggle />
                <button type="button"> <AiOutlineSearch className="h-8 w-8" /></button>
                <Bouton label="Sign up" />
            </div>
        </nav>
    )
}

export default Navbar1
