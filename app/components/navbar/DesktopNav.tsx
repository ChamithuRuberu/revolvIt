'use client';

import HomeNavItem from './HomeNavItem';
import AboutNavItem from './AboutNavItem';
import SolutionsNavItem from './SolutionsNavItem';
import CareersNavItem from './CareersNavItem';
import ContactUsNavItem from './ContactUsNavItem';

const DesktopNav = () => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-center space-x-6">
        <HomeNavItem />
        <AboutNavItem />
        <SolutionsNavItem />
        <CareersNavItem />
        <ContactUsNavItem />
      </div>
    </div>
  );
};

export default DesktopNav;

