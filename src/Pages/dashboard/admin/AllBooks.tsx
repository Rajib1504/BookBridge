import useAxiosSecure from "../../../Hooks/axiosSecure";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
interface Book {
  id: number;
  title: string;
  author: string;
  contact: any;
  availability: string;
  postAt: string;
}

const AllBooks = () => {
  const axiosSecure = useAxiosSecure();

  const { data: books = [] } = useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: async () => {
      const { data } = await axiosSecure("/all/books");
      return data;
    },
  });

  return (
    <div className="p-6 font-Inter">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 font-Gilda">
        📚 All Books
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Header */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>No.</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Added By</th>
              <th>Added For</th>
              <th>Added Date</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {books.map((book, index) => (
              <tr key={book.id} className="hover">
                <td>{index + 1}</td>
                <td className="">{book.title}</td>
                <td>{book.author}</td>
                <td>{book.contact.name}</td>
                <td>
                  <span
                    className={`w-[70px] px-2 inline-flex justify-center items-center text-xs leading-5 rounded-full ${
                      book.availability === "Exchange"
                        ? "bg-green-200 text-green-800"
                        : "bg-indigo-200 text-indigo-800"
                    }`}
                  >
                    {book.availability}
                  </span>
                </td>
                <td>{format(new Date(book.postAt), "MMM dd, yyyy h:mm a")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;
