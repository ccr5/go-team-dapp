import Image from "next/image"

interface AssetIconProps {
  type: string
  name: string
  assetImageUrl: string
  height?: number | null
  width?: number | null
  animated?: boolean
}

function AssetIcon(props: AssetIconProps) {
  const animation = {
    transform: props.animated ? 'rotateY(360deg)' : null
  }

  return (
    <div className={`flex w-${props.width || 10} h-${props.height || 10} bg-white
      rounded-full shadow-xl p-1 border-4 border-solid ${props.type == "milestone" ? "border-red-900" : "border-mainColor"}
      ${props.animated && 'animate-pulse'}
    `}>
      <Image 
        alt="" 
        title={props.name} 
        src={props.assetImageUrl}
        width={props.width || 38}
        height={props.height || 38}
        className="rounded-full" 
      />
    </div>
  )
}

export { AssetIcon }