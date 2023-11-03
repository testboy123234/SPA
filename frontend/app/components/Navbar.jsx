import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white border-b border-gray-300 shadow-md z-30 transition-transform transform duration-300 ease-in-out">
            <div className="flex items-center justify-between px-4 py-3">
                <div>
                    <button
                        className="p-2 text-black hover:text-blue-500 focus:outline-none"
                        aria-label="Main Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-menu"
                        >
                            <path d="M3 12h18M3 6h18M3 18h18"></path>
                        </svg>
                    </button>
   
                    <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>fwsdefdsfds
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>
                </div>
                <div>
                    <a href="/h" className="flex items-center text-black hover:text-blue-500 no-underline">
                        <img
                            src="https://www.gstatic.com/classroom/logo_square_rounded.svg"
                            alt="Google Classroom"
                            className="w-6 h-6 mr-1"
                        />
                        <span className="text-lg font-normal">Classroom</span>
                    </a>
                </div>
                <div>
                    <button
                        className="p-2 text-black hover:text-blue-500 focus:outline-none"
                        aria-label="Create or join a class"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-plus"
                        >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar