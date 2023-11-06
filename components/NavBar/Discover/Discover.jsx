import React from 'react'
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

const Discover = () => {
  //--------DISCOVER NAVIGATION MENU
  const discover = [ //its an array
  {
    name: "Home", //objects of different menu
    link: "home", //these links are in pages folder
  },
    {
      name: "Collection", //objects of different menu
      link: "collection", //these links are in pages folder
    },
    
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account",
    },
    {
      name: "Connect Wallet",
      link: "connectWallet",
    },
    {
      name: "Upload NFT",
      link: "uploadNFT",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
  return (
    <div>
        {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}> {/*every menu needs unique key */}
        <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover