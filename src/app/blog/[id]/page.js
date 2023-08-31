import loadSingleData from '@/utils/loadSingleData';
import React from 'react';

export const generateMetadata = async ({params}) =>{
  const {title} = await loadSingleData(params.id)
  return {
    title: title,
  }
}


const singleBlog = async ({params}) => {
  

  const {id,title,body} = await loadSingleData(params.id)
    return (
        <div

        className=" card w-full h-[400px] bg-base-100 shadow-xl hover:bg-green-300"
      >
        <div className="card-body">
          <h2 className="card-title">{id}. {title}</h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
     
          </div>
        </div>
      </div>
    );
};

export default singleBlog;