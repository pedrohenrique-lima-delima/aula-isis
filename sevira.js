function validarEntrada(nome, idade, especie, vip, gato) {
    if (!nome || nome.trim() ==="") {
        return "Erro 400.";
    }

    if (idade > 20  || idade < 0) {
        return "Erro 400";
    }

    if (especie == gato && vip == true){
        return "sucesso 201";
    } else {
        return "Erro 400";
    }
}
