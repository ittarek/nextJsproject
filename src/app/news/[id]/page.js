import SingleNews from '@/components/HomeSection/homePage/SingleNews';
import getAllNews from '@/utils/getAllNews';
import React from 'react';

const newsPage = async ({searchParams}) => {
    const allNews = await getAllNews(searchParams.category_id)
    return (
        <div className=''>
            {
allNews.map(singleNews=> <SingleNews key={singleNews.id} singleNews={singleNews}></SingleNews>)
            }
        </div>
    );
};

export default newsPage;