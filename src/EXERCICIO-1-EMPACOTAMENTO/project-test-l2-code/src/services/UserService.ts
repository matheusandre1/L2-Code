import { Injectable } from "@nestjs/common";
import { AuthInput } from "src/domain/dtos/auth/request/AuthInput";
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
    
    
    async findUserByNameAndPassword(user: AuthInput): Promise<User | undefined>{
       return this.users.find((usermodel) => usermodel.name === user.name && usermodel.password === user.password);
    }
    
    
}