import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EnterprisesService } from './enterprises.service'
import { CreateEnterpriseDto, UpdateEnterpriseDto } from './dto';
import { Enterprise } from './enterprise.entity';

@Controller('enterprises')
export class EnterprisesController {
    constructor(private readonly enterpriseService: EnterprisesService) { }

    @Get()
    getEnterprises(): Enterprise[] {
        return this.enterpriseService.getEnterprises();
    }

    @Get(':id')
    getEnterprise(@Param('id') id: string): Enterprise {
        const id_array = id.split("-");
        return this.enterpriseService.getEnterpriseById(`${id_array[0]}-${id_array[1]}-${id_array[2]}-${id_array[3]}-${id_array[4]}`);
    }

    @Post()
    createEnterprise(@Body() enterprise: CreateEnterpriseDto) {
        return this.enterpriseService.createEnterprise(enterprise);
    }

    @Patch(':id')
    updateEnterprise(@Param('id') id: string, @Body() enterprise: UpdateEnterpriseDto): Enterprise{
        const id_array = id.split("-");
        return this.enterpriseService.updateEnterprise(`${id_array[0]}-${id_array[1]}-${id_array[2]}-${id_array[3]}-${id_array[4]}`, enterprise);
    }

    @Delete(':id')
    deleteEnterprise(@Param('id') id: string){
        const id_array = id.split("-");
        return this.enterpriseService.deleteEnterprise(`${id_array[0]}-${id_array[1]}-${id_array[2]}-${id_array[3]}-${id_array[4]}`);
    }
}
