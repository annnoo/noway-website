
export const BASE_CDN_URL = 'https://cdn.nowaycdn.com'
export const CDN_SUBROUTES = {
  IMAGES: {
    BASE: '/images',
    CHAMPS: {}
  },

}

export type ImageSizes = '32x' | '64x' | '128x' | '256x' | '512x' | '1024x' | 'full'

export const buildRankUri = (rank: string, size: ImageSizes = '32x') => {

  return `ranks/${size}/${rank}.png`

}
export const buildChampUri = (champ: string | Number, size: ImageSizes = '32x') => {
  return `champions/square/${size}/${champ.toString()}.png`
}

export const buildPerkUri = (perk: string | Number, size: ImageSizes = '32x') => {
  return `masteries/${size}/${perk.toString()}.png`
}

export const buildItemUri = (item: string | Number, size: ImageSizes = '32x') => {
  return `items/${size}/${item.toString()}.png`
}

export const buildSpellUri = (spell: string | Number, size: ImageSizes = '32x') => {
  return `spells/${size}/${spell.toString()}.png`
}
