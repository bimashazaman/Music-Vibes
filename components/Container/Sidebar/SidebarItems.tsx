import Link from 'next/link'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface SidebarItemsProps {
  icon: IconType
  label: string
  active: boolean
  href: string
}

const SidebarItems = ({
  icon: Icon,
  label,
  active,
  href,
}: SidebarItemsProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
            flex
            flex-row
            h-auto
            items-center
            w-full
            gap-x-4
            text-md
            font-medium
            rounded-lg
            px-2
            py-1
            hover:bg-neutral-800
            transition
            duration-200
            ease-in-out
            cursor-pointer
            text-neutral-400
            hover:text-white
            `,
        active ? 'bg-neutral-800' : ''
      )}
    >
      <Icon
        className={`text-neutral-300 ${active ? 'text-green-500' : ''}`}
        size={26}
      />
      <span className='text-neutral-300 font-medium'>{label}</span>
    </Link>
  )
}

export default SidebarItems
