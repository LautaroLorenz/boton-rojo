const easy: string[] = [
  'dar vuelta y caminar en linea recta', 
  'crear una historia', 
  'hacer origami',
  'cantá una canción a capela',
  'dibujar un perro comiendo queso',
];
const hard: string[] = [
  'tomar una cuchara de picante',
  'comer banana con mayonesa',
  'caminar con una cuchara en la boca que tenga un huevo durante diez pasos',
  'jugar con un amigo o amiga a lanzar un huevo',
];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function getChallenge(dificult: 'easy' | 'hard'): string {
  return dificult === 'hard' ? hard[getRandomInt(hard.length)] : easy[getRandomInt(easy.length)];
}