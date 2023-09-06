const getAllNews = async (category_id) => {
  // let url = "http://localhost:5000/db.json";
  // let url = "https://vercel.com/ittarek/next-jsproject/CLabEMDvkzrBz8tn9LGJ3QRrxf22/source?f=src%2Fpublic%2Fdb.json";

  if (category_id) {
    url += "?category_id=" + category_id;
  }
  const res = await fetch(url, {
    cache: "force-cache",
  });

  return res.json();
};

export default getAllNews;