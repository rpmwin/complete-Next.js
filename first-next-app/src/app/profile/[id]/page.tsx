export default function UserProfile({ params }: any) {
  return (
    <div className="flex justify-center items-center flex-col py-2 min-h-screen">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl ">Profile Page <span >{params.id}</span> </p>
    </div>
  );
}
