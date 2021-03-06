class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
    }

    adiciona(event){
        event.preventDefault()
        let data = DataConverter.paraData(this._inputData.value)
        let negociacao = new Negociacao(DataConverter.paraData(this._inputData.value),parseInt(this._inputQuantidade.value),parseFloat(this._inputValor.value))
        let diaMesAno = DataConverter.paraTexto(negociacao.data)
        console.log(diaMesAno)
    }
}