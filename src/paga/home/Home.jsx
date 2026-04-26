import React, { useEffect, useState } from 'react'
import HeroSlider from '../../component/HeroSlider';
import SlideProduct from '../../component/slideProduct/SlideProduct';

import './home.css'
import SlideProductLoading from '../../component/slideProduct/SlideProductLoading';
import PageTransition from '../../component/PageTransition';


const categories = [

  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sports-accessories",
  "sunglasses",
  "mens-watches",
  "womens-watches",
  "mens-shoes",

]


function Home() {


  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await res.json();
            return { [category]: data.products }

          })
        )

        const productsData = Object.assign({}, ...results);
        setProducts(productsData)

      } catch (error) {
        console.error("Error Fetching", error)
      } finally {
        setLoading(false)
      }

    }


    fetchProducts()
  }, [])

  console.log(products["smartphones"]);
  console.log(products["mobile-accessories"]);
  console.log(products["laptops"]);



  return (
    <PageTransition>

      <div>

        <HeroSlider />


        {loading ? (
          categories.map((category) => (
            <SlideProductLoading key={category} />

          ))
        ) : (



          categories.map((category) => (

            <SlideProduct key={category} data={products[category]} title={category.replace("-", " ")} />
          ))


        )}
      </div>
    </PageTransition>
  )
}

export default Home