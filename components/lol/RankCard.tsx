export interface Account {
  accountTag?: string;
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
  peak?: ServerMapAccountState;
  games?: { champ: string, win: boolean }[]
};

const exampleGames = [{
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
import Image from "next/image";
import { RegionBadge } from "./RegionBadge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { FallBackServerMapAccountCard, ServerMapAccountState } from "../ServerMap";
import { Region } from "@/lib/regions";
import { PeakAccountCardContent } from "./PeakRankAccountCard";
import { formatTierRank } from "@/lib/ranks";
import { buildChampUri, buildRankUri } from "@/lib/imagecdn";

export const RankCard = ({ className, peak, account, games, ...props }: RankCardProps) => {
  const tierImageUrl = buildRankUri(account.tier, '64x');
  return (
    <Card className={cn("", className, "h-full")} {...props}>
      <CardContent className="grid gap-4">
        <div className=" mt-4 space-x-4 rounded-md">
          <div className="flex-1 flex flex-row justify-between">
            <span className="text-xl font-bold leading-none">
              {account.accountName}
              <span className="text-secondary text-sm ml-2">#{account.accountTag}</span>
            </span>
            <span className="m">
              <RegionBadge region={account.region} />
            </span>
          </div>
        </div>

        <Tabs defaultValue="current" className="">
          <TabsList className="items-center m-auto justify-evenly flex flex-row mx-20">
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="peak">Peak</TabsTrigger>
          </TabsList>
          <TabsContent value="current">
            <div
              className="flex items-center p-3 text-xs text-black  border-solid border-zinc-900"
            >
              <div
                className="text-black"
              >

                <Image
                  src={tierImageUrl}
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
                  {

                    formatTierRank(account.tier, account.rank)
                  }
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

            <div className="flex flex-row-reverse items-start justify-between">

              <div className="flex flex-row gap-2">
                {games?.map((game, index) => {
                  const border = game.win ? "border-green-500" : "border-red-500"
                  const classes = cn("w-7", "h-7", "rounded-full", "border-[2px]", border)
                  const src = buildChampUri(game.champ, '32x')
                  const key = `${account.accountName}-${account.region}-${game.champ}-${index}`
                  return (
                    <Image src={src} alt={game.champ} width={24} height={24} className={classes} key={key} />
                  )
                })}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="peak" className="h-full">

            {peak ? <PeakAccountCardContent account={peak as ServerMapAccountState} hideTitle /> : <FallBackServerMapAccountCard region={account.region as Region} />}


          </TabsContent>

        </Tabs>
      </CardContent>
    </Card >
  );
}



