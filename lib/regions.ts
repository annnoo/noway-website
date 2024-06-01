
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

export const convertErrorsInRegionToActualRegionForMap = (region: string): Region => {
  switch (region.toUpperCase()) {
    case "BR1":
    case "BRA":
    case "BRAZIL":
      return Region.BR;
    case "EUN1":
    case "EUNE":
    case "EUN":
      return Region.EUNE;
    case "EUW1":
    case "EUW":
      return Region.EUW;
    case "JP1":
    case "JP":
    case "JAP":
      return Region.JP;
    case "KR":
    case "KR1":
    case "KOR":
      return Region.KR;
    case "LA1":
    case "LAN":
      return Region.LAN;
    case "LA2":
    case "LAS":
      return Region.LAS;
    case "NA1":
      return Region.NA;
    case "OC1":
    case "OCE":
    case "OCE1":
      return Region.OCE;
    case "RU":
    case "RUS":
      return Region.RU;
    case "TR1":
    case "TRK":
    case "TUR":
      return Region.TR;
    default:
      return region as Region
  }
}

