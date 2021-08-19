import type {NextPage} from "next";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";

import header from '../public/header.svg'
import footer from '../public/footer.svg'

const Home: NextPage = () => {
  return (
    <div className="w-full px-8 flex bg-black flex-col">
      <Navbar/>
      <header className="w-full">
        <Image alt="Header" src={header} className='h-7' />
      </header>
      <footer className="w-full">
        <Image alt='Footer' src={footer} />
      </footer>
    </div>
  );
};

export default Home;
