# API Mock - Consulta de Produtos E-commerce

API mockada em Node.js para simular o endpoint de consulta de produtos e estoque de e-commerce.

## Instalação

```bash
npm install
```

## Iniciar servidor

```bash
npm start
```

Servidor disponível em `http://localhost:3000`

## Configuração

Edite o arquivo `.env`:
```env
PORT=3000
API_KEY=xxxxxxxxxxxx
```

## Endpoints

### GET /api/ecommerce/produtos/consulta

Consulta produtos com seus respectivos estoques e valores.

**Headers obrigatórios:**
```
Authorization: ApiKey xxxxxxxxxxxx
```

**Parâmetros de consulta (Query Parameters):**

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| $count | boolean | Não | Se `true`, retorna o total de registros encontrados |
| $skip | integer | Não | Número de registros a pular (paginação) |
| $top | integer | Não | Número de registros a retornar (máx: 500) |
| cdFilial | integer | Não | Filtrar por código da filial |
| cdProduto | integer | Não | Filtrar por código do produto |
| inativo | boolean | Não | Filtrar por produtos ativos/inativos |

**Exemplos de requisição:**

```bash
# Consultar todos os produtos
curl -H "Authorization: ApiKey xxxxxxxxxxxx" http://localhost:3000/api/ecommerce/produtos/consulta

# Consultar com contagem total
curl -H "Authorization: ApiKey xxxxxxxxxxxx" http://localhost:3000/api/ecommerce/produtos/consulta?$count=true

# Consultar com paginação
curl -H "Authorization: ApiKey xxxxxxxxxxxx" http://localhost:3000/api/ecommerce/produtos/consulta?$skip=10&$top=5

# Filtrar por filial
curl -H "Authorization: ApiKey xxxxxxxxxxxx" http://localhost:3000/api/ecommerce/produtos/consulta?cdFilial=1

# Filtrar por produto
curl -H "Authorization: ApiKey xxxxxxxxxxxx" http://localhost:3000/api/ecommerce/produtos/consulta?cdProduto=1005
```

**Resposta de sucesso (200):**

```json
{
    "status": 200,
    "data": [
        {
            "cdFilial": 1,
            "cdProduto": 1001,
            "descricao": "Paracetamol 500mg - Caixa com 20 comprimidos",
            "descricaoUsual": "Paracetamol 500mg",
            "codigoBarras": "7891234567890",
            "inativo": false,
            "cdMarca": 10,
            "nomeMarca": "Medley",
            "cdFabricante": 100,
            "nomeFabricante": "Medley Farmacêutica",
            "cdLinha": 5,
            "nomeLinha": "Analgésicos",
            "cdCategoria": 50,
            "nomeCategoria": "Medicamentos",
            "qtdEstoque": 150.00,
            "vlrTabela": 12.50,
            "percDesconto": 10.00,
            "vlrOferta": 11.25,
            "dtCadastro": "2024-01-15T08:30:00",
            "dtUltimaAlteracao": "2026-02-20T14:22:00",
            "nsuRegistro": 10001,
            "controleSngpc": false,
            "cdDepartamento": 1,
            "nomeDepartamento": "Farmácia",
            "controlado": false,
            "antimicrobiano": false,
            "etico": false,
            "generico": true,
            "similar": false,
            "tipoReceituario": "Isento",
            "tipoReceita": "Isento",
            "corReceita": "Branca"
        }
    ],
    "msg": "Consulta realizada com sucesso",
    "total": 30
}
```

**Resposta de erro (401 - Não autorizado):**

```json
{
    "status": 401,
    "data": [],
    "msg": "ApiKey inválido",
    "total": 0
}
```

**Resposta de erro (500 - Erro interno):**

```json
{
    "status": 500,
    "data": [],
    "msg": "Erro ao processar consulta: [mensagem do erro]",
    "total": 0
}
```

### GET /health

Health check da API.

```bash
curl http://localhost:3000/health
```

## Campos da Resposta

| Campo | Tipo | Pode ser NULL | Descrição |
|-------|------|---------------|-----------|
| cdFilial | int32 | Não | Código da filial |
| cdProduto | int32 | Não | Código do produto |
| descricao | string | Não | Descrição completa do produto |
| descricaoUsual | string | Não | Descrição usual/comercial |
| codigoBarras | string | Não | Código de barras (EAN) |
| inativo | bool | Não | Se o produto está inativo |
| cdMarca | int32 | Sim | Código da marca |
| nomeMarca | string | Sim | Nome da marca |
| cdFabricante | int32 | Sim | Código do fabricante |
| nomeFabricante | string | Sim | Nome do fabricante |
| cdLinha | int32 | Sim | Código da linha de produtos |
| nomeLinha | string | Sim | Nome da linha |
| cdCategoria | int32 | Sim | Código da categoria |
| nomeCategoria | string | Sim | Nome da categoria |
| qtdEstoque | double | Não | Quantidade em estoque |
| vlrTabela | double | Não | Valor de tabela |
| percDesconto | double | Não | Percentual de desconto |
| vlrOferta | double | Não | Valor com desconto aplicado |
| dtCadastro | dateTime | Não | Data de cadastro |
| dtUltimaAlteracao | dateTime | Não | Data da última alteração |
| nsuRegistro | int32 | Não | NSU do registro |
| controleSngpc | bool | Não | Se tem controle SNGPC |
| cdDepartamento | int32 | Não | Código do departamento |
| nomeDepartamento | string | Não | Nome do departamento |
| controlado | bool | Não | Se é medicamento controlado |
| antimicrobiano | bool | Não | Se é antimicrobiano |
| etico | bool | Não | Se é medicamento ético |
| generico | bool | Não | Se é medicamento genérico |
| similar | bool | Não | Se é medicamento similar |
| tipoReceituario | string | Não | Tipo de receituário necessário |
| tipoReceita | string | Não | Tipo de receita |
| corReceita | string | Não | Cor da receita |
