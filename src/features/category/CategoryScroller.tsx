const categories: string[] = [
  "#Food",
  "#Animal",
  "#Car",
  "#Sport",
  "#Music",
  "#Technology",
  "#Abstract",
  "#Travel",
  "#Nature",
];

const CategoryScroller: React.FC = () => {
  return (
    <div className="relative w-full mt-10">
      <div className="flex overflow-x-auto gap-3">
        {categories.map((category, index) => (
          <div key={index} className="relative">
            <img
              src="/images/food/07.png"
              className="rounded-xl max-h-12 min-w-[170px] object-cover blur-[2px] "
            />
            <div className="absolute top-0 w-full h-full flex items-center justify-center text-xl font-semibold text-white">
              {category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryScroller;
