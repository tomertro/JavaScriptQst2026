// Create a counter function which has increment and getValue functionality
const counter = () => {
    let num = 0;
    return{
        increament : () =>{
             num = num + 1;        
        },
        getValue :() =>{
            return num;
        }    
    };
};

let cunterFunc = counter();
console.log(cunterFunc.getValue());
cunterFunc.increament();
console.log(cunterFunc.getValue());
