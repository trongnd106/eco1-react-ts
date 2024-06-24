import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import React, { useRef, useState } from "react";
import _ from "lodash";
import productService from "../services/product";
import { Product } from "../types/product";
const Header = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const fetchDataDebounce = _.debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (value) {
        productService.getSearch(value).then((reponse) => {
          setProducts(reponse.data.docs);
        });
      } else {
        setProducts(null);
      }
    },
    500
  );
  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
      setProducts(null);
    }
  };
  return (
    <header>
      <div className="mx-auto container flex items-center justify-between py-3">
        <div className="flex items-center justify-between text-sm">
          <p>Phone Number: 956 742 455 678</p>
          <div className="w-[1px] h-[30px] bg-[#676767] mx-4" />
          <p>Email: info@ddsgnr.com</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-3 mr-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.5 6H13.5C12.9477 6 12.5 6.44772 12.5 7V10H16.5C16.6137 9.99748 16.7216 10.0504 16.7892 10.1419C16.8568 10.2334 16.8758 10.352 16.84 10.46L16.1 12.66C16.0318 12.8619 15.8431 12.9984 15.63 13H12.5V20.5C12.5 20.7761 12.2761 21 12 21H9.5C9.22386 21 9 20.7761 9 20.5V13H7.5C7.22386 13 7 12.7761 7 12.5V10.5C7 10.2239 7.22386 10 7.5 10H9V7C9 4.79086 10.7909 3 13 3H16.5C16.7761 3 17 3.22386 17 3.5V5.5C17 5.77614 16.7761 6 16.5 6Z"
                fill="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                fill="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20.9727 6.7174C20.5083 7.33692 19.9469 7.87733 19.3102 8.31776C19.3102 8.47959 19.3102 8.64142 19.3102 8.81225C19.3153 11.7511 18.1414 14.5691 16.0517 16.6345C13.9619 18.6999 11.1311 19.8399 8.19393 19.7989C6.49587 19.8046 4.81955 19.4169 3.2963 18.6661C3.21416 18.6302 3.16119 18.549 3.1615 18.4593V18.3604C3.1615 18.2313 3.26611 18.1267 3.39515 18.1267C5.0643 18.0716 6.6739 17.4929 7.99622 16.4724C6.48541 16.4419 5.12607 15.5469 4.50048 14.1707C4.46889 14.0956 4.47872 14.0093 4.52645 13.9432C4.57417 13.8771 4.65288 13.8407 4.73413 13.8471C5.1933 13.8932 5.65706 13.8505 6.10008 13.7212C4.43227 13.375 3.17909 11.9904 2.99974 10.2957C2.99337 10.2144 3.0298 10.1357 3.09588 10.0879C3.16195 10.0402 3.24812 10.0303 3.32326 10.062C3.77082 10.2595 4.25397 10.3635 4.74312 10.3676C3.28172 9.40846 2.65049 7.58405 3.20643 5.92622C3.26382 5.76513 3.40169 5.64612 3.56938 5.61294C3.73706 5.57975 3.90984 5.63728 4.0242 5.76439C5.99627 7.86325 8.70592 9.11396 11.5818 9.25279C11.5082 8.95885 11.472 8.65676 11.474 8.35372C11.5009 6.76472 12.4841 5.34921 13.9633 4.76987C15.4424 4.19054 17.1248 4.56203 18.2229 5.71044C18.9713 5.56785 19.6949 5.31645 20.3706 4.96421C20.4201 4.93331 20.4829 4.93331 20.5324 4.96421C20.5633 5.01373 20.5633 5.07652 20.5324 5.12604C20.2051 5.87552 19.6522 6.50412 18.9508 6.92419C19.565 6.85296 20.1684 6.70807 20.7481 6.49264C20.7969 6.45942 20.861 6.45942 20.9098 6.49264C20.9507 6.51134 20.9813 6.54711 20.9934 6.59042C21.0055 6.63373 20.9979 6.68018 20.9727 6.7174Z"
                fill="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9 17.0625C4.5525 17.0625 0.9375 13.4475 0.9375 9C0.9375 4.5525 4.5525 0.9375 9 0.9375C13.4475 0.9375 17.0625 4.5525 17.0625 9C17.0625 13.4475 13.4475 17.0625 9 17.0625ZM9 2.0625C5.175 2.0625 2.0625 5.175 2.0625 9C2.0625 12.825 5.175 15.9375 9 15.9375C12.825 15.9375 15.9375 12.825 15.9375 9C15.9375 5.175 12.825 2.0625 9 2.0625Z"
                  fill="#292D32"
                />
                <path
                  d="M6.75018 16.3125H6.00018C5.69268 16.3125 5.43768 16.0575 5.43768 15.75C5.43768 15.4425 5.67768 15.195 5.98518 15.1875C4.80768 11.1675 4.80768 6.8325 5.98518 2.8125C5.67768 2.805 5.43768 2.5575 5.43768 2.25C5.43768 1.9425 5.69268 1.6875 6.00018 1.6875H6.75018C6.93018 1.6875 7.10268 1.7775 7.20768 1.92C7.31268 2.07 7.34268 2.2575 7.28268 2.43C5.87268 6.6675 5.87268 11.3325 7.28268 15.5775C7.34268 15.75 7.31268 15.9375 7.20768 16.0875C7.10268 16.2225 6.93018 16.3125 6.75018 16.3125Z"
                  fill="#292D32"
                />
                <path
                  d="M11.2498 16.3125C11.1898 16.3125 11.1298 16.305 11.0698 16.2825C10.7773 16.185 10.6123 15.8625 10.7173 15.57C12.1273 11.3325 12.1273 6.66751 10.7173 2.42251C10.6198 2.13001 10.7773 1.80751 11.0698 1.71001C11.3698 1.61251 11.6848 1.77001 11.7823 2.06251C13.2748 6.53251 13.2748 11.4525 11.7823 15.915C11.7073 16.1625 11.4823 16.3125 11.2498 16.3125Z"
                  fill="#292D32"
                />
                <path
                  d="M9 12.9001C6.9075 12.9001 4.8225 12.6076 2.8125 12.0151C2.805 12.3151 2.5575 12.5626 2.25 12.5626C1.9425 12.5626 1.6875 12.3076 1.6875 12.0001V11.2501C1.6875 11.0701 1.7775 10.8976 1.92 10.7926C2.07 10.6876 2.2575 10.6576 2.43 10.7176C6.6675 12.1276 11.34 12.1276 15.5775 10.7176C15.75 10.6576 15.9375 10.6876 16.0875 10.7926C16.2375 10.8976 16.32 11.0701 16.32 11.2501V12.0001C16.32 12.3076 16.065 12.5626 15.7575 12.5626C15.45 12.5626 15.2025 12.3226 15.195 12.0151C13.1775 12.6076 11.0925 12.9001 9 12.9001Z"
                  fill="#292D32"
                />
                <path
                  d="M15.7498 7.31252C15.6898 7.31252 15.6298 7.30502 15.5698 7.28252C11.3323 5.87252 6.65984 5.87252 2.42234 7.28252C2.12234 7.38002 1.80734 7.22252 1.70984 6.93002C1.61984 6.63002 1.77734 6.31502 2.06984 6.21752C6.53984 4.72502 11.4598 4.72502 15.9223 6.21752C16.2148 6.31502 16.3798 6.63752 16.2748 6.93002C16.2073 7.16252 15.9823 7.31252 15.7498 7.31252Z"
                  fill="#292D32"
                />
              </svg>
              <span>English</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3.5 5.25L7 8.75L10.5 5.25"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2.5">
              <Link to="/sign-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9 9.5625C6.6225 9.5625 4.6875 7.6275 4.6875 5.25C4.6875 2.8725 6.6225 0.9375 9 0.9375C11.3775 0.9375 13.3125 2.8725 13.3125 5.25C13.3125 7.6275 11.3775 9.5625 9 9.5625ZM9 2.0625C7.245 2.0625 5.8125 3.495 5.8125 5.25C5.8125 7.005 7.245 8.4375 9 8.4375C10.755 8.4375 12.1875 7.005 12.1875 5.25C12.1875 3.495 10.755 2.0625 9 2.0625Z"
                    fill="black"
                  />
                  <path
                    d="M15.4426 17.0625C15.1351 17.0625 14.8801 16.8075 14.8801 16.5C14.8801 13.9125 12.2401 11.8125 9.00011 11.8125C5.76011 11.8125 3.12012 13.9125 3.12012 16.5C3.12012 16.8075 2.86512 17.0625 2.55762 17.0625C2.25012 17.0625 1.99512 16.8075 1.99512 16.5C1.99512 13.2975 5.13761 10.6875 9.00011 10.6875C12.8626 10.6875 16.0051 13.2975 16.0051 16.5C16.0051 16.8075 15.7501 17.0625 15.4426 17.0625Z"
                    fill="black"
                  />
                </svg>
                <span>Sign in</span>
              </Link>
            </div>
            <div className="flex items-center gap-2.5">
              <Link to="/sign-up">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9 9.5625C6.6225 9.5625 4.6875 7.6275 4.6875 5.25C4.6875 2.8725 6.6225 0.9375 9 0.9375C11.3775 0.9375 13.3125 2.8725 13.3125 5.25C13.3125 7.6275 11.3775 9.5625 9 9.5625ZM9 2.0625C7.245 2.0625 5.8125 3.495 5.8125 5.25C5.8125 7.005 7.245 8.4375 9 8.4375C10.755 8.4375 12.1875 7.005 12.1875 5.25C12.1875 3.495 10.755 2.0625 9 2.0625Z"
                    fill="black"
                  />
                  <path
                    d="M15.4426 17.0625C15.1351 17.0625 14.8801 16.8075 14.8801 16.5C14.8801 13.9125 12.2401 11.8125 9.00011 11.8125C5.76011 11.8125 3.12012 13.9125 3.12012 16.5C3.12012 16.8075 2.86512 17.0625 2.55762 17.0625C2.25012 17.0625 1.99512 16.8075 1.99512 16.5C1.99512 13.2975 5.13761 10.6875 9.00011 10.6875C12.8626 10.6875 16.0051 13.2975 16.0051 16.5C16.0051 16.8075 15.7501 17.0625 15.4426 17.0625Z"
                    fill="black"
                  />
                </svg>
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y border-[#676767]">
        <div className="mx-auto container flex items-center justify-between py-3">
          <div>
            <img src={logo} className="w-[130px]" />
          </div>
          <div className="flex items-center gap-6">
            <div>
              <ul className="flex items-center gap-6">
                <li>
                  <Link to="/" className="p-2.5 block border-b border-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="p-2.5 block">
                    Products
                  </Link>
                </li>
                <li className="relative group">
                  Category
                  <div className="absolute hidden group-hover:block w-[150px] items-center gap-3 bg-slate-200">
                    <ul>
                      <li className="hover:bg-gray-300">
                        <Link
                          className="px-1"
                          to={"/products?category=skincare"}
                        >
                          Skincare
                        </Link>
                      </li>
                      <li className="hover:bg-gray-300">
                        <Link
                          className="px-1"
                          to={"/products?category=groceries"}
                        >
                          Groceries
                        </Link>
                      </li>
                      <li className="hover:bg-gray-300">
                        <Link
                          className="px-1"
                          to={"/products?category=home-decoration"}
                        >
                          Home Decoration
                        </Link>
                      </li>
                      <li className="hover:bg-gray-300">
                        <Link
                          className="px-1"
                          to={"/products?category=furniture"}
                        >
                          Furniture
                        </Link>
                      </li>
                      <li className="hover:bg-gray-300">
                        <Link
                          className="px-1"
                          to={"/products?category=mens-shirts"}
                        >
                          Mens Shirts
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/admin" className="p-2.5 block">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
            <div className="relative">
              <form
                ref={formRef}
                className="border border-black rounded py-2 px-5 w-52 flex items-center gap-3"
              >
                <input
                  type="text"
                  onChange={fetchDataDebounce}
                  className="w-4/5 h-6 outline-none placeholder:text-black"
                  placeholder="Search"
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                      fill="#676767"
                    />
                    <path
                      d="M21.9999 22.7499C21.8099 22.7499 21.6199 22.6799 21.4699 22.5299L19.4699 20.5299C19.1799 20.2399 19.1799 19.7599 19.4699 19.4699C19.7599 19.1799 20.2399 19.1799 20.5299 19.4699L22.5299 21.4699C22.8199 21.7599 22.8199 22.2399 22.5299 22.5299C22.3799 22.6799 22.1899 22.7499 21.9999 22.7499Z"
                      fill="#676767"
                    />
                  </svg>
                </button>
              </form>
              {products && (
                <div className="max-h-[200px] w-[300px] bg-slate-200 overflow-y-scroll absolute top-full left-0 p-2">
                  {products?.length == 0 ? (
                    <div className="h-10">
                      <p className="text-red-400 font-bold">
                        Không tìm thấy sản phẩm phù hợp
                      </p>
                    </div>
                  ) : (
                    products?.map((product) => (
                      <Link
                        to={`/products/${product._id}`}
                        key={product._id}
                        onClick={handleReset}
                      >
                        <div className="flex items-center gap-3 hover:bg-gray-400">
                          <img className="h-10 w-10" src={product.thumbnail} />
                          <div>
                            <h2>{product.title}</h2>
                            <p>$ {product.price}</p>
                          </div>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={24}
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M12.5 21.6501C12.19 21.6501 11.89 21.6101 11.64 21.5201C7.82 20.2101 1.75 15.5601 1.75 8.6901C1.75 5.1901 4.58 2.3501 8.06 2.3501C9.75 2.3501 11.33 3.0101 12.5 4.1901C13.67 3.0101 15.25 2.3501 16.94 2.3501C20.42 2.3501 23.25 5.2001 23.25 8.6901C23.25 15.5701 17.18 20.2101 13.36 21.5201C13.11 21.6101 12.81 21.6501 12.5 21.6501ZM8.06 3.8501C5.41 3.8501 3.25 6.0201 3.25 8.6901C3.25 15.5201 9.82 19.3201 12.13 20.1101C12.31 20.1701 12.7 20.1701 12.88 20.1101C15.18 19.3201 21.76 15.5301 21.76 8.6901C21.76 6.0201 19.6 3.8501 16.95 3.8501C15.43 3.8501 14.02 4.5601 13.11 5.7901C12.83 6.1701 12.19 6.1701 11.91 5.7901C10.98 4.5501 9.58 3.8501 8.06 3.8501Z"
                    fill="#292D32"
                  />
                </svg>
                <span>Wishlist</span>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z"
                    fill="#292D32"
                  />
                  <path
                    d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z"
                    fill="#292D32"
                  />
                  <path
                    d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z"
                    fill="#292D32"
                  />
                  <path
                    d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z"
                    fill="#292D32"
                  />
                </svg>
                <span>Cart</span>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={24}
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M12.5199 20.5299C10.1899 20.5299 7.85987 20.1599 5.64987 19.4199C4.80987 19.1299 4.16987 18.5399 3.88987 17.7699C3.59987 16.9999 3.69987 16.1499 4.15987 15.3899L5.30987 13.4799C5.54987 13.0799 5.76987 12.2799 5.76987 11.8099V8.91992C5.76987 5.19992 8.79987 2.16992 12.5199 2.16992C16.2399 2.16992 19.2699 5.19992 19.2699 8.91992V11.8099C19.2699 12.2699 19.4899 13.0799 19.7299 13.4899L20.8699 15.3899C21.2999 16.1099 21.3799 16.9799 21.0899 17.7699C20.7999 18.5599 20.1699 19.1599 19.3799 19.4199C17.1799 20.1599 14.8499 20.5299 12.5199 20.5299ZM12.5199 3.66992C9.62987 3.66992 7.26987 6.01992 7.26987 8.91992V11.8099C7.26987 12.5399 6.96987 13.6199 6.59987 14.2499L5.44987 16.1599C5.22987 16.5299 5.16987 16.9199 5.29987 17.2499C5.41987 17.5899 5.71987 17.8499 6.12987 17.9899C10.3099 19.3899 14.7399 19.3899 18.9199 17.9899C19.2799 17.8699 19.5599 17.5999 19.6899 17.2399C19.8199 16.8799 19.7899 16.4899 19.5899 16.1599L18.4399 14.2499C18.0599 13.5999 17.7699 12.5299 17.7699 11.7999V8.91992C17.7699 6.01992 15.4199 3.66992 12.5199 3.66992Z"
                    fill="#292D32"
                  />
                  <path
                    d="M14.3801 3.94018C14.3101 3.94018 14.2401 3.93018 14.1701 3.91018C13.8801 3.83018 13.6001 3.77018 13.3301 3.73018C12.4801 3.62018 11.6601 3.68018 10.8901 3.91018C10.6101 4.00018 10.3101 3.91018 10.1201 3.70018C9.93011 3.49018 9.87011 3.19018 9.98011 2.92018C10.3901 1.87018 11.3901 1.18018 12.5301 1.18018C13.6701 1.18018 14.6701 1.86018 15.0801 2.92018C15.1801 3.19018 15.1301 3.49018 14.9401 3.70018C14.7901 3.86018 14.5801 3.94018 14.3801 3.94018Z"
                    fill="#292D32"
                  />
                  <path
                    d="M12.52 22.8101C11.53 22.8101 10.57 22.4101 9.87002 21.7101C9.17002 21.0101 8.77002 20.0501 8.77002 19.0601H10.27C10.27 19.6501 10.51 20.2301 10.93 20.6501C11.35 21.0701 11.93 21.3101 12.52 21.3101C13.76 21.3101 14.77 20.3001 14.77 19.0601H16.27C16.27 21.1301 14.59 22.8101 12.52 22.8101Z"
                    fill="#292D32"
                  />
                </svg>
                <span>Notification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;