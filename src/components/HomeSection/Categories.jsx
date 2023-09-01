
import getAllCategories from '@/utils/getAllCategories';

import SingleCategory from './SingleCategory';

const Categories =  () => {
    // const categories = await getAllCategories()
    const categories = [
        {
          "name":"tariqul islam",
          "id": 1,
        },
        {
          "name":"tariqul islam",
          "id": 1,
        },
        {
          "name":"tariqul islam",
          "id": 1,
        }
      ]
    return (
        <div>
            <h2 className='font-bold text-4xl my-11 text-center  text-purple-400'>Our News Link</h2>
           <div className="flex mb-10">
           {
                categories.map(category => <SingleCategory key={category.id} category={category}></SingleCategory>)
            }
           </div>
        </div>
    );
};

export default Categories;