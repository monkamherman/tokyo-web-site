import { MdWifiTetheringErrorRounded } from "react-icons/md";

function PageError() {
    return (
        <div className=" flex gap-4 text-[10rem] h-screen  w-screen flex justify-center items-center">
            <MdWifiTetheringErrorRounded /> <span> error 404</span>
        </div>
    )
}

export default PageError
