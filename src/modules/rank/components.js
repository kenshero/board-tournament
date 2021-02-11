import React from 'react';

import { Navbar } from '../common/components';
import { RankingWrapper } from './desktop_components';
import { TeamMenuMobile, TeamResultMobile } from './mobile_components';


const RankPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 md:hidden">
        <TeamMenuMobile />
        <TeamResultMobile />
      </div>
      <div className="bg-gray-900 hidden md:block">
        <RankingWrapper />
      </div>
    </div>
  )
}


export default RankPage