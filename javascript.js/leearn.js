//(HOF)

// we  are passing function in anothern function as argument
const PowerTwo = (n) =>{
    return n ** 2
}
function PowerCube(PowerTwo,n){
    return PowerTwo (n) * n
}
console.log(PowerCube(PowerTwo,2));

// we are passing function in function
const HigherOrder = m => {
    const  OneFun = n => { 
        const TwoFun = p => { 
            return m + n + p
        }
        return TwoFun
    }
    return OneFun
}
console.log(HigherOrder(2)(7)(4))
//real uses of function in function
/*
const MyNums = [2,3,4,5]

const SumArry = arr => {
    let totle = 0
    arr.foreach(function(element){
        totle += element
    });
    return totle
}
*/




// time intval
function OneMOreHello(){
    console.log("this is mariner ali", Math.random());
}
// setInterval(OneMOreHello, 1000)
setTimeout(OneMOreHello, 3000)