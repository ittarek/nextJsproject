// "use client"
const getAllCategories = async () => {
  const res = await fetch("https://next-jsproject-35jh.vercel.app/category", {
    cache: "force-cache",
  });

  return res.json();
};

export default getAllCategories;
