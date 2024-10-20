import Stays from "./component/Stays"
import Bouton from "@/components/ui/utile/Button"
function HomeMain() {
    return (
        <div className='flex p-4 '>
            <div className="flex-1  pl-8 flex flex-col gap-4">
                <h1 className="text-[4rem] font-semibold">Hotel, car & experiences</h1>
                <p className="text-[1rem] text-gray-600">Accompanying us, you ar a trip full of experiences. White chisfis, bookinf accommodation, resort villas, hotels</p>
                <Bouton label="Start your search" />
                <div className="relative flex justify-between pr-[30%] pl-6 pb-28 ">
                    <button className="text-[1.4rem] font-semibold text-gray-500 active:text-black">Stays</button>
                    <button className="text-[1.4rem] font-semibold text-gray-500 active:text-black">Experiances</button>
                    <button className="text-[1.4rem] font-semibold text-gray-500 active:text-black">Cars</button>
                    <button className="text-[1.4rem] font-semibold text-gray-500 active:text-black">Flights</button>
                    <div className="absolute top-12 w-[70rem] py-8 px-6 rounded-full shadow-md bg-white">
                        <Stays/>
                    </div>
                </div>
            </div>
            <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4   ">
                <div className="bg-slate-400">
                    <img src="/logo.svg" alt="" />
                </div>
                <div className="row-span-2 bg-slate-600 mt-12">
                    <img src="/logo.svg" alt="" />
                </div>
                <div className="bg-slate-500 ">
                    <img src="/logo.svg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default HomeMain
