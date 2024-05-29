import { ServerMap } from "@/components/ServerMap";
import { LiveGameCard } from "@/components/lol/LiveGameCard";
import { MatchCard } from "@/components/lol/MatchCard";
import { Account, RankCard } from "@/components/lol/RankCard";
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

export default function Home() {
  return (

    <main>
      <ServerMap />
      <div className="my-8">
        <LiveGameCard game={exampleRawGame} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">

        {exampleAccounts.map((account) => (
          <RankCard key={account.accountName + account.region} account={account} className="m-3" />
        ))}

      </div>

      <MatchCard />
    </main >
  )
}
