import React, {useState} from 'react';

import { Navbar, Navbar2 } from '../common/components';


const RankPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 md:hidden">
        <TeamMenuMobile />

      </div>
    </div>
  )
}

const TeamMenuMobile = () => {
  const [onHideMenu, setToggleMenu] = useState(true)
  const teamGroups = [
    {
      "name": "PCS",
      "countrys": "ฮ่องกง มาเก๊า ไต้หวัน"
    },
    {
      "name": "LJL",
      "countrys": "ญี่ปุ่น"
    },
    {
      "name": "LCK",
      "countrys": "เกาหลี"
    },
    {
      "name": "LPL",
      "countrys": "จีน"
    },
    {
      "name": "LEC",
      "countrys": "ยุโรป"
    },
    {
      "name": "LCS Academy",
      "countrys": "อเมริกาเหนือ"
    },
    {
      "name": "TCL",
      "countrys": "ตุรกี"
    }
  ]

  return (
    <div className="relative inline-block text-left w-screen">
      <div className="flex justify-between">
        <div className="p-2.5">
          <p className="text-white text-left">
            Team
          </p>
        </div>
        <button type="button" className="inline-flex pt-4" id="options-menu" aria-haspopup="true" aria-expanded="true" onClick={(e) => setToggleMenu(!onHideMenu)}>
          <svg className="text-white mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className={ onHideMenu ? "hidden" : "w-screen bg-gray-900 origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {
          teamGroups.map((item, index) => {
            return (
              <div className="py-1" key={index}>
                  <div className="flex shadow-md p-4 rounded-md">
                    <div className="rounded-full ">
                      <img className="h-12 w-15 rounded-full" src="https://www.fleurette-constructeur.fr/wp-content/uploads/2019/09/logo-placeholder-png-6.png" alt="" />
                    </div>
                    <div className="flex flex-col ml-4 justify-between">
                        <div className="mb-2 h-5 w-40 text-white relative">
                          {item.name}
                        </div>
                        <div className="w-40 text-white relative">
                          {item.countrys}
                        </div>
                    </div>
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default RankPage