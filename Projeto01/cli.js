import chalk from "chalk"
import pegaArquivo from "./index.js";
import validaURL from "./http-validacao.js";
const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2])
    caminho[3] === "validar" ? console.log(chalk.bgBlueBright("lista de validados"), await validaURL(resultado)) : console.log(chalk.yellow("Lista de links"), resultado)
}
processaTexto(caminho)