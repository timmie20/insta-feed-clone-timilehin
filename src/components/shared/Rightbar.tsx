import Profile from "../others/Profile";

export default function Rightbar() {
  return (
    <div className="hidden w-full lg:block">
      <Profile />
      <div className="mt-3 h-fit rounded-lg bg-white p-3 text-base shadow-sm">
        <h3 className="font-medium">Post Impressions</h3>
        <p className="text-sm">
          Your post has increased by{" "}
          <span className="text-green-600">200% </span> over the last 24hrs
        </p>
      </div>
    </div>
  );
}
