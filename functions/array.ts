
function embaralhar(elementos: any[]): any[]{
    return elementos
            .map(numero=> ({id: numero, aleatorio: Math.random()}))
            .sort((obj1, obj2)=> obj1.aleatorio- obj2.aleatorio)
            .map(obj => obj.id)
}

export {embaralhar}