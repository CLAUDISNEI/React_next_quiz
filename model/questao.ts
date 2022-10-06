import { embaralhar } from "../functions/array";
import RespostaModel from "./resposta";

export default class QuestaoModel {
    #id: number;
    #enunciado: string;
    #repostas: RespostaModel[];
    #acertou: boolean;


  constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false){
    this.#id= id;
    this.#enunciado = enunciado;
    this.#acertou = acertou;
    this.#repostas = respostas;
  }

  get id(){
    return this.#id;
  }

  get enunciado(){
    return this.#enunciado;
  }

  get respostas(){
    return this.#repostas;
  }

  get acertou(){
    return this.#acertou;
  }

  get naoRespondida(){
    return !this.respondida
  }

  get respondida(){
    for(let resposta of this.#repostas){
      if(resposta.revelada) return true
    }    

    return false;
  }

  responderCom(indice: number): QuestaoModel{
    const acertou = this.#repostas[indice]?.certa
    const respostas = this.#repostas.map((resposta,i )=>{
      const respostaSelecionada = indice === i
      const deveRevelar = respostaSelecionada || resposta.certa
     return deveRevelar ? resposta.revelar() : resposta
    })

    return new QuestaoModel(this.id, this.enunciado, respostas, acertou)
  }

  embaralharRespostas(): QuestaoModel {
    let respostasEmbaralhadas = embaralhar(this.#repostas);
    return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
  }

  converterParaObjeto(){
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      respondida: this.respondida,
      acertou: this.#acertou,
      respostas: this.#repostas.map(resposta => resposta.converterParaObjeto())

    }
  }

}