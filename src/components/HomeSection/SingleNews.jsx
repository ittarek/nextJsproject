/* eslint-disable @next/next/no-img-element */
// "use client"
import Image from "next/image";

const SingleNews = ({ singleNews }) => {
  const { title, image_url, thumbnail_ur, details } = singleNews;

  return (

      <div className="card mx-auto my-5 w-full glass">

       
        <figure>
       
   
        <img
            src={image_url}
            alt="cart"
            className="max-h-[450px] mx-auto object-cover rounded-md"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>

  );
};

export default SingleNews;
