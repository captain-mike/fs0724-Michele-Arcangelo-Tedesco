

fetch('templates.html')
.then(res => res.text())
.then(html => {

    const div = document.createElement('div');

    div.innerHTML = html
    

    const bottone = div.querySelector('#bottone')

    bottone.innerText = 'Ciao'
    bottone.addEventListener('click', () => alert('Cliccato'))

    console.log(bottone);

    document.body.append(bottone)
    

})