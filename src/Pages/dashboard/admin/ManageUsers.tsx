import React from "react";
import { FaBan, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/axiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

interface User {
  _id: number;
  name: string;
  email: string;
  // phone: string;
  profile: string;
  userStatus: null | "blocked";
}

const ManageUsers: React.FC = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure("/all/users");
      return data;
    },
  });

  // Fake users data
  // const users: User[] = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "john.doe@example.com",
  //     phone: "+1 234 567 890",
  //     profileImg: userImage, // Placeholder image
  //     status: "Active",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     phone: "+1 987 654 321",
  //     profileImg: userImage, // Placeholder image
  //     status: "Blocked",
  //   },
  //   {
  //     id: 3,
  //     name: "Alice Johnson",
  //     email: "alice.johnson@example.com",
  //     phone: "+1 456 789 012",
  //     profileImg: userImage, // Placeholder image
  //     status: "Active",
  //   },
  // ];

  // Action Handlers
  const handleBlock = async (email: string) => {
    try {
      //confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You're about to change this user's status!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, proceed!",
      });

      if (result.isConfirmed) {
        const res = await axiosSecure.patch(`/update-status/user/${email}`);

        if (res.data.modifiedCount) {
          await Swal.fire({
            title: "Success!",
            text: "User status updated successfully",
            icon: "success",
            confirmButtonText: "OK",
            showCancelButton: false,
          });
          refetch();
        }
      }
    } catch (error: any) {
      console.error("Error:", error);
      await Swal.fire({
        title: "Error!",
        text: error.response?.data?.message || "Failed to update user status",
        icon: "error",
      });
    }
  };

  const handleDelete = (email: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/delete/user/${email}`);
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success",
          });
          refetch();
        } catch (error) {
          console.error("Failed to delete user.", error);
        }
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">👥 Manage Users</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Header */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Phone</th> */}
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="">
                <td>{index + 1}</td>
                <td className="flex items-center gap-3">
                  <img
                    src={user.profile}
                    alt={user.name}
                    className="w-10 h-10 rounded-full border border-gray-300"
                  />
                  {/* <span className="font-semibold">{user.name}</span> */}
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>{user.phone}</td> */}
                <td className="flex gap-2">
                  <button
                    className={`btn btn-sm ${
                      user.userStatus === "blocked"
                        ? "btn-success"
                        : "btn-warning"
                    } text-white`}
                    onClick={() => handleBlock(user.email)}
                  >
                    <FaBan />{" "}
                    {user.userStatus === "blocked" ? "unblock" : "block"}
                  </button>
                  <button
                    className="btn btn-sm btn-error text-white"
                    onClick={() => handleDelete(user.email)}
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
