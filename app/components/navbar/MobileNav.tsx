'use client';

import HomeNavItem from './HomeNavItem';
import AboutNavItem from './AboutNavItem';
import SolutionsNavItem from './SolutionsNavItem';
import PortfolioNavItem from './PortfolioNavItem';
import HardwareNavItem from './HardwareNavItem';
import PricingNavItem from './PricingNavItem';
import CareersNavItem from './CareersNavItem';
import ContactUsNavItem from './ContactUsNavItem';
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-gray-200 bg-white shadow-lg">
      <div className="px-4 pt-4 pb-6 space-y-2">
        <HomeNavItem onClick={onClose} isMobile={true} />
        <AboutNavItem onClick={onClose} isMobile={true} />
        <SolutionsNavItem onClick={onClose} isMobile={true} />
        <PortfolioNavItem onClick={onClose} isMobile={true} />
        <HardwareNavItem onClick={onClose} isMobile={true} />
        <PricingNavItem onClick={onClose} isMobile={true} />
        <CareersNavItem onClick={onClose} isMobile={true} />
        <ContactUsNavItem onClick={onClose} isMobile={true} />
      </div>
    </div>
  );
};

export default MobileNav;

