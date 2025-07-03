import { FiBookmark } from "react-icons/fi"
import Nav from "../ui/Nav"
import UserBar from "../ui/UserBar"

function WriterPage() {
    return (
        <div className="px-12" >
            <Nav />
            <div className="bg-gray ">
                <img src="" alt="s" />
                <div className="flex py-[13px] px-4 rounded-xl  justify-between">
                     <div className="flex gap-3.5 items-center">
                       <img src="/" className="my-icon " alt="" />
                       <div className="text-[14px] h-full flex flex-col  justify-center">
                         James
                       </div>
                     </div>
                     <div>
                        info
                     </div>
                     <div className="flex items-center justify-center bg-gray my-icon cursor-pointer">
                       <FiBookmark size={25} color="rgb(60,50,50,0.75)" />
                     </div>
                   </div>
            </div>
        </div>
    )
}

export default WriterPage
