import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blog | NextJs",
  description: "Blog page ",
};
const blog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await res.json();

  return (
    <div className="grid lg:grid-cols-3 gap-6 justify-between items-center">
      {users.map(({ id, body, title }) => {
        return (
          <div
            key={id}
            className=" card w-full h-[400px] bg-base-100 shadow-xl hover:bg-green-300"
          >
            <div className="card-body">
              <h2 className="card-title">{id}. {title}</h2>
              <p>{body}</p>
              <div className="card-actions justify-end">
                <Link className="text-purple-400" href={`/blog/${id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default blog;
