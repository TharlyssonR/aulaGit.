function media (n1,n2) {
    try{
        const media = (n1 + n2)/2
        return media 
    } catch(error) {
        console.log(`Deu erro ${error}`)

    }
}

console.log(media(10,7))
console.log(`Olá`)