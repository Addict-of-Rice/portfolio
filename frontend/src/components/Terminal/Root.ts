import { Program } from './Program';

export class Root extends Program {
  name = 'Root';

  start = () => {
    this.print(`Type "help" to see commands`);
  };

  execute = (value: string) => {
    const words = value.split(' ');

    switch (words[0]) {
      case 'help':
        this.print(
          `[List of Commands]
help - Displays this message
clear - Clears the terminal
ls - lists available pages
cd [page] - navigates to the specified page
uni - run university command line assignment
crash - lists ways to crash this website
exit - exit the current program (Ctrl + C)
          `
        );
        break;
      case 'clear':
        this.clear();
        break;
      case 'ls':
        this.print(
          `[List of Pages]
Home, Projects, Career, Education
          `
        );
        break;
      case 'cd':
        switch ((words[1] ?? '').toLowerCase()) {
          case '':
          case 'home':
          case 'about':
            this.navigate('/');
            break;
          case 'projects':
            this.navigate('/projects');
            break;
          case 'career':
            this.navigate('/career');
            break;
          case 'education':
            this.navigate('/education');
            break;
          default:
            this.print('Please choose a valid page.');
        }
        break;
      // case 'uni':
      //   this.launch(new Uni(this.getCallbacks()));
      //   break;
      case 'color':
        break;
      default:
        this.print(`unknown command, type "help" to see commands`);
    }
  };
}
