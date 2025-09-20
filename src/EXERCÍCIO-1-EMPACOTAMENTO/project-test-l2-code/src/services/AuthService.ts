import { Injectable } from "@nestjs/common/decorators/core";
import { UnauthorizedException } from "@nestjs/common";
import { AuthInput } from "src/domain/dtos/auth/request/AuthInput";
import { SignInData } from "src/domain/dtos/auth/response/SignInData";
import { UserService } from "./UserService";
import { AuthResult } from "src/domain/dtos/auth/AuthResult";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService{
   constructor(
    private userService: UserService,
    private jwtService: JwtService) {}

  
  async validateUser(inputDto: AuthInput) : Promise<SignInData | null>
  { 
    const user = await this.userService.findUserByName(inputDto.name)

    if(user && user.password === inputDto.password)
    {
        return {
            id: user.id,
            name: user.name
        };
    }

    return new SignInData();
  }  


   async authenticate(input: AuthInput) : Promise<AuthResult>
  {
    const user = await this.validateUser(input)

    if(!user){
        throw new UnauthorizedException("Access denied")
    }

    return this.signIn(user)
  }


  async signIn(user: SignInData): Promise<AuthResult>{

    const tokenPayload = {
      sub: user.id,
      username: user.name
    };


    const token = await this.jwtService.signAsync(tokenPayload)

    return { token, userId: user.id, name: user.name}
  }

  
  
}