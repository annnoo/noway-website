"use client"
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import filteredPoints from '../public/static/data/map.json'
import { REGION_COLORS, Region } from '@/lib/regions';
import { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverPortal } from '@radix-ui/react-popover';
import { useState } from 'react';

import { Badge } from './ui/badge';

export interface ServerMapRegionAccountMap {
  [x: string]: ServerMapAccountState;
}

interface ServerMapAccountProps {
  accounts?: ServerMapRegionAccountMap;
}

export interface ServerMapAccountState {
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

const maxHeight = '500px'
export const ServerMap = (props?: ServerMapAccountProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState<ServerMapAccountState | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null)

  const regions = Object.values(Region ?? {})
  const onOverlayClick = (e: any, region: string) => {
    e.stopPropagation();
    setPopoverOpen(true)
    setSelectedAccount(props?.accounts?.[region] ?? null)
    setSelectedRegion(region as Region)
  }
  return (
    <div className="">
      <Popover open={popoverOpen}>
        <PopoverAnchor className='border-none bg-transparent border-transparent' />
        <PopoverContent

          className='bg-background border-solid w-96 max-w-96 p-8 rounded-lg shadow-lg z-10 border-black'
          style={{ zIndex: 999 }}
        >
          <PopoverClose>
            <Badge className='absolute top-3 right-4' onClick={() => {
              setPopoverOpen(false)
            }}>X</Badge>
          </PopoverClose>
          {selectedAccount ?
            (
              <div>
                <div className='text-center text-xl uppercase font-bold text-card-foreground'>
                  Peak Ranking
                </div>
                <PeakAccountCardContent account={selectedAccount as ServerMapAccountState} />
              </div>
            )
            : <FallBackServerMapAccountCard region={selectedRegion} />} </PopoverContent>

        <TransformWrapper centerOnInit={true} wheel={{ smoothStep: 0.0002 }} maxScale={2} onWheelStart={(ref, event) => {
          if (ref.state.scale <= 1 && event.deltaY > 50) {
            scrollBy(0, event.deltaY / 1)
          }
        }}>

          <TransformComponent contentClass='w-full h-full' contentStyle={{ width: '100%', height: '100%', maxHeight }}
            wrapperStyle={{
              width: "100%",
              height: "100%",
              margin: '12px',
              maxHeight
            }}

          >
            <svg
              display={"none"}
              viewBox="0 0 200 90"
              z={0}
              onClick={() => {
                setPopoverOpen(false)
              }}
              style={{
                width: "100%",
                height: "100%",
                maxHeight,
                background: 'transparent',
              }}
            >

              {filteredPoints.map((point) => {
                const color = REGION_COLORS[point?.data?.id as Region] ?? "gray";
                const rankForRegion = props?.accounts?.[point?.data?.id as Region]
                // const color = TIER_COLOR_TO_HEX_MAP[rankForRegion?.tier.toUpperCase() as string] ?? '#222'
                const opacity = rankForRegion ? 1 : 1;
                const cursor = point.data ? "pointer" : "default";

                const radius = RADIUS_BY_RANK[rankForRegion?.tier?.toUpperCase() as string] ?? 0.18

                return (
                  <circle
                    key={point.x + '===' + point.y}
                    // onClick={(e) => {
                    //   e.stopPropagation();
                    //   if (point.data) {
                    //     setPopoverOpen(true)
                    //     setSelectedAccount(props?.accounts?.[point.data.id as Region] ?? null)
                    //     setSelectedRegion(point.data.id as Region)
                    //   } else {
                    //     setPopoverOpen(false)
                    //   }
                    // }}
                    // className="btn-cta"
                    cx={point.x}
                    cy={point.y}
                    z={1}
                    r={radius}
                    fill={color}
                    stroke="gold"
                    strokeWidth={rankForRegion?.tier?.toUpperCase() === 'CHALLENGER' ? 0.2 : 0}

                    style={{
                      cursor, opacity, margin: '12px', borderRadius: '50px',
                    }}
                  />
                )
              })

              }

              {regions.map((region) => {
                return (
                  <MapClickOverlay key={region} onClick={(e) => onOverlayClick(e, region)} region={region} />
                )
              })}
            </svg>
          </TransformComponent>
        </TransformWrapper>
      </Popover>
    </div >
  )
}

const RADIUS_BY_RANK: { [x: string]: number } = {
  'CHALLENGER': 0.40,
  'GRANDMASTER': 0.40,
  'MASTER': 0.4,
}

import { format } from 'date-fns';
import { RegionBadge } from './lol/RegionBadge';
import { RankCard } from './lol/RankCard';
import { PeakAccountCardContent } from './lol/PeakRankAccountCard';
import { TIER_COLOR_MAP_TW_COLORS, TIER_COLOR_TO_HEX_MAP } from '@/lib/ranks';
import { MapClickOverlay, NAOverlay, NAOverlayExtended } from './RussiaPolygon';

export const FallBackServerMapAccountCard = ({ region }: { region?: Region | null }) => {


  return (<div className='h-full flex flex-col justify-between'>
    <div className='text-center text-xl uppercase font-bold text-card-foreground'>
      No Account
    </div>
    {region && (
      <div className="flex flex-row items-start justify-between">
        <RegionBadge region={region} />
      </div>)}

  </div>)
}
