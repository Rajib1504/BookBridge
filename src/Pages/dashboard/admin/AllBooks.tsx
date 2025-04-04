import React from "react";

interface Book {
  id: number;
  name: string;
  author: string;
  addedBy: string;
  addedFor: "Rent" | "Exchange";
  addedDate: string;
}

const AllBooks: React.FC = () => {
  // Fake books data
  const books: Book[] = [
    {
      id: 1,
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      addedBy: "John Doe",
      addedFor: "Rent",
      addedDate: "2025-04-01",
    },
    {
      id: 2,
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      addedBy: "Jane Smith",
      addedFor: "Exchange",
      addedDate: "2025-03-28",
    },
    {
      id: 3,
      name: "1984",
      author: "George Orwell",
      addedBy: "Alice Johnson",
      addedFor: "Rent",
      addedDate: "2025-03-25",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📚 All Books</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Header */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>#</th>
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
                <td className="font-semibold">{book.name}</td>
                <td>{book.author}</td>
                <td>{book.addedBy}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      book.addedFor === "Rent" ? "bg-blue-500" : "bg-green-500"
                    }`}
                  >
                    {book.addedFor}
                  </span>
                </td>
                <td>{book.addedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;
