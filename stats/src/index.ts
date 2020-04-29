import { MatchReader, MatchResult } from './MatchReader';
import { ReadCSV } from './ReadCSV';

const readCSV = new MatchReader(new ReadCSV('./football.csv'));

const data = readCSV.read();


let manUnitedWins = 0;

for (let match of data) {

  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWon) {
    manUnitedWins++;
  }
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWon) {
    manUnitedWins++;
  }
}

console.log(`Manchester United won ${manUnitedWins} games`);

