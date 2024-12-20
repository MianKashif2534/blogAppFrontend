import React, { useState } from "react";
import images from "../../constants/images";
import SearchBar from "../../components/SearchBar";
import { useNavigate } from "react-router-dom";


function Hero() {
  const navigate = useNavigate()
  // const [keyword, setKeyword] = useState("");

  // const handleSearchKeyword = ({ searchKeyword }) => {
  //   setKeyword(searchKeyword);
  //   console.log("Search Keyword:", searchKeyword);
  //   // You can add more functionality here, such as making an API call
  // };

  console.log(process.env.REACT_APP_API_BASE_URL)
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row lg:bg-white">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Read the most interesting articles
        </h1>

        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div onClick={()=>navigate('/blog')}>
          <SearchBar className={"lg:mt-6 mt-10"} />
        </div>
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-2 lg:mt-6 xl:mt-10">
          <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Interfaces
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2">
        <img
          className="w-full"
          src={images.HeroImage}
          alt="users are reading articles"
        />
      </div>
    </section>
  );
}

export default Hero;
