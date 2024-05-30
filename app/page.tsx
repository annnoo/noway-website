import { ServerMap } from "@/components/ServerMap";
import { LiveGameCard } from "@/components/lol/LiveGameCard";
import { MatchCard } from "@/components/lol/MatchCard";
import { Account, RankCard, RankCardProps } from "@/components/lol/RankCard";
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
    peak: undefined
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
    }
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

export default function Home() {
  return (

    <main className="mx-8 md:mx-12 lg:mx-20 xl:mx-32">
      <ServerMap />
      <div className="my-8">
        <h2 className="text-3xl font-semibold mb-4">Live Game</h2>
        <LiveGameCard game={exampleRawGame} />
      </div>
      <div>
        <h2 className="text-3xl font-semibold">Accounts</h2>
        <div className="my-8 h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-center gap-y-3">

          {rankCardExample.map((account) => (
            <RankCard key={account.account.accountName + account.account.region} account={account.account} peak={account.peak} className="m-3" />
          ))}

        </div>
      </div>
      {/* <MatchCard /> */}
    </main >
  )
}
