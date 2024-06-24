import { useState, ChangeEvent } from "react";
import { format, subDays, startOfMonth, subMonths } from "date-fns";

const Dates = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<string>("");
  const [customRange, setCustomRange] = useState<{
    start: string;
    end: string;
  }>({ start: "", end: "" });
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleDateRangeChange = (dateVariable: string) => {
    setSelectedDateRange(dateVariable);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCustomRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomRange((prevRange) => ({ ...prevRange, [name]: value }));
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getDateRangeLabel = () => {
    switch (selectedDateRange) {
      case "today":
        return `Today: ${format(new Date(), "yyyy-MM-dd")}`;
      case "yesterday":
        return `Yesterday: ${format(subDays(new Date(), 1), "yyyy-MM-dd")}`;
      case "last7days":
        return `Last 7 Days: ${format(
          subDays(new Date(), 7),
          "yyyy-MM-dd"
        )} - ${format(new Date(), "yyyy-MM-dd")}`;
      case "last15days":
        return `Last 15 Days: ${format(
          subDays(new Date(), 15),
          "yyyy-MM-dd"
        )} - ${format(new Date(), "yyyy-MM-dd")}`;
      case "thisMonth":
        return `This Month: ${format(
          startOfMonth(new Date()),
          "yyyy-MM-dd"
        )} - ${format(new Date(), "yyyy-MM-dd")}`;
      case "last3months":
        return `Last 3 Months: ${format(
          subMonths(new Date(), 3),
          "yyyy-MM-dd"
        )} - ${format(new Date(), "yyyy-MM-dd")}`;
      case "last6months":
        return `Last 6 Months: ${format(
          subMonths(new Date(), 6),
          "yyyy-MM-dd"
        )} - ${format(new Date(), "yyyy-MM-dd")}`;
      case "custom":
        return `Custom Range: ${customRange.start} - ${customRange.end}`;
      default:
        return "Select Date Range";
    }
  };

  return (
    <div className="flex flex-col items-center md:items-end my-4 space-y-2">
      <div className="relative w-full ">
        <div className="inline-flex items-center overflow-hidden rounded-md border bg-[#FF9F43] w-full py-2">
          <button
            onClick={handleDropdownClick}
            className="flex justify-between items-center px-5 py-2 text-sm/none text-gray-800 hover:text-gray-700 w-full"
          >
            <span>{getDateRangeLabel()}</span>
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isDropdownOpen && (
          <div
            className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu"
          >
            <div className="p-2">
              <a
                onClick={() => handleDateRangeChange("today")}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Today
              </a>

              <a
                onClick={() => handleDateRangeChange("yesterday")}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Yesterday
              </a>

              <a
                onClick={() => handleDateRangeChange("last7days")}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Last 7 Days
              </a>

              <a
                onClick={() => handleDateRangeChange("last15days")}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Last 15 Days
              </a>

              <a
                onClick={() => handleDateRangeChange("thisMonth")}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                This Month
              </a>

              <a
                onClick={() => handleDateRangeChange("last3months")}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Last 3 Months
              </a>

              <a
                onClick={() => handleDateRangeChange("last6months")}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Last 6 Months
              </a>

              <a
                onClick={() => handleDateRangeChange("custom")}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Custom Range
              </a>
            </div>
          </div>
        )}
      </div>

      {selectedDateRange === "custom" && (
        <div className="flex space-x-2">
          <input
            type="date"
            name="start"
            className="p-2 border rounded-lg"
            value={customRange.start}
            onChange={handleCustomRangeChange}
          />
          <input
            type="date"
            name="end"
            className="p-2 border rounded-lg"
            value={customRange.end}
            onChange={handleCustomRangeChange}
          />
        </div>
      )}

      <div className="mt-2 p-2 border rounded-lg w-full flex items-center justify-center">
        {getDateRangeLabel()}
      </div>
    </div>
  );
};

export default Dates;
