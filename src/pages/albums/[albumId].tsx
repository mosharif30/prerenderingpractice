import { NOTFOUND } from "dns";
import router from "next/router";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import IAlbum from "@/interfaces/IAlbum";

const Album = ({ album }: { album: IAlbum }) => {
  return (
    <>
      <button
        className="mt-5 bg-red-700 text-white ml-5 rounded-md p-2 text-3xl font-bold"
        onClick={() => router.push("/albums")}
      >
        back
      </button>
      <table className="table-auto mt-10">
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr key={album.id}>
            <td>{album.id}</td>
            <td>{album.userId}</td>
            <td>{album.title}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Album;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const params = context.params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params?.albumId}`
  );
  const album = await res.json();
  if (!album.id) {
    return {
      redirect: { permanent: false, destination: "/albums" },
    };
  }
  return {
    props: { album: album },
  };
};
