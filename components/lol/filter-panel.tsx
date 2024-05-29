"use client"
import { Account, RankCard } from "@/components/lol/RankCard";
import { Card } from "@/components/ui/card";
import { MultiSelector, MultiSelectorContent, MultiSelectorInput, MultiSelectorItem, MultiSelectorList, MultiSelectorTrigger } from "@/components/ui/multi-select";
import { Main } from "next/document";
import { useState } from "react";


const exampleAccounts: Account[] = [
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

export default function FilterPanel() {
  const [value, setValue] = useState<string[]>([]);
  return (

    <MultiSelector values={value} onValuesChange={setValue} loop className="max-w-xs">
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder="Select your framework" />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          <MultiSelectorItem value={"React"}>
            <img src="https://reactjs.org/logo-og.png" alt="React Logo" className="h-6 w-6" />
            Item

          </MultiSelectorItem>
          <MultiSelectorItem value={"Vue"}>Vue</MultiSelectorItem>
          <MultiSelectorItem value={"Svelte"}>Svelte</MultiSelectorItem>
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  )
}
