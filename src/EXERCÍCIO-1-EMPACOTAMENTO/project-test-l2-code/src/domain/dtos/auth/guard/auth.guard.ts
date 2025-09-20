import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {

        const request = context.switchToHttp().getRequest();
        const authorization = request.headers.authorization;        
        
         if (!authorization) {
            throw new UnauthorizedException('Cabeçalho de autorização ausente');
        }

        const [bearer, token] = authorization.split(' ');

        if (bearer !== 'Bearer' || !token) {
            throw new UnauthorizedException('Token Bearer ausente ou mal formatado');
        }     

        if (!token) {
            throw new UnauthorizedException('Token Bearer ausente');
        }

        try {
            const tokenPayload = await this.jwtService.verifyAsync(token);
            request.user = {
                id: tokenPayload.sub,
                username: tokenPayload.name,
            };
            return true;
        } catch (error) {
            throw new UnauthorizedException('Token inválido ou expirado');
        }
    }
}