'use client'

import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Button from '../Buttons/Button'

interface HeaderProps {
  children: React.ReactNode
  className?: string
}
const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter()

  const handleLogout = () => {
    //not now
  }

  return (
    <div
      className={twMerge(
        `
        rounded-lg
        h-fit
        w-full
        bg-gradient-to-b
        from-emerald-800
        p-6
        `,
        className
      )}
    >
      <div
        className='
        w-full
        mb-4
        flex
        items-center
        justify-between
      '
      >
        <div
          className='
            hidden
            md:flex
            items-center
            gap-x-2
        '
        >
          <button
            className='
                bg-black
                rounded-full
                flex
                items-center
                justify-center
                hover:text-gray-700
                transition
                '
            onClick={() => router.back()}
          >
            <RxCaretLeft
              className='
                text-white
                cursor-pointer
                hover:text-neutral-400
                transition
                '
              size={35}
              onClick={() => router.back()}
            />
          </button>
          <button
            className='
                bg-black
                rounded-full
                flex
                items-center
                justify-center
                hover:text-gray-700
                transition
                '
            onClick={() => router.forward()}
          >
            <RxCaretRight
              className='
                text-white
                cursor-pointer
                hover:text-neutral-400
                transition
                '
              size={35}
              onClick={() => router.forward()}
            />
          </button>
        </div>
        <div className='flex md:hidden gap-x-2 items-center'>
          <button
            className='
                rounded-full
                flex
                items-center
                justify-center
                hover:text-gray-700
                transition
                bg-white
                p-2
                hover:bg-gray-200
                '
          >
            <HiHome className='text-black' size={20} />
          </button>
          <button
            className='
                rounded-full
                flex
                items-center
                justify-center
                hover:text-gray-700
                transition
                bg-white
                p-2
                hover:bg-gray-200
                '
          >
            <BiSearch className='text-black' size={20} />
          </button>
        </div>
        <div className='flex justify-between items-center gap-x-4'>
          <>
            <div>
              <Button
                className=' bg-transparent text-neutral-300 font-medium'
                onClick={() => {}}
              >
                Sign Up
              </Button>
            </div>
            {/* login */}
            <div>
              <Button
                className=' bg-white text-black px-6 py-2'
                onClick={() => {}}
              >
                Login
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  )
}
export default Header
