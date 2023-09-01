const getAllNews = async (category_id) => {
  let url = "https://next-jsproject-theta.vercel.app/data/news";

  if (category_id) {
    url += "?category_id=" + category_id;
  }
  const res = await fetch(url, {
    cache: "force-cache",
  });

  return res.json();
};

export default getAllNews;