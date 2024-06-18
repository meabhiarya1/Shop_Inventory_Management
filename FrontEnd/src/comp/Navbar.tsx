import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenShop, setIsOpenShop] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpenShop) {
      setIsOpenShop(!isOpenShop);
    }
  };

  const toggleShopDropdown = () => {
    setIsOpenShop(!isOpenShop);
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <header className="">
      <div className="mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-start md:justify-start bg-gray-200 px-4 md:p-6 rounded-lg shadow">
          {/* Left navbar */}

          <div className="md:mb-4 text-center md:text-left w-full">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome Back, Avi!
            </h1>
            <p className="mt-1.5 text-sm text-gray-500">
              Let's check the shop inventory! 🎉
            </p>
          </div>

          {/* Right navbar */}

          <div className="flex justify-between md:justify-end md:items-center md:space-x-4 w-full my-4">
            {/* Store selector */}
            <div className="relative mb-2 sm:mb-0">
              <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                <a
                  href="#"
                  className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                >
                  Select Store
                </a>
                <button 
                  className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                  onClick={toggleDropdown}
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
              {isOpen && (
                <div
                  className="absolute end-0 z-10 mt-2 w-28 rounded-md border border-gray-100 bg-white shadow-lg"
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
                </div>
              )}
            </div>

            {/* Admin selector */}
            <div className="relative">
              <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                <a
                  href="#"
                  className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                >
                  Admin
                </a>
                <button
                  className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                  onClick={toggleShopDropdown}
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
              {isOpenShop && (
                <div
                  className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                  role="menu"
                >
                  <div className="p-2">
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                    >
                      My Profile
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <button
                      type="submit"
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>  
      </div>
    </header>
  );
};

export default Navbar;
