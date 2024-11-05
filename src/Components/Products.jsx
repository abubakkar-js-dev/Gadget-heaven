import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../Layout/MainLayout";
import Product from "./Product";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const allProducts = useContext(ProductsContext);
  const [products,setProducts] = useState([]);
  const [activeCategory,setActiveCategory] = useState('All Products');

  useEffect(()=>{
    if(allProducts.length > 0){
      setProducts(allProducts.slice(0,6));
    }
  },[allProducts])

  console.log(categories);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCategory = (categoryName) => {

    setActiveCategory(categoryName);

    if(categoryName === 'All Products'){
      setProducts(allProducts.slice(0,6));
    }else{
      const remainingProducts = allProducts.filter(product => product.category === categoryName);
      setProducts(remainingProducts);
    }
  }
  return (
    <section className="container mb-[100px]">
      <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-center mb-8 lg:mb-12">
        Explore Cutting -Edge Gadgets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        <div className="col-span-1  md:p-6 border rounded-2xl shadow-sm  flex flex-col gap-6 self-start">
          {/* <button className="h-14 bg-primary text-white pl-5 pr-14 rounded-full text-lg font-extrabold">
            All Products
          </button> */}
          {categories.map((category) => (
            <button onClick={() => handleCategory(category.category_name)} key={category.category_id} className={`h-14  ${activeCategory === category.category_name ? 'text-white bg-primary font-extrabold' : 'bg-gray-200'} text-gray-500 pl-5 pr-14 rounded-full text-lg`}>
              {category.category_name}
            </button>
          ))}
        </div>
        <div className="md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => <Product key={product.product_id} product={product} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;
