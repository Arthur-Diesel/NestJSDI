import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  run(
    @Query('firstNumber') firstNumber: string,
    @Query('secondNumber') secondNumber: string,
  ) {
    console.log('Computer is running...');
    console.log(`firstNumber: ${firstNumber}`);
    console.log(`secondNumber: ${secondNumber}`);

    const firstNumberFormatted: number = parseInt(firstNumber);
    const secondNumberFormatted: number = parseInt(secondNumber);

    if (
      Number.isNaN(firstNumberFormatted) ||
      Number.isNaN(secondNumberFormatted)
    ) {
      throw new BadRequestException('Invalid input.');
    }

    const data = this.diskService.getData(10);
    const result = this.cpuService.compute(
      firstNumberFormatted,
      secondNumberFormatted,
    );
    
    return {
        result,
        data
    };
  }
}
