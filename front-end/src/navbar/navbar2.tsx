import { Separator } from "@/components/ui/separator"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"



function Navbar2() {
    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center space-x-4 gap-4">
                <img src="/logo.svg" alt="Logo" />
                <Separator orientation="vertical" className="mx-4 h-8   " />
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Travelers</NavigationMenuTrigger>
                            <NavigationMenuContent style={{width:'15rem'}}>
                                <NavigationMenuLink>
                                    <div className="flex w-full gap-4 ">
                                        <img src="/logo.svg" alt="" />
                                        <div className="flex flex-col ">
                                            <p className="fontsemi">
                                                stays
                                            </p>
                                            <p>stays rental description</p>
                                        </div>

                                    </div>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

            </div>
            <div className="flex items-center space-x-8">


            </div>
            <div className="flex items-center space-x-4">

            </div>
        </nav>
    )
}

export default Navbar2
