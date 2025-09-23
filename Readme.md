# Teste Técnico L2 Code - Empacotamento

Este repositório apresenta a solução para os exercícios de **Empacotamento** e **Horários de Aula**. Ele contém APIs que calculam dimensões ideais de caixas para pedidos e gerenciam horários de aulas de professores.

---

## Referências do Projeto

# Exercício 1 - Empacotamento

- **Repositório no GitHub**: [matheusandre1/Exercicio1-empacotamento](https://github.com/matheusandre1/Exercicio1-empacotamento)
- **Deploy da API**: [Link para API](https://exercicio1-empacotamento.onrender.com/api-docs#)

### Exercício 2 - Horários de Aula

- **Repositório no GitHub**: [Exercicio2-HorariosDeAula](https://github.com/matheusandre1/Exercicio2-HorariosDeAula)
- **Deploy da API**: [Swagger UI](https://exercicio2-horariosdeaula-5.onrender.com/swagger-ui/index.html)


## **Exercício 1 - Empacotamento**

### Descrição

A API processa uma lista de pedidos, onde cada pedido contém uma lista de produtos, e determina a melhor forma de embalar os produtos, otimizando o uso do espaço disponível nas caixas de papelão.

### **Caixas Disponíveis**

Seu Manoel possui as seguintes dimensões de caixas (altura x largura x comprimento em centímetros):

- **Caixa 1**: 30 x 40 x 80
- **Caixa 2**: 50 x 50 x 40
- **Caixa 3**: 50 x 80 x 60

### **Entrada do Endpoint**

A API deve receber um **JSON** contendo N pedidos diferentes. Cada pedido deve conter uma lista de produtos, onde cada produto tem suas dimensões (altura, largura, comprimento).

POST /orders/process

**Descrição**: Recebe um array de pedidos, cada um com uma lista de produtos e suas dimensões.

#### **Exemplo de Entrada**:

```json
{
  "orders": [
    {
      "order_id": 1,
      "products": [
        {
          "product_id": "PS5",
          "dimensions": { "height": 40, "width": 10, "length": 25 }
        },
        {
          "product_id": "Steering Wheel",
          "dimensions": { "height": 40, "width": 30, "length": 30 }
        }
      ]
    }
  ]
}

```


```json
{
  "orders": [
    {
      "order_id": 1,
      "products": [
        {
          "product_id": "PS5",
          "dimensions": { "height": 40, "width": 10, "length": 25 }
        },
        {
          "product_id": "Steering Wheel",
          "dimensions": { "height": 40, "width": 30, "length": 30 }
        }
      ]
    },
    {
      "order_id": 2,
      "products": [
        {
          "product_id": "Joystick",
          "dimensions": { "height": 15, "width": 20, "length": 10 }
        },
        {
          "product_id": "Fifa 24",
          "dimensions": { "height": 10, "width": 30, "length": 10 }
        },
        {
          "product_id": "Call of Duty",
          "dimensions": { "height": 30, "width": 15, "length": 10 }
        }
      ]
    },
    {
      "order_id": 3,
      "products": [
        {
          "product_id": "Headset",
          "dimensions": { "height": 25, "width": 15, "length": 20 }
        }
      ]
    },
    {
      "order_id": 4,
      "products": [
        {
          "product_id": "Gaming Mouse",
          "dimensions": { "height": 5, "width": 8, "length": 12 }
        },
        {
          "product_id": "Mechanical Keyboard",
          "dimensions": { "height": 4, "width": 45, "length": 15 }
        }
      ]
    },
    {
      "order_id": 5,
      "products": [
        {
          "product_id": "Gaming Chair",
          "dimensions": { "height": 120, "width": 60, "length": 70 }
        }
      ]
    },
    {
      "order_id": 6,
      "products": [
        {
          "product_id": "Webcam",
          "dimensions": { "height": 7, "width": 10, "length": 5 }
        },
        {
          "product_id": "Microphone",
          "dimensions": { "height": 25, "width": 10, "length": 10 }
        },
        {
          "product_id": "Monitor",
          "dimensions": { "height": 50, "width": 60, "length": 20 }
        },
        {
          "product_id": "Laptop",
          "dimensions": { "height": 2, "width": 35, "length": 25 }
        }
      ]
    },
    {
      "order_id": 7,
      "products": [
        {
          "product_id": "Cable Set",
          "dimensions": { "height": 5, "width": 15, "length": 10 }
        }
      ]
    },
    {
      "order_id": 8,
      "products": [
        {
          "product_id": "Xbox Controller",
          "dimensions": { "height": 10, "width": 15, "length": 10 }
        },
        {
          "product_id": "Charger",
          "dimensions": { "height": 3, "width": 8, "length": 8 }
        }
      ]
    },
    {
      "order_id": 9,
      "products": [
        {
          "product_id": "Tablet",
          "dimensions": { "height": 1, "width": 25, "length": 17 }
        }
      ]
    },
    {
      "order_id": 10,
      "products": [
        {
          "product_id": "External HDD",
          "dimensions": { "height": 2, "width": 8, "length": 12 }
        },
        {
          "product_id": "USB Flash Drive",
          "dimensions": { "height": 1, "width": 2, "length": 5 }
        }
      ]
    }
  ]
}

#### **Exemplo de Saida**:

```json
{
  "orders": [
    {
      "order_id": 1,
      "boxes": [
        {
          "box_id": 1,
          "dimensions": { "height": 30, "width": 40, "length": 80 },
          "products": ["PS5"]
        },
        {
          "box_id": 2,
          "dimensions": { "height": 50, "width": 50, "length": 40 },
          "products": ["Steering Wheel"]
        }
      ]
    }
  ]
}

```


POST /auth/login

Realiza o login de um usuário.


```json
{
  "name": "Meozi",
  "password": "f1!S.2<ckn"
}
```

```json
{
   "name": "Puxol",
   "password": "8N{eFtg8GZ"
}

```

```

# Resposta de Sucesso: Recebe Token e Precisa Colocar No Authorize pra testar o Endpoint da orders/process


# EXERCÍCIO 2 - HORÁRIOS DE AULA

## Descrição

Este repositório contém um exercício para gerenciamento de horários de aulas de professores em uma escola fictícia. O sistema possui duas funcionalidades principais: 

1. **Consulta 1**: Obter a quantidade de horas que cada professor tem comprometido com aulas.
2. **Consulta 2**: Obter uma lista de salas com horários livres e ocupados.

A consulta SQL que retorna a quantidade total de horas comprometidas por cada professor nas aulas é a seguinte:

Get /api/professor/workload

``` sql
SELECT p.id AS professorId,
       CONCAT(p.id, ' - Professor') AS professorName,
       ROUND(SUM(EXTRACT(EPOCH FROM (cs.end_time::time - cs.start_time::time)) / 3600), 2) AS totalHours
FROM professors p
JOIN class c ON c.professor_id = p.id
JOIN class_schedule cs ON cs.class_id = c.id
GROUP BY p.id
ORDER BY totalHours DESC;
```

#A consulta SQL para obter uma lista de salas, junto com seus horários livres e ocupados, é a seguinte:

Get /api/professor/workload



Get /api/rooms/schedules

# Faz a Busca e Verifica se Sala está ocupado ou livre

```sql
SELECT r.id AS roomId,
               r.building_id AS buildingId,
               cs.day_of_week AS dayOfWeek,
               cs.start_time AS startTime,
               cs.end_time AS endTime,
               CASE 
                   WHEN cs.id IS NOT NULL THEN 'Ocupada'
                   ELSE 'Livre'
               END AS status
FROM rooms r
LEFT JOIN class_schedule cs ON r.id = cs.room_id
ORDER BY r.id, cs.day_of_week, cs.start_time;

```




## Stack utilizada


**Back-end:** Node, NestJs, Typescript, Java, Spring Boot, PostgreSQL



