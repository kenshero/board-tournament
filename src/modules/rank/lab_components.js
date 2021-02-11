import React from 'react';


export const RankingWrapper = () => {

  const teams = [
    {
      "name": "PCS",
      "country": "ฮ่องกง มาเก๊า ไต้หวัน"
    },
    {
      "name": "LJL",
      "country": "ญี่ปุ่น"
    },
    {
      "name": "LCK",
      "country": "เกาหลี"
    },
    {
      "name": "LCS",
      "country": "อเมริกาเหนือ"
    },
    {
      "name": "LPL",
      "country": "จีน"
    },
    {
      "name": "LEC",
      "country": "ยุโรป"
    },
    {
      "name": "TCL",
      "country": "ตุรกี"
    },
    {
      "name": "CBLOL",
      "country": "บราซิล"
    },
    {
      "name": "OPL",
      "country": "โอเชียเนีย"
    },
    {
      "name": "LCL",
      "country": "เครือรัฐเอกราช CIS"
    },
    {
      "name": "Worlds",
      "country": "นานาชาติ"
    },
    {
      "name": "All-Star Event",
      "country": "นานาชาติ"
    }
  ]

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
    <div className="flex h-20">
      <div className="w-1/4 bg-gray-700 border-r border-b border-gray-100">
        <p className="text-gray-300 pt-7">
          ภูมิภาคและกิจกรรม
        </p>
      </div>
      <div className="w-3/4 bg-gray-700 border-b">
        <p className="text-left ml-10 text-gray-300 pt-7">
          สเตจ:
          ฤดูกาลปรกติ
        </p>
      </div>
    </div>

    <div className="flex">
      <div className="w-1/4 bg-gray-700 border-r border-b border-gray-100">
        <div className="grid grid-flow-row auto-rows-max overflow-auto" style={{"height": "88vh"}}>
          {
            teams.map((item, index) => {
              return (
              <div className="p-4 flex space-x-4 border-b">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12" src="https://icons-for-free.com/iconfiles/png/128/globe+internet+map+network+planet+world+icon-1320168019941260763.png" alt="ChitChat Logo" />
                </div>
                <div>
                  <div className="text-xl font-medium text-black text-left text-white">{item.name}</div>
                  <p className="text-gray-500 text-white">{item.country}</p>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
      <div className="text-left w-3/4 bg-gray-700 border-b ">
        <div className="grid grid-flow-row auto-rows-max overflow-auto" style={{"height": "88vh"}}>
          {
            results.map((item, index) => {
              return (
                <div className="p-4 flex space-x-4 border-b">
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
  </div>
  )
}
