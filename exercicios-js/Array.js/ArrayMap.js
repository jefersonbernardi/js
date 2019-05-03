const teste = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14]
const resultado = []
const resultado2 = []
    for (i = 0; i <= teste.length; i++) {
        if (i <= 10) {
            resultado.push([i])
        }
        else{
            resultado2.push([i])
        }

    };
    console.log(resultado)
