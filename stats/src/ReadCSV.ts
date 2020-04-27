// TS reports us an 'false' error
// cannot find module fs
// and we have to install a type
// definition file (in fact for whole node)
// a bit different for other libs where it 
// says missing type definition
import fs from 'fs';

export abstract class ReadCSV<T> {
  // this shorthand is conveniant to avoid
  // hassle of declaring property and affect it
  // in the constructor
  constructor(public fileName: string) {}

  abstract convertLine(line: string[]): T;

  read(): T[] {
    // this is the fole file
    // note: maybe better to do async
    // with readline, but did not find easy pattern
    // with classes
    const rawString = fs.readFileSync(this.fileName, {
      encoding: 'utf-8',
    });

    const lineMapper = (line: string): string[] => {
      return line.split(',');
    };

    return rawString.split('\n')
    .map(lineMapper)
    .map(this.convertLine);
  }
}