// "use client"
const getAllCategories = async () => {
  // https://next-jsproject-35jh-git-main-ittarek.vercel.app/
  const res = await fetch("https://next-jsproject-35jh-git-main-ittarek.vercel.app/category", {
    cache: "no-cache",
  });

  return res.json();
};

export default getAllCategories;