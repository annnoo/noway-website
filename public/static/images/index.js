const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));



const buildDataMap = (data) => {
  const items = [];

  const styles = data;
  styles.forEach(element => {
    const styleItem = {
      id: element.id,
      pathToFile: element.icon,
    }
    items.push(styleItem);
    const subItems = element.slots.map(i => i.runes);
    subItems.forEach(subItem => {
      subItem.forEach(rune => {
        const runeItem = {
          id: rune.id,
          pathToFile: rune.icon,
        }
        items.push(runeItem);
      });
    });



  });

  return items

}


const items = [
  {
    "id": 5003,
    "imagePath": "perk-images/StatMods/StatModsMagicResIcon.png"
  },
  {
    "id": 5012,
    "imagePath": "perk-images/StatMods/StatModsAdaptiveForceScalingIcon.png"
  },
  {
    "id": 5002,
    "imagePath": "perk-images/StatMods/StatModsArmorIcon.png"
  },
  {
    "id": 5011,
    "imagePath": "perk-images/StatMods/StatModsHealthScalingIcon.png"
  },
  {
    "id": 5013,
    "imagePath": "perk-images/StatMods/StatModsTenacityIcon.png"
  },
  {
    "id": 5008,
    "imagePath": "perk-images/StatMods/StatModsAdaptiveForceIcon.png"
  },
  {
    "id": 5001,
    "imagePath": "perk-images/StatMods/StatModsHealthPlusIcon.png"
  },
  {
    "id": 5007,
    "imagePath": "perk-images/StatMods/StatModsCDRScalingIcon.png"
  },
  {
    "id": 5005,
    "imagePath": "perk-images/StatMods/StatModsAttackSpeedIcon.png"
  },
  {
    "id": 5010,
    "imagePath": "perk-images/StatMods/StatModsMovementSpeedIcon.png"
  }
]

// copy each file to just the id
//
items.forEach(item => {
  fs.copyFileSync('./' + item.imagePath, `./perks/${item.id}.png`);
})

