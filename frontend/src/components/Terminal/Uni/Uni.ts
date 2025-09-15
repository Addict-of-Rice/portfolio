import { Program } from '../Program';

export class Uni extends Program {
  name = 'Uni';

  start = () => {
    this.print(`Here is a list of uni programs`);
  };

  execute = () => {
    this.print('Leave me alone');
  };
}
