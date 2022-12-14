import { useState } from 'react'
import Questao from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

const questaoMock = new QuestaoModel(1, 'Qual a melhor cor?', [ 
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta')
])



export default function Home() {
  const[questao, setQuestao] = useState(questaoMock)

  function respostaFornecida(indice: number){
    setQuestao(questao.responderCom(indice))
  }
  
  function tempoEsgotado(){
    if(questao.naoRespondida){
      setQuestao(questao.responderCom(-1))
    }
  }

  return (
    <div style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center"
            }}>
      <Questao 
            valor={questao} 
            respostaFornecida={respostaFornecida}
            tempoEsgotado={tempoEsgotado}
            tempoResposta={10}
            />
    </div>
      
  )
}
