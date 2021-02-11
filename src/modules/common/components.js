import React, { useState } from 'react'


export const Navbar = () => {
  const state = {
    "onHideMenu": true,
    "onHideCountry": true
  }

  const [navState, setNavState] = useState(state)

  const handleToggleMenu = (e) => {
    setNavState(prevState => ({
        ...prevState,
        ["onHideMenu"]: !prevState.onHideMenu
    }));
  };

  const handleToggleCountry = (e) => {
    setNavState(prevState => ({
        ...prevState,
        ["onHideCountry"]: !prevState.onHideCountry
    }));
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <button className="block md:hidden bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <img className="h-8 w-8 rounded-full" src="https://www.fleurette-constructeur.fr/wp-content/uploads/2019/09/logo-placeholder-png-6.png" alt="" />
            </button>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-8 w-auto" src="https://www.fleurette-constructeur.fr/wp-content/uploads/2019/09/logo-placeholder-png-6.png" alt="Workflow" />
                <img className="hidden lg:block h-8 w-auto" src="https://www.fleurette-constructeur.fr/wp-content/uploads/2019/09/logo-placeholder-png-6.png" alt="Workflow" />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a href="/#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">ตารางแข่ง</a>
                  <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">VOD</a>
                  <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">อันดับผู้เล่น</a>
                  <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">รางวัล</a>
                  <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">ข่าวสาร</a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button onClick={ (e) => handleToggleCountry(e)} className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                <img className="h-8 w-8 rounded-full" src="https://icons-for-free.com/iconfiles/png/128/globe+internet+map+network+planet+world+icon-1320168019941260763.png" alt="" />
              </button>
      
              <div className="ml-3 relative">
                <div>
                  <button type="button" className="hidden md:block py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:bg-green-500 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-opacity-75">
                    เข้าสู่ระบบ
                  </button>
                </div>

                <div className={navState.onHideCountry ? "hidden" : "origin-top-right absolute right-0 md:mt-2 md:w-48 top-11 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 " } role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <a href="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">English</a>
                  <a href="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Thailand</a>
                  <a href="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Singapore</a>
                  <a href="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Japan</a>
                  <a href="/#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Korean</a>
                </div>

                <div className="inset-y-0 left-0 flex items-center sm:hidden" onClick={ (e) => handleToggleMenu(e)}>
                  <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className={ navState.onHideMenu ? "hidden sm:hidden" : "block"}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">เข้าสู่ระบบ</a>
            <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">ตารางแข่ง</a>
            <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">VOD</a>
            <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">อันดับผู้เล่น</a>
            <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">รางวัล</a>
            <a href="/#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">ข่าวสาร</a>
          </div>
        </div>
        
      </nav>
    </div>
  )
}
