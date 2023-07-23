import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}

export default Navbar
