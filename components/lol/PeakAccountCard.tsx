import { cn } from "@/lib/utils"
import { Card, CardContent } from "../ui/card"
import { ServerMapAccountState } from "../ServerMap"
import { PeakAccountCardContent } from "./PeakRankAccountCard"
import { LastGameCircleList } from "./LastGamesCircleList"
import { TIER_COLOR_MAP_TW_COLORS } from "@/lib/ranks"


export const PeakAccountCard = ({ account, className, lastGames = [], ...props }: { account: ServerMapAccountState, lastGames?: GameWinChampion[], className?: any }) => {

  const borderColor = TIER_COLOR_MAP_TW_COLORS[account.tier.toUpperCase()] ?? undefined
  console.log(borderColor)
  return (
    <Card className={cn("", className, `border-${borderColor}`, "h-full", "border")} {...props}>
      <CardContent className="grid gap-4">
        <PeakAccountCardContent account={account} />

        <div className="flex flex-row justify-between">

          <h2 className="text-lg font-medium">Last Games</h2>
          <LastGameCircleList games={lastGames} classNames="flex flex-row gap-2" />
        </div>

      </CardContent>
    </Card>)


}
