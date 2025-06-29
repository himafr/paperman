import CardComponent from "../shared/CardComponent"
import HeadingComponent from "../shared/HeadingComponent"

function CatList({heading}:{category?:string,heading:string}) {
    const data=[
        {
            userPhoto:"images/avatar/12.png"
        },
        {
            userPhoto:"images/avatar/01.png"
        },
        {
            userPhoto:"images/avatar/02.png"
        },
        {
            userPhoto:"images/avatar/10.png"
        },
    ]
    return (
         <section>
            <HeadingComponent text={heading}/>
            <div className="flex gap-6 overflow-x-auto py-5">
                {data.map((el)=><CardComponent userPhoto={el.userPhoto} />
                )}
            </div>
           </section>
    )
}

export default CatList
