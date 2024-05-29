import { cn } from "@/lib/utils"
import { Badge } from "../ui/badge"
import { REGION_COLORS, Region } from "@/lib/regions"

export const RegionBadge = ({ region }: { region?: string | null }) => {


  const badgeColor = `bg-${region?.toLowerCase()}`;

  return (
    <Badge className={cn(badgeColor, "uppercase", "hover:" + badgeColor)}>{region}</Badge>
  )
}
