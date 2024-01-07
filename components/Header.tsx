import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ThemeToggler } from './ThemeToggler';

function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="logo disney"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>
      <div className="flex space-x-2">
        {/* Genre drop down */}
        {/* Search Input */}
        <ThemeToggler />
        {/* Theme togler */}
      </div>
    </header>
  );
}

export default Header;
