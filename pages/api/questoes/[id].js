import banco from'../bancoDeQuestoes'

export default function questoesPorId (req, res){

    const id = +req.query.id
    const questoesSelecionadas = banco.filter(questao => questao.id === id )

    if(questoesSelecionadas.length === 1){

        const questaoSelecionada = questoesSelecionadas[0].embaralharRespostas()
       // const obj = questaoSelecionada.responderCom(0).converterParaObjeto()

       // res.status(200).json(questaoSelecionada.converterParaObjeto())
       //res.status(200).json(obj)
       res.status(200).json(questaoSelecionada.converterParaObjeto())

    }else{
        res.status(204).send()
    }
}