import { FiBookmark } from "react-icons/fi";

function UserBar({ src }: { src: string }) {
  return (
    <div className="flex py-[13px] px-4 rounded-xl bg-gray justify-between">
      <div className="flex gap-3.5 items-center">
        <img src={src} className="my-icon " alt="" />
        <div className="text-[14px] h-full flex flex-col  justify-between">
          James
          <div className="text-xs text-black75">July 14 , 2022</div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray my-icon cursor-pointer">
        <FiBookmark size={25} color="rgb(60,50,50,0.75)" />
      </div>
    </div>
  );
}

export default UserBar;
