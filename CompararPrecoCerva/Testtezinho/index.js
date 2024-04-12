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

mockHistoryProperty.map(function(item) {
    let obj = new Date(item.date)
    //console.log(obj.getFullYear())

    if(obj.getFullYear() === 2023){
        
        console.log(obj.toISOString())
    }
    
    let p = document.createElement('p')
    p.innerHTML = obj.getFullYear()
    document.body.appendChild(p)
})
//.sort((a,b) => a - b)
