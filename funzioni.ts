function saluto(messaggio:string = 'ciao') {
    return messaggio;
}

const res = saluto();//ciao


async function Call():Promise<string>{
    return 'ciao';
}

Call().then(res => {
    console.log(res);//ciao
})


async function handleCall(){
    const dati = await Call()
    console.log(dati);//ciao
}

fetch('')
.then(res => res.json())
.then(res => {
    console.log(res)//ciao
});
