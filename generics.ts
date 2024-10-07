interface test<T>{
    prop:string
    prop2:T
}


const x:test<boolean> = {
    prop: "",
    prop2: false
}

const y:test<number> = {
    prop: "",
    prop2: 0
}


interface doubleGeneric<T,U>{
    prop:U
    prop2:T
}
const z:doubleGeneric<number, boolean> = {
    prop: true,
    prop2: 0
}

function sommaConcatena<T>(a:T, b:T):T{
    return a + (b as any)
}

sommaConcatena<string>('ciao',' come va?')