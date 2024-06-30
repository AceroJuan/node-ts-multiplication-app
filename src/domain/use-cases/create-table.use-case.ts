export interface CreateTableUseCases {
  execute: (options:CreateTableOptions) => string,
}

export interface CreateTableOptions {
  base        : number,
  limit       : number,
}

export class CreateTable implements CreateTableUseCases {
  constructor(){
    /**
     *  DI -  Dependency Injection
     */
  }

  execute({base, limit}:CreateTableOptions){

    let outputMessage = "";

    for (let number = 1; number <= limit; number++) {
      outputMessage += `${base} X ${number} = ${base * number}\n`
     }

    return outputMessage    
  }
}