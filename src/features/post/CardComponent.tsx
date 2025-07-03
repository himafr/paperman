import UserBar from "../../ui/UserBar";
import { type PostTypes } from "../../types";
import clsx from "clsx";

function CardComponent({
  post,
  land = false,
}: {
  post: PostTypes;
  land?: boolean;
}) {
  const { postPhoto, userPhoto } = post;
  return (
    <div
      className={clsx(
        " p-2.5 shadow-lg/20 rounded-xl",
        land && "flex gap-3  col-span-1"
      )}
    >
      <img
        src={postPhoto}
        className="object-cover rounded-xl max-w-[340px] min-w-[320px]  max-h-[190px]"
      />
      <div>
        <div className="h5 p-4 pl-1.5">House boating on Lake Shasta</div>
        <p className="paragraph pb-4 ">
          The best way to spend a long 4th of July weekend. Wake boarding,
          swimming, barbecues, and bonfires.
        </p>
        <UserBar src={userPhoto} />
      </div>
    </div>
  );
}

export default CardComponent;
