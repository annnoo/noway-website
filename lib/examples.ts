export type ParticipantLiveGame = {
  teamId: number
  championId: number
  spell1Id: number
  spell2Id: number
  riotId: string
  perks: {
    perkIds: number[]
    perkStyle: number
    perkSubStyle: number
  }
}

export type BannedChampion = {
  championId: number
  teamId: number
  pickTurn: number
}

export type RawGame = {
  participants: ParticipantLiveGame[]
  bannedChampions: BannedChampion[]
  gameStartTime: number
  gameLength: number
}


export const exampleRawGame = {
  "participants":
    [
      {
        "teamId": 100,
        "spell1Id": 21,
        "spell2Id": 4,
        "championId": 222,
        "riotId": "Yeti de inoxtag#111",
        "gameCustomizationObjects": [],
        "perks": {
          "perkIds": [
            8021,
            8009,
            9103,
            8014,
            8233,
            8236,
            5005,
            5008,
            5001
          ],
          "perkStyle": 8000,
          "perkSubStyle": 8200
        }
      },
      {
        "teamId": 100,
        "spell1Id": 4,
        "spell2Id": 14,
        "championId": 238,
        "riotId": "joger1#5511",
        "gameCustomizationObjects": [],
        "perks": {
          "perkIds": [
            8112,
            8139,
            8138,
            8106,
            8237,
            8210,
            5008,
            5008,
            5001
          ],
          "perkStyle": 8100,
          "perkSubStyle": 8200
        }
      },
      {
        "teamId": 100,
        "spell1Id": 4,
        "spell2Id": 11,
        "championId": 163,
        "riotId": "ZALİM#TURK",
        "gameCustomizationObjects": [],
        "perks": {
          "perkIds": [
            8369,
            8304,
            8313,
            8347,
            8126,
            8135,
            5008,
            5008,
            5001
          ],
          "perkStyle": 8300,
          "perkSubStyle": 8100
        }
      },
      {
        "teamId": 100,
        "spell1Id": 12,
        "spell2Id": 4,
        "championId": 54,
        "riotId": "miki mous#6867",
        "gameCustomizationObjects": [],
        "perks": {
          "perkIds": [
            8229,
            8226,
            8210,
            8237,
            8429,
            8451,
            5005,
            5008,
            5001
          ],
          "perkStyle": 8200,
          "perkSubStyle": 8400
        }
      },
      {
        "teamId": 100,
        "spell1Id": 4,
        "spell2Id": 7,
        "championId": 147,
        "riotId": "Sunfry#EUW",
        "gameCustomizationObjects": [],
        "perks": {
          "perkIds": [
            8369,
            8321,
            8345,
            8316,
            8226,
            8210,
            5007,
            5008,
            5011
          ],
          "perkStyle": 8300,
          "perkSubStyle": 8200
        }
      },
      {
        "teamId": 200,
        "spell1Id": 4,
        "spell2Id": 12,
        "championId": 134,
        "riotId": "FEBIVEN#EUWW",
        "gameCustomizationObjects": [],
        "perks": {
          "perkIds": [
            8230,
            8226,
            8210,
            8237,
            8345,
            8347,
            5005,
            5008,
            5011
          ],
          "perkStyle": 8200,
          "perkSubStyle": 8300
        }
      },
      {
        "teamId": 200,
        "spell1Id": 7,
        "spell2Id": 4,
        "championId": 902,
        "riotId": "Faken#EUWE",
        "gameCustomizationObjects": [],
        "perks": {
          "perkIds": [
            8214,
            8275,
            8210,
            8232,
            8304,
            8345,
            5007,
            5008,
            5011
          ],
          "perkStyle": 8200,
          "perkSubStyle": 8300
        }
      },
      {
        "teamId": 200,
        "spell1Id": 4,
        "spell2Id": 11,
        "championId": 421,
        "riotId": "METROOOOOOOOO#EUW",
        "gameCustomizationObjects": [],
        "perks": {
          "perkIds": [
            8010,
            9111,
            9104,
            8014,
            8304,
            8347,
            5005,
            5008,
            5001
          ],
          "perkStyle": 8000,
          "perkSubStyle": 8300
        }
      },
      {
        "teamId": 200,
        "spell1Id": 4,
        "spell2Id": 12,
        "championId": 39,
        "riotId": "Giyuu zzz#EUW2",
        "gameCustomizationObjects": [],
        "perks": {
          "perkIds": [
            8010,
            8009,
            9104,
            8299,
            8345,
            8347,
            5005,
            5008,
            5001
          ],
          "perkStyle": 8000,
          "perkSubStyle": 8300
        }
      },
      {
        "teamId": 200,
        "spell1Id": 4,
        "spell2Id": 21,
        "championId": 110,
        "riotId": "Kaori#33333",
        "gameCustomizationObjects": [],
        "perks": {
          "perkIds": [
            8369,
            8321,
            8345,
            8316,
            8226,
            8210,
            5005,
            5008,
            5011
          ],
          "perkStyle": 8300,
          "perkSubStyle": 8200
        }
      }
    ],
  "bannedChampions": [
    {
      "championId": 72,
      "teamId": 100,
      "pickTurn": 1
    },
    {
      "championId": 166,
      "teamId": 100,
      "pickTurn": 2
    },
    {
      "championId": 42,
      "teamId": 100,
      "pickTurn": 3
    },
    {
      "championId": 51,
      "teamId": 100,
      "pickTurn": 4
    },
    {
      "championId": 23,
      "teamId": 100,
      "pickTurn": 5
    },
    {
      "championId": 28,
      "teamId": 200,
      "pickTurn": 6
    },
    {
      "championId": 7,
      "teamId": 200,
      "pickTurn": 7
    },
    {
      "championId": 166,
      "teamId": 200,
      "pickTurn": 8
    },
    {
      "championId": 30,
      "teamId": 200,
      "pickTurn": 9
    },
    {
      "championId": 51,
      "teamId": 200,
      "pickTurn": 10
    }
  ],
  "gameStartTime": 1716922751077,
  "gameLength": 837
}

