import Image from "next/image"

interface AssetIconProps {
  type: string
  name: string
  currentPercent?: number
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
    <div className={`flex bg-white w-${props.width || 10} h-${props.height || 10}
      rounded-full shadow-xl p-2 border-4 border-solid 
      ${props.type == "milestone" && "border-red-900"}
      ${
        props.type == "job" && props.currentPercent ?
          props.currentPercent <= 0.2 ? "border-[#947549]" : 
            props.currentPercent <= 0.4 ? "border-[#cd7f32]" :
              props.currentPercent <= 0.6 ? "border-[#c0c0c0]" :
                props.currentPercent <= 0.8 ? "border-#ffd700" :
                  "border-[#dcedec]"
          : "border-mainColor"
      }
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