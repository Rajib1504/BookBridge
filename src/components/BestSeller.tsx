import { useQuery } from "@tanstack/react-query";
import BestSellerCard from "./BestSellerCard";
import Features from "./Features";
import useAxiosPublic from "../Hooks/axiosPublic";

const BestSeller = () => {
  const axiosPublic = useAxiosPublic();

  const { data: books = [] } = useQuery({
    queryKey: ["bestsellarCard"],
    queryFn: async () => {
      const res = await axiosPublic("/api/books");
      return res.data;
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-16 my-20 font-Inter">
      <div className="space-y-4 my-6">
        <h5 className="text-[#d62928] text-sm tracking-[4px] font-bold">
          BESTSELLER
        </h5>
        <h2 className="font-Gilda text-4xl">Bestseller Books</h2>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="All"
          defaultChecked
        />
        <div className="tab-content bg-base-100 py-10">
          <div className="grid place-items-center sm:place-items-baseline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-30">
            {/* Card will be placed Here */}
            {books.map((book: any) => (
              <BestSellerCard key={book._id} book={book}></BestSellerCard>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Fantasy"
        />
        <div className="tab-content bg-base-100 py-10">
          <div className="grid place-items-center sm:place-items-baseline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-30">
            {/* Card will be placed Here */}
            {books
              .filter((x: any) => x.category === "Fantasy")
              .map((book: any) => (
                <BestSellerCard key={book._id} book={book}></BestSellerCard>
              ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Horror"
        />
        <div className="tab-content bg-base-100 py-10">
          {books
            .filter((x: any) => x.category === "Horror")
            .map((book: any) => (
              <BestSellerCard key={book._id} book={book}></BestSellerCard>
            ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Science Fiction"
        />
        <div className="tab-content bg-base-100 py-10">
          {books
            .filter((x: any) => x.category === "Science Fiction")
            .map((book: any) => (
              <BestSellerCard key={book._id} book={book}></BestSellerCard>
            ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Historical Fiction"
        />
        <div className="tab-content bg-base-100 py-10">
          {books
            .filter((x: any) => x.category === "Historical Fiction")
            .map((book: any) => (
              <BestSellerCard key={book._id} book={book}></BestSellerCard>
            ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Mystery"
        />
        <div className="tab-content bg-base-100 py-10">
          {books
            .filter((x: any) => x.category === "Mystery")
            .map((book: any) => (
              <BestSellerCard key={book._id} book={book}></BestSellerCard>
            ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Thriller"
        />
        <div className="tab-content bg-base-100 py-10">
          {books
            .filter((x: any) => x.category === "Thriller")
            .map((book: any) => (
              <BestSellerCard key={book._id} book={book}></BestSellerCard>
            ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Adventure"
        />
        <div className="tab-content bg-base-100 py-10">
          {books
            .filter((x: any) => x.category === "Adventure")
            .map((book: any) => (
              <BestSellerCard key={book._id} book={book}></BestSellerCard>
            ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Graphic Novels"
        />
        <div className="tab-content bg-base-100 py-10">
          {books
            .filter((x: any) => x.category === "Graphic Novels")
            .map((book: any) => (
              <BestSellerCard key={book._id} book={book}></BestSellerCard>
            ))}
        </div>
      </div>

      <Features></Features>
    </div>
  );
};

export default BestSeller;
