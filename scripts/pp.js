const playerNames = ["verti", "mier", "floo", "abri", "partack", "genki", "jelly", "jett", "yobu", "lance"];
const playerCharacter = Object.fromEntries(playerNames.map(name => [name, { playerAvatar: `${name}.png` }]));

console.log(playerCharacter.lance.playerAvatar);
