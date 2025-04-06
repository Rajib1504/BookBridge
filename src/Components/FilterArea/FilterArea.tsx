import { FaFilter } from "react-icons/fa6";

type FilterType = {
  availability: {
    Exchange: boolean;
    Rent: boolean;
  };
  category: {
    Fantasy: boolean;
    Horror: boolean;
    ScienceFiction: boolean;
    HistoricalFiction: boolean;
    Mystery: boolean;
    Thriller: boolean;
    Adventure: boolean;
    GraphicNovels: boolean;
  };
  condition: {
    New: boolean;
    Good: boolean;
    Fair: boolean;
    Old: boolean;
  };
};

type FilterAreaProps = {
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const FilterArea = ({
  setFilters,
  filters,
  itemsPerPage,
  setItemsPerPage,
  setCurrentPage,
}: FilterAreaProps) => {
  const handleFilterChange = (e: any) => {
    const { name, checked } = e.target;

    setFilters((prev: any) => {
      // Determine which group (availability, category, condition) the filter belongs to
      const group =
        name in prev.availability
          ? "availability"
          : name in prev.category
          ? "category"
          : "condition"; // Default to "condition" if not in other groups

      return {
        ...prev,
        [group]: {
          ...prev[group],
          [name]: checked,
        },
      };
    });
  };

  const handleItemsPerPage = (e: any) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  };

  return (
    <div className="bg-[#f9f9f9] border border-gray-300 rounded-2xl p-6 min-w-48 max-w-64">
      <div className="flex items-center justify-between">
        <FaFilter className="inline-flex me-2"></FaFilter>{" "}
        <span className="font-bold">Filter by:</span>
        {/* per page count  */}
        <div className="rounded border-gray-300 p-1">
          <div className="flex items-center gap-2 ">
            <select
              defaultValue={itemsPerPage}
              onChange={handleItemsPerPage}
              name="pagePerView"
              id="pagePerView"
              className="rounded-lg px-2 py-1 bg-white select select-xs focus:outline-none focus:ring-0"
            >
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
              <option value="48">48</option>
            </select>
            <p className="text-xs lg:text-md">/page</p>
          </div>
        </div>
      </div>

      <div className="divider font-semibold font-Gilda">Availability</div>
      {/* filter by availability */}
      <div className="space-y-2">
        <div>
          <input
            type="checkbox"
            name="Exchange"
            id="Exchange"
            checked={filters.availability.Exchange}
            onChange={handleFilterChange}
          />
          <label htmlFor="Exchange"> Exchange</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Rent"
            id="Rent"
            checked={filters.availability.Rent}
            onChange={handleFilterChange}
          />
          <label htmlFor="Rent"> Rent</label>
        </div>
      </div>
      <div className="divider font-semibold font-Gilda">Category</div>
      {/* filter by Category  */}
      <div className="space-y-2">
        <div>
          <input
            type="checkbox"
            name="Fantasy"
            id="Fantasy"
            checked={filters.category.Fantasy}
            onChange={handleFilterChange}
          />
          <label htmlFor="Fantasy"> Fantasy</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Horror"
            id="Horror"
            checked={filters.category.Horror}
            onChange={handleFilterChange}
          />
          <label htmlFor="Horror"> Horror</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="ScienceFiction"
            id="ScienceFiction"
            checked={filters.category.ScienceFiction}
            onChange={handleFilterChange}
          />
          <label htmlFor="ScienceFiction"> Science Fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="HistoricalFiction"
            id="HistoricalFiction"
            checked={filters.category.HistoricalFiction}
            onChange={handleFilterChange}
          />
          <label htmlFor="HistoricalFiction"> Historical Fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Mystery"
            id="Mystery"
            checked={filters.category.Mystery}
            onChange={handleFilterChange}
          />
          <label htmlFor="Mystery"> Mystery</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Thriller"
            id="Thriller"
            checked={filters.category.Thriller}
            onChange={handleFilterChange}
          />
          <label htmlFor="Thriller"> Thriller</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Adventure"
            id="Adventure"
            checked={filters.category.Adventure}
            onChange={handleFilterChange}
          />
          <label htmlFor="Adventure"> Adventure</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="GraphicNovels"
            id="GraphicNovels"
            checked={filters.category.GraphicNovels}
            onChange={handleFilterChange}
          />
          <label htmlFor="GraphicNovels"> Graphic Novels</label>
        </div>
      </div>

      <div className="divider font-semibold font-Gilda">Condition</div>
      {/* filter by Condition */}
      <div className="space-y-2">
        <div>
          <input
            type="checkbox"
            name="New"
            id="New"
            checked={filters.condition.New}
            onChange={handleFilterChange}
          />
          <label htmlFor="New"> New</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Good"
            id="Good"
            checked={filters.condition.Good}
            onChange={handleFilterChange}
          />
          <label htmlFor="Good"> Good</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Fair"
            id="Fair"
            checked={filters.condition.Fair}
            onChange={handleFilterChange}
          />
          <label htmlFor="Fair"> Fair</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Old"
            id="Old"
            checked={filters.condition.Old}
            onChange={handleFilterChange}
          />
          <label htmlFor="Old"> Old</label>
        </div>
      </div>
    </div>
  );
};

export default FilterArea;
