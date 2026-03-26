# 📝 Exemplos de Body para Registrar Pedido

## 🎯 Body Completo (Com todos os detalhes)

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

---

## ✅ Body Simplificado (Mínimo Obrigatório)

Use este se preferir um body mais enxuto:

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

---

## 🏪 Body com Múltiplos Produtos (E-commerce)

```json
{
    "nrPedido": "ECOM20250325001",
    "cdFilial": 1,
    "cliente": {
        "nome": "João Santos",
        "cpfCgc": "987.654.321-00",
        "telefone": "21999887766",
        "endereco": "Rua A",
        "numero": "456",
        "cep": "20000-000",
        "cidade": "Rio de Janeiro",
        "uf": "RJ",
        "email": "joao@example.com"
    },
    "vlrProdutos": 500.00,
    "vlrDescontos": 50.00,
    "vlrFrete": 30.00,
    "vlrTotal": 480.00,
    "itens": [
        {
            "cdProduto": 1001,
            "nomeProduto": "Paracetamol 500mg",
            "quantidade": 5,
            "vlrUnitario": 12.50,
            "vlrDesconto": 6.25,
            "vlrTotal": 56.25
        },
        {
            "cdProduto": 1002,
            "nomeProduto": "Dipirona 500mg",
            "quantidade": 10,
            "vlrUnitario": 8.90,
            "vlrDesconto": 8.90,
            "vlrTotal": 80.10
        },
        {
            "cdProduto": 1007,
            "nomeProduto": "Vitamina C 1g",
            "quantidade": 3,
            "vlrUnitario": 32.90,
            "vlrDesconto": 9.87,
            "vlrTotal": 88.83
        },
        {
            "cdProduto": 1015,
            "nomeProduto": "Whey Protein 900g",
            "quantidade": 2,
            "vlrUnitario": 96.00,
            "vlrDesconto": 24.90,
            "vlrTotal": 167.10
        }
    ],
    "statusPedido": "Pendente",
    "pagamentos": [
        {
            "formaPagamento": "Boleto",
            "descricao": "Boleto bancário",
            "valor": 480.00
        }
    ]
}
```

---

## 🏥 Body com Receita Médica

```json
{
    "nrPedido": "PED_REC_001",
    "cdFilial": 1,
    "cliente": {
        "nome": "Ana Clínica",
        "cpfCgc": "456.789.123-00"
    },
    "vlrTotal": 150.00,
    "itens": [
        {
            "cdProduto": 1003,
            "nomeProduto": "Amoxicilina 500mg",
            "quantidade": 1,
            "vlrUnitario": 150.00,
            "receita": {
                "cdMedico": 5001,
                "nrDocMedico": "123456",
                "nmMedico": "Dr. Carlos Silva",
                "especialidadeMedico": "Clínica Geral",
                "dtReceita": "2025-03-25T10:00:00.000Z"
            }
        }
    ],
    "statusPedido": "Pendente"
}
```

---

## 💳 Body com Pagamento em Parcelas

```json
{
    "nrPedido": "PED_PARCEL_001",
    "cdFilial": 1,
    "cliente": {
        "nome": "Pedro Costa",
        "cpfCgc": "111.222.333-00",
        "email": "pedro@example.com"
    },
    "vlrTotal": 300.00,
    "itens": [
        {
            "cdProduto": 1015,
            "nomeProduto": "Whey Protein 900g",
            "quantidade": 2,
            "vlrUnitario": 96.00,
            "vlrTotal": 192.00
        },
        {
            "cdProduto": 1011,
            "nomeProduto": "Ômega 3 1000mg",
            "quantidade": 2,
            "vlrUnitario": 31.50,
            "vlrTotal": 63.00
        }
    ],
    "pagamentos": [
        {
            "formaPagamento": "Cartão de Crédito",
            "descricao": "Mastercard",
            "valor": 300.00,
            "bandeiraCartao": "Mastercard",
            "qtdParcelas": 6,
            "adquirente": "CIELO"
        }
    ],
    "statusPedido": "Pendente"
}
```

---

## 🚚 Body com Transportadora

```json
{
    "nrPedido": "PED_TRANSP_001",
    "cdFilial": 1,
    "cliente": {
        "nome": "Farmácia Central",
        "cpfCgc": "12.345.678/0001-90",
        "endereco": "Rua Central",
        "numero": "789"
    },
    "vlrProdutos": 1000.00,
    "vlrFrete": 150.00,
    "vlrTotal": 1150.00,
    "isTransportadora": true,
    "transportadora": "Sedex",
    "itens": [
        {
            "cdProduto": 1001,
            "nomeProduto": "Paracetamol 500mg",
            "quantidade": 50,
            "vlrUnitario": 12.50,
            "vlrTotal": 625.00
        },
        {
            "cdProduto": 1002,
            "nomeProduto": "Dipirona 500mg",
            "quantidade": 30,
            "vlrUnitario": 8.90,
            "vlrTotal": 267.00
        }
    ],
    "statusPedido": "Pendente"
}
```

---

## 🔑 Como Usar no Postman

1. **Método:** `POST`
2. **URL:** `http://localhost:3000/api/ecommerce/pedidos`
3. **Headers:**
   ```
   Authorization: ApiKey xxxxxxxxxxxx
   Content-Type: application/json
   ```
4. **Body:** Cole um dos JSONs acima
5. **Clique:** `Send`

---

## ✨ Resposta Esperada

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

**Guarde o `cdOrcamento`** - você precisará dele para consultar o status do pedido!

---

## 📋 Campos Obrigatórios

- ✅ `nrPedido` - Número único do pedido
- ✅ `cdFilial` OU `cgcFilial` - Filial ou CNPJ da filial
- ✅ `cliente.cpfCgc` - CPF ou CNPJ do cliente
- ✅ `vlrTotal` - Valor total do pedido
- ✅ `itens` - Array com pelo menos 1 item
- ✅ `itens[].cdProduto` - Código do produto

Todos os outros campos são opcionais! 🎉
