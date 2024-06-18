// import React from 'react'

const Dashboard = () => {
  return (
    <div className="mx-auto max-w-screen-xl ">
      <div className="flex justify-between">
        <div className="flex flex-col p-4">
          <span className="text-xl font-bold">Product List</span>
          <span className="mt-1.5 text-sm text-gray-500">
            Manage your products
          </span>
        </div>
        <div className="flex items-center mx-4">
          <button className="p-2 bg-[#FF9F43] text-white font-medium rounded-lg">
            Add New Product
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
