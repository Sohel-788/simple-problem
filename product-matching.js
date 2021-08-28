const products=[
    {name:'Dell laptop',price:20000},
    {name:'Apple laptop',price:40000},
    {name:'Hp laptop',price:23000},
    {name:'Iphone phone',price:290000},
    {name:'Samsung phone',price:22000},
    {name:'apple watch',price:20000},
    {name:'lg watch',price:2000},
]
function searchingProduct(products,searText) {
    const matched=[];
    for(const product of products){
        const name=product.name;
        if (name.indexOf(searText)!=-1) {
            matched.push(product);   
        }
    }
    return matched;
}
const result=searchingProduct(products,'apple');
console.log(result);