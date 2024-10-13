import { AiOutlineSearch } from "react-icons/ai";

import { ModeToggle } from "./mode-toggle"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Bouton from "@/components/ui/utile/Button";


function Navbar1() {
    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center space-x-4">
                <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
            </div>
            <div className="flex items-center space-x-8">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                            <NavigationMenuContent >
                                <NavigationMenuLink>online booking</NavigationMenuLink>
                                <NavigationMenuLink>Real estate</NavigationMenuLink>
                                <NavigationMenuLink>Home 3</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Life style</NavigationMenuTrigger>
                            <NavigationMenuContent >
                                <NavigationMenuLink>online booking</NavigationMenuLink>
                                <NavigationMenuLink>Real estate</NavigationMenuLink>
                                <NavigationMenuLink>Home 3</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Template</NavigationMenuTrigger>
                            <NavigationMenuContent >
                                <NavigationMenuLink>online booking</NavigationMenuLink>
                                <NavigationMenuLink>Real estate</NavigationMenuLink>
                                <NavigationMenuLink>Home 3</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Archive Page</NavigationMenuTrigger>
                            <NavigationMenuContent >
                                <NavigationMenuLink>online booking</NavigationMenuLink>
                                <NavigationMenuLink>Real estate</NavigationMenuLink>
                                <NavigationMenuLink>Home 3</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Other Page</NavigationMenuTrigger>
                            <NavigationMenuContent >
                                <NavigationMenuLink>online booking</NavigationMenuLink>
                                <NavigationMenuLink>Real estate</NavigationMenuLink>
                                <NavigationMenuLink>Home 3</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>




            </div>
            <div className="flex items-center space-x-4">
                <ModeToggle />
                <button type="button"> <AiOutlineSearch /></button>
                <Bouton label="Sign up"/>
            </div>
        </nav>
    )
}

export default Navbar1
