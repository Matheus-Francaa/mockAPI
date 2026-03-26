require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || 'xxxxxxxxxxxx';

app.use(express.json());

// Dados mockados de produtos
const produtosMockados = [
    {
        cdFilial: 1,
        cdProduto: 1001,
        descricao: "Paracetamol 500mg - Caixa com 20 comprimidos",
        descricaoUsual: "Paracetamol 500mg",
        codigoBarras: "7891234567890",
        inativo: false,
        cdMarca: 10,
        nomeMarca: "Medley",
        cdFabricante: 100,
        nomeFabricante: "Medley Farmacêutica",
        cdLinha: 5,
        nomeLinha: "Analgésicos",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 150.00,
        vlrTabela: 12.50,
        percDesconto: 10.00,
        vlrOferta: 11.25,
        dtCadastro: "2024-01-15T08:30:00",
        dtUltimaAlteracao: "2026-02-20T14:22:00",
        nsuRegistro: 10001,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 1002,
        descricao: "Dipirona Sódica 500mg - Caixa com 10 comprimidos",
        descricaoUsual: "Dipirona 500mg",
        codigoBarras: "7891234567891",
        inativo: false,
        cdMarca: 11,
        nomeMarca: "Neo Química",
        cdFabricante: 101,
        nomeFabricante: "Neo Química Laboratório",
        cdLinha: 5,
        nomeLinha: "Analgésicos",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 200.00,
        vlrTabela: 8.90,
        percDesconto: 15.00,
        vlrOferta: 7.57,
        dtCadastro: "2024-01-20T09:15:00",
        dtUltimaAlteracao: "2026-02-18T10:30:00",
        nsuRegistro: 10002,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 1003,
        descricao: "Amoxicilina 500mg - Caixa com 21 cápsulas",
        descricaoUsual: "Amoxicilina 500mg",
        codigoBarras: "7891234567892",
        inativo: false,
        cdMarca: 12,
        nomeMarca: "EMS",
        cdFabricante: 102,
        nomeFabricante: "EMS Farmacêutica",
        cdLinha: 8,
        nomeLinha: "Antibióticos",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 80.00,
        vlrTabela: 25.90,
        percDesconto: 5.00,
        vlrOferta: 24.61,
        dtCadastro: "2024-02-01T11:00:00",
        dtUltimaAlteracao: "2026-02-25T16:45:00",
        nsuRegistro: 10003,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: true,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Simples",
        tipoReceita: "Simples",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 1004,
        descricao: "Omeprazol 20mg - Caixa com 28 cápsulas",
        descricaoUsual: "Omeprazol 20mg",
        codigoBarras: "7891234567893",
        inativo: false,
        cdMarca: 10,
        nomeMarca: "Medley",
        cdFabricante: 100,
        nomeFabricante: "Medley Farmacêutica",
        cdLinha: 12,
        nomeLinha: "Aparelho Digestivo",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 120.00,
        vlrTabela: 18.50,
        percDesconto: 20.00,
        vlrOferta: 14.80,
        dtCadastro: "2024-01-25T10:20:00",
        dtUltimaAlteracao: "2026-02-22T09:15:00",
        nsuRegistro: 10004,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 1005,
        descricao: "Losartana Potássica 50mg - Caixa com 30 comprimidos",
        descricaoUsual: "Losartana 50mg",
        codigoBarras: "7891234567894",
        inativo: false,
        cdMarca: 11,
        nomeMarca: "Neo Química",
        cdFabricante: 101,
        nomeFabricante: "Neo Química Laboratório",
        cdLinha: 15,
        nomeLinha: "Sistema Cardiovascular",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 95.00,
        vlrTabela: 22.90,
        percDesconto: 12.00,
        vlrOferta: 20.15,
        dtCadastro: "2024-02-10T14:30:00",
        dtUltimaAlteracao: "2026-02-24T11:20:00",
        nsuRegistro: 10005,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Simples",
        tipoReceita: "Simples",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 1006,
        descricao: "Rivotril 2mg - Caixa com 20 comprimidos",
        descricaoUsual: "Rivotril 2mg",
        codigoBarras: "7891234567895",
        inativo: false,
        cdMarca: 15,
        nomeMarca: "Roche",
        cdFabricante: 105,
        nomeFabricante: "Roche Farmacêutica",
        cdLinha: 20,
        nomeLinha: "Sistema Nervoso",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 45.00,
        vlrTabela: 85.00,
        percDesconto: 0.00,
        vlrOferta: 85.00,
        dtCadastro: "2024-01-18T13:45:00",
        dtUltimaAlteracao: "2026-02-19T15:30:00",
        nsuRegistro: 10006,
        controleSngpc: true,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: true,
        antimicrobiano: false,
        etico: true,
        generico: false,
        similar: false,
        tipoReceituario: "Especial",
        tipoReceita: "Receituário B",
        corReceita: "Azul"
    },
    {
        cdFilial: 1,
        cdProduto: 1007,
        descricao: "Vitamina C 1g - Pote com 30 comprimidos efervescentes",
        descricaoUsual: "Vitamina C 1g",
        codigoBarras: "7891234567896",
        inativo: false,
        cdMarca: 20,
        nomeMarca: "Redoxon",
        cdFabricante: 110,
        nomeFabricante: "Bayer S.A.",
        cdLinha: 25,
        nomeLinha: "Vitaminas",
        cdCategoria: 55,
        nomeCategoria: "Suplementos",
        qtdEstoque: 180.00,
        vlrTabela: 32.90,
        percDesconto: 25.00,
        vlrOferta: 24.68,
        dtCadastro: "2024-01-12T08:00:00",
        dtUltimaAlteracao: "2026-02-21T10:00:00",
        nsuRegistro: 10007,
        controleSngpc: false,
        cdDepartamento: 2,
        nomeDepartamento: "Suplementos",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: false,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 1008,
        descricao: "Ibuprofeno 600mg - Caixa com 20 comprimidos",
        descricaoUsual: "Ibuprofeno 600mg",
        codigoBarras: "7891234567897",
        inativo: false,
        cdMarca: 12,
        nomeMarca: "EMS",
        cdFabricante: 102,
        nomeFabricante: "EMS Farmacêutica",
        cdLinha: 5,
        nomeLinha: "Analgésicos",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 110.00,
        vlrTabela: 15.80,
        percDesconto: 8.00,
        vlrOferta: 14.54,
        dtCadastro: "2024-02-05T09:30:00",
        dtUltimaAlteracao: "2026-02-23T13:10:00",
        nsuRegistro: 10008,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 1009,
        descricao: "Azitromicina 500mg - Caixa com 5 comprimidos",
        descricaoUsual: "Azitromicina 500mg",
        codigoBarras: "7891234567898",
        inativo: false,
        cdMarca: 10,
        nomeMarca: "Medley",
        cdFabricante: 100,
        nomeFabricante: "Medley Farmacêutica",
        cdLinha: 8,
        nomeLinha: "Antibióticos",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 65.00,
        vlrTabela: 28.50,
        percDesconto: 10.00,
        vlrOferta: 25.65,
        dtCadastro: "2024-01-28T11:15:00",
        dtUltimaAlteracao: "2026-02-20T08:45:00",
        nsuRegistro: 10009,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: true,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Simples",
        tipoReceita: "Simples",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 1010,
        descricao: "Metformina 850mg - Caixa com 30 comprimidos",
        descricaoUsual: "Metformina 850mg",
        codigoBarras: "7891234567899",
        inativo: false,
        cdMarca: 11,
        nomeMarca: "Neo Química",
        cdFabricante: 101,
        nomeFabricante: "Neo Química Laboratório",
        cdLinha: 30,
        nomeLinha: "Antidiabéticos",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 140.00,
        vlrTabela: 16.90,
        percDesconto: 18.00,
        vlrOferta: 13.86,
        dtCadastro: "2024-02-08T10:45:00",
        dtUltimaAlteracao: "2026-02-26T07:30:00",
        nsuRegistro: 10010,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Simples",
        tipoReceita: "Simples",
        corReceita: "Branca"
    },
    {
        cdFilial: 2,
        cdProduto: 1011,
        descricao: "Ômega 3 1000mg - Pote com 60 cápsulas",
        descricaoUsual: "Ômega 3",
        codigoBarras: "7891234567800",
        inativo: false,
        cdMarca: 25,
        nomeMarca: "Vitaminlife",
        cdFabricante: 115,
        nomeFabricante: "Vitaminlife Indústria",
        cdLinha: 25,
        nomeLinha: "Vitaminas",
        cdCategoria: 55,
        nomeCategoria: "Suplementos",
        qtdEstoque: 220.00,
        vlrTabela: 45.00,
        percDesconto: 30.00,
        vlrOferta: 31.50,
        dtCadastro: "2024-01-22T12:30:00",
        dtUltimaAlteracao: "2026-02-25T14:20:00",
        nsuRegistro: 10011,
        controleSngpc: false,
        cdDepartamento: 2,
        nomeDepartamento: "Suplementos",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: false,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 2,
        cdProduto: 1012,
        descricao: "Protetor Solar FPS 50 - 120ml",
        descricaoUsual: "Protetor Solar FPS 50",
        codigoBarras: "7891234567801",
        inativo: false,
        cdMarca: 30,
        nomeMarca: "La Roche-Posay",
        cdFabricante: 120,
        nomeFabricante: "L'Oréal Brasil",
        cdLinha: 35,
        nomeLinha: "Dermocosméticos",
        cdCategoria: 60,
        nomeCategoria: "Cosméticos",
        qtdEstoque: 85.00,
        vlrTabela: 89.90,
        percDesconto: 15.00,
        vlrOferta: 76.42,
        dtCadastro: "2024-01-30T15:00:00",
        dtUltimaAlteracao: "2026-02-24T16:30:00",
        nsuRegistro: 10012,
        controleSngpc: false,
        cdDepartamento: 3,
        nomeDepartamento: "Cosméticos",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: false,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 1013,
        descricao: "Dorflex - Caixa com 36 comprimidos",
        descricaoUsual: "Dorflex",
        codigoBarras: "7891234567802",
        inativo: false,
        cdMarca: 35,
        nomeMarca: "Sanofi",
        cdFabricante: 125,
        nomeFabricante: "Sanofi-Aventis Farmacêutica",
        cdLinha: 5,
        nomeLinha: "Analgésicos",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 170.00,
        vlrTabela: 19.90,
        percDesconto: 10.00,
        vlrOferta: 17.91,
        dtCadastro: "2024-01-14T09:00:00",
        dtUltimaAlteracao: "2026-02-22T11:45:00",
        nsuRegistro: 10013,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: false,
        etico: true,
        generico: false,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 1014,
        descricao: "Cefalexina 500mg - Caixa com 8 cápsulas",
        descricaoUsual: "Cefalexina 500mg",
        codigoBarras: "7891234567803",
        inativo: false,
        cdMarca: 12,
        nomeMarca: "EMS",
        cdFabricante: 102,
        nomeFabricante: "EMS Farmacêutica",
        cdLinha: 8,
        nomeLinha: "Antibióticos",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 55.00,
        vlrTabela: 32.50,
        percDesconto: 8.00,
        vlrOferta: 29.90,
        dtCadastro: "2024-02-03T10:15:00",
        dtUltimaAlteracao: "2026-02-21T09:20:00",
        nsuRegistro: 10014,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: true,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Simples",
        tipoReceita: "Simples",
        corReceita: "Branca"
    },
    {
        cdFilial: 2,
        cdProduto: 1015,
        descricao: "Whey Protein Concentrado 900g - Sabor Chocolate",
        descricaoUsual: "Whey Protein 900g",
        codigoBarras: "7891234567804",
        inativo: false,
        cdMarca: 40,
        nomeMarca: "Integral Médica",
        cdFabricante: 130,
        nomeFabricante: "Integral Médica Nutrição",
        cdLinha: 40,
        nomeLinha: "Suplementos Esportivos",
        cdCategoria: 55,
        nomeCategoria: "Suplementos",
        qtdEstoque: 75.00,
        vlrTabela: 120.00,
        percDesconto: 20.00,
        vlrOferta: 96.00,
        dtCadastro: "2024-01-16T13:20:00",
        dtUltimaAlteracao: "2026-02-23T15:10:00",
        nsuRegistro: 10015,
        controleSngpc: false,
        cdDepartamento: 2,
        nomeDepartamento: "Suplementos",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: false,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 1016,
        descricao: "Hidratante Corporal Neutrogena 200ml",
        descricaoUsual: "Hidratante Neutrogena",
        codigoBarras: "7891234567805",
        inativo: false,
        cdMarca: 45,
        nomeMarca: "Neutrogena",
        cdFabricante: 135,
        nomeFabricante: "Johnson & Johnson",
        cdLinha: 35,
        nomeLinha: "Dermocosméticos",
        cdCategoria: 60,
        nomeCategoria: "Cosméticos",
        qtdEstoque: 130.00,
        vlrTabela: 42.90,
        percDesconto: 22.00,
        vlrOferta: 33.46,
        dtCadastro: "2024-01-26T14:45:00",
        dtUltimaAlteracao: "2026-02-20T12:30:00",
        nsuRegistro: 10016,
        controleSngpc: false,
        cdDepartamento: 3,
        nomeDepartamento: "Cosméticos",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: false,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 1017,
        descricao: "Cloridrato de Fluoxetina 20mg - Caixa com 30 cápsulas",
        descricaoUsual: "Fluoxetina 20mg",
        codigoBarras: "7891234567806",
        inativo: false,
        cdMarca: 10,
        nomeMarca: "Medley",
        cdFabricante: 100,
        nomeFabricante: "Medley Farmacêutica",
        cdLinha: 20,
        nomeLinha: "Sistema Nervoso",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 88.00,
        vlrTabela: 24.80,
        percDesconto: 12.00,
        vlrOferta: 21.82,
        dtCadastro: "2024-02-11T08:50:00",
        dtUltimaAlteracao: "2026-02-25T10:15:00",
        nsuRegistro: 10017,
        controleSngpc: true,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: true,
        antimicrobiano: false,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Especial",
        tipoReceita: "Receituário C1",
        corReceita: "Amarela"
    },
    {
        cdFilial: 2,
        cdProduto: 1018,
        descricao: "Termômetro Digital Infravermelho",
        descricaoUsual: "Termômetro Digital",
        codigoBarras: "7891234567807",
        inativo: false,
        cdMarca: 50,
        nomeMarca: "G-Tech",
        cdFabricante: 140,
        nomeFabricante: "G-Tech Medical",
        cdLinha: null,
        nomeLinha: null,
        cdCategoria: 65,
        nomeCategoria: "Equipamentos",
        qtdEstoque: 42.00,
        vlrTabela: 159.90,
        percDesconto: 10.00,
        vlrOferta: 143.91,
        dtCadastro: "2024-01-19T16:30:00",
        dtUltimaAlteracao: "2026-02-19T14:00:00",
        nsuRegistro: 10018,
        controleSngpc: false,
        cdDepartamento: 4,
        nomeDepartamento: "Equipamentos",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: false,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 1019,
        descricao: "Prednisona 20mg - Caixa com 10 comprimidos",
        descricaoUsual: "Prednisona 20mg",
        codigoBarras: "7891234567808",
        inativo: false,
        cdMarca: 11,
        nomeMarca: "Neo Química",
        cdFabricante: 101,
        nomeFabricante: "Neo Química Laboratório",
        cdLinha: 45,
        nomeLinha: "Corticoides",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 67.00,
        vlrTabela: 14.50,
        percDesconto: 5.00,
        vlrOferta: 13.78,
        dtCadastro: "2024-02-06T11:40:00",
        dtUltimaAlteracao: "2026-02-24T08:25:00",
        nsuRegistro: 10019,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Simples",
        tipoReceita: "Simples",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 1020,
        descricao: "Colágeno Hidrolisado 250g - Sabor Neutro",
        descricaoUsual: "Colágeno Hidrolisado",
        codigoBarras: "7891234567809",
        inativo: false,
        cdMarca: 25,
        nomeMarca: "Vitaminlife",
        cdFabricante: 115,
        nomeFabricante: "Vitaminlife Indústria",
        cdLinha: 25,
        nomeLinha: "Vitaminas",
        cdCategoria: 55,
        nomeCategoria: "Suplementos",
        qtdEstoque: 195.00,
        vlrTabela: 38.90,
        percDesconto: 28.00,
        vlrOferta: 28.01,
        dtCadastro: "2024-01-24T09:25:00",
        dtUltimaAlteracao: "2026-02-26T06:50:00",
        nsuRegistro: 10020,
        controleSngpc: false,
        cdDepartamento: 2,
        nomeDepartamento: "Suplementos",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: false,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 2001,
        descricao: "Shampoo Anticaspa Nizoral 200ml",
        descricaoUsual: "Shampoo Nizoral",
        codigoBarras: "7891234567810",
        inativo: false,
        cdMarca: 55,
        nomeMarca: "Nizoral",
        cdFabricante: 135,
        nomeFabricante: "Johnson & Johnson",
        cdLinha: 35,
        nomeLinha: "Dermocosméticos",
        cdCategoria: 60,
        nomeCategoria: "Cosméticos",
        qtdEstoque: 73.00,
        vlrTabela: 54.90,
        percDesconto: 18.00,
        vlrOferta: 45.02,
        dtCadastro: "2024-02-07T13:10:00",
        dtUltimaAlteracao: "2026-02-21T15:40:00",
        nsuRegistro: 10021,
        controleSngpc: false,
        cdDepartamento: 3,
        nomeDepartamento: "Cosméticos",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: false,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 2,
        cdProduto: 2002,
        descricao: "Máscara Cirúrgica Descartável - Caixa com 50 unidades",
        descricaoUsual: "Máscara Cirúrgica",
        codigoBarras: "7891234567811",
        inativo: false,
        cdMarca: 60,
        nomeMarca: "Descarpack",
        cdFabricante: 145,
        nomeFabricante: "Descarpack Descartáveis",
        cdLinha: null,
        nomeLinha: null,
        cdCategoria: 70,
        nomeCategoria: "Descartáveis",
        qtdEstoque: 320.00,
        vlrTabela: 45.00,
        percDesconto: 25.00,
        vlrOferta: 33.75,
        dtCadastro: "2024-01-17T10:00:00",
        dtUltimaAlteracao: "2026-02-23T09:30:00",
        nsuRegistro: 10022,
        controleSngpc: false,
        cdDepartamento: 5,
        nomeDepartamento: "Higiene",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: false,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 2003,
        descricao: "Atenolol 25mg - Caixa com 30 comprimidos",
        descricaoUsual: "Atenolol 25mg",
        codigoBarras: "7891234567812",
        inativo: false,
        cdMarca: 12,
        nomeMarca: "EMS",
        cdFabricante: 102,
        nomeFabricante: "EMS Farmacêutica",
        cdLinha: 15,
        nomeLinha: "Sistema Cardiovascular",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 102.00,
        vlrTabela: 11.90,
        percDesconto: 15.00,
        vlrOferta: 10.12,
        dtCadastro: "2024-01-29T08:15:00",
        dtUltimaAlteracao: "2026-02-18T11:50:00",
        nsuRegistro: 10023,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Simples",
        tipoReceita: "Simples",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 2004,
        descricao: "Simeticona 75mg - Caixa com 10 comprimidos mastigáveis",
        descricaoUsual: "Simeticona 75mg",
        codigoBarras: "7891234567813",
        inativo: false,
        cdMarca: 10,
        nomeMarca: "Medley",
        cdFabricante: 100,
        nomeFabricante: "Medley Farmacêutica",
        cdLinha: 12,
        nomeLinha: "Aparelho Digestivo",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 135.00,
        vlrTabela: 9.50,
        percDesconto: 10.00,
        vlrOferta: 8.55,
        dtCadastro: "2024-02-09T12:00:00",
        dtUltimaAlteracao: "2026-02-22T16:20:00",
        nsuRegistro: 10024,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 2,
        cdProduto: 2005,
        descricao: "Creatina Monohidratada 300g - Sem sabor",
        descricaoUsual: "Creatina 300g",
        codigoBarras: "7891234567814",
        inativo: false,
        cdMarca: 40,
        nomeMarca: "Integral Médica",
        cdFabricante: 130,
        nomeFabricante: "Integral Médica Nutrição",
        cdLinha: 40,
        nomeLinha: "Suplementos Esportivos",
        cdCategoria: 55,
        nomeCategoria: "Suplementos",
        qtdEstoque: 90.00,
        vlrTabela: 68.00,
        percDesconto: 22.00,
        vlrOferta: 53.04,
        dtCadastro: "2024-01-21T15:30:00",
        dtUltimaAlteracao: "2026-02-20T13:45:00",
        nsuRegistro: 10025,
        controleSngpc: false,
        cdDepartamento: 2,
        nomeDepartamento: "Suplementos",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: false,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 2006,
        descricao: "Álcool em Gel 70% - Frasco 500ml",
        descricaoUsual: "Álcool em Gel 500ml",
        codigoBarras: "7891234567815",
        inativo: false,
        cdMarca: null,
        nomeMarca: null,
        cdFabricante: null,
        nomeFabricante: null,
        cdLinha: null,
        nomeLinha: null,
        cdCategoria: 70,
        nomeCategoria: "Descartáveis",
        qtdEstoque: 280.00,
        vlrTabela: 18.90,
        percDesconto: 20.00,
        vlrOferta: 15.12,
        dtCadastro: "2024-01-13T07:45:00",
        dtUltimaAlteracao: "2026-02-25T08:10:00",
        nsuRegistro: 10026,
        controleSngpc: false,
        cdDepartamento: 5,
        nomeDepartamento: "Higiene",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: false,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 2007,
        descricao: "Sinvastatina 20mg - Caixa com 30 comprimidos",
        descricaoUsual: "Sinvastatina 20mg",
        codigoBarras: "7891234567816",
        inativo: false,
        cdMarca: 11,
        nomeMarca: "Neo Química",
        cdFabricante: 101,
        nomeFabricante: "Neo Química Laboratório",
        cdLinha: 15,
        nomeLinha: "Sistema Cardiovascular",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 115.00,
        vlrTabela: 19.80,
        percDesconto: 12.00,
        vlrOferta: 17.42,
        dtCadastro: "2024-02-04T09:50:00",
        dtUltimaAlteracao: "2026-02-19T12:15:00",
        nsuRegistro: 10027,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Simples",
        tipoReceita: "Simples",
        corReceita: "Branca"
    },
    {
        cdFilial: 2,
        cdProduto: 2008,
        descricao: "Multivitamínico Completo - Pote com 60 cápsulas",
        descricaoUsual: "Multivitamínico",
        codigoBarras: "7891234567817",
        inativo: false,
        cdMarca: 25,
        nomeMarca: "Vitaminlife",
        cdFabricante: 115,
        nomeFabricante: "Vitaminlife Indústria",
        cdLinha: 25,
        nomeLinha: "Vitaminas",
        cdCategoria: 55,
        nomeCategoria: "Suplementos",
        qtdEstoque: 160.00,
        vlrTabela: 52.00,
        percDesconto: 25.00,
        vlrOferta: 39.00,
        dtCadastro: "2024-01-27T14:20:00",
        dtUltimaAlteracao: "2026-02-24T10:40:00",
        nsuRegistro: 10028,
        controleSngpc: false,
        cdDepartamento: 2,
        nomeDepartamento: "Suplementos",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: false,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 2009,
        descricao: "Esparadrapo Impermeável 10cm x 4,5m",
        descricaoUsual: "Esparadrapo 10cm",
        codigoBarras: "7891234567818",
        inativo: false,
        cdMarca: 65,
        nomeMarca: "Cremer",
        cdFabricante: 150,
        nomeFabricante: "Cremer S.A.",
        cdLinha: null,
        nomeLinha: null,
        cdCategoria: 70,
        nomeCategoria: "Descartáveis",
        qtdEstoque: 210.00,
        vlrTabela: 12.50,
        percDesconto: 8.00,
        vlrOferta: 11.50,
        dtCadastro: "2024-01-31T08:30:00",
        dtUltimaAlteracao: "2026-02-21T14:55:00",
        nsuRegistro: 10029,
        controleSngpc: false,
        cdDepartamento: 5,
        nomeDepartamento: "Higiene",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: false,
        similar: false,
        tipoReceituario: "Isento",
        tipoReceita: "Isento",
        corReceita: "Branca"
    },
    {
        cdFilial: 1,
        cdProduto: 2010,
        descricao: "Nimesulida 100mg - Caixa com 12 comprimidos",
        descricaoUsual: "Nimesulida 100mg",
        codigoBarras: "7891234567819",
        inativo: false,
        cdMarca: 12,
        nomeMarca: "EMS",
        cdFabricante: 102,
        nomeFabricante: "EMS Farmacêutica",
        cdLinha: 5,
        nomeLinha: "Analgésicos",
        cdCategoria: 50,
        nomeCategoria: "Medicamentos",
        qtdEstoque: 92.00,
        vlrTabela: 13.80,
        percDesconto: 10.00,
        vlrOferta: 12.42,
        dtCadastro: "2024-02-12T10:35:00",
        dtUltimaAlteracao: "2026-02-26T09:05:00",
        nsuRegistro: 10030,
        controleSngpc: false,
        cdDepartamento: 1,
        nomeDepartamento: "Farmácia",
        controlado: false,
        antimicrobiano: false,
        etico: false,
        generico: true,
        similar: false,
        tipoReceituario: "Simples",
        tipoReceita: "Simples",
        corReceita: "Branca"
    }
];

// Middleware para validar o ApiKey
const validateApiKey = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            status: 401,
            data: [],
            msg: "Authorization header não fornecido",
            total: 0
        });
    }

    const apiKey = authHeader.replace('ApiKey ', '').trim();

    if (apiKey !== API_KEY) {
        return res.status(401).json({
            status: 401,
            data: [],
            msg: "ApiKey inválido",
            total: 0
        });
    }

    next();
};

// Endpoint GET /api/ecommerce/produtos/consulta
app.get('/api/ecommerce/produtos/consulta', validateApiKey, (req, res) => {
    try {
        const { $count, $skip, $top, cdFilial, cdProduto, inativo } = req.query;

        let dadosFiltrados = [...produtosMockados];

        // Aplicar filtros se fornecidos
        if (cdFilial) {
            dadosFiltrados = dadosFiltrados.filter(p => p.cdFilial === parseInt(cdFilial));
        }

        if (cdProduto) {
            dadosFiltrados = dadosFiltrados.filter(p => p.cdProduto === parseInt(cdProduto));
        }

        if (inativo !== undefined) {
            const inativoBoolean = inativo === 'true' || inativo === true;
            dadosFiltrados = dadosFiltrados.filter(p => p.inativo === inativoBoolean);
        }

        const totalRegistros = dadosFiltrados.length;

        // Aplicar paginação
        const skip = parseInt($skip) || 0;
        const top = Math.min(parseInt($top) || 500, 500); // Máximo 500 registros

        const dadosPaginados = dadosFiltrados.slice(skip, skip + top);

        const response = {
            status: 200,
            data: dadosPaginados,
            msg: "Consulta realizada com sucesso",
            total: $count === 'true' ? totalRegistros : undefined
        };

        // Remove a propriedade 'total' se $count não for true
        if ($count !== 'true') {
            delete response.total;
        }

        res.json(response);

    } catch (error) {
        res.status(500).json({
            status: 500,
            data: [],
            msg: `Erro ao processar consulta: ${error.message}`,
            total: 0
        });
    }
});

// Dados mockados de pedidos
const pedidosMockados = {};
let proximoCdOrcamento = 1000;

// Status de pedidos: 0=Não encontrado, 1=Pendente, 2=Em separação, 3=Conferência, 4=Faturado, 5=Despachado, 6=Entregue, 7=Entrega não realizada, 8=Cancelado, 9=Devolvido
const statusPedidosMap = {
    'Desconhecido': 0,
    'Pendente': 1,
    'Em separação': 2,
    'Conferência': 3,
    'Faturado': 4,
    'Despachado': 5,
    'Entregue': 6,
    'Entrega não realizada': 7,
    'Cancelado': 8,
    'Devolvido': 9
};

// Endpoint POST /api/ecommerce/pedidos - Registrar pedido
app.post('/api/ecommerce/pedidos', validateApiKey, (req, res) => {
    try {
        const pedido = req.body;

        // Validações obrigatórias
        if (!pedido.nrPedido) {
            return res.status(400).json({
                status: 400,
                data: null,
                msg: "Propriedade 'nrPedido' é obrigatória"
            });
        }

        if (!pedido.cdFilial && !pedido.cgcFilial) {
            return res.status(400).json({
                status: 400,
                data: null,
                msg: "É obrigatório informar 'cdFilial' ou 'cgcFilial'"
            });
        }

        if (!pedido.cliente || !pedido.cliente.cpfCgc) {
            return res.status(400).json({
                status: 400,
                data: null,
                msg: "Cliente e CPF/CNPJ são obrigatórios"
            });
        }

        if (!pedido.itens || !Array.isArray(pedido.itens) || pedido.itens.length === 0) {
            return res.status(400).json({
                status: 400,
                data: null,
                msg: "Pedido deve conter pelo menos um item"
            });
        }

        // Validar itens - cdProduto é obrigatório
        for (const item of pedido.itens) {
            if (!item.cdProduto) {
                return res.status(400).json({
                    status: 400,
                    data: null,
                    msg: "Propriedade 'cdProduto' é obrigatória em todos os itens"
                });
            }
        }

        // Gerar cdOrcamento
        const cdOrcamento = proximoCdOrcamento++;

        // Armazenar pedido
        const pedidoRegistrado = {
            ...pedido,
            cdOrcamento,
            situacao: statusPedidosMap[pedido.statusPedido] || 0,
            dtCriacao: new Date().toISOString()
        };

        pedidosMockados[`${pedido.nrPedido}_${cdOrcamento}`] = pedidoRegistrado;

        // Retornar resposta conforme especificado
        res.status(200).json({
            status: 200,
            data: {
                situacao: pedidoRegistrado.situacao,
                cdOrcamento: cdOrcamento,
                mensagem: "Orçamento registrado com sucesso"
            },
            msg: "Orçamento registrado com sucesso"
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            data: null,
            msg: `Erro ao registrar pedido: ${error.message}`
        });
    }
});

// Endpoint GET /api/Ecommerce/pedidos/status - Consultar status do pedido
app.get('/api/Ecommerce/pedidos/status', validateApiKey, (req, res) => {
    try {
        const { numeroPedido, cdOrcamento } = req.query;

        // Validações
        if (!numeroPedido || !cdOrcamento) {
            return res.status(400).json({
                status: 400,
                data: null,
                msg: "Parâmetros 'numeroPedido' e 'cdOrcamento' são obrigatórios"
            });
        }

        // Buscar pedido
        const chave = `${numeroPedido}_${cdOrcamento}`;
        const pedido = pedidosMockados[chave];

        if (!pedido) {
            return res.status(404).json({
                status: 404,
                data: {
                    situacao: 0, // Não encontrado
                    cdOrcamento: parseInt(cdOrcamento),
                    mensagem: "Pedido não encontrado"
                },
                msg: "Pedido não encontrado"
            });
        }

        // Retornar pedido com status atualizado
        res.status(200).json({
            status: 200,
            data: {
                situacao: pedido.situacao,
                cdOrcamento: pedido.cdOrcamento,
                mensagem: "Consulta realizada com sucesso",
                pedido: pedido
            },
            msg: "Consulta realizada com sucesso"
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            data: null,
            msg: `Erro ao consultar status do pedido: ${error.message}`
        });
    }
});

// Rota de health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'API está funcionando' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📋 Endpoint: http://localhost:${PORT}/api/ecommerce/produtos/consulta`);
    console.log(`📦 Endpoint: http://localhost:${PORT}/api/ecommerce/pedidos (POST)`);
    console.log(`🔍 Endpoint: http://localhost:${PORT}/api/Ecommerce/pedidos/status (GET)`);
    console.log(`🔑 ApiKey: ${API_KEY}`);
    console.log(`📦 Total de produtos mockados: ${produtosMockados.length}`);
});
