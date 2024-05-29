
"use client"
import { ParticipantLiveGame, RawGame } from "@/lib/examples";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";

export function LiveGameCard({ game }: { game: RawGame }) {


  const participants = game.participants;

  const blueTeamParticipants = participants.filter((participant) => participant.teamId === 100);
  const redTeamparticipants = participants.filter((participant) => participant.teamId === 200);

  const blueTeamBans = game.bannedChampions.filter((ban) => ban.teamId === 100);
  const redTeamBans = game.bannedChampions.filter((ban) => ban.teamId === 200);
  const redTeam = {
    participants: redTeamparticipants,
    bans: redTeamBans
  }
  const blueTeam = {
    participants: blueTeamParticipants,
    bans: blueTeamBans
  }


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
        <CardContent>
          <div>
            <LiveGameTeamsOverview redTeam={redTeam} blueTeam={blueTeam} />
          </div>

        </CardContent>

      </Card>

    </div>
  )
}

export type LiveGameTeamsOverviewProps = {
  redTeam: { participants: ParticipantLiveGame[], bans: { championId: number }[] },
  blueTeam: { participants: ParticipantLiveGame[], bans: { championId: number }[] }
}
import { Separator } from "../ui/separator"
import { cn } from "@/lib/utils";
export function LiveGameTeamsOverview({ redTeam, blueTeam }: LiveGameTeamsOverviewProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
        <LiveGameTeamView team={blueTeam} color="blue" />
        <LiveGameTeamView team={redTeam} color="red" />
      </div>
    </div>
  )
}

export function LiveGameTeamView({ team, color }: { team: { participants: ParticipantLiveGame[], bans: { championId: number }[] }, color: 'red' | 'blue' }) {
  const colorClass = color === 'red' ? 'text-redteam' : 'text-blueteam';
  const teamName = color === 'red' ? 'Red Team' : 'Blue Team';
  return (


    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-end">
        <h1 className={cn("text-blue-600 bold text-lg font-bold", colorClass)}>{teamName}</h1>
        <div className="flex flex-row gap-1">
          {team.bans.map((ban) => (
            <BannedChampion key={color + "-ban-" + ban.championId} championId={ban.championId} />
          ))}
        </div>
      </div>
      <Separator className="m-2 w-11/12" />
      <div className="flex flex-col gap-1">
        {team.participants.map((participant) => (
          <>
            <Participant key={participant.riotId} participant={participant} color={color} />
            <Separator />
          </>
        ))}
      </div>
    </div>

  )
}


export function BannedChampion({ championId }: { championId: number }) {
  return (
    <div className="rounded-lg border-red-600">
      <Image
        src={`/static/images/champion/${championId}.png`}
        alt={championId.toString()}
        width={32}
        height={32}

        className="rounded-xl border-red-500 border"
      />
    </div>
  )
}

export function Participant({ participant, color }: { participant: ParticipantLiveGame, color: 'red' | 'blue' }) {

  const colorClass = color === 'red' ? 'redteam' : 'blueteam';
  return (
    <div className={cn("border-l-" + colorClass, "border-4 ", "border-y-transparent", "border-r-transparent")}>
      <div className={cn("flex flex-row justify-evenly items-center  ", "border-l-" + colorClass)}>
        <div className="flex-row flex w-full items-center flex-1">
          <Image
            src={`/static/images/champion/${participant.championId}.png`}
            alt={participant.championId.toString()}
            className="rounded-full m-1 ml-2"
            width={32}
            height={32}
          />
          <div className="flex flex-col gap-1 mr-1">
            <SpellIcon perkId={participant.spell1Id} />
            <SpellIcon perkId={participant.spell2Id} />
          </div>

          <div className="flex flex-col gap-1">
            <PerkIcon perkId={participant.perks.perkIds[0]} />
            <PerkIcon perkId={participant.perks.perkSubStyle} />
          </div>
        </div>
        <p className="flex-1 mr-16 font text-xs text-card-foreground">{participant.riotId}</p>
      </div>
    </div>
  )
}

export function PerkIcon({ perkId }: { perkId: number }) {
  return (
    <Image
      src={`/static/images/perks/${perkId}.png`}
      alt={perkId.toString()}

      className="rounded-md"
      width={16}
      height={16}
    />
  )
}


export function SpellIcon({ perkId }: { perkId: number }) {
  return (
    <Image
      src={`/static/images/summs/${perkId}.png`}
      alt={perkId.toString()}
      width={16}
      className="rounded-md"
      height={16}
    />
  )
}
