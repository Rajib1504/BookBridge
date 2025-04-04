import { FaFilter } from "react-icons/fa6";

const FilterArea = () => {
  return (
    <div className="bg-[#0080801A] border border-gray-300 rounded-2xl p-6 min-w-48 max-w-64">
      <div>
        <FaFilter className="inline-flex me-2 text-primaryColor"></FaFilter>{" "}
        <span className="font-bold">Filter by:</span>
      </div>

      <div className="divider font-semibold font-Gilda">Availability</div>
      {/* filter by availability */}
      <div>
        <div>
          <input type="checkbox" name="All" id="All" />
          <label htmlFor="All"> All</label>
        </div>
        <div>
          <input type="checkbox" name="Exchange" id="Exchange" />
          <label htmlFor="Exchange"> Exchange</label>
        </div>
        <div>
          <input type="checkbox" name="Rent" id="Rent" />
          <label htmlFor="Rent"> Rent</label>
        </div>
      </div>
      <div className="divider font-semibold font-Gilda">Category</div>
      {/* filter by Category  */}
      <div>
        <div>
          <input type="checkbox" name="Fantasy" id="Fantasy" />
          <label htmlFor="Fantasy"> Fantasy</label>
        </div>
        <div>
          <input type="checkbox" name="Horror" id="Horror" />
          <label htmlFor="Horror"> Horror</label>
        </div>
        <div>
          <input type="checkbox" name="Science Fiction" id="Science Fiction" />
          <label htmlFor="Science Fiction"> Science Fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Historical Fiction"
            id="Historical Fiction"
          />
          <label htmlFor="Historical Fiction"> Historical Fiction</label>
        </div>
        <div>
          <input type="checkbox" name="Mystery" id="Mystery" />
          <label htmlFor="Mystery"> Mystery</label>
        </div>
        <div>
          <input type="checkbox" name="Thriller" id="Thriller" />
          <label htmlFor="Thriller"> Thriller</label>
        </div>
        <div>
          <input type="checkbox" name="Adventure" id="Adventure" />
          <label htmlFor="Adventure"> Adventure</label>
        </div>
        <div>
          <input type="checkbox" name="Graphic Novels" id="Graphic Novels" />
          <label htmlFor="Graphic Novels"> Graphic Novels</label>
        </div>
      </div>

      <div className="divider font-semibold font-Gilda">Condition</div>
      {/* filter by Condition */}
      <div>
        <div>
          <input type="checkbox" name="New" id="New" />
          <label htmlFor="New"> New</label>
        </div>
        <div>
          <input type="checkbox" name="Good" id="Good" />
          <label htmlFor="Good"> Good</label>
        </div>
        <div>
          <input type="checkbox" name="Fair" id="Fair" />
          <label htmlFor="Fair"> Fair</label>
        </div>
        <div>
          <input type="checkbox" name="Old" id="Old" />
          <label htmlFor="Old"> Old</label>
        </div>
      </div>
    </div>
  );
};

export default FilterArea;
