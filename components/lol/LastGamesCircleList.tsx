import { buildChampUri } from "@/lib/imagecdn";
import { cn } from "@/lib/utils"
import Image from "next/image";

export const LastGameCircleList = ({ games, classNames }: { games: GameWinChampion[], classNames?: any }) => {
  return (
    <div className={cn(classNames)}>
      {games.map((game, index) => (
        <LastGameCircleChampion key={index} champ={game.champ} win={game.win} />
      ))}
    </div>
  )
}

export const LastGameCircleChampion = ({ champ, win }: { champ: string, win: boolean }) => {
  const border = win ? "border-green-500" : "border-red-500"
  const classes = cn("w-7", "h-7", "rounded-full", "border-[2px]", border)
  const src = buildChampUri(champ, '32x')
  return (
    <Image src={src} alt={`${champ}-${win}`} width={24} height={24} className={classes} />
  )
}
