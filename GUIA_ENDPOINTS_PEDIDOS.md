# 📚 Guia Rápido - Endpoints de Pedidos

## 📌 Endpoints Disponíveis

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/api/ecommerce/pedidos` | POST | Registra um novo pedido |
| `/api/Ecommerce/pedidos/status` | GET | Consulta o status de um pedido |

---

## 1️⃣ REGISTRAR PEDIDO

### URL
```
POST http://localhost:3000/api/ecommerce/pedidos
```

### Headers
```
Authorization: ApiKey xxxxxxxxxxxx
Content-Type: application/json
```

### Body (Obrigatório)

**Exemplo Simples:**
```json
{
    "nrPedido": "PED001",
    "cdFilial": 1,
    "cliente": {
        "cpfCgc": "123.456.789-00"
    },
    "vlrTotal": 100.00,
    "itens": [
        {
            "cdProduto": 1001,
            "quantidade": 1,
            "vlrUnitario": 100.00
        }
    ]
}
```

**Exemplo Completo:**
```json
{
    "nrPedido": "PED20250325001",
    "cdFilial": 1,
    "cdVendedor": 100,
    "dtEmissao": "2025-03-25T10:30:00.000Z",
    "cliente": {
        "codigo": 1001,
        "nome": "Maria Silva Santos",
        "cpfCgc": "123.456.789-00",
        "telefone": "11987654321",
        "sexo": "F",
        "dtNascimento": "1990-05-15T00:00:00.000Z",
        "endereco": "Avenida Paulista",
        "numero": "1000",
        "complemento": "Sala 500",
        "cep": "01310-100",
        "bairro": "Bela Vista",
        "cidade": "São Paulo",
        "uf": "SP",
        "email": "maria@email.com",
        "clienteFidelidade": true,
        "cadastroSimplificado": false
    },
    "vlrProdutos": 250.00,
    "vlrDescontos": 25.00,
    "vlrFrete": 20.00,
    "vlrOutros": 5.00,
    "vlrTotal": 250.00,
    "observacao": "Entregar entre 9h e 17h",
    "retirar": false,
    "isTransportadora": false,
    "itens": [
        {
            "id": "ITEM001",
            "cdProduto": 1001,
            "cdBarrasProduto": "7891234567890",
            "nomeProduto": "Paracetamol 500mg",
            "quantidade": 2,
            "vlrUnitario": 12.50,
            "vlrDesconto": 2.50,
            "vlrTotal": 22.50
        },
        {
            "id": "ITEM002",
            "cdProduto": 1002,
            "cdBarrasProduto": "7891234567891",
            "nomeProduto": "Dipirona 500mg",
            "quantidade": 3,
            "vlrUnitario": 8.90,
            "vlrDesconto": 3.57,
            "vlrTotal": 23.13
        },
        {
            "id": "ITEM003",
            "cdProduto": 1007,
            "cdBarrasProduto": "7891234567896",
            "nomeProduto": "Vitamina C 1g",
            "quantidade": 1,
            "vlrUnitario": 32.90,
            "vlrDesconto": 0.00,
            "vlrTotal": 32.90
        }
    ],
    "statusPedido": "Pendente",
    "pagamentos": [
        {
            "formaPagamento": "Cartão de Crédito",
            "descricao": "Visa",
            "valor": 250.00,
            "bandeiraCartao": "Visa",
            "qtdParcelas": 3
        }
    ],
    "marketPlace": "Loja Própria"
}
```

### Resposta (Sucesso)
```json
{
    "status": 200,
    "data": {
        "situacao": 1,
        "cdOrcamento": 1000,
        "mensagem": "Orçamento registrado com sucesso"
    },
    "msg": "Orçamento registrado com sucesso"
}
```

⚠️ **Guarde o `cdOrcamento`** - você precisará dele para consultar!

---

## 2️⃣ CONSULTAR STATUS DO PEDIDO

### URL
```
GET http://localhost:3000/api/Ecommerce/pedidos/status?numeroPedido=PED001&cdOrcamento=1000
```

### Headers
```
Authorization: ApiKey xxxxxxxxxxxx
```

### Parâmetros
- `numeroPedido`: número do pedido (mesmo de `nrPedido`)
- `cdOrcamento`: código retornado ao registrar

### Resposta (Sucesso)
```json
{
    "status": 200,
    "data": {
        "situacao": 1,
        "cdOrcamento": 1000,
        "mensagem": "Consulta realizada com sucesso",
        "pedido": { ...dados do pedido... }
    },
    "msg": "Consulta realizada com sucesso"
}
```

---

## 📊 Códigos de Situação

| Código | Status |
|--------|--------|
| 0 | Não encontrado |
| 1 | Pendente |
| 2 | Em separação |
| 3 | Conferência |
| 4 | Faturado |
| 5 | Despachado |
| 6 | Entregue |
| 7 | Entrega não realizada |
| 8 | Cancelado |
| 9 | Devolvido |

---

## 💻 Exemplos com cURL

**Registrar:**
```bash
curl -X POST http://localhost:3000/api/ecommerce/pedidos \
  -H "Authorization: ApiKey xxxxxxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{"nrPedido":"PED001","cdFilial":1,"cliente":{"cpfCgc":"123.456.789-00"},"vlrTotal":100,"itens":[{"cdProduto":1001,"quantidade":1,"vlrUnitario":100}]}'
```

**Consultar:**
```bash
curl "http://localhost:3000/api/Ecommerce/pedidos/status?numeroPedido=PED001&cdOrcamento=1000" \
  -H "Authorization: ApiKey xxxxxxxxxxxx"
```

---

Para mais exemplos de body, consulte: [EXEMPLO_BODY_PEDIDO.md](EXEMPLO_BODY_PEDIDO.md)
