import clsx from "clsx";
import type { PostTypes } from "../../types";

interface Tip {
title: string;
description: string;
}

const drivingTip: Tip = {
title: "How to Drive a Car Safely",
description:
 "Ah, the joy of the open road—it's a good feeling until someone forgets to use their turn signal. Stay alert, keep both hands on the wheel, and avoid distractions like texting or wrangling rogue snacks.",
};
function ImageCard({post,className}:{post:PostTypes;className?:string}) {

  return (
    <div className={clsx("relative min-w-[360px]   ",className)}>

        <img
        src={post?.postPhoto}
          loading="lazy"
          className="w-full h-[450px] rounded-lg shadow-md object-cover"
        />
      <div className="absolute bottom-3  bg-white/75 p-2 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">{drivingTip.title}</h1>
        <p className="paragraph">{drivingTip.description}</p>
      </div>
    </div>
  );
};



export default ImageCard
