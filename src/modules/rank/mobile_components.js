import React, {useState} from 'react';


export const TeamMenuMobile = () => {
    const [onHideMenu, setToggleMenu] = useState(true)
    const results = [
      {
        "team": "Detonation FocusMe",
        "result": "ชนะ 2 - แพ้ 4"
      },
      {
        "team": "V3 Esport",
        "result": "ชนะ 2 - แพ้ 4"
      },
      {
        "team": "Rascal Jestar",
        "result": "ชนะ 1 - แพ้ 3"
      },
      {
        "team": "Secret",
        "result": "ชนะ 4 - แพ้ 1"
      },
      {
        "team": "AXIZ",
        "result": "ชนะ 2 - แพ้ 4"
      },
      {
        "team": "Ninja Pajamas",
        "result": "ชนะ 4 - แพ้ 4"
      },
      {
        "team": "Navi",
        "result": "ชนะ 0 - แพ้ 4"
      }
    ]
  
    return (
      <div className="relative inline-block text-left w-screen">
        <div className="flex justify-between border-b">
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
            results.map((item, index) => {
              return (
                <div className="py-1" key={index}>
                    <div className="flex shadow-md p-4 rounded-md">
                      <div className="rounded-full ">
                        <img className="h-12 w-15 rounded-full" src="https://www.fleurette-constructeur.fr/wp-content/uploads/2019/09/logo-placeholder-png-6.png" alt="" />
                      </div>
                      <div className="flex flex-col ml-4 justify-between">
                          <div className="mb-2 h-5 w-40 text-white relative">
                            {item.team}
                          </div>
                          <div className="w-40 text-white relative">
                            {item.result}
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

export const TeamResultMobile = () => {
  const results = [
    {
      "team": "Detonation FocusMe",
      "result": "ชนะ 2 - แพ้ 4"
    },
    {
      "team": "V3 Esport",
      "result": "ชนะ 2 - แพ้ 4"
    },
    {
      "team": "Rascal Jestar",
      "result": "ชนะ 1 - แพ้ 3"
    },
    {
      "team": "Secret",
      "result": "ชนะ 4 - แพ้ 1"
    },
    {
      "team": "AXIZ",
      "result": "ชนะ 2 - แพ้ 4"
    },
    {
      "team": "Ninja Pajamas",
      "result": "ชนะ 4 - แพ้ 4"
    },
    {
      "team": "Navi",
      "result": "ชนะ 0 - แพ้ 4"
    }
  ]
  
    return (
      <div>
        <div className="flex justify-start border-b h-10">
          <div className="text-left ml-5 text-gray-300 pt-3">
            <p>สเตจ:</p>
          </div>
          <div>
            <p className="text-left ml-4 text-gray-300 pt-3">
              ฤดูกาลปกติ
            </p>
          </div>
        </div>
        <div className="bg-black">
          <h3 className="text-white text-left ml-4 text-xl p-1">
            อันดับผู้เล่น
          </h3>
        </div>
        <div className="text-left border-b">
          <div className="grid grid-flow-row auto-rows-max overflow-auto" style={{"height": "88vh"}}>
            {
              results.map((item, index) => {
                return (
                  <div className="p-4 flex space-x-4 border-b" key={index}>
                    <h1 className="text-4xl text-white ml-10 mr-10">{index + 1}</h1>
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12" src="https://icons-for-free.com/iconfiles/png/128/globe+internet+map+network+planet+world+icon-1320168019941260763.png" alt="ChitChat Logo" />
                    </div>
                    <div>
                      <div className="text-xl font-medium text-black text-left text-white">{item.team}</div>
                      <p className="text-gray-500 text-white">{item.result}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
}
