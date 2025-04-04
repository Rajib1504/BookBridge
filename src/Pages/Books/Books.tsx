import { useState } from "react";
import useAxiosPublic from "../../Hooks/axiosPublic";
import { Link } from "react-router-dom";
import FilterArea from "../../Components/FilterArea/FilterArea";
import { FaFilter } from "react-icons/fa";
import Spinner from "../../Components/spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import BestSellerCard from "../../Components/BestSellerCard";
import { FaRegRectangleXmark } from "react-icons/fa6";
import { GoSortAsc } from "react-icons/go";

const Books = () => {
  type Books = {
    availability: string;
    title: string;
    author: string;
    category: string;
    description: string;
    condition: string;
    coverImage: string;
    rentalPrice?: number;
    exchangePreferences: string;
    location: string;
    ownerName: string;
    contactEmail: string;
    contactPhone: string;
    bookId: number;
  };
  const axiosPublic = useAxiosPublic();
  const [isFilterView, setIsFilterView] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSortValue, setSelectedSortValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  // console.log(selectedSortValue);
  // console.log(searchValue);

  // sorting handler
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSortValue(e.target.value);
  };

  // search handler
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // filters default value
  const [filters, setFilters] = useState({
    availability: {
      Exchange: true,
      Rent: false,
    },
    category: {
      Fantasy: false,
      Horror: false,
      ScienceFiction: false,
      HistoricalFiction: false,
      Mystery: false,
      Thriller: false,
      Adventure: false,
      GraphicNovels: false,
    },
    condition: {
      New: false,
      Good: false,
      Fair: false,
      Old: false,
    },
  });

  const transformToQuery = (filters: any) => {
    const params = new URLSearchParams();

    // add sort by to the params
    if (selectedSortValue) {
      params.append("sortBy", selectedSortValue);
    }

    // add search value/keyword to the params
    if (searchValue) {
      params.append("search", searchValue);
    }

    // add availability to the params
    const availability = Object.keys(filters.availability)
      .filter((key) => filters.availability[key])
      .join(",");
    if (availability) {
      params.append("availability", availability);
    }

    // add category to the params
    const category = Object.keys(filters.category)
      .filter((key) => filters.category[key])
      .join(",");
    if (category) {
      params.append("category", category);
    }

    // add condition to the params
    const condition = Object.keys(filters.condition)
      .filter((key) => filters.condition[key])
      .join(",");

    if (condition) {
      params.append("condition", condition);
    }

    // add current page to the params
    if (currentPage !== undefined) {
      params.append("currentPage", currentPage.toString());
    }

    // add items Per page to the params
    if (itemsPerPage !== undefined) {
      params.append("itemsPerPage", itemsPerPage.toString());
    }

    return params.toString();
  };

  // transform filters into query string
  const queryString = transformToQuery(filters);
  console.log(filters);
  console.log(queryString);

  const { data: allBooks = [], isLoading: allBooksLoading } = useQuery({
    queryKey: ["allBooks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/books");
      return res.data;
    },
  });

  // console.log(allBooks);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 my-20 font-Inter">
      {/* breadcrumbs  */}
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/books"}>Books</Link>
          </li>
        </ul>
      </div>
      {/* section title  */}
      <div className="flex items-center justify-center">
        <h3 className="text-5xl font-Gilda">All Books</h3>
      </div>

      {isFilterView && (
        <div className="flex absolute z-40 lg:hidden">
          <FilterArea />
          <span
            onClick={() => setIsFilterView(false)}
            className="right-4 absolute top-2 text-2xl text-accentColor cursor-pointer"
          >
            <FaRegRectangleXmark />
          </span>
        </div>
      )}

      {isFilterView && (
        <div
          onClick={() => setIsFilterView(false)}
          className="fixed inset-0 bg-primaryColor opacity-50 lg:hidden z-30"
        ></div>
      )}

      {/* content container  */}
      <div className="grid grid-cols-12 max-w-screen-2xl mx-auto px-4 mt-12 gap-6">
        {/* filter section */}
        <div className="lg:col-span-3 hidden lg:inline">
          <FilterArea />
        </div>

        {/* content section  */}
        <div className="col-span-12 lg:col-span-9">
          {/* sorting area */}
          <div className="flex justify-between lg:justify-end gap-6 items-center p-4 rounded-xl">
            {/* filter section for small and medium devices  */}
            {/* filter icon for small and medium devices  */}
            <div className="inline lg:hidden">
              <span
                onClick={() => setIsFilterView(true)}
                className="text-primaryColor text-xl"
              >
                <FaFilter />
              </span>
            </div>
            {/* serach box  */}
            <div className="border border-gray-300">
              <label className="input">
                <svg
                  className="h-[1.5rem] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  onChange={handleSearch}
                  className="input input-sm focus:outline-none focus:ring-0"
                  placeholder="Search"
                />
              </label>
            </div>

            {/* sort item  */}
            <div className="flex items-center border border-gray-300 rounded p-1">
              {/* <p className="text-sm lg:text-md">Sort by:</p> */}
              <GoSortAsc className="text-2xl" />

              <select
                onChange={handleSort}
                defaultValue="Default"
                className="select select-sm border-0 focus:ring-0 focus:outline-none"
              >
                <option value="Default">Default</option>
                <option value="Price (Low → High)">Price (Low → High)</option>
                <option value="Price (High → Low)">Price (High → Low)</option>
              </select>
            </div>
          </div>
          {allBooksLoading && <Spinner />}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {allBooks.map((book: Books) => (
              <BestSellerCard key={book?.bookId} book={book}></BestSellerCard>
            ))}
          </div>
          <div className="join flex items-center justify-center mt-6">
            <button className="join-item btn btn-sm">1</button>
            <button className="join-item btn btn-sm btn-active">2</button>
            <button className="join-item btn btn-sm">3</button>
            <button className="join-item btn btn-sm">4</button>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* <h3 className="mt-20">This is the books page</h3> */}
    </div>
  );
};

export default Books;
