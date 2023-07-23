import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { UserButton } from '@clerk/nextjs'
import { MobileSidebar } from './mobile-sidebar'

const Navbar = () => {
  return (
    <div>
      <MobileSidebar apiLimitCount={3} isPro={false} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}

export default Navbar
