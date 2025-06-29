import UserBar from "./UserBar"

function CardComponent({userPhoto}:{userPhoto:string}) {
    return (
           <div className="max-w-[370px] min-w-[360px] p-2.5 shadow-lg/20 rounded-xl">
                    <img src="/images/sport/01.png" className="object-cover rounded-xl" />
                    <div className="h5 p-4 pl-1.5" >House boating on Lake Shasta</div>
                    <p className="paragraph pb-4 "> The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires.

</p>
                    <UserBar src={userPhoto} />
                </div>
    )
}

export default CardComponent
