import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData(size: number) {
    console.log('Drawing 20 watts of power...');
    this.powerService.supplyPower(20);
    console.log(`Reading ${size} worth of data.`);
    return `${size} watts of data.`;
  }
}
