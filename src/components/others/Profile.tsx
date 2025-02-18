export default function Profile() {
  return (
    <div className="rounded-lg border-[1px] border-slate-200 bg-gradient-to-br from-pink-600 to-violet-600 px-3 py-4 shadow-sm">
      <div className="flex items-center gap-2">
        <div
          className="size-20 cursor-pointer rounded-full p-px focus-visible:ring-1"
          role="listitem"
          aria-label="profile photo"
          tabIndex={0}
        >
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
            alt="profile photo"
            className="h-full w-full rounded-full border-[2px] border-white object-cover"
          />
        </div>

        <div className="flex items-center gap-1">
          <span className="cursor-pointer text-lg font-semibold text-white">
            John Doe{" "}
          </span>
        </div>
      </div>

      <div className="mx-auto mt-4 flex max-w-[80%] items-center justify-between text-white">
        <div className="flex w-fit flex-col">
          <span className="font-delicious-handrawn text-lg text-white">
            Following
          </span>
          <span className="cursor-pointer text-center text-sm font-medium">
            1.4k
          </span>
        </div>
        <div className="flex w-fit flex-col">
          <span className="font-delicious-handrawn text-lg">Followers</span>
          <span className="cursor-pointer text-center text-sm font-medium">
            2M
          </span>
        </div>
        <div className="flex w-fit flex-col">
          <span className="font-delicious-handrawn text-lg">Likes</span>
          <span className="cursor-pointer text-center text-sm font-medium">
            14.5M
          </span>
        </div>
      </div>

      <button className="mt-4 w-full cursor-pointer rounded-md border-[1px] border-white py-1 text-sm text-white">
        View Profile
      </button>
    </div>
  );
}
