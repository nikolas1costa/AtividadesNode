import chalk from "chalk";
import fs from 'fs';

//const texto = "São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)"

function extraLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$\s].[^\s]*)\)/gm;
    const arrayResultado = [];

    let temp;
    while ((temp = regex.exec(texto)) != null) {
        arrayResultado.push({ [temp[1]]: [temp[2]] })
    }
    return (arrayResultado.length === 0 ? "Não há links" : arrayResultado);
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho...'))
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = "utf-8"
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return(extraLinks(texto));
    } catch (erro) {
        trataErro(erro);
    }
}

//pegaArquivo('./Arquivos/texto.md')
//extraLinks(texto)
export default pegaArquivo;