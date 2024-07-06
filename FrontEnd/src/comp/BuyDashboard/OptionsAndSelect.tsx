const OptionsAndSelect = ({ setProduct, label, productDetails }) => {
  return (
    <div className="flex flex-wrap -mx-2 mb-8">
      <div className="w-full px-2 mb-4 sm:mb-0">
        <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
          {label}
        </label>
        <div className="relative">
          {/* DROPDOWN */}
          <div className="inline-flex items-center overflow-hidden rounded-md border bg-white w-full">
            <div
              className="absolute text-center z-10 mt-2 w-full rounded-md border border-gray-100 bg-white shadow-lg "
              role="menu"
            >
              <select
                className="p-2 w-full "
                onChange={(e) => {
                  setProduct((prev) => ({
                    ...prev,
                    [label]: {
                      ...prev[label],
                      selectedType: e.target.value,
                    },
                  }));
                }}
              >
                <option
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 "
                  // role="menuitem"
                  value={`Select ${label}`}
                  defaultValue={`Select ${label}`}
                >
                  {`Select ${label}`}
                </option>

                {productDetails.map((item, index) => (
                  <option
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    // role="menuitem"
                    value={item}
                    key={index}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsAndSelect;
