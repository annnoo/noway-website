const { readFileSync, writeFileSync } = require('fs');
const data = readFileSync('./map.json', 'utf8')

const sawIdMap = new Map();
const points = JSON.parse(data)

points.filter((point) => {

  const id = point.x + '--' + point.y;
  if (sawIdMap.has(id)) {
    // If weve seen it before, check if the new point has data
    // If it does, replace the old point with the new one
    // If it doesnt, keep the old point
    if (point.data) {
      sawIdMap.set(id, point);
    }
    return false;
  }
  sawIdMap.set(id, point);
  return true;
}
);

const filteredPoints = Array.from(sawIdMap.values());

writeFileSync('./map.json', JSON.stringify(filteredPoints), 'utf8')

