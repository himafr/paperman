import { FaSearch } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import HeadingComponent from "./HeadingComponent";

export default function FooterComponent() {
  const categories = [
    "Culture",
    "Fashion",
    "Featured",
    "Food",
    "Healthy Living",
    "Technology",
  ];
  const comments = [
    { user: "Ellsmartx", post: "how nice does this look 😍 I feel it should be delicious, thank you" },
    { user: "Cassia", post: "Take a rest, i'll be cheer up you again in 2 next game go go go" },
    { user: "Amanda", post: "you were stunning today, jan! 💗 great match 👍🏽👍🏽" },
    { user: "Denis Simonassi", post: "It was a great match today Janzi! You did great😉🇩🇪" },
  ];

  return (
    <footer className="w-full  py-8 space-y-8 flex gap-6">
      {/* Categories */}
      <div className="bg-gray rounded-tr-[50px] rounded-br-[50px] w-2/4 p-12">
        <div className="grid grid-cols-3  gap-x-16 pl-16">
          <div className="col-span-2">
              <HeadingComponent text="Paper" />
            <p className="paragraph pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin
            </p>
          </div>
          <div>
              <HeadingComponent text="Categories" />
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="hover:text-black cursor-pointer text-xs"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2">
              <HeadingComponent text="Newsletters" />
            <div className="flex items-center ">
              <input
                type="text"
                className="py-3.5 pr-14 pl-5 rounded-xl text-black75 w-full bg-white"
                placeholder="Write your email .."
              />

              <MdEmail
                color=" rgb(62,50,50,0.75)"
                className="relative right-9 cursor-pointer"
              />
            </div>
          </div>

      <HeadingComponent text="  Social Network" />
        </div>
      </div>

      {/* Comments */}
      <div>
      <HeadingComponent text=" New Comments" />
        <ul className="text-sm space-y-2">
          {comments.map(({ user, post }) => (
              <li key={`${user}-${post}`} className="bg-gray rounded-xl p-4">
              <div className="font-bold pb-2">{user}</div> 
              {post}
            </li>
          ))}
        </ul>
      </div>

      {/* Instagram Grid */}
      <div className="pr-2.5">
          <HeadingComponent text="Follow On Instagram"/>
        <div className="grid grid-cols-3 gap-2">
            <img
              className="bg-gray-200 rounded h-[104px] w-[104px] object-cover "
              title={`Instagram placeholder`}
              src="/images/car/02.png"
            />
            <img
              className="bg-gray-200 rounded h-[104px] w-[104px] object-cover "
              title={`Instagram placeholder`}
              src="/images/animal/10.png"
            />
             <img
              className="bg-gray-200 rounded h-[104px] w-[104px] object-cover "
              title={`Instagram placeholder`}
              src="/images/technology/02.png"
            />
            <img
              className="bg-gray-200 rounded h-[104px] w-[104px] object-cover "
              title={`Instagram placeholder`}
              src="/images/food/07.png"
            />
            <img
              className="bg-gray-200 rounded h-[104px] w-[104px] object-cover "
              title={`Instagram placeholder`}
              src="/images/music/01.png"
            />

            <img
              className="bg-gray-200 rounded h-[104px] w-[104px] object-cover "
              title={`Instagram placeholder`}
              src="/images/dance/03.png"
            />
            
            <img
              className="bg-gray-200 rounded h-[104px] w-[104px] object-cover "
              title={`Instagram placeholder`}
              src="/images/animal/07.png"
            />
            <img
              className="bg-gray-200 rounded h-[104px] w-[104px] object-cover "
              title={`Instagram placeholder`}
              src="/images/dance/01.png"
            />
            <img
              className="bg-gray-200 rounded h-[104px] w-[104px] object-cover "
              title={`Instagram placeholder`}
              src="/images/sport/02.png"
            />
           
        </div>
      </div>

    
    </footer>
  );
}
