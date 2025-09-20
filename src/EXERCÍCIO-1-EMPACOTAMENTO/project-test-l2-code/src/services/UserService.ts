import { Injectable } from "@nestjs/common";
import { User } from "src/domain/entities/User";


@Injectable()
export class UserService{

    private readonly users: User[] = 
    [
        {
            id: 1,
            name: "Meozi",
            password: "f1!S.2<ckn"
        },
        
        {
            id: 2,
            name: "Puxol",
            password: "8N{eFtg8GZ"
        }
    ] 
    
    
    async findUserByName(name: string): Promise<User | undefined>{
       return this.users.find((user) => user.name === name);
    }    
}