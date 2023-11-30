import useFetch from "../../../hooks/usefetch";
import Navbar from "../../navbar/Navbar";
import Short from "./short";

const ShortFeed = () => {
  const { data, loading, reFetch } = useFetch(
    `https://culture1.onrender.com/api/shorts`
  );
  console.log("SHOTRS", data);
  return (
    <div className="ShortFeed">
      <Navbar />
      {data.map((item) => (
        <Short item={item} key={item._id} />
      ))}
    </div>
  );
};

export default ShortFeed;
