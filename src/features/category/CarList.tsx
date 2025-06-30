import CardComponent from "../post/CardComponent"
import HeadingComponent from "../../ui/HeadingComponent"
import type { PostTypes } from "../../types"

function CatList({heading}:{category?:string,heading:string}) {
    const data:PostTypes["post"][]=[
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
            <div className="flex gap-6 overflow-x-auto py-5">
                {data.map((el)=><CardComponent post={el} />
                )}
            </div>
           </section>
    )
}

export default CatList
