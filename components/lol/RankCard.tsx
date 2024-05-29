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


import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "../ui/badge";
import Image from "next/image";

export const RankCard = ({ className, account, ...props }: RankCardProps) => {
  const color = `bg-${account.region.toLowerCase()}`
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
              const key = `${account.accountName}-${account.region}-${game.champ}-${index}`
              return (
                <Image src={src} alt={game.champ} width={32} height={32} className={classes} key={key} />
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card >
  );
}
