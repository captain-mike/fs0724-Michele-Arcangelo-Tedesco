{

    const p = new Promise<string>((success, reject)=>{
        
        reject('fallimento')
        
        success('successo')
        
        
    })
 
    p.then(res =>{
        console.log(res);
        
    }).catch(err => console.log(err))
    
}
{

    async function call(){
        return 'successo'
    }
    
    call().then(res =>{
        console.log(res);  
    })

}

fetch('')
.then(res => res.json())
.then(res => {
    //fai qualcosa con il dato
})

async function chiamata(){
    const response = await fetch('')
    const dati =  await <Promise<string[]>> response.json()
}


