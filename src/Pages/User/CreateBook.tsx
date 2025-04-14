import { useForm, SubmitHandler } from "react-hook-form";
import useAxiosSecure from "../../Hooks/axiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

type Inputs = {
  availability: string;
  title: string;
  author: string;
  category: string;
  description: string;
  condition: string;
  coverImage: FileList;
  rentalPrice?: number;
  exchangePreferences: string;
  location: string;
  ownerName: string;
  contactEmail: string;
  contactPhone: string;
};

const image_hosting_key = import.meta.env.VITE_Img_Host_Key;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function CreateBook() {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { user } = useAuth();

  // import from use form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  // on submit handler
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    Swal.fire({
      title: "Are you sure to post?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // cover image upload to server
        const coverImage = { image: data.coverImage[0] };

        const res = await axiosSecure.post(imgHostingApi, coverImage, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // if image successfully upload to server then

        if (res.data.success) {
          // create book info object
          const bookInfo = {
            author: data.author,
            availability: data.availability,
            condition: data.condition,
            contact: {
              email: data.contactEmail,
              name: data.ownerName,
              phone: data.contactPhone || null,
            },
            coverImage: res.data.data.display_url,
            description: data.description,
            exchangePreferences: data.exchangePreferences || null,
            category: data.category,
            location: data.location,
            rentalPrice: data.rentalPrice || 0,
            title: data.title,
            postAt: new Date(),
            approveAt: new Date(),
            status: "pending",
          };

          // then send book info to backend
          axiosSecure
            .post("/api/books", bookInfo)
            .then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  title: "Done!",
                  text: "Your post has been created.",
                  icon: "success",
                });

                // if successfully post to backend then
                reset();
                navigate("/dashboard/my-book");
              }
            })
            .catch(() => {
              Swal.fire({
                title: "Something went wrong. Try again!",
                icon: "error",
              });
            });
        }
      }
    });
  };

  // watch input value by passing the name of it
  const availability = watch("availability", "Exchange");

  return (
    <div className="font-Inter">
      <div>
        <h2 className="font-Gilda tracking-wider text-2xl">
          Post a Book for Rent or Exchange
        </h2>
      </div>
      <div className="p-6 mt-4 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          {/* book title  */}
          <div>
            <label className="block font-medium">Book Title</label>
            <input
              placeholder="Enter title here..."
              {...register("title", { required: "Book title is required" })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <p className="text-red-500">{errors.title?.message}</p>
          </div>

          {/*cover image, author and catefory container  */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* cover image  */}
            <div className="col-span-2 md:col-span-1">
              <label className="block font-medium">Cover Image</label>
              <input
                type="file"
                {...register("coverImage", {
                  required: "Cover image is required",
                })}
                className="w-full border rounded file-input border-gray-300"
              />
              <p className="text-red-500">{errors.coverImage?.message}</p>
            </div>
            {/* author  name  */}
            <div className="">
              <label className="block font-medium">Author</label>
              <input
                placeholder="Enter author name here..."
                {...register("author", { required: "Author is required" })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <p className="text-red-500">{errors.author?.message}</p>
            </div>

            {/* category  */}
            <div>
              <label className="block font-medium">Category</label>
              <select
                {...register("category", { required: "Category is required" })}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select category</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Historical Fiction">Historical Fiction</option>
                <option value="Mystery">Mystery</option>
                <option value="Thriller">Thriller</option>
                <option value="Adventure">Adventure</option>
                <option value="Graphic Novels">Graphic Novels</option>
              </select>
              <p className="text-red-500">{errors.condition?.message}</p>
            </div>
          </div>

          {/* description  */}
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              placeholder="Put a description here..."
              {...register("description", {
                required: "Description is required",
              })}
              rows={2}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <p className="text-red-500">{errors.description?.message}</p>
          </div>

          {/* book condition, Availability  */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* book condition  */}
            <div>
              <label className="block font-medium">Condition</label>
              <select
                {...register("condition", {
                  required: "Condition is required",
                })}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select condition</option>
                <option value="New">New</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Old">Old</option>
              </select>
              <p className="text-red-500">{errors.condition?.message}</p>
            </div>
            {/* Availability  */}
            <div>
              <label className="block font-medium">Availability</label>
              <select
                {...register("availability")}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Exchange">Exchange</option>
                <option value="Rent">Rent</option>
              </select>
            </div>
            {/* if user choose Rent  */}
            {availability === "Rent" && (
              <div className="col-span-3">
                <label className="block font-medium">
                  Rental Price (per week)
                </label>
                <input
                  placeholder="1000"
                  type="number"
                  {...register("rentalPrice", {
                    required: "Rental price is required",
                  })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <p className="text-red-500">{errors.rentalPrice?.message}</p>
              </div>
            )}
            {/* if user choose exchange  */}
            {availability === "Exchange" && (
              <div className="col-span-3 md:col-span-1">
                <label className="block font-medium">Preferred Books</label>
                <input
                  placeholder="The Great Gatsby, Pride and Prejudice"
                  {...register("exchangePreferences", {
                    required: "Exchange preferences are required",
                  })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <p className="text-red-500">
                  {errors.exchangePreferences?.message}
                </p>
              </div>
            )}
          </div>

          {/* owner information  */}
          <h3 className="text-xl font-semibold mt-4">Owner Information</h3>
          <div className="grid grid-cols-2 gap-6">
            {/* user name  */}
            <div>
              <label className="block font-medium">Name</label>
              <input
                defaultValue={user?.displayName}
                readOnly
                {...register("ownerName", {
                  required: "Your name is required",
                })}
                className="w-full p-2 border border-gray-300 rounded-md cursor-not-allowed"
              />
              <p className="text-red-500">{errors.ownerName?.message}</p>
            </div>

            {/* user email  */}
            <div>
              <label className="block font-medium">Email</label>
              <input
                defaultValue={user?.email}
                readOnly
                type="email"
                {...register("contactEmail", { required: "Email is required" })}
                className="w-full p-2 border border-gray-300 rounded-md cursor-not-allowed"
              />
              <p className="text-red-500">{errors.contactEmail?.message}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* contact number  */}
            <div>
              <label className="block font-medium">Phone</label>
              <input
                placeholder="Enter your phone number..."
                type="tel"
                {...register("contactPhone")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* location  */}
            <div>
              <label className="block font-medium">Location</label>
              <input
                placeholder="Enter your location..."
                {...register("location", { required: "Location is required" })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <p className="text-red-500">{errors.location?.message}</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="text-white uppercase py-6 tracking-widest text-xs border btn bg-[#d62928] hover:bg-[#FFB237]"
            >
              Post Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
