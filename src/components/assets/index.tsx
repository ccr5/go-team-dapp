import { EmojiEvents, Grade, Token } from "@mui/icons-material"

interface AssetsProps {
  type: string
  amount: number
  description?: boolean
}

function Assets(props: AssetsProps) {
  return (
    <div className="flex flex-row justify-center items-start gap-2">
      <div>
      {
        props.type == "milestones" ? <EmojiEvents className="text-[#079D95]" /> : 
          props.type == "jobs" ? <Grade className="text-[#079D95]" /> : 
            <Token className="text-[#079D95]" />
      }
      </div>
      <div>{props.amount}</div>
      {
        props.description && <div>{props.type}</div>
      }
    </div>
  )
}

export { Assets }