import type {NextPage} from "next";
import Image from "next/image";

import logo from "../public/logo.svg";

const Home: NextPage = () => {
  return (
    <div className="h-full flex bg-black">
      <header className="m-auto text-white text-center">
        <Image alt="Basement" src={logo} />
        <h4>Lets get this party started</h4>
      </header>
    </div>
  );
};

export default Home;
