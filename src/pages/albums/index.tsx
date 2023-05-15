import IAlbum from "@/interfaces/IAlbum";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const Albums = ({ albums }: { albums: IAlbum[] }) => {
  const router = useRouter();
  return (
    <>
      <button
        className="mt-5 bg-red-700 text-white ml-5 rounded-md p-2 text-3xl font-bold"
        onClick={() => router.push("/")}
      >
        back
      </button>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
              <td>{album.title}</td>
              <td>
                <button
                  className="mt-5 bg-indigo-700 text-white ml-5 rounded-md p-2"
                  onClick={() => router.push(`/albums/${album.id}`)}
                >
                  More ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Albums;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await res.json();
  return {
    props: { albums },
  };
};
