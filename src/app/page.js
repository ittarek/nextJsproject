

import Categories from "@/components/HomeSection/Categories";

import Slider from "./gallary/Slider";

const HomePage = () => {
  return (
    <div className="mx-6">
      <div className="bannarImage flex flex-col justify-center items-center">
        <h1 className="text-4xl text-black font-bold my-5 ">
          Next.js Framwork is learnning now
        </h1>
        <p className="w-3/4 text-white">
          Next.js is a popular open-source React framework that is used to build
          modern web applications. It was developed by Vercel (formerly known as
          Zeit) and has gained significant traction in the web development
          community due to its efficiency, ease of use, and robust features.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-purple-500 text-center mx-auto my-6">
          Gallary
        </h2>
        <Slider />
      </div>
      <div>
        <Categories />
      </div>
    </div>
  );
};

export default HomePage;
