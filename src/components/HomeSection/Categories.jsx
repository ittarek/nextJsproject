import getAllCategories from "@/utils/getAllCategories";

import SingleCategory from "./SingleCategory";

const Categories = () => {
  // const {categories} =  getAllCategories();
  const categories = [
    {
      id: "0",
      name: "All News",
    },
    {
      id: "1",
      name: "Breaking News",
    },
    {
      id: "2",
      name: "Regular News",
    },
    {
      id: "3",
      name: "International News",
    },
    {
      id: "4",
      name: "Sports",
    },
    {
      id: "5",
      name: "Entertainment",
    },
    {
      id: "6",
      name: "Culture",
    },
    {
      id: "7",
      name: "Arts",
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-4xl my-11 text-center  text-purple-400">
        Our News Link
      </h2>

      <div>
        <div className="lg:flex  my-10 gap-10">
          <div
            className="about__content my-auto"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <h2 className="uppercase text-4xl my-5 font-bold text-purple-400 text-left">
              Any News Here
            </h2>
            <p className="text-3xl ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi cupiditate animi deserunt libero nesciunt corporis
              explicabo nobis ex quo molestiae!
            </p>
          </div>
          <div className="col">
            <div
              className="about__img"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1661963839785-fd0fef25939f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
                alt="image"
                className="w-100 mx-2 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mb-10">
        {categories.map(category => (
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
