"use client"
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import filteredPoints from '../public/static/data/map.json'
import { REGION_COLORS, Region } from '@/lib/regions';
import { Popover, PopoverAnchor, PopoverContent, PopoverPortal } from '@radix-ui/react-popover';
import { useState } from 'react';

export const ServerMap = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  return (
    <div className="">
      <Popover open={popoverOpen}>
        <PopoverAnchor />
        <PopoverContent

          style={{ zIndex: 999, margin: "50px", background: "white", padding: "20px", borderRadius: "10px" }}
          collisionPadding={{ top: 202, left: 20 }}
        >

          <div className="p-4">Content</div>
          <div>Peak Rank: </div
          >
          <div>Peak Rank: </div>
          <div>Peak Rank: </div>
        </PopoverContent>

        <TransformWrapper centerOnInit={true} wheel={{ smoothStep: 0.0002 }} maxScale={2}>

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
                    // onClick={(e) => {
                    //   e.stopPropagation();
                    //   if (point.data) {
                    //     setPopoverOpen(true)
                    //     console.log("main");
                    //   } else {
                    //     setPopoverOpen(false)
                    //   }
                    // }}
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
