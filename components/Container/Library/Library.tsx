'use client'

import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'

interface LibraryProps {}

const Library = () => {
  const onclick = () => {
    //handle upload later
  }

  return (
    <div className='flex flex-col'>
      <div
        className='
            flex
            items-center
            justify-between
            px-5
            pt-4'
      >
        <div
          className='
            inline-flex
            items-center
            gap-x-2
            '
        >
          <TbPlaylist className=' text-neutral-400' size={26} />
          <span className=' text-neutral-400 font-medium text-md'>
            Your Library
          </span>
        </div>
        <AiOutlinePlus
          className=' text-neutral-400 cursor-pointer hover:text-white transition'
          size={20}
          onClick={onclick}
        />
      </div>
      <div
        className='
        flex
        flex-col
        gap-y-2
        mt-4
        px-5
      '
      >
        List of songs
      </div>
    </div>
  )
}

export default Library
