/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import IPhoto from "@/interfaces/IPhoto";
const Photos = ({ photos }: IPhoto) => {
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
            <th>Id</th>
            <th>AlbumId</th>
            <th>Title</th>
            <th>photo</th>
          </tr>
        </thead>
        <tbody>
          {photos.slice(1, 100).map((photo) => (
            <tr key={photo.id}>
              <td>{photo.id}</td>
              <td>{photo.albumId}</td>
              <td>{photo.title}</td>
              <td>
                <img src={photo.thumbnailUrl} alt="photo" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Photos;
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await res.json();
  return {
    props: { photos },
  };
};
