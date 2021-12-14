/* eslint-disable max-lines-per-function */
// Write a function that implements a miniature stack-and-register-based
// programming language.

function minilang(commands) {
  let stack = [];
  let register = 0;
  let cmdArr = commands.split(' ');

  for (let index = 0; index < cmdArr.length; index += 1) {
    let current = cmdArr[index];
    let numCurrent = Number(cmdArr[index]);

    if (!isNaN(numCurrent)) {
      register = numCurrent;
      continue;
    }

    switch (current) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register = Math.floor(register % stack.pop());
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        console.log('error');
    }
  }
}

minilang('PRINT');
minilang('5 PUSH 3 MULT PRINT');
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
minilang('5 PUSH POP PRINT');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
minilang('-3 PUSH 5 SUB PRINT');
minilang('6 PUSH');
