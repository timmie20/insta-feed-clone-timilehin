import AddComments from "./AddComments";

export default function Comments({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="">
      {isOpen && <CommentsList />}
      <AddComments />
    </div>
  );
}

export const CommentsList = () => {
  return (
    <>
      <div className="h-20 w-full max-w-[70%] overflow-scroll py-2">
        <ul className="space-y-1.5 px-2">
          {Array.from({ length: 12 }, (_, i) => (
            <li key={i} className="text-xs">
              comment {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
