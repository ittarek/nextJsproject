import getAllCategories from "@/utils/getAllCategories";

import SingleCategory from "./SingleCategory";

const Categories = async () => {
  const categories = await getAllCategories();

  return (
    <div>
      <h2 className="font-bold text-4xl my-11 text-center  text-purple-400">
        Our News Link
      </h2>
      <div className="flex mb-10">
        {categories.map((category) => (
          <SingleCategory
            key={category.id}
            category={category}
          ></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Categories;
