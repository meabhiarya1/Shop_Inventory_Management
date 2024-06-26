import { useMyContext } from "../../context/MyContext";
import BarChart from "./BarChart";
import Dates from "./Dates";
import { FaShoppingCart } from "react-icons/fa";


const Dashboard = () => {
  const ctx = useMyContext();
  const themeChanger = ctx.toggleState;

  return (
    <div
      className={`mx-auto w-full h-screen p-8 ${
        themeChanger ? "bg-white text-black" : "bg-[#1c1c44] text-gray-300"
      }`}
    >
      {/* upper div */}
      <div
        className={`flex flex-col md:flex-row justify-center md:justify-between`}
      >
        {/* Product List */}
        <div className="flex flex-col py-4 md:items-start items-center">
          <span className={`text-xl font-bold`}>
            Hi Avi, Track the Sales Eaisly...
          </span>
          <span className={`mt-1.5 text-sm flex `}>Track your products</span>
        </div>

        {/* Dates */}
        <Dates />
      </div>

      {/* seprator */}
      <span className="flex items-center w-full my-8 ">
        <span
          className={`h-px flex-1 ${
            themeChanger ? "bg-[#c8c8ca]" : "bg-[#47478b] "
          }`}
        ></span>
      </span>

      {/* last div */}
      <div className="flex flex-col lg:flex-row gap-8 ">
        {/* products */}
        <div className="w-full lg:w-1/2 my-4 md:my-0 ">
          <div className="rounded-lg border border-gray-200 ">
            <div className="overflow-x-auto rounded-t-lg">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
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
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-[#141432]">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-300">
                      John Doe
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-slate-300">
                      24/05/1995
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-slate-300">
                      Web Developer
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-slate-300">
                      $120,000
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-slate-300">
                      $120,000
                    </td>
                    <td className="whitespace-nowrap text-2xl items-center justify-center text-gray-700 cursor-pointer p-2">
                      <FaShoppingCart className="text-[#6666a8]" />
                    </td>
                  </tr>

                  {/* Repeat the above rows as needed */}
                </tbody>
              </table>
            </div>

            {/* paging */}
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

                <li className="block size-8 rounded border-blue-600 bg-[#6666a8] text-center leading-8 text-white">
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
        <div className="w-full lg:w-1/2">
          <section className="overflow-hidden rounded-2xl shadow-2xl w-full h-full flex items-center justify-center">
            <div className="hidden sm:block md:w-[750px] md:h-[350px] sm:w-[600px]">
              <BarChart />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
