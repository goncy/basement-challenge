import type {NextPage} from "next";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import TextBanner from "../components/TextBanner/TextBanner";

import header from '../public/header.svg'
import footer from '../public/footer.svg'

const Home: NextPage = () => {
  return (
    <div className="w-full flex bg-black flex-col">
      <Navbar/>
      <header className="w-full px-8">
        <Image alt="Header" src={header} className='h-7' />
      </header>
      <TextBanner/>
      <footer className="w-full px-8">
        <Image alt='Footer' src={footer} />
      </footer>
    </div>
  );
};

export default Home;
