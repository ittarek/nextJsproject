import Link from "next/link";
import Marquee from "react-fast-marquee";
const SingleCategory =  ({ category }) => {
  const { id, name } = category;
  return (
    <div className="container">
          <Marquee>
          <Link
        className="my-2 text-purple-300 font-bold "
        href={`/news/${id}`}
      >
        <button className="btn btn-primary mx-5">        {name}</button>

      </Link>

  </Marquee>
   
    </div>
  );
};

export default SingleCategory;
