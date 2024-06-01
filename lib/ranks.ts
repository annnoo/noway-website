import colors from "tailwindcss/colors";



// maps tier to color for diamond+
export const TIER_COLOR_MAP = {
  'DIAMOND': 'indigo-600',
  'MASTER': 'purple-600',
  'GRANDMASTER': 'red-600',
  'CHALLENGER': 'sky-600'
}

export const TIER_COLOR_MAP_TW_COLORS: { [x: string]: string } = {
  'DIAMOND': 'lol-dia',
  'MASTER': 'lol-master',
  'GRANDMASTER': 'lol-grandmaster',
  'CHALLENGER': 'lol-challenger'
}

export const TIER_COLOR_TO_HEX_MAP: { [x: string]: string } = {
  'DIAMOND': colors.indigo[600],
  'MASTER': colors.purple[600],
  'GRANDMASTER': colors.red[600],
  'CHALLENGER': colors.sky[600]
}



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

export type Rank = 1 | 2 | 3 | 4;

const TIER_VALUES: { [key: string]: number } = {
  'IRON': 0,
  'BRONZE': 400,
  'SILVER': 800,
  'GOLD': 1200,
  'PLATINUM': 1600,
  'EMERALD': 2000,
  'DIAMOND': 2400,
  'MASTER': 2800,
  'GRANDMASTER': 2800,  // Masters and above share the same base value for calculation
  'CHALLENGER': 2800    // Masters and above share the same base value for calculation
};

const RANK_VALUES: { [key: number]: number } = {
  1: 300,
  2: 200,
  3: 100,
  4: 0
};

export function convertToWholeLP(tier: string, rank: number, lp: number): number {
  // For Master, Grandmaster, and Challenger, rank is ignored
  if (tier === 'Master' || tier === 'Grandmaster' || tier === 'Challenger') {
    return TIER_VALUES[tier] + lp;
  }

  const baseLP = TIER_VALUES[tier] ?? 0;
  const rankLP = RANK_VALUES[rank] ?? 0;

  return baseLP + rankLP + lp;
}

export type AccountForComparison = {
  tier: string;
  rank: number;
  lp: number;
}
export const caclulateWholeLPForAccount = (account: AccountForComparison): number => {
  return convertToWholeLP(account.tier, account.rank, account.lp)
}

export const compareAccountsByLp = (a: AccountForComparison, b: AccountForComparison): number => {
  const [lpA, lpB] = [caclulateWholeLPForAccount(a), caclulateWholeLPForAccount(b)];
  return lpB - lpA;
}
