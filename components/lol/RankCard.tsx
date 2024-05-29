export interface Account {
  accountName: string;
  region: string;
  rank: number;
  tier: string;
  lp: number;
  wins: number;
  losses: number;
}

export type RankCardProps = {
  className?: string;
  account: Account;
};

const games = [{
  champ: 'Aatrox',
  win: true,
},
{
  champ: 'Aatrox',
  win: false
},
{
  champ: 'Annie',
  win: false
},
{
  champ: 'Annie',
  win: true,
},
{
  champ: 'Annie',
  win: false
},

]

import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "../ui/badge";
import Image from "next/image";
import { REGION_COLORS, Region } from "@/lib/regions";

const regionToColor: { [x: string]: string } = {
  NA: "bg-blue-500",
  EUW: "bg-green-500",
  KR: "bg-red-500",
}
const champIcon = "https://static.wikia.nocookie.net/leagueoflegends/images/e/e7/Bel%27Veth_OriginalSquare.png/revision/latest/smart/width/250/height/250?cb=20220525195325"

const champIcons = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png";

export const RankCard = ({ className, account, ...props }: RankCardProps) => {

  const colorHex = REGION_COLORS[account.region as Region] ?? "bg-gray-500"
  const color = `bg-${account.region.toLowerCase()}`
  console.log(color)
  return (
    <Card className={cn("", className)} {...props}>
      <CardContent className="grid gap-4">
        <div className=" mt-4 space-x-4 rounded-md">
          <div className="flex-1 space-y-1">
            <p className="text-xl font-medium leading-none">
              {account.accountName}
              <span className="text-secondary text-sm ml-2">#T06</span>
            </p>
            <p className="text-sm text-muted-foreground">
            </p>
          </div>
        </div>

        <div
          className="flex items-center p-3 text-xs text-black  border-solid border-zinc-900"
        >
          <div
            className="text-black"
          >

            <Image
              src={`/static/images/ranked/${account.tier.toLowerCase()}.png`}
              alt={account.tier}
              width={72}
              height={72}
              className="max-w-full align-middle p-2 border-0 bg-zinc-800 rounded-full list-outside"
            />
          </div>
          <div className="relative flex-1 ml-4 text-black">
            <div
              className="font-sans text-lg  leading-6 text-white capitalize font-bold list-outside"
            >
              {account.tier} {account.rank > 0 && account.rank}
            </div>
            <div
              className="mt-px font-sans text-md leading-4 text-gray-400 list-outside"
            >
              {account.lp}

              LP
            </div>
          </div>
          <div className="text-right text-gray-500" >
            <div className="leading-6" >
              {account.wins}W&nbsp;
              {account.losses}L
            </div>
            <div className="mt-px leading-4">

              Win Rate
              &nbsp;

              <span>
                {Math.round((account.wins / (account.wins + account.losses)) * 100)}%
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start justify-between">
          <Badge className={cn(color, "uppercase")}>{account.region}</Badge>

          <div className="flex flex-row gap-2">
            {games.map((game, index) => {
              const border = game.win ? "border-green-500" : "border-red-500"
              const classes = cn("w-8", "h-8", "rounded-full", "border-[2px]", border)
              const src = `/static/images/champion/${game.champ}.png`
              return (
                <Image src={src} alt={game.champ} width={32} height={32} className={classes} key={game.champ} />
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card >
  );
}
