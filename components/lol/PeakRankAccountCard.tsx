import { format } from "date-fns";
import { ServerMapAccountState } from "../ServerMap";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { formatTierRank, isTierApexTier, numberToRoman } from "@/lib/ranks";
import { RegionBadge } from "./RegionBadge";



export const PeakAccountCardContent = ({ account, hideTitle, games = [] }: { account: ServerMapAccountState & { accountTag?: string }, hideTitle?: boolean, games?: GameWinChampion[] }) => {
  const formattedDate = format(account.timestamp, 'dd.MM.yyyy HH:mm');
  return (
    <div className='h-full'>

      {!hideTitle && (
        <div className=" mt-4 space-x-4 rounded-md">
          <div className="flex-1 space-y-1">
            <p className="text-xl font-bold leading-none">
              {account.accountName}
              <span className="text-secondary text-sm ml-2">#{account.accountTag}</span>
            </p>
          </div>
        </div>
      )}
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
          >{

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

      <div className="flex flex-row items-start justify-between">
        <RegionBadge region={account.region} longName />
        <span className="text-muted-foreground text-xs">{formattedDate}</span>
      </div>
    </div >
  );
}


