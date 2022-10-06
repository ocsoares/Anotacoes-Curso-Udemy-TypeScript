import { Request, Response } from 'express';
import express from 'express';

const server = express();

// Nesse caso, vai Tipar as Funcionalides de Objeto, PRECISANDO PASSAR um Objeto, suas Propriedades e Tipos dentro do Request e Response !! <<
// OBS: Utilizar <> para tipá-los !! <<
server.get('/teste', (req: Request<{
    username: string,
    country: string,
    age: number,
    homeless: boolean;
}>,
    res: Response<{
        message: string,
        status: number;
        connection: string;
    }>) => {
    // console.log(req.params.age = 'teste') // VAI dar ERRO, óbvio, porque age foi Tipado como number e foi Mandado uma string !! <<

    console.log(req.params = {
        username: 'Pedro Silva',
        country: 'Brasil',
        age: 28,
        homeless: false
    });

    return res.json({
        message: 'Rota acessada com sucesso !',
        status: 200,
        connection: 'Conectado !'
    });
});

server.listen(5000, () => {
    console.log('Servidor rodando localmente na porta 5000 !');
});