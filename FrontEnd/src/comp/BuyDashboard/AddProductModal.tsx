import { useState } from "react";
import OptionsAndSelect from "./OptionsAndSelect";

const AddProductModal = ({
  setOpenAddProductModal,
  openAddProductModal,
}: any) => {
  const [product, setProduct] = useState({
    Brand: { selectedType: "", inputvalue: "" },
    Category: { selectedType: "", inputvalue: "" },
    Type: { selectedType: "", inputvalue: "" },
    Store: { selectedType: "", inputvalue: "" },
    Quantity: "",
    Size: "",
  });

  const [productDetails, setProductDetails] = useState({
    brand: ["Naryani", "BlackBox", "Century", "Add New Brand"],
    category: ["Plywood", "Add New Category"],
    type: ["waterproof", "semi-waterproof", "shuttering", "Add New Type"],
    store: ["Gandhi Chowk", "Station", "Add New Store"],
  });

  console.log(product)

  return (
    <div>
      {openAddProductModal && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={() => {
                setOpenAddProductModal(false);
              }}
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
                        <OptionsAndSelect
                          setProduct={setProduct}
                          label={"Brand"}
                          productDetails={productDetails?.brand}
                        />
                        {product?.Brand?.selectedType === "Add New Brand" && (
                          <div className="w-full px-2 my-4">
                            <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
                              required
                              value={product.Brand?.inputvalue}
                              onChange={(e) => {
                                setProduct((prev) => ({
                                  ...prev,
                                  Brand: {
                                    ...prev.Brand,
                                    inputvalue: e.target.value,
                                  },
                                }));
                              }}
                            />
                          </div>
                        )}
                        {/* Category */}
                        <OptionsAndSelect
                          setProduct={setProduct}
                          label={"Category"}
                          productDetails={productDetails?.category}
                        />
                         {product?.Category?.selectedType === "Add New Category" && (
                          <div className="w-full px-2 my-4">
                            <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
                              required
                              value={product.Category?.inputvalue}
                              onChange={(e) => {
                                setProduct((prev) => ({
                                  ...prev,
                                  Category: {
                                    ...prev.Category,
                                    inputvalue: e.target.value,
                                  },
                                }));
                              }}
                            />
                          </div>
                        )}
                        {/* Type */}
                        <OptionsAndSelect
                          setProduct={setProduct}
                          label={"Type"}
                          productDetails={productDetails?.type}
                        />
                         {product?.Type?.selectedType === "Add New Type" && (
                          <div className="w-full px-2 my-4">
                            <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
                              required
                              value={product.Type?.inputvalue}
                              onChange={(e) => {
                                setProduct((prev) => ({
                                  ...prev,
                                  Type: {
                                    ...prev.Type,
                                    inputvalue: e.target.value,
                                  },
                                }));
                              }}
                            />
                          </div>
                        )}
                        {/* Store */}
                        <OptionsAndSelect
                          setProduct={setProduct}
                          label={"Store"}
                          productDetails={productDetails?.store}
                        />
                        {product?.Store?.selectedType === "Add New Store" && (
                          <div className="w-full px-2 my-4">
                            <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
                              required
                              value={product.Store?.inputvalue}
                              onChange={(e) => {
                                setProduct((prev) => ({
                                  ...prev,
                                  Store: {
                                    ...prev.Store,
                                    inputvalue: e.target.value,
                                  },
                                }));
                              }}
                            />
                          </div>
                        )}
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
                              // onChange={}
                            />
                          </div>


                          {/* Size */}
                          <div className="w-full sm:w-1/2 px-2 my-2 sm:my-0">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Size/Weight
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
