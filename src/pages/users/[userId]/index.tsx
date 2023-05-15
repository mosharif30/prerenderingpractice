import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import IUsers from "@/interfaces/IUser";
const User = ({ user }: { user: IUsers }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <>fallback</>;
  }
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
  const paths = users.slice(0, 4).map((user: { id: number }) => ({
    params: { userId: user.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params?.userId}`
  );

  const user = await res.json();
  return {
    props: { user },
    revalidate: 10,
  };
};
