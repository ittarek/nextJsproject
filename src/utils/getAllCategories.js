
// "use client"
const getAllCategories = async () => {
    const res = await fetch('http://localhost:5000/category'

 )

    return res.json()
 
};

export default getAllCategories;