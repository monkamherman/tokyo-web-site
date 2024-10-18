
import { Separator } from "@/components/ui/separator"
import Travelers from "./component/Travelers";
import LanguageDevice from "./component/Language-Device";
import Template from "./component/Template";
import Notification from "./component/Notification";
import ListProperty from "./component/property/ListProperty";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function Navbar2() {

    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center space-x-4 gap-4">
                <img src="/logo.svg" alt="Logo" />
                <Separator orientation="vertical" className="mx-4 h-8   " />
               <Travelers/>
            </div>
            <div className="flex items-center space-x-4">
                <Template />
                <LanguageDevice />
                <ListProperty/>
                <Notification />
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

            </div >
        </nav >
    )
}

export default Navbar2
