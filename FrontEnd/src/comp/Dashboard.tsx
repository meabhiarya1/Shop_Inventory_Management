import DoughnutChart from "./DoughnutChart";

const Dashboard = () => {
  return (
    <div className="mx-auto w-full p-8 ">
      {/* upper div */}
      <div className="flex justify-between">
        {/* Product List */}
        <div className="flex flex-col py-4">
          <span className="text-xl font-bold">Product List</span>
          <span className="mt-1.5 text-sm text-gray-500">
            Manage your products
          </span>
        </div>

        {/* Add New Product Button*/}
        <div className="flex items-center my-4">
          <button className="p-2 bg-[#FF9F43] text-white font-medium rounded-lg">
            Add New Product
          </button>
        </div>
      </div>

      {/* middle div */}
      <div className="bg-white border border-gray-200 w-full md:w-1/2 rounded-md shadow-sm mt-7">
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
            className="w-full rounded-md border border-gray-300 py-2.5 pe-10 px-4 shadow-sm sm:text-sm"
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
      <span className="flex items-center w-full my-8">
        <span className="h-px flex-1 bg-gray-200"></span>
      </span>

      {/* last div */}
      <div className="flex flex-col md:flex-row">
        {/* products */}
        <div className="w-full md:w-1/2">
          <div className="rounded-lg border border-gray-200">
            <div className="overflow-x-auto rounded-t-lg">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Name
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Date of Birth
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Role
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Salary
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      John Doe
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      24/05/1995
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Web Developer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $120,000
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Jane Doe
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      04/11/1980
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Web Designer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $100,000
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Gary Barlow
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      24/05/1995
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Singer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $20,000
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Gary Barlow
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      24/05/1995
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Singer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $20,000
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Gary Barlow
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      24/05/1995
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Singer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $20,000
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Gary Barlow
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      24/05/1995
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Singer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $20,000
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Gary Barlow
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      24/05/1995
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Singer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $20,000
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Gary Barlow
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      24/05/1995
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Singer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $20,000
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Gary Barlow
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      24/05/1995
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Singer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $20,000
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Gary Barlow
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      24/05/1995
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Singer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $20,000
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Gary Barlow
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      24/05/1995
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Singer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $20,000
                    </td>
                  </tr>

                  {/* Repeat the above rows as needed */}
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
                    className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                  >
                    1
                  </a>
                </li>

                <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                  2
                </li>

                <li>
                  <a
                    href="#"
                    className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                  >
                    3
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                  >
                    4
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
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* graphs */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-16 md:mt-0 mt-12">
          {/* <section className="overflow-hidden rounded-2xl shadow-2xl w-full h-full flex items-center justify-end"> */}
            <div style={{ width: "350px", height: "350px" }}>
              <DoughnutChart />
            </div>
          {/* </section> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;