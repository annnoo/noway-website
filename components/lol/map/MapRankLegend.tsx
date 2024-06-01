import { Badge } from "@/components/ui/badge";
import { TIER_COLOR_MAP_TW_COLORS } from "@/lib/ranks";
import { cn } from "@/lib/utils";
import { memo } from "react";


export const RankBadge = ({ rank, ...props }: { rank: string }) => {
  const rankUppercase = rank.toUpperCase();
  const color = TIER_COLOR_MAP_TW_COLORS[rankUppercase] ?? "gray";

  // Only First letter is uppercase
  const rankText = rankUppercase.charAt(0) + rankUppercase.slice(1).toLowerCase();
  return (

    <Badge className={cn(`bg-${color}`, "", "hover:bg-" + color)} {...props}>{rankText}</Badge>
  );
}

export const MapRankLegend = () => {
  return (
    <div className="flex flex-row-reverse gap-2 items-end flex-wrap-reverse">
      {Object.keys(TIER_COLOR_MAP_TW_COLORS).map((rank) => {

        return (
          <RankBadge key={rank} rank={rank} />
        )
      })}
    </div>
  )
}


export const MemoMapRankLegend = memo(MapRankLegend);
