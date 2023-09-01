import SingleNews from '@/components/HomeSection/SingleNews';
import getAllNews from '@/utils/getAllNews';
import React from 'react';

const newsPage = async ({searchParams}) => {
    const allNews = await getAllNews(searchParams.category_id)
    return (
        <div className='container mx-auto'>
            {
allNews.map(singleNews=> <SingleNews key={singleNews._id} singleNews={singleNews}></SingleNews>)
            }
        </div>
    );
};

export default newsPage;