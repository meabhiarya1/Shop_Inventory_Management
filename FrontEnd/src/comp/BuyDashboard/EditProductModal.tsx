import Draggable from "react-draggable";
const EditProductModal = ({
  isOpenEditModal,
  setOpenEditModal,
  existingData,
  setExistingData,
  onEditHandler,
}) => {
  return (
    <div>
      {isOpenEditModal && (
        <div className="fixed z-50 inset-0">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}

            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <Draggable>
              <div>
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
                          className="text-lg font-medium flex justify-center border-2 py-1 rounded-md bg-[#FF9F43] text-white"
                          id="modal-title"
                        >
                          Edit Product
                        </h3>
                        <div className="mt-4">
                          {/* form to add product */}
                          <form
                            onSubmit={(e) => {
                              onEditHandler(e);
                            }}
                          >
                            {/* Brand */}

                            <div className="w-full px-2 my-4">
                              <label className=" text-gray-700 text-sm font-bold mb-1 justify-center flex">
                                Brand
                              </label>
                              <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
                                required
                                value={existingData?.product?.brand}
                                onChange={(e) => {
                                  setExistingData((prev) => ({
                                    ...prev,
                                    product: {
                                      ...prev.product,
                                      brand: e.target.value.toUpperCase(),
                                    },
                                  }));
                                }}
                              />
                            </div>
                            {/* Category */}

                            <div className="w-full px-2 my-4">
                              <label className=" text-gray-700 text-sm font-bold mb-2 justify-center flex">
                                Category
                              </label>
                              <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
                                required
                                value={existingData?.product?.category}
                                onChange={(e) =>
                                  setExistingData((prev) => ({
                                    ...prev,
                                    product: {
                                      ...prev.product,
                                      category: e.target.value.toUpperCase(),
                                    },
                                  }))
                                }
                              />
                            </div>
                            {/* Type */}

                            <div className="w-full px-2 my-4">
                              <label className=" text-gray-700 text-sm font-bold mb-2 justify-center flex">
                                Type
                              </label>
                              <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
                                required
                                value={existingData?.product?.type}
                                onChange={(e) =>
                                  setExistingData((prev) => ({
                                    ...prev,
                                    product: {
                                      ...prev.product,
                                      type: e.target.value.toUpperCase(),
                                    },
                                  }))
                                }
                              />
                            </div>

                            {/* Store */}

                            <div className="w-full px-2 my-4">
                              <label className=" text-gray-700 text-sm font-bold mb-2 justify-center flex">
                                Store
                              </label>
                              <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline mt-3 bg-slate-100 "
                                disabled
                                required
                                value={existingData?.storeName}
                              />
                            </div>

                            {/* Quantity and Size*/}
                            <div className="flex flex-wrap -mx-2 mb-4 justify-between">
                              {/* Quantity */}
                              <div className="w-full sm:w-1/4 px-2 py-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                  Quantity
                                </label>
                                <input
                                  type="text"
                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  required
                                  placeholder="number"
                                  value={existingData?.product?.quantity}
                                  onChange={(e) => {
                                    // Regex to allow only numbers
                                    const regex = /^[0-9\b]+$/;
                                    if (
                                      e.target.value === "" ||
                                      regex.test(e.target.value)
                                    ) {
                                      setExistingData((prev) => ({
                                        ...prev,
                                        product: {
                                          ...prev.product,
                                          quantity: e.target.value,
                                        },
                                      }));
                                    }
                                  }}
                                />
                              </div>

                              {/* Size */}
                              <div className="w-full sm:w-[75%] my-2 sm:my-0 px-1 py-4">
                                <label className="text-gray-700 text-sm font-bold mb-2 flex justify-center">
                                  Size/Weight
                                </label>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name="Size.H"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="H (ft.)"
                                    value={existingData?.product?.height}
                                    onChange={(e) => {
                                      // Regex to allow only numbers
                                      const regex = /^[0-9\b]+$/;
                                      if (
                                        e.target.value === "" ||
                                        regex.test(e.target.value)
                                      ) {
                                        setExistingData((prev) => ({
                                          ...prev,
                                          product: {
                                            ...prev.product,
                                            height: e.target.value,
                                          },
                                        }));
                                      }
                                    }}
                                  />
                                  <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="W (ft.)"
                                    name="Size.W"
                                    value={existingData?.product?.width}
                                    onChange={(e) => {
                                      // Regex to allow only numbers
                                      const regex = /^[0-9\b]+$/;
                                      if (
                                        e.target.value === "" ||
                                        regex.test(e.target.value)
                                      ) {
                                        setExistingData((prev) => ({
                                          ...prev,
                                          product: {
                                            ...prev.product,
                                            width: e.target.value,
                                          },
                                        }));
                                      }
                                    }}
                                  />
                                  <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="TH mm"
                                    name="Size.B"
                                    value={existingData?.product?.thickness}
                                    onChange={(e) => {
                                      // Regex to allow only numbers
                                      const regex = /^[0-9\b]+$/;
                                      if (
                                        e.target.value === "" ||
                                        regex.test(e.target.value)
                                      ) {
                                        setExistingData((prev) => ({
                                          ...prev,
                                          product: {
                                            ...prev.product,
                                            thickness: e.target.value,
                                          },
                                        }));
                                      }
                                    }}
                                  />
                                  <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-1.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Wt.(kg)"
                                    value={existingData?.product?.weight}
                                    onChange={(e) =>
                                      setExistingData((prev) => ({
                                        ...prev,
                                        product: {
                                          ...prev.product,
                                          weight: e.target.value,
                                        },
                                      }))
                                    }
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Update & Cancel */}
                            <div className="flex md:justify-end py-3 px-3 justify-between">
                              <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#FF9F43] text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto sm:text-sm"
                              >
                                Update
                              </button>
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => {
                                  setOpenEditModal(!isOpenEditModal);
                                }}
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
            </Draggable>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProductModal;
