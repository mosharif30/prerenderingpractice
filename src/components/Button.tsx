import router from "next/router";

const Button = ({ children, route }: { children: string; route: string }) => {
  return (
    <>
      <button
        className="mt-5 bg-green-700 text-white ml-5 rounded-md p-2 text-3xl font-bold"
        onClick={() => router.push(route)}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
