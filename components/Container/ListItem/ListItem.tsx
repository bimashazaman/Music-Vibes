'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaPlay } from 'react-icons/fa'

interface ListItemProps {
  image: string
  name: string
  href: string
  className?: string
}

const ListItem = ({ image, name, href, className }: ListItemProps) => {
  const router = useRouter()

  const onClick = () => {
    //add authentification before redirect
    router.push(href)
  }

  return (
    <button
      onClick={onClick}
      className='
        relative
        flex
        group
        items-center
        rounded-md
        gap-x-4
        overflow-hidden
        bg-neutral-100/10
        hover:bg-neutral-100/20
        transition
        pr-4
        '
    >
      <div
        className='
        relative
        min-w-[64px]
        min-h-[64px]
          '
      >
        <Image
          src={image}
          className='
        object-cover
        '
          fill
          alt='image'
        />
      </div>
      <div className=' font-medium truncate py-5'>{name}</div>
      <div
        className='absolute transition opacity-0 rounded-full flex items-center justify-center
            bg-green-500
            p-4 drop-shadow-md right-5
            group-hover:opacity-100
            hover:scale-110'
      >
        <FaPlay
          className='
            text-black
            '
        />
      </div>
    </button>
  )
}

export default ListItem
