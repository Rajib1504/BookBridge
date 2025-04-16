import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyBooks = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const status = query.get("status");
    if (status === "success") {
      Swal.fire({
        icon: "success",
        title: "Payment Successfull!",
        timer: 1500,
        showConfirmButton: false,
      });
      query.delete("status");
      navigate(
        {
          pathname: location.pathname,
          search: query.toString(),
        },
        { replace: true }
      );
    }
  }, [location, navigate]);
  return (
    <div>
      <div>
        <h2 className="font-Gilda tracking-wider text-2xl">My Books</h2>
      </div>
      <div className="overflow-x-auto bg-base-100 py-8 px-10 rounded-xl mt-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Book Name</th>
              <th>Name</th>
              <th>Favorite Color</th>
              <th>Submit</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooks;
