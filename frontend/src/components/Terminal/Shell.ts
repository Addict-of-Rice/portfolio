import type { Dispatch, SetStateAction } from 'react';
import { Program } from './Program';
import { Root } from './Root';
import type { NavigateFunction } from 'react-router';

export class Shell {
  line;
  setText;
  stack: Program[] = [];

  constructor(setText: Dispatch<SetStateAction<string>>, navigate: NavigateFunction) {
    this.line = '';
    this.setText = setText;
    const { launch, print, clear, exit } = this;
    this.launch(new Root({ launch, print, clear, exit, navigate }), true);
  }

  getCurrent = () => {
    return this.stack.at(-1)!;
  };

  awaitInput = () => {
    const fullname = this.stack.map((program) => program.name).join(':');
    this.setText((prev) => `${prev}${fullname}> `);
    this.line = '';
  };

  launch = (program: Program, initialLaunch?: boolean) => {
    this.stack.push(program);
    program.start();
    if (initialLaunch) {
      this.awaitInput();
    }
  };

  type = (value: string) => {
    this.setText((prev) => prev + value);
    this.line = this.line + value;
  };

  backspace = () => {
    if (this.line.length > 0) {
      this.setText((prev) => prev.slice(0, -1));
      this.line = this.line.slice(0, -1);
    }
  };

  print = (value: string) => {
    this.setText((prev) => `${prev}\n${value}\n`);
  };

  clear = () => {
    this.setText('');
  };

  execute = () => {
    if (this.line === 'exit') {
      this.exit();
    } else {
      this.setText((prev) => prev + '\n');
      this.getCurrent().execute(this.line);
      this.awaitInput();
    }
  };

  exit = () => {
    if (this.stack.length > 1) {
      this.stack.pop();
      this.print('');
    } else {
      this.print('Cannot exit root!\n');
    }
    this.awaitInput();
  };
}
