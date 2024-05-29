
const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./champion.json', 'utf8'));
const champions = Object.values(data.data);

const champList = champions.map(it => {
  return {
    id: it.key,
    name: it.id,
  }
});
// copy each file to just the id
//
//
console.log(champList)
champList.forEach(item => {
  fs.copyFileSync('./champion/' + item.name.replace(' ', '').replace('\'V', 'v').replace('\'G', 'g').replace('.', '')
    .replace('Kai\'Sa', 'Kaisa').replace('\'K', 'K').replace('\'T', 'T').replace('\'R', 'R').replace('\'L', 'L')
    .replace('\'Sante', 'Sante').replace('\'Z', 'z')
    .replace('\'M', 'M')
    .replace('LeBlanc', 'Leblanc')
    .replace('Wukong', 'MonkeyKing')

    + '.png', `./champion/${item.id}.png`);
})

