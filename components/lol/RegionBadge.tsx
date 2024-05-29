import { cn } from "@/lib/utils"
import { Badge } from "../ui/badge"
import { REGION_COLORS, Region } from "@/lib/regions"

export const RegionBadge = ({ region }: { region?: string }) => {


  const badgeColor = `bg-${region?.toLowerCase()}`;

  return (
    <Badge className={cn(badgeColor, "uppercase", "hover:" + badgeColor)}>{region}</Badge>
  )
}
