import { Controller } from "@nestjs/common/decorators/core";
import { AuthInput } from "src/domain/dtos/auth/request/AuthInput";
import { AuthService } from "src/services/AuthService";
import { HttpCode, Post, Body } from "@nestjs/common/decorators/http";
import { HttpStatus } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { ApiResponse } from "@nestjs/swagger";



@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService){}


    @HttpCode(HttpStatus.OK)
    @Post("login")
    @ApiOperation({ summary: 'Login do usuário' })
    @ApiResponse({ status: 200})
    @ApiResponse({ status: 401, description: 'Acess denied' })
    login(@Body() userRequest : AuthInput){

        return this.authService.authenticate(userRequest);
    }

}