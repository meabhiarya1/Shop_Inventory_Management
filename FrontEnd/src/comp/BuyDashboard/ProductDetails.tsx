import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ProductDetails = ({
  selectedStore,
  setOpenEditModal,
  setExistingData,
  handleDelete
}) => {
  return (
    <>
      {/* products */}
      <div className="w-full md:w-1/2 ">
        <div className="rounded-lg border border-gray-200">
          <div className="overflow-x-auto rounded-t-lg max-h-[50vh]">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
              <thead className="ltr:text-left rtl:text-right ">
                <tr className="">
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Brand
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Category
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Type
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Quantity
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Size/Weight
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Edit
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-[#141432] text-center">
                {selectedStore?.products?.map((product) => (
                  <tr key={`${product._id}`}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-300 text-ellipsis w-2">
                      {product.brand}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-300">
                      {product.category}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-300">
                      {product.type}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-300">
                      {product.quantity}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-300">
                      {product.weight === "0" || product.weight === ""
                        ? `${product.height}ft * ${product.width}ft * ${product.thickness}mm`
                        : `${product.weight}kg`}
                    </td>
                    <td className="whitespace-nowrap text-2xl font-medium text-gray-700 cursor-pointer p-2 justify-center flex">
                      <MdEditSquare
                        className="text-[#6666a8]"
                        onClick={() => {
                          setOpenEditModal(true);
                          setExistingData((prev) => ({
                            ...prev,
                            product: product,
                            storeName: selectedStore.storeName,
                          }));
                        }}
                      />
                    </td>

                    <td className="whitespace-nowrap text-2xl font-medium text-gray-700 cursor-pointer p-2 mr-8 justify-center items-center text-center w-4">
                      <MdDelete
                        className="text-red-500 ml-4"
                        onClick={() => {
                          handleDelete(product._id, selectedStore.storeName);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
            <ol className="flex justify-end gap-1 text-xs font-medium">
              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                  <span className="sr-only">Prev Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded border border-blue-600 bg-[#6666a8] text-center leading-8 text-white"
                >
                  1
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                  <span className="sr-only">Next Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
