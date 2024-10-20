import React from "react";
import Categories from "./Categories";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Products = () => {
  return (
    <div className="bg-green-100">
      <div>
        <div className="font-black text-3xl text-center m-6 text-red-700 ">
          <h1> WELCOME TO MY DUKA E-COMMERCE SHOP</h1>
        </div>
        <div className="flex p-2 m-8">
          <div className="mr-16">
            <button>
              <Categories />
            </button>
          </div>
          {/* <div>
            <button>
              <span class="material-symbols-outlined"> <SearchBar /></span>
            </button>
          </div> */}
          <div className="ml-16">
            <button>MY DUKA</button>
          </div>
        </div>
        <div>
          <div classname="border-gray-300 w-full h-1/3 object-cover">
            <img src="src/assets/img/landing1.jpg" alt="red earbuds" />
          </div>
          <div className="text-center font-bold text-xl text-green-600 m-8">
            {" "}
            <marquee behavior="scroll" direction="">
              <h1>
                GIFT YOUR LOVED ONES THIS FESTIVE SEASON WITH OUR GIFT HAMPERS.
              </h1>
            </marquee>
          </div>
          <div className="flex">
            <div className="m-8 p-4 border-2 border-solid border-green-200 rounded-xl">
              <img
                src="src/assets/img/smartwatch2.jpg"
                alt="smartwatch"
                height="400px"
                width="350px"
              />
              <h1 className="m-4">LENOVO SMARTWATCH</h1>
              <p>Price: $250</p>
              <button className="bg-green-800 m-2 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200">
                Buy Now
              </button>
            </div>
            <div className="m-8 p-4 border-2 border-solid border-green-200 rounded-xl">
              <img
                src="src/assets/img/headphones.jpg"
                alt="smartwatch"
                height="400px"
                width="350px"
              />
              <h1 className="m-4">SONY HEADPHONES</h1>
              <p>Price: $100</p>
              <button className="bg-green-800 m-4 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200">
                Buy Now
              </button>
            </div>
            <div className="m-8 p-4 border-2 border-solid border-green-200 rounded-xl">
              <img
                src="src/assets/img/redsnickers2.jpg"
                alt="smartwatch"
                height="400px"
                width="350px"
              />
              <h1 className="m-4">CONVERSE SNEAKERS</h1>
              <p>Price: $300</p>
              <button className="bg-green-800 m-4 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200">
                Buy Now
              </button>
            </div>
            <div className="m-8 p-4 border-2 border-solid border-green-200 rounded-xl">
              <img
                src="src/assets/img/officialshoes2.jpg"
                alt="smartwatch"
                height="400px"
                width="350px"
              />
              <h1 className="m-4">ARMANI OFFICIAL BOOTS</h1>
              <p>Price: $150</p>
              <button className="bg-green-800 m-4 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200">
                Buy Now
              </button>
            </div>
            {/* <div className="m-8 p-4 border-2 border-solid border-green-200 rounded-xl">
                <img src="src/assets/img/varietysnickers.jpg" alt="smartwatch" height="800px" width="400px" />
                <h1 className="m-4">MEN'S ESSENTIALS</h1>
                <p>Price: $200</p>
                <button  className="bg-green-800 m-4 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200">Buy Now</button>
              </div> */}
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center text-2xl">
          <h1>PRODUCTS ON OFFER</h1>
        </div>
        <div className="flex">
          <div className="m-8 p-4 border-2 border-solid border-green-200 rounded-xl">
            <img
              src="src/assets/img/snickers3.jpg"
              alt="smartwatch"
              height="800px"
              width="400px"
            />
            <h1 className="m-4">TRAVELLING SNEAKERS</h1>
            <p>Price: $80</p>
            <button className="bg-green-800 m-4 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200">
              Buy Now
            </button>
          </div>
          <div className="m-8 p-4 border-2 border-solid border-green-200 rounded-xl">
            <img
              src="src/assets/img/pexels-pixabay-267320.jpg"
              alt="smartwatch"
              height="800px"
              width="400px"
            />
            <h1 className="m-4">DRIVING LOAFERS</h1>
            <p>Price: $250</p>
            <button className="bg-green-800 m-4 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200">
              Buy Now
            </button>
          </div>
          <div className="m-8 p-4 border-2 border-solid border-green-200 rounded-xl">
            <img
              src="src/assets/img/mensessentials.jpg"
              alt="smartwatch"
              height="800px"
              width="400px"
            />
            <h1 className="m-4">MEN'S ESSENTIALS</h1>
            <p>Price: $450</p>
            <button className="bg-green-800 m-4 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200">
              Buy Now
            </button>
          </div>
          <div className="m-8 p-4 border-2 border-solid border-green-200 rounded-xl">
            <img
              src="src/assets/img/mensshirts.jpg"
              alt="smartwatch"
              height="800px"
              width="400px"
            />
            <h1 className="m-4">OFFICIAL MEN'S SHIRTS</h1>
            <p>Price: $120</p>
            <button className="bg-green-800 m-4 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200">
              Buy Now
            </button>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="m-8 p-4 border-2 border-solid border-green-200 rounded-xl">
              <img
                src="src/assets/img/perfume1.jpg"
                alt="smartwatch"
                height="800px"
                width="400px"
              />
              <h1 className="m-4">SHIRLEY MAY PERFUME</h1>
              <p>Price: $100</p>
              <button className="bg-green-800 m-4 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200">
                Buy Now
              </button>
            </div>
            <div className="m-8 p-4 border-2 border-solid border-green-200 rounded-xl">
              <img
                src="src/assets/img/snickers2.jpg"
                alt="smartwatch"
                height="800px"
                width="400px"
              />
              <h1 className="m-4">HIKING SHOES</h1>
              <p>Price: $50</p>
              <button className="bg-green-800 m-4 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200">
                Buy Now
              </button>
            </div>
            <div className="m-8 p-4 border-2 border-solid border-green-200 rounded-xl">
              <img
                src="src/assets/img/redsnickers.jpg"
                alt="smartwatch"
                height="800px"
                width="400px"
              />
              <h1 className="m-4">RUNNING SHOES (UNISEX)</h1>
              <p>Price: $80</p>
              <button className="bg-green-800 m-4 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200">
                Buy Now
              </button>
            </div>
            <div className="m-8 p-4 border-2 border-solid border-green-200 rounded-xl">
              <img
                src="src/assets/img/perfume2.jpg"
                alt="smartwatch"
                height="800px"
                width="400px"
              />
              <h1 className="m-4">FLORA SCENT BY D&G</h1>
              <p>Price: $300</p>
              <button className="bg-green-800 m-4 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
