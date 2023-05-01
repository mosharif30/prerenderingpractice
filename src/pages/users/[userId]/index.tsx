import { useRouter } from "next/router";

const User = ({ user }: { user: { email: string } }) => {
  const router = useRouter();
  return (
    <>
      <button
        className="mt-5 bg-red-700 text-white ml-5 rounded-md p-2 text-3xl font-bold"
        onClick={() => router.push("/users")}
      >
        back
      </button>
      <div className="text-3xl font-bold">{user.email}</div>
    </>
  );
};

export default User;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const paths = users.map((user: { id: number }) => ({
    params: { userId: user.id.toString() },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );

  const user = await res.json();
  return {
    props: { user },
  };
}
