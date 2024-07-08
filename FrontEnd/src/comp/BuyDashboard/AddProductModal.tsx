import { useState, useEffect } from "react";
import OptionsAndSelect from "./OptionsAndSelect";
import axios from "axios";
import Draggable from "react-draggable";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const AddProductModal = ({
  setOpenAddProductModal,
  openAddProductModal,
}: any) => {
  const [product, setProduct] = useState({
    Brand: { selectedType: "", inputvalue: "" },
    Category: { selectedType: "", inputvalue: "" },
    Type: { selectedType: "", inputvalue: "" },
    StoreDetails: { selectedType: "", inputvalue: "" },
    Quantity: "",
    Size: { H: "", W: "", B: "", WT: "" },
  });

  const [productDetails, setProductDetails] = useState({
    brand: ["Add New Brand"],
    category: ["Add New Category"],
    type: ["Add New Type"],
    storeDetails: ["Add New Store"],
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/products/details"
        );
        setProductDetails((prev) => ({
          brand: [
            ...prev.brand,
            ...response?.data?.brandNames.filter(
              (item) => !prev.brand.includes(item)
            ),
          ],
          category: [
            ...prev.category,
            ...response?.data?.categoryNames.filter(
              (item) => !prev.category.includes(item)
            ),
          ],
          type: [
            ...prev.type,
            ...response?.data?.typeNames.filter(
              (item) => !prev.type.includes(item)
            ),
          ],
          storeDetails: [
            ...prev.storeDetails,
            ...response?.data?.storeNames.filter(
              (item) => !prev.storeDetails.includes(item)
            ),
          ],
        }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductDetails();
  }, [openAddProductModal]);

  //ADD PRODUCT TO DATABASE
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", product);
      setOpenAddProductModal(false);
      setProduct({
        Brand: { selectedType: "", inputvalue: "" },
        Category: { selectedType: "", inputvalue: "" },
        Type: { selectedType: "", inputvalue: "" },
        StoreDetails: { selectedType: "", inputvalue: "" },
        Quantity: "",
        Size: { H: "", W: "", B: "", WT: "" },
      });

      Toastify({
        text: "Product added successfully!",
        duration: 3000, // Duration in milliseconds
        close: true, // Show close button
        gravity: "top", // Position of the toast (top, bottom)
        position: "center", // Position within the gravity (left, center, right)
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Custom background color
        stopOnFocus: true, // Prevents dismissing of toast on hover
      }).showToast();
    } catch (error) {
      console.error("There was an error!", error);

      Toastify({
        text: "Fill all the details properly.",
        duration: 3000, // Duration in milliseconds
        close: true, // Show close button
        gravity: "top", // Position of the toast (top, bottom)
        position: "center", // Position within the gravity (left, center, right)
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)", // Custom background color
        stopOnFocus: true, // Prevents dismissing of toast on hover
      }).showToast();
    }
  };

  return (
    <div>
      {openAddProductModal && (
        <div className="fixed z-50 inset-0">
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
                          className="text-lg font-medium text-gray-900 flex justify-center"
                          id="modal-title"
                        >
                          Add New Product
                        </h3>
                        <div className="mt-4">
                          {/* form to add product */}
                          <form onSubmit={handleSubmit}>
                            {/* Brand */}
                            <OptionsAndSelect
                              setProduct={setProduct}
                              label={"Brand"}
                              productDetails={productDetails?.brand}
                            />
                            {product?.Brand?.selectedType ===
                              "Add New Brand" && (
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
                            {product?.Category?.selectedType ===
                              "Add New Category" && (
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
                              label={"StoreDetails"}
                              productDetails={productDetails?.storeDetails}
                            />
                            {product?.StoreDetails?.selectedType ===
                              "Add New Store" && (
                              <div className="w-full px-2 my-4">
                                <input
                                  type="text"
                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
                                  required
                                  value={product.StoreDetails?.inputvalue}
                                  onChange={(e) => {
                                    setProduct((prev) => ({
                                      ...prev,
                                      StoreDetails: {
                                        ...prev.StoreDetails,
                                        inputvalue: e.target.value,
                                      },
                                    }));
                                  }}
                                />
                              </div>
                            )}

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
                                  value={product.Quantity}
                                  onChange={(e) => {
                                    // Regex to allow only numbers
                                    const regex = /^[0-9\b]+$/;
                                    if (
                                      e.target.value === "" ||
                                      regex.test(e.target.value)
                                    ) {
                                      setProduct((prev) => ({
                                        ...prev,
                                        Quantity: e.target.value,
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
                                    value={product.Size.H}
                                    onChange={(e) => {
                                      // Regex to allow only numbers
                                      const regex = /^[0-9\b]+$/;
                                      if (
                                        e.target.value === "" ||
                                        regex.test(e.target.value)
                                      ) {
                                        setProduct((prev) => ({
                                          ...prev,
                                          Size: {
                                            ...prev.Size,
                                            H: e.target.value,
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
                                    value={product.Size.W}
                                    onChange={(e) => {
                                      // Regex to allow only numbers
                                      const regex = /^[0-9\b]+$/;
                                      if (
                                        e.target.value === "" ||
                                        regex.test(e.target.value)
                                      ) {
                                        setProduct((prev) => ({
                                          ...prev,
                                          Size: {
                                            ...prev.Size,
                                            W: e.target.value,
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
                                    value={product.Size.B}
                                    onChange={(e) => {
                                      // Regex to allow numbers and decimal point
                                      const regex = /^[0-9\b.]+$/;
                                      if (
                                        e.target.value === "" ||
                                        regex.test(e.target.value)
                                      ) {
                                        setProduct((prev) => ({
                                          ...prev,
                                          Size: {
                                            ...prev.Size,
                                            B: e.target.value,
                                          },
                                        }));
                                      }
                                    }}
                                  />
                                  <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-1.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Wt.(kg)"
                                    value={product.Size.WT}
                                    onChange={(e) => {
                                      // Regex to allow numbers and decimal point
                                      const regex = /^[0-9\b]+$/;
                                      if (
                                        e.target.value === "" ||
                                        regex.test(e.target.value)
                                      ) {
                                        setProduct((prev) => ({
                                          ...prev,
                                          Size: {
                                            ...prev.Size,
                                            WT: e.target.value,
                                          },
                                        }));
                                      }
                                    }}
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
            </Draggable>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProductModal;
