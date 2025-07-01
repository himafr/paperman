import CategoryScroller from "../features/category/CategoryScroller"
import NewList from "../features/category/NewList"
import PopularList from "../features/category/PopularList"
import TopList from "../features/category/TopList"
import TrendyList from "../features/category/TrendyList"
import ImageCard from "../features/post/ImageCard"
import type { PostTypes } from "../types"

function HomePage() {
 const data:PostTypes[]=[{
  postPhoto:"/images/sport/01.png",
  userPhoto:"/images/avatar/12.png"
 },
 {
  postPhoto:"/images/technology/03.png",
  userPhoto:"/images/avatar/01.png"
 },
 {
  postPhoto:"/images/car/07.png",
  userPhoto:"/images/avatar/02.png"
 },
 {
  postPhoto:"/images/food/01.png",
  userPhoto:"/images/avatar/10.png"
 },
 {
  postPhoto:"/images/food/01.png",
  userPhoto:"/images/avatar/10.png"
 }
 ]
    return (
        <div className="px-12">
          <CategoryScroller />


           <section className="my-20">
            <div className={"flex gap-6 overflow-x-auto  py-5"}>
                {data.map(el=><ImageCard  post={el}  />
                )}
            </div>
           </section>

          <PopularList  />
          <NewList  />
          <TrendyList />
          <TopList  />
        </div>
    )
}

export default HomePage
