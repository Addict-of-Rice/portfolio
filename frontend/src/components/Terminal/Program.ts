import type { NavigateFunction } from 'react-router';

type ProgramCallbacks = {
  launch: (program: Program) => void;
  print: (value: string) => void;
  clear: () => void;
  exit: () => void;
  navigate: NavigateFunction;
};

export abstract class Program {
  abstract name: string;
  launch;
  print;
  clear;
  exit;
  navigate;

  constructor(callbacks: ProgramCallbacks) {
    const { launch, print, clear, exit, navigate } = callbacks;
    this.launch = launch;
    this.print = print;
    this.clear = clear;
    this.exit = exit;
    this.navigate = navigate;
  }

  abstract start(): void;

  abstract execute(value: string): void;

  protected getCallbacks = () => {
    const { launch, print, clear, exit, navigate } = this;
    return { launch, print, clear, exit, navigate };
  };
}
