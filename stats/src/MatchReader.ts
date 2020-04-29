import { dateStringToDate } from './utils';
import { ReadCSV } from './ReadCSV';

export enum MatchResult {
  HomeWon = 'H',
  AwayWon = 'A',
  Draw = 'D',
};

// This could be network reader, file reader, ...
interface IOReader {
  read(): string[][];
}

// we use tuple here
type MatchData = [Date, string, string, number, number, MatchResult, string]

export class MatchReader {

  constructor(public ioReader: IOReader) {};

  private convertLine(line: string[]): MatchData {
    return [
      dateStringToDate(line[0]),
      line[1],
      line[2],
      parseInt(line[3]),
      parseInt(line[4]),
      // Type assertion
      // we override TS default behavior
      // we want that is considered not as a string
      // but as a 
      // possible value of the enum
      line[5] as MatchResult,
      line[6]
    ]
  }

  read(): MatchData[] {
    return this.ioReader.read().map(this.convertLine);
  }

  
}
