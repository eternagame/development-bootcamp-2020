export {}

class Component {
  property: number | string | null;

  constructor(property?: number | string){ //?
    if(property)
      this.property = property;
    else
      this.property = null;
  }

  tryAdd(){
    if(typeof this.property === 'string'){
      this.property += '5';
    }
    else if (typeof this.property === 'number') {
      this.property += 5;
    }
    else {
      this.property;
    }
  }
}

const comp1 = new Component(), comp2 = new Component(5);
comp1.tryAdd(); // Does nothing
comp2.tryAdd(); // Increments

abstract class Stream {
  abstract print(message: string): void;

  open(){
    console.log('opened!');
  }
}

class ConsoleStream extends Stream{
  print(message: string){
    console.log(message);
  }
}

class FileStream extends Stream{
  print(message: string){
    console.log('IO' + message);
  }
}

function useStream(stream: Stream) {
  if(stream instanceof ConsoleStream){
    console.log('console');
  }
  if(stream instanceof FileStream){
    console.log('file');
  }
}

useStream(new FileStream());
useStream(new ConsoleStream());

