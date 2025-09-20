import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { OrdersService } from '../services/OrderService';
import { CreateOrdersDto } from 'src/domain/dtos/OrdersDto';
import { ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/domain/dtos/auth/guard/auth.guard';


@Controller("orders")
export class OrdersController{
    constructor(private readonly ordersService: OrdersService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @ApiBearerAuth('access-token')
  @Post('process')
  @ApiOperation({summary: "Cadastra uma lista de Produtos", 
    description: "Retorna os pedidos correspondentes Agrupados pela Chave de Identificação"})
  
  processOrders(@Body() createOrdersDto: CreateOrdersDto) {
    return this.ordersService.processOrders(createOrdersDto.orders);
  }
}