import React, { useState } from 'react'

const NavItems = () => {
  const SWAP = 'Swap'
  const [selectedNavItem, setSelectedNavItem] = useState(SWAP)

  return (
    <div className="bg-zinc-900 h-fit flex items-center justify-around rounded-full mx-6 p-2">
      <p className="" onClick={() => setSelectedNavItem(SWAP)}>
        {SWAP}
      </p>
    </div>
  )
}

export default NavItems
