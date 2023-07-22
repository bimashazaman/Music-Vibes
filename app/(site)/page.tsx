import ListItem from '@/components/Container/ListItem/ListItem'
import Header from '@/components/partials/Header'

export default function Home() {
  return (
    <div
      className='
    bg-neutral-900
    rounded-lg
    min-h-screen
    h-fit
    w-full
    overflow-hidden
    overflow-y-auto
  '
    >
      <Header>
        <div className='mb-2 mt-2'>
          <h1 className='text-2xl font-semibold text-white'>Welcome Back</h1>
          <div
            className='
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
              gap-3
              mt-4'
          >
            <ListItem
              image='/images/love.png'
              name='Liked Songs'
              href='liked'
            />
          </div>
        </div>
      </Header>
    </div>
  )
}
