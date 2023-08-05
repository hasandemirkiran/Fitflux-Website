import Link from 'next/link'
import MobileMenu from './mobile-menu'

import imageToAdd from '@/public/logo.svg'
import Image from 'next/image'


export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-0">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image src={imageToAdd} alt="Logo" width={80} height={55} />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
