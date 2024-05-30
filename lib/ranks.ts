

// Apex tier is Master, Grandmaster, and Challenger
export const isTierApexTier = (tierString: string) => {
  const tier = tierString.toUpperCase()
  return tier === 'MASTER' || tier === 'GRANDMASTER' || tier === 'CHALLENGER';
}

// Just for 1-4
export const numberToRoman = (num: number): string => {
  switch (num) {
    case 1: return 'I';
    case 2: return 'II';
    case 3: return 'III';
    case 4: return 'IV';
    default: return '';
  }
}

export const formatTierRank = (tier: string, rank: number): string => {
  if (isTierApexTier(tier)) return tier;
  return `${tier} ${numberToRoman(rank)}`;
}
