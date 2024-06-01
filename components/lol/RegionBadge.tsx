import { cn } from "@/lib/utils"
import { Badge } from "../ui/badge"
import { REGION_COLORS, REGION_NAMES, Region } from "@/lib/regions"



export const RegionBadge = ({ region, longName = false }: { region?: string | null, longName?: boolean }) => {


  const badgeColor = `bg-${region?.toLowerCase()}`;
  const regionName = longName ? REGION_NAMES[region as Region] : region;
  const uppercase = longName ? "" : "uppercase";

  return (
    <Badge className={cn(badgeColor, uppercase, "hover:" + badgeColor)}>{regionName}</Badge>
  )
}
