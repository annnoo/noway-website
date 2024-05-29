"use client"
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import filteredPoints from '../public/static/data/map.json'
import { REGION_COLORS, Region } from '@/lib/regions';
import { Popover, PopoverAnchor, PopoverContent, PopoverPortal } from '@radix-ui/react-popover';
import { useState } from 'react';
import { Card, CardContent } from './ui/card';

import Image from "next/image";
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

interface ServerMapRegionAccountMap {
  [x: string]: ServerMapAccountState;
}

interface ServerMapAccountProps {
  accounts: ServerMapRegionAccountMap;
}

interface ServerMapAccountState {
  accountName: string;
  region: string;
  rank: number;
  tier: string;
  lp: number;
  wins: number;
  losses: number;
  timestamp: Date;
  isIngame?: boolean;
}



const exampleAccounts: ServerMapRegionAccountMap = {
  [Region.EUW]: {
    accountName: 'Kitty',
    region: 'EUW',
    rank: 1,
    tier: "Gold",
    lp: 100,
    wins: 100,
    losses: 100,
    timestamp: new Date(),
    isIngame: true
  },
  [Region.NA]: {
    accountName: 'Noway4u',
    region: 'NA',
    rank: 1,
    tier: "Diamond",
    lp: 100,
    wins: 100,
    losses: 100,
    timestamp: new Date()
  },

}

export const ServerMap = (props?: ServerMapAccountProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState<ServerMapAccountState | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null)

  return (
    <div className="">
      <Popover open={popoverOpen}>
        <PopoverAnchor className='border-none bg-transparent border-transparent' />
        <PopoverContent

          className='bg-background border-solid w-96 max-w-96 p-8 rounded-lg shadow-lg z-10 border-black'
          style={{ zIndex: 999 }}
        >
          {selectedAccount ? <ServerMapAccountCard account={selectedAccount as ServerMapAccountState} /> : <FallBackServerMapAccountCard region={selectedRegion} />} </PopoverContent>

        <TransformWrapper centerOnInit={true} wheel={{ smoothStep: 0.0002 }} maxScale={2} onWheelStart={(ref, event) => {
          if (ref.state.scale <= 1 && event.deltaY > 0) {
            scrollBy(0, event.deltaY / 1)
          }
        }}>

          <TransformComponent contentClass='w-full h-full' contentStyle={{ width: '100%', height: '100%' }}
            wrapperStyle={{
              width: "100%",
              height: "100%",
              margin: '12px'
            }}

          >
            <svg
              display={"none"}
              viewBox="0 0 200 90"
              onClick={() => {
                console.log("test")
                setPopoverOpen(false)
              }}
              style={{
                width: "100%",
                height: "100%",
                background: 'transparent',
              }}
            >

              {filteredPoints.map((point) => {
                const color = REGION_COLORS[point?.data?.id as Region] ?? "green";
                const opacity = point.data ? 1 : 0.25;
                const cursor = point.data ? "pointer" : "default";

                return (
                  <circle
                    key={point.x + '===' + point.y}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (point.data) {
                        setPopoverOpen(true)
                        setSelectedAccount(exampleAccounts[point.data.id as Region] ?? null)
                        setSelectedRegion(point.data.id as Region)
                      } else {
                        setPopoverOpen(false)
                      }
                    }}
                    className="btn-cta"
                    cx={point.x}
                    cy={point.y}
                    r={0.35}
                    fill={color}
                    style={{
                      cursor, opacity, margin: '12px', borderRadius: '50px',
                      border: '10px solid #000'
                    }}
                  />
                )
              })

              }
            </svg>
          </TransformComponent>
        </TransformWrapper>
      </Popover>
    </div >
  )
}


import { format } from 'date-fns';
import { RegionBadge } from './lol/RegionBadge';
import { RankCard } from './lol/RankCard';

export const FallBackServerMapAccountCard = ({ region }: { region?: Region }) => {


  return (<div>
    <div className='text-center text-xl uppercase font-bold text-card-foreground'>
      No Account
    </div>

    <RegionBadge region={region} />
  </div>)
}

export const ServerMapAccountCard = ({ account }: { account: ServerMapAccountState }) => {
  const badgeColor = `bg-${account.region.toLowerCase()}`
  const formattedDate = format(account.timestamp, 'dd.MM.yyyy HH:mm');
  return (
    <div>
      <div className='text-center text-xl uppercase font-bold text-card-foreground'>
        Peak Ranking
      </div>
      <div className=" mt-4 space-x-4 rounded-md">
        <div className="flex-1 space-y-1">
          <p className="text-xl font-medium leading-none">
            {account.accountName}
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
        <Badge className={cn(badgeColor, "uppercase")}>{account.region}</Badge>
        <span className="text-muted-foreground text-xs">{formattedDate}</span>
      </div>
    </div >
  );
}
