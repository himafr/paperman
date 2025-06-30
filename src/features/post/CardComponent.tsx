import UserBar from "../../ui/UserBar"
import { type PostTypes } from "../../types"

function CardComponent({post}:PostTypes) {
    const {postPhoto,userPhoto}=post
    return (
           <div className=" p-2.5 shadow-lg/20 rounded-xl">
                    <img src={postPhoto} className="object-cover rounded-xl max-w-[340px] min-w-[320px]  max-h-[190px]" />
                    <div className="h5 p-4 pl-1.5" >House boating on Lake Shasta</div>
                    <p className="paragraph pb-4 "> The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires.

</p>
                    <UserBar src={userPhoto} />
                </div>
    )
}

export default CardComponent
