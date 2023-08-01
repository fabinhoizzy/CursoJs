class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this._rua = rua;
        this._bairro = bairro;
        this._cidade = cidade;
        this._estado = estado;
    }


    get rua() {
        return this._rua;
    }

    set rua(value) {
        this._rua = value;
    }

    get bairro() {
        return this._bairro;
    }

    set bairro(value) {
        this._bairro = value;
    }

    get cidade() {
        return this._cidade;
    }

    set cidade(value) {
        this._cidade = value;
    }

    get estado() {
        return this._estado;
    }

    set estado(value) {
        this._estado = value;
    }
}

let endereco = new Endereco("Rua 37", "L.A", "novo gama", "GO");

console.log(endereco);