import CatList from "../features/category/CarList"
import CategoryScroller from "../features/category/CategoryScroller"

function HomePage() {
    return (
        <div className="px-12">
          <CategoryScroller />
          <CatList heading="popular posts" />
          <CatList heading="trendy posts" />
          <CatList heading="Top Posts" />
        </div>
    )
}

export default HomePage
