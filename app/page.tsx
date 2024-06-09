import { ServerMap, ServerMapAccountState, ServerMapRegionAccountMap } from "@/components/ServerMap";
import { ExpandableContainer } from "@/components/animated-collapsible";
import { LiveGameCard } from "@/components/lol/LiveGameCard";
import { PeakAccountCard } from "@/components/lol/PeakAccountCard";
import { PeakAccountCardContent } from "@/components/lol/PeakRankAccountCard";
import { RankCard, RankCardProps } from "@/components/lol/RankCard";
import { MapRankLegend, MemoMapRankLegend } from "@/components/lol/map/MapRankLegend";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { exampleGameResponse, exampleRawGame } from "@/lib/examples";
import { compareAccountsByLp } from "@/lib/ranks";



export default async function Home() {
  const url = process.env.BACKEND_API_URL + '/live';
  const accountUrl = process.env.BACKEND_API_URL + '/accounts/card';
  const regionsPeakUrl = process.env.BACKEND_API_URL + '/regions/peaks';

  const livegamereq = fetch(url, { next: { revalidate: 10 } }).then(res => res.json()).catch(err => {
    console.log(err)
    return null
  });

  const accountsreq = fetch(accountUrl, { next: { revalidate: 60 } }).then(res => res.json()).catch(err => {
    console.log(err)
    return []
  }) as Promise<RankCardProps[]>



  const peaksreq = fetch(regionsPeakUrl, { next: { revalidate: 60 } }).then(res => res.json()).catch(err => {
    console.log(err)
    return []
  }).then(res => {
    const result: ServerMapRegionAccountMap = {};
    res.forEach((peak: any) => {
      result[peak.region] = peak;
    })
    return result
  }
  );


  const [livegame, accounts, peaks] = await Promise.all([livegamereq, accountsreq, peaksreq]);

  const peakValues = Object.values(peaks).sort((a, b) => {
    return compareAccountsByLp(a, b)
  })


  return (

    <main className="mx-8 md:mx-12 lg:mx-20 xl:mx-32">
      <ServerMap accounts={peaks} />
      <div className="my-8">

        {livegame && (
          <ExpandableContainer defaultOpen={true} title={(

            <div className="flex flex-row justify-center align-middle">
              <h2 className="text-3xl font-semibold">Live Game</h2>
              <Badge className=" ml-4 bg-red-600 rounded-full hover:bg-red-600 my-auto" color="bg-red-600"> <span className="bold animate-pulse ">LIVE</span> </Badge>
            </div>

          )}> <LiveGameCard game={livegame.game} region={livegame.region} /> </ExpandableContainer>)}
      </div>
      <div>
        <h2 className="text-3xl font-semibold">Noway Around the World!</h2>
        <div className="my-8 h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-center gap-3">
          {peakValues.map((peak) => {
            const newPeak = peak as any;
            const account = accounts.find((a) => a.account.region === peak.region && a.account.accountName === peak.accountName);
            newPeak.accountTag = account?.account.accountTag;

            return (
              <PeakAccountCard account={newPeak} key={`peakaccountcard-${peak}`} lastGames={account?.games}></PeakAccountCard>
            )
          })}
        </div>
      </div>
      {/* <MatchCard /> */}
    </main >
  )
}
