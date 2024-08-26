import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      {/* Other navbar items */}
      <Link href="/dailyPlanner">
        <a>Daily Planner</a>
      </Link>
    </nav>
  );
};

export default Navbar;