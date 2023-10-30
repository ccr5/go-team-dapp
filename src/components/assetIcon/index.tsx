import Image from "next/image"

interface AssetIconProps {
  type: string
  name: string
  assetImageUrl: string
}

function AssetIcon(props: AssetIconProps) {
  return (
    <div className={`flex w-10 h-10 rounded-full p-1 ${
      props.type == "milestone" ? "bg-red-900" : "bg-white"}
    `}>
      <Image 
        alt="" 
        title={props.name} 
        src={props.assetImageUrl}
        width={38} height={38}
         className="rounded-full" 
      />
    </div>
  )
}

export { AssetIcon }