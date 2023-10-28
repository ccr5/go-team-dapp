import { EmojiEvents, Grade, Token } from "@mui/icons-material"

interface AssetsInfoProps {
  type: string
  amount: number
  description?: boolean
}

function AssetsInfo(props: AssetsInfoProps) {
  return (
    <div className="flex flex-row justify-center items-start gap-2">
      <div>
      {
        props.type == "milestones" ? <EmojiEvents className="text-yellow-600" /> : 
          props.type == "jobs" ? <Grade className="text-yellow-600" /> : 
            <Token className="text-yellow-600" />
      }
      </div>
      <div>{props.amount}</div>
      {
        props.description && <div>{props.type}</div>
      }
    </div>
  )
}

export { AssetsInfo }