import { Injectable } from '@nestjs/common';

import { Enterprise } from './enterprise.entity';
import { UUID, randomUUID } from "crypto";
import { CreateEnterpriseDto, UpdateEnterpriseDto } from './dto';

@Injectable()
export class EnterprisesService {
    private enterprises: Enterprise[] = [
        {
            enterprise_id: randomUUID(),
            name: "Google",
            created_at: new Date(),
            updated_at: new Date(),
        },
    ]

    getEnterprises(): Enterprise[]{
        return this.enterprises;
    }

    getEnterpriseById(id: UUID): Enterprise{
        return this.enterprises.find((item)=> item.enterprise_id==id);
    }

    createEnterprise({name}: CreateEnterpriseDto){
        this.enterprises.push({
            enterprise_id: randomUUID(),
            name,
            created_at: new Date(),
            updated_at: new Date()
        });
    }

    updateEnterprise(id: UUID, {name}: UpdateEnterpriseDto){
        const enterprise = this.getEnterpriseById(id);
        enterprise.name = name;
        enterprise.updated_at = new Date(); 
        return enterprise;
    }

    deleteEnterprise(id: UUID){
        const position = this.enterprises.findIndex((item) => item.enterprise_id == id);
        if(position >= 0){
            this.enterprises.splice(position, 1);
        }
    }
}
