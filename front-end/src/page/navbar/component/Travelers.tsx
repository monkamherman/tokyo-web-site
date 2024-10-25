import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

function Travelers() {
  return (
    <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Travelers</NavigationMenuTrigger>
                            <NavigationMenuContent style={{ width: '17rem' }}>
                                <NavigationMenuLink >
                                    <div className="flex w-full gap-4 px-2 hover:bg-gray-100 ">
                                        <img src="/logo.svg" alt="" />
                                        <div className="flex flex-col ">
                                            <p className="font-semibold text-[1.2rem]">
                                                stays
                                            </p>
                                            <p className="text-[1rem]">stays rental description</p>
                                        </div>
                                    </div>
                                </NavigationMenuLink>
                                <NavigationMenuLink >
                                    <div className="flex w-full gap-4 px-2 hover:bg-gray-100 ">
                                        <img src="/logo.svg" alt="" />
                                        <div className="flex flex-col ">
                                            <p className="font-semibold text-[1.2rem]">
                                                Real estate
                                            </p>
                                            <p className="text-[1rem]">real estate description</p>
                                        </div>

                                    </div>

                                </NavigationMenuLink>
                                <NavigationMenuLink >
                                    <div className="flex w-full gap-4 px-2 hover:bg-gray-100 ">
                                        <img src="/logo.svg" alt="" />
                                        <div className="flex flex-col ">
                                            <p className="font-semibold text-[1.2rem]">
                                                Cars
                                            </p>
                                            <p className="text-[1rem]">Cars rental description</p>
                                        </div>

                                    </div>
                                </NavigationMenuLink>
                                <NavigationMenuLink >
                                    <div className="flex w-full gap-4 px-2 hover:bg-gray-100 ">
                                        <img src="/logo.svg" alt="" />
                                        <div className="flex flex-col ">
                                            <p className="font-semibold text-[1.2rem]">
                                                Experiences
                                            </p>
                                            <p className="text-[1rem]">Tour and experiences</p>
                                        </div>

                                    </div>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

  )
}

export default Travelers
