import { ServerMap, ServerMapRegionAccountMap } from "@/components/ServerMap";
import { ExpandableContainer } from "@/components/animated-collapsible";
import { LiveGameCard } from "@/components/lol/LiveGameCard";
import { RankCard, RankCardProps } from "@/components/lol/RankCard";
import { Badge } from "@/components/ui/badge";
import { compareAccountsByLp, convertToWholeLP } from "@/lib/ranks";



export default async function Home() {
  const url = process.env.BACKEND_API_URL + '/live';
  const accountUrl = process.env.BACKEND_API_URL + '/accounts/card';
  const livegame = await fetch(url, { next: { revalidate: 120 } }).then(res => res.json()).catch(err => {
    console.log(err)
    return null
  });
  const accounts = await fetch(accountUrl, { next: { revalidate: 120 } }).then(res => res.json()).catch(err => {
    console.log(err)
    return []
  }) as RankCardProps[];
  accounts.sort((a, b) => compareAccountsByLp(a.account, b.account))
  return (

    <main className="mx-8 md:mx-12 lg:mx-20 xl:mx-20">
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
        <h2 className="text-3xl font-semibold">Accounts</h2>
        <div className="my-8 h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-center gap-y-3">

          {accounts.map((account) => (
            <RankCard key={account.account.accountName + account.account.region} account={account.account} peak={account.peak} games={account.games} className="m-3" />
          ))}

        </div>
      </div>
      {/* <MatchCard /> */}
    </main >
  )
}
