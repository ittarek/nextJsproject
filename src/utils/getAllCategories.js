// "use client"


const getAllCategories =  () => {

fetch("category.json") 
  .then(res=>res.json())
  .then(categories=> {
    
return categories
 })


};

export default getAllCategories;