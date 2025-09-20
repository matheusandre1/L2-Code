
export class AuthResult 
{
    token : string;
    userId : number;
    name: string;

    constructor(token: string,userId: number, name: string ){
        this.token = token;
        this.userId = userId;
        this.name = name
    }
}