import SingleNews from '@/components/HomeSection/SingleNews';
import getAllNews from '@/utils/getAllNews';
import React from 'react';

const newsPage =  ({searchParams}) => {
    // const allNews = await getAllNews(searchParams.category_id)
    const allNews = "db.json"
    
    // [
    //     {
    //         "name": "tarek",
    //         "id" : 1
    //     },
    //     {
    //         "name": "tarek",
    //         "id" : 2
    //     },
    //     {
    //         "name": "tarek",
    //         "id" : 3
    //     }
    
    // ]
    return (
        <div className='container mx-auto'>
            {
allNews.map(singleNews=> <SingleNews key={singleNews._id} singleNews={singleNews}></SingleNews>)
            }
        </div>
    );
};

export default newsPage;