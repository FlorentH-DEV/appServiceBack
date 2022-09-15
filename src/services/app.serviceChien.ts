import { Injectable } from '@nestjs/common';
import { Chien } from 'src/model/modelChien';

@Injectable()
export class AppServiceChien {
  getHello(): string {

    let chien = new Chien({name: "felon", age: 10})
    return chien.jeSuis();
  }
}
