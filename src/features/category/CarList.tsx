import CardComponent from "../post/CardComponent"
import HeadingComponent from "../../ui/HeadingComponent"
import type { PostTypes } from "../../types"

function CatList({heading,land}:{category?:string,heading:string ;land?:boolean}) {
    const data:PostTypes[]=[
        {
            postPhoto:"/images/sport/01.png",
            userPhoto:"images/avatar/12.png"
        },
        {
            postPhoto:"images/technology/03.png",
            userPhoto:"images/avatar/01.png"
        },
        {
            postPhoto:"images/car/07.png",
            userPhoto:"images/avatar/02.png"
        },
        {
            postPhoto:"images/food/01.png",
            userPhoto:"images/avatar/10.png"
        },
    ]
    return (
         <section className="my-20">
            <HeadingComponent text={heading}/>
            <div className={land?"grid gap-6 grid-cols-2 py-5":"flex gap-6 overflow-x-auto py-5"}>
                {data.map((el)=><CardComponent land={land} post={el} />
                )}
            </div>
           </section>
    )
}

export default CatList
