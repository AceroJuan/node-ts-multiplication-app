import fs from 'fs';
import { yarg } from '../../config/plugins/args.plugin'

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent       : string;
  fileDestination?  : string;
  fileName?         : string;
}

export class SaveFile implements SaveFileUseCase {
  constructor(
    /** Repository: StorageRepository */
  ){}
  execute({fileContent, fileDestination = yarg.d, fileName = yarg.n}: Options):boolean {
    
    try {
      fs.mkdirSync(fileDestination, {recursive:true});
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent)
      return true
    
    } catch (error) {
      console.error(error)
      return false
    }
    
  }
}