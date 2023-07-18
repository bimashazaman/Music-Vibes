'use client'

import { usePathname } from 'next/navigation'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { useMemo } from 'react'

import { Box } from '../Container/Box/Box'
import SidebarItems from '../Container/Sidebar/SidebarItems'

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar = ({ children }: SidebarProps) => {
  /* It is used to get the current pathname of the URL. */
  const pathname = usePathname()

  /* The line is using the `useMemo` hook to create a memoized value for the `routes` variable. */
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname]
  )

  return (
    <div className='flex h-full'>
      <div className='hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2'>
        <Box>
          <div className='flex flex-col gap-y-4 px-5 py-4'>
            {routes.map((item) => (
              <SidebarItems key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className=' overflow-y-auto h-full'>Song Library</Box>
      </div>
      <div className='h-full flex-1 overflow-y-auto py-2'>{children}</div>
    </div>
  )
}

export default Sidebar
