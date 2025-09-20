import { User } from "src/domain/entities/User";

export class AuthInput
{    
    name: string;
    password: string

    constructor(user: User)
    {
        this.name = user.name;
        this.password = user.password
    }
}
