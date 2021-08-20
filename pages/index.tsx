import { useEffect, useState } from "react";
import type {NextPage} from "next";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import TextBanner from "../components/TextBanner/TextBanner";
import ProductList from "../components/ProductList/ProductList";

import header from '../public/header.svg'
import footer from '../public/footer.svg'

const Home: NextPage = () => {
  const [productList, setProductList] = useState([]);

  useEffect( () =>{
    fetch('/api/products')
      .then(res => res.json())
      .then(data=>setProductList(data.products))
      .catch(err=>console.log(err));
  },[])


  return (
    <div className="w-full flex bg-black flex-col">
      <Navbar/>
      <header className="w-full px-8">
        <Image alt="Header" src={header} className='h-7' />
      </header>
      <TextBanner/>
      <ProductList 
        productList={productList}
      />
      <footer className="w-full px-8">
        <Image alt='Footer' src={footer} />
      </footer>
    </div>
  );
};

export default Home;
