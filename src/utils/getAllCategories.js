// "use client"
const getAllCategories = async () => {

  const res = await fetch("https://next-jsproject-theta.vercel.app/data/category", {
    cache: "no-cache",
  });

  return res.json();
};

export default getAllCategories;