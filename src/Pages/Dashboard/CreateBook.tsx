import { useForm, SubmitHandler } from "react-hook-form";
import useAxiosSecure from "../../Hooks/axiosSecure";
import Swal from "sweetalert2";

type Inputs = {
  availability: string;
  title: string;
  author: string;
  genre: string;
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
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    Swal.fire({
      title: "Are you sure to post?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const coverImage = { image: data.coverImage[0] };
        console.log(coverImage);

        const res = await axiosSecure.post(imgHostingApi, coverImage, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(res.data.data.display_url);
        if (res.data.success) {
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
            genre: data.genre,
            location: data.location,
            rentalPrice: data.rentalPrice || null,
            title: data.title,
            postAt: new Date(),
            approveAt: new Date(),
            status: "pending",
          };
          console.log(bookInfo);
          axiosSecure
            .post("/api/books", bookInfo)
            .then((res) => {
              if (res.data.inseredId) {
                Swal.fire({
                  title: "Done!",
                  text: "Your post has been created.",
                  icon: "success",
                });
                reset();
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

  // console.log(watch("example"));
  // watch input value by passing the name of it
  const availability = watch("availability", "Exchange");

  return (
    <div className="max-w-2xl mx-auto p-6 mt-20 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        Post a Book for Rent or Exchange
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Book Title</label>
          <input
            placeholder="Enter title here..."
            {...register("title", { required: "Book title is required" })}
            className="w-full p-2 border rounded-md"
          />
          <p className="text-red-500">{errors.title?.message}</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block font-medium">Author</label>
            <input
              placeholder="Enter author name here..."
              {...register("author", { required: "Author is required" })}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-red-500">{errors.author?.message}</p>
          </div>

          <div>
            <label className="block font-medium">Genre</label>
            <input
              placeholder="Historical, Science fiction"
              {...register("genre", { required: "Genre is required" })}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-red-500">{errors.genre?.message}</p>
          </div>
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            placeholder="Put a description here..."
            {...register("description", {
              required: "Description is required",
            })}
            rows={3}
            className="w-full p-2 border rounded-md"
          />
          <p className="text-red-500">{errors.description?.message}</p>
        </div>
        <div>
          <label className="block font-medium">Cover Image</label>
          <input
            type="file"
            {...register("coverImage", { required: "Cover image is required" })}
            className="w-full p-2 border rounded-md"
          />
          <p className="text-red-500">{errors.coverImage?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Book Condition</label>
          <select
            {...register("condition", { required: "Condition is required" })}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select condition</option>
            <option value="New">New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Old">Old</option>
          </select>
          <p className="text-red-500">{errors.condition?.message}</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block font-medium">Availability</label>
            <select
              {...register("availability")}
              className="w-full p-2 border rounded-md"
            >
              <option value="Exchange">Exchange</option>
              <option value="Rent">Rent</option>
            </select>
          </div>

          {availability === "Rent" && (
            <div>
              <label className="block font-medium">
                Rental Price (per week)
              </label>
              <input
                placeholder="1000"
                type="number"
                {...register("rentalPrice", {
                  required: "Rental price is required",
                })}
                className="w-full p-2 border rounded-md"
              />
              <p className="text-red-500">{errors.rentalPrice?.message}</p>
            </div>
          )}

          {availability === "Exchange" && (
            <div>
              <label className="block font-medium">
                Preferred Books for Exchange
              </label>
              <input
                placeholder="The Great Gatsby, Pride and Prejudice"
                {...register("exchangePreferences", {
                  required: "Exchange preferences are required",
                })}
                className="w-full p-2 border rounded-md"
              />
              <p className="text-red-500">
                {errors.exchangePreferences?.message}
              </p>
            </div>
          )}
        </div>

        <div>
          <label className="block font-medium">Location</label>
          <input
            placeholder="Enter your location..."
            {...register("location", { required: "Location is required" })}
            className="w-full p-2 border rounded-md"
          />
          <p className="text-red-500">{errors.location?.message}</p>
        </div>

        <h3 className="text-xl font-semibold mt-4">Owner Information</h3>

        <div>
          <label className="block font-medium">Your Name</label>
          <input
            defaultValue="Najmul Shaon"
            readOnly
            {...register("ownerName", { required: "Your name is required" })}
            className="w-full p-2 border rounded-md cursor-not-allowed"
          />
          <p className="text-red-500">{errors.ownerName?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Contact Email</label>
          <input
            defaultValue="najmul.nh.shaon@gmail.com"
            readOnly
            type="email"
            {...register("contactEmail", { required: "Email is required" })}
            className="w-full p-2 border rounded-md cursor-not-allowed"
          />
          <p className="text-red-500">{errors.contactEmail?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Contact Phone</label>
          <input
            placeholder="Enter your phone number..."
            type="tel"
            {...register("contactPhone")}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* <div className="flex"> */}
        <button
          type="submit"
          className="text-white uppercase py-6 tracking-widest text-xs border btn bg-[#d62928] hover:bg-[#FFB237] w-full"
        >
          Post Book
        </button>
        {/* </div> */}
      </form>
    </div>
  );
}
