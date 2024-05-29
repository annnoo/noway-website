
"use client"
import { ParticipantLiveGame, RawGame } from "@/lib/examples";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";

export function LiveGameCard({ game }: { game: RawGame }) {


  const participants = game.participants;

  const [timeSeconds, setTimeSeconds] = useState(game.gameLength);
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setTimeSeconds(timeSeconds + 1);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [timeSeconds]);

  const minutes = Math.floor(timeSeconds / 60).toString().padStart(2, '0');
  const seconds = (timeSeconds % 60).toString().padStart(2, '0');
  const server = 'NA'
  return (

    <div>
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <h1><Badge className="bg-red-600 rounded-full hover:bg-red-600" color="bg-red-600"> <span className="bold animate-pulse ">LIVE</span> </Badge></h1>
          <h1 className="ml-2 tabular-nums">Game Time: {minutes}:{seconds}</h1>
        </CardHeader>
        <CardContent></CardContent>

      </Card>

    </div>
  )
}

export function Participant({ participant }: { participant: ParticipantLiveGame }) {
  return (
    <div></div>
  )
}

export function PerkIcon({ perkId }: { perkId: number }) {
  return (
    <Image
      src={`/static/images/perks/${perkId}.png`}
      alt={perkId.toString()}
      width={24}
      height={24}
    />
  )
}
