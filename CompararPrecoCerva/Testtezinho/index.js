const mockHistoryProperty = [
    {
        date:'2024-04-20T20:49:24.299000',
        price:'525000'
    },
    {
        date:'2024-12-03T20:49:24.299000',
        price:'530000'
    },
    {
        date:'2024-01-01T20:49:24.299000',
        price:'554000'
    },
    {
        date:'2023-12-03T20:49:24.299000',
        price:'4500'
    },
    {
        date:'2023-04-23T20:49:24.299000',
        price:'4700'
    },
]

// mockHistoryProperty.filter((item) => {
//     let obj = new Date(item.date)
//     console.log(obj.getFullYear())


// })

mockHistoryProperty.map((item) => {
    let obj = new Date(item.date)

    let ulElement = document.createElement('ul')
    let liElement = document.createElement('li')
    ulElement.appendChild(liElement)
    document.body.appendChild(ulElement)

    if(obj.getFullYear() === 2023){

        // let set = new Set(mockHistoryProperty)
        // let anoItem = Array.from(set)
        // console.log(...anoItem)

        let title = document.createElement('h3')
        title.innerHTML = obj.getFullYear()
        liElement.appendChild(title)
    
        let texto = document.createElement('p')
        texto.innerText = `{
            date: ${obj.toISOString()},
            price:${item.price}
        }`      
        liElement.appendChild(texto)

    } else if(obj.getFullYear() === 2024){

        let title = document.createElement('h3')
        title.innerHTML = obj.getFullYear()
        liElement.appendChild(title)
            
        let texto = document.createElement('p')
        texto.innerText = `{
            date: ${obj.toISOString()},
            price:${item.price}
        }`  
        liElement.appendChild(texto)

    }
})
