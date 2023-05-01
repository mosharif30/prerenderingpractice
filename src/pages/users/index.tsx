import Link from "next/link";
import { useRouter } from "next/router";

const Users = ({ users }: any) => {
  const router = useRouter();
  return (
    <>
      <button
        className="mt-5 bg-red-700 text-white ml-5 rounded-md p-2 text-3xl font-bold"
        onClick={() => router.push("/")}
      >
        back
      </button>
      <ul className="flex flex-col w-72 ml-5">
        {users.map((user: { name: string; id: number }) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <li className="  p-3 bg-slate-700 my-2 text-white">{user.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Users;
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
