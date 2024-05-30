import { ServerMap, ServerMapRegionAccountMap } from "@/components/ServerMap";
import { ExpandableContainer } from "@/components/animated-collapsible";
import { LiveGameCard } from "@/components/lol/LiveGameCard";
import { Account, RankCard, RankCardProps } from "@/components/lol/RankCard";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { exampleRawGame } from "@/lib/examples";


const exampleAccounts: Account[] = [
  {
    tier: "Grandmaster",
    lp: 100,
    wins: 100,
    losses: 100,
    rank: 1,
    region: 'NA',
    accountName: 'Noway4u'
  },
  {
    tier: "Diamond",
    lp: 100,
    wins: 100,
    losses: 100,
    rank: 1,
    region: 'NA',
    accountName: 'Noway4u'
  },
  {
    tier: "Gold",
    lp: 100,
    wins: 100,
    losses: 100,
    rank: 1,
    region: 'EUW',
    accountName: 'Kitty'
  },
  {
    tier: "Silver",
    lp: 100,
    wins: 100,
    losses: 100,
    rank: 1,
    region: 'KR',
    accountName: 'Faker'
  }
];

const rankCardExample: RankCardProps[] = [
  {
    account: exampleAccounts[0],
    peak: undefined,

  },
  {
    account: exampleAccounts[1],
    peak: {
      tier: "Challenger",
      lp: 100,
      wins: 100,
      losses: 100,
      rank: 1,
      region: 'NA',
      accountName: 'Noway4u',
      timestamp: new Date()
    },
    games: [{
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
    }]

  },
  {
    account: exampleAccounts[2],
    peak: undefined
  },
  {
    account: exampleAccounts[3],
    peak: undefined
  }
]

export default async function Home() {

  const url = process.env.BACKEND_API_URL + '/live';
  const accountUrl = process.env.BACKEND_API_URL + '/accounts/card';
  const regionsPeakUrl = process.env.BACKEND_API_URL + '/regions/peaks';
  const livegame = await fetch(url, { next: { revalidate: 120 } }).then(res => res.json()).catch(err => undefined);
  const accounts = await fetch(accountUrl, { next: { revalidate: 120 } }).then(res => res.json()).catch(err => []) as RankCardProps[];
  const peaks = await fetch(regionsPeakUrl, { next: { revalidate: 120 } }).then(res => res.json()).catch(err => []).then(res => {
    const result: ServerMapRegionAccountMap = {};
    res.forEach((peak: any) => {
      result[peak.region] = peak;
    })
    return result

  }
  );

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
