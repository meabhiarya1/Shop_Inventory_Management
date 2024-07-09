import DoughnutChart from "../BuyDashboard/DoughnutChart";
import AddProductModal from "./AddProductModal";
import { useMyContext } from "../../context/MyContext";
import ProductDetails from "./ProductDetails";
import EditProductModal from "./EditProductModal";
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {
  const {
    openAddProductModal,
    setOpenAddProductModal,
    totalProducts,
    toggleState,
    selectedStore,
    setSelectedStore,
    existingData,
    setExistingData,
    isOpenEditModal,
    setOpenEditModal,
  } = useMyContext();

  const onEditHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/updateproduct/store/${existingData.storeName}/product/${existingData.product._id}`,
        existingData.product
      );
      // Show success toast
      toast.success("Product updated successfully!");
      // Handle the response, for example, updating the state or showing a success message
      console.log("Product updated successfully");
      // Function to update selectedStore.products based on existingData
      const updatedProducts = selectedStore?.products.map((data) => {
        if (data._id == existingData?.product._id) {
          // Update the product properties as needed
          return {
            ...data,
            brand: existingData?.product.brand,
            category: existingData?.product.category,
            height: existingData?.product.height,
            quantity: existingData?.product.quantity,
            thickness: existingData?.product.thickness,
            type: existingData?.product.type,
            weight: existingData?.product.weight,
            width: existingData?.product.width,
          };
        }
        return data;
      });

      // // Create the updated selectedStore object
      const updatedStore = {
        ...selectedStore,
        products: updatedProducts,
      };
      // Now updatedStore contains the updated products array based on existingData
      setSelectedStore(updatedStore);
      setOpenEditModal(!isOpenEditModal);
    } catch (error) {
      // Show error toast
      toast.error("Error updating product.");
      // Handle the error, for example, showing an error message
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async (productId, storeName) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/product/store/${storeName}/product/${productId}`
      );

      toast.success("Product Deleted Successfully!!!");
      // Handle any state updates or UI changes after successful deletion
      const updatedProducts = selectedStore?.products.filter(
        (data) => data._id !== productId
      );

      // // Create the updated selectedStore object
      const updatedStore = {
        ...selectedStore,
        products: updatedProducts,
      };
      // Now updatedStore contains the updated products array based on existingData
      setSelectedStore(updatedStore);
    } catch (error) {
      toast.error("Something went wrong!!!");
      console.error("Error deleting product:", error);
      // Handle specific error cases if needed
    }
  };

  return (
    <div
      className={`mx-auto w-full h-fit md:h-[100vh] p-8 scrollbar ${
        toggleState ? "bg-white " : "bg-[#1c1c44]"
      }`}
    >
      {/* upper div */}
      <div className="flex justify-between">
        {/* Product List */}
        <div className="flex flex-col py-4">
          <span
            className={`text-xl font-bold ${
              toggleState ? "text-black" : "text-gray-200"
            }`}
          >
            Product List
          </span>
          <span
            className={`mt-1.5 text-sm  ${
              toggleState ? "text-black" : "text-gray-200"
            }`}
          >
            Manage your products
          </span>
        </div>

        {/* Add New Product Button*/}
        <div className="flex items-center my-4">
          <button
            className="p-2 bg-[#FF9F43] text-white font-medium rounded-lg"
            onClick={() => setOpenAddProductModal(!openAddProductModal)}
          >
            Add New Product
          </button>
        </div>
      </div>

      {/* middle div */}
      <div
        className={`bg-white border border-gray-200 w-full md:w-1/2 rounded-md shadow-sm mt-7`}
      >
        {/* Search box */}
        <div className="relative">
          <label htmlFor="Search" className="sr-only">
            {" "}
            Search{" "}
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className={`w-full rounded-md border py-2.5 pe-10 px-4 shadow-sm sm:text-sm ${
              toggleState
                ? "border-gray-300 bg-white "
                : "bg-[#1c1c44] border-[#454586] text-slate-300"
            }`}
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-500">
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>

      {/* seprator */}
      <span className="flex items-center w-full my-8 ">
        <span
          className={`h-px flex-1 ${
            toggleState ? "bg-[#c8c8ca]" : "bg-[#47478b] "
          }`}
        ></span>
      </span>

      {/* last div */}
      <div className="flex flex-col md:flex-row overflow-y-auto scrollbar">
        <ProductDetails
          selectedStore={selectedStore}
          setOpenEditModal={setOpenEditModal}
          setExistingData={setExistingData}
          handleDelete={handleDelete}
        />

        {/* graphs */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-16 md:mt-0 mt-12">
          {/* <section className="overflow-hidden rounded-2xl shadow-2xl w-full h-full flex items-center justify-end"> */}
          <div style={{ width: "350px", height: "350px" }}>
            <DoughnutChart />
          </div>
          {/* </section> */}
        </div>
      </div>

      <AddProductModal
        setOpenAddProductModal={setOpenAddProductModal}
        openAddProductModal={openAddProductModal}
        setSelectedStore={setSelectedStore}
        totalProducts={totalProducts}
      />
      <EditProductModal
        isOpenEditModal={isOpenEditModal}
        setOpenEditModal={setOpenEditModal}
        existingData={existingData}
        setExistingData={setExistingData}
        onEditHandler={onEditHandler}
      />
    </div>
  );
};

export default Dashboard;
