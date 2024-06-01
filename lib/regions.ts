
export enum Region {
  BR = "BR",
  EUNE = "EUNE",
  EUW = "EUW",
  JP = "JP",
  KR = "KR",
  LAN = "LAN",
  LAS = "LAS",
  NA = "NA",
  OCE = "OCE",
  RU = "RU",
  TR = "TR",
}
import colors from 'tailwindcss/colors'
export const regions = Object.values(Region)
// Maps region to color 500
export const REGION_COLORS = {
  [Region.EUW]: colors.blue[500],
  [Region.NA]: colors.red[500],
  [Region.KR]: colors.yellow[500],
  [Region.EUNE]: colors.orange[500],
  [Region.BR]: colors.green[500],
  [Region.JP]: colors.white,
  [Region.LAN]: colors.purple[500],
  [Region.LAS]: colors.pink[500],
  [Region.OCE]: colors.cyan[500],
  [Region.RU]: colors.gray[500],
  [Region.TR]: colors.teal[500],
  'KOR': colors.yellow[500],
  'LA1': colors.purple[500],
  'LA2': colors.pink[500],
  'RUS': colors.gray[500],
  'EUN': colors.orange[500],
  'TUR': colors.teal[500],
  'JPN': colors.white,
  'CHN': colors.fuchsia[500],
}

export const REGION_NAMES: { [key: string]: string } = {
  'EUW': 'Europe West',
  'NA': 'North America',
  'KR': 'Korea',
  'EUNE': 'Europe Nordic & East',
  'BR': 'Brazil',
  'JP': 'Japan',
  'LAN': 'Latin America North',
  'LAS': 'Latin America South',
  'OCE': 'Oceania',
  'RU': 'Russia',
  'TR': 'Turkey',
  'KOR': 'Korea',
  'LA1': 'Latin America North',
  'LA2': 'Latin America South',
  'RUS': 'Russia',
  'EUN': 'Europe Nordic & East',
  'TUR': 'Turkey',
  'JPN': 'Japan'
};


