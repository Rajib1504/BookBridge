import React from "react";
import { FaEye, FaBan, FaTrash } from "react-icons/fa";
import userImage from "../../../assets/user.jpg";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  profileImg: string;
  status: "Active" | "Blocked";
}

const ManageUsers: React.FC = () => {
  // Fake users data
  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 234 567 890",
      profileImg: userImage, // Placeholder image
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1 987 654 321",
      profileImg: userImage, // Placeholder image
      status: "Blocked",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+1 456 789 012",
      profileImg: userImage, // Placeholder image
      status: "Active",
    },
  ];

  // Action Handlers
  const handleView = (id: number) => {
    console.log(`Viewing user with ID: ${id}`);
  };

  const handleBlock = (id: number) => {
    console.log(`Blocking user with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Deleting user with ID: ${id}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">👥 Manage Users</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Header */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="">
                <td>{index + 1}</td>
                <td className="flex items-center gap-3">
                  <img
                    src={user.profileImg}
                    alt={user.name}
                    className="w-10 h-10 rounded-full border border-gray-300"
                  />
                  <span className="font-semibold">{user.name}</span>
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className="flex gap-2">
                  <button
                    className="btn btn-sm btn-info text-white"
                    onClick={() => handleView(user.id)}
                  >
                    <FaEye /> View
                  </button>
                  <button
                    className={`btn btn-sm ${
                      user.status === "Blocked" ? "btn-success" : "btn-warning"
                    } text-white`}
                    onClick={() => handleBlock(user.id)}
                  >
                    <FaBan /> {user.status === "Blocked" ? "Unblock" : "Block"}
                  </button>
                  <button
                    className="btn btn-sm btn-error text-white"
                    onClick={() => handleDelete(user.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
