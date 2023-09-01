const getAllNews = async (category_id) => {
  // let url = "http://localhost:5000/news";
let url = [
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

  if (category_id) {
    url += "?category_id=" + category_id;
  }
  const res = await fetch(url, {
    cache: "force-cache",
  });

  return res.json();
};

export default getAllNews;
