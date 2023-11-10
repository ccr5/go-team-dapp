import Image from "next/image"
import { ConnectButton } from '@rainbow-me/rainbowkit'

function Header() {
  
  return (
     <div className="flex flex-row w-full h-[80px] px-8 py-4 items-center justify-between">
      <div className='flex items-center'>
        {/* <Image alt="" src={'/uniswap.png'} height={48} width={48}/> */}
        Logo
      </div>
      <div className='flex'>
        <ConnectButton showBalance={false} />
      </div>
    </div>
  )
}

export { Header }