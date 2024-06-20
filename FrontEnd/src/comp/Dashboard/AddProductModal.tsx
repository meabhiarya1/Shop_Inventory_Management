const AddProductModal = ({ setOpenAddProductModal, openAddProductModal }: any) => {
  return (
    <div>
      {openAddProductModal && (
        <div
          className="fixed z-50 inset-0 overflow-y-auto"
          onClick={() => {
            setOpenAddProductModal(false);
          }}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Modal content */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            ></span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg font-medium text-gray-900"
                      id="modal-title"
                    >
                      Add New Product
                    </h3>
                    <div className="mt-4">
                      {/* form to add product */}
                      <form>
                        {/* Brand */}
                        <div className="flex flex-wrap -mx-2 mb-4">
                          <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Brand
                            </label>
                            <div className="relative">
                              <div className="inline-flex items-center overflow-hidden rounded-md border bg-white w-full">
                                <a
                                  href="#"
                                  className="border-e px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700 w-full text-left"
                                >
                                  Select Brand
                                </a>
                                <button
                                  className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                                  // onClick={toggleDropdown}
                                >
                                  <span className="sr-only">Menu</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
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
                              {/* dropDown */}

                              {/* <div
                                className="absolute right-0 z-10 mt-2 w-28 rounded-md border border-gray-100 bg-white shadow-lg"
                                role="menu"
                              >
                                <div className="p-2">
                                  <a
                                    href="#"
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    role="menuitem"
                                  >
                                    Store 1
                                  </a>
                                  <a
                                    href="#"
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    role="menuitem"
                                  >
                                    Store 2
                                  </a>
                                  <a
                                    href="#"
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    role="menuitem"
                                  >
                                    Store 3
                                  </a>
                                </div>
                              </div> */}
                            </div>
                          </div>

                          <div className="w-full sm:w-1/2 px-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Brand
                            </label>
                            <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              required
                            />
                          </div>
                        </div>
                        {/* Category */}
                        <div className="flex flex-wrap -mx-2 mb-4">
                          <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Category
                            </label>
                            <div className="relative">
                              <div className="inline-flex items-center overflow-hidden rounded-md border bg-white w-full">
                                <a
                                  href="#"
                                  className="border-e px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700 w-full text-left"
                                >
                                  Select Category
                                </a>
                                <button
                                  className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                                  // onClick={toggleDropdown}
                                >
                                  <span className="sr-only">Menu</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
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

                              {/* dropDown */}
                              {/* <div
                                className="absolute right-0 z-10 mt-2 w-28 rounded-md border border-gray-100 bg-white shadow-lg"
                                role="menu"
                              >
                                <div className="p-2">
                                  <a
                                    href="#"
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    role="menuitem"
                                  >
                                    Store 1
                                  </a>
                                  <a
                                    href="#"
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    role="menuitem"
                                  >
                                    Store 2
                                  </a>
                                  <a
                                    href="#"
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    role="menuitem"
                                  >
                                    Store 3
                                  </a>
                                </div>
                              </div> */}
                            </div>
                          </div>

                          <div className="w-full sm:w-1/2 px-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Category
                            </label>
                            <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              required
                            />
                          </div>
                        </div>
                        {/* Type */}
                        <div className="flex flex-wrap -mx-2 mb-4">
                          <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Type
                            </label>
                            <div className="relative">
                              <div className="inline-flex items-center overflow-hidden rounded-md border bg-white w-full">
                                <a
                                  href="#"
                                  className="border-e px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700 w-full text-left"
                                >
                                  Select Type
                                </a>
                                <button
                                  className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                                  // onClick={toggleDropdown}
                                >
                                  <span className="sr-only">Menu</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
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

                              {/* dropDown */}
                              {/* <div
                                className="absolute right-0 z-10 mt-2 w-28 rounded-md border border-gray-100 bg-white shadow-lg"
                                role="menu"
                              >
                                <div className="p-2">
                                  <a
                                    href="#"
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    role="menuitem"
                                  >
                                    Store 1
                                  </a>
                                  <a
                                    href="#"
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    role="menuitem"
                                  >
                                    Store 2
                                  </a>
                                  <a
                                    href="#"
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    role="menuitem"
                                  >
                                    Store 3
                                  </a>
                                </div>
                              </div> */}
                            </div>
                          </div>

                          <div className="w-full sm:w-1/2 px-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Type
                            </label>
                            <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              required
                            />
                          </div>
                        </div>
                        {/* Store */}
                        <div className="flex flex-wrap -mx-2 mb-4">
                          <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Store
                            </label>
                            <div className="relative">
                              <div className="inline-flex items-center overflow-hidden rounded-md border bg-white w-full">
                                <a
                                  href="#"
                                  className="border-e px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700 w-full text-left"
                                >
                                  Select Store
                                </a>
                                <button
                                  className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                                  // onClick={toggleDropdown}
                                >
                                  <span className="sr-only">Menu</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
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

                              {/* dropDown */}
                              {/* <div
                                className="absolute right-0 z-10 mt-2 w-28 rounded-md border border-gray-100 bg-white shadow-lg"
                                role="menu"
                              >
                                <div className="p-2">
                                  <a
                                    href="#"
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    role="menuitem"
                                  >
                                    Store 1
                                  </a>
                                  <a
                                    href="#"
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    role="menuitem"
                                  >
                                    Store 2
                                  </a>
                                  <a
                                    href="#"
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    role="menuitem"
                                  >
                                    Store 3
                                  </a>
                                </div>
                              </div> */}
                            </div>
                          </div>

                          <div className="w-full sm:w-1/2 px-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Store
                            </label>
                            <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              required
                            />
                          </div>
                        </div>
                        {/* Quantity and Size*/}
                        <div className="flex flex-wrap -mx-2 mb-4">
                          {/* Quantity  */}
                          <div className="w-full sm:w-1/2 px-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Quantity
                            </label>
                            <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              required
                            />
                          </div>
                          {/* Size */}
                          <div className="w-full sm:w-1/2 px-2 my-2 sm:my-0">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Size
                            </label>
                            <div className="flex gap-3">
                              <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                                placeholder="H"
                              />
                              <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                                placeholder="W"
                              />
                              <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                                placeholder="B"
                              />
                              <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-1.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                                placeholder="WT."
                              />
                            </div>
                          </div>
                        </div>

                        {/* Save & Cancel */}
                        <div className="flex md:justify-end py-3 px-3 justify-between">
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#FF9F43] text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto sm:text-sm"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={() => setOpenAddProductModal(false)}
                            className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProductModal;
