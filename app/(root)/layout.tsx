import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='root-layout'>
      <nav className='flex items-center gap-2'>
    <Link href='/'>
          <Image src="/mic.png" alt="logo" height={32} width={36} />
    </Link>
          <h2 className='text-primary-100'>Prep-Up</h2>
      </nav>
      {children}
    </div>
  )
}

export default layout