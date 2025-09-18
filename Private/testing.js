let a=5;
let b=6;

function test1(){
    console.log('a::,b:: in test1',a,b);
    test2();
    console.log('a::,b:: in test1 after test2 called',a,b);
}

function test2(){

    console.log('a::,b:: in test2',a,b);
    return [b=10,a=20]

}

test1()



let arr=[
    {
        task:'task1',
        date:'date1'
    },
    
    {
        task:'task2',
        date:'date2'
    }

]

console.log('arr value printing...........')

arr.push({
    task:'task3 addtional',
    date:'date3 additional'
})


console.log(arr);


let brr=[1]
console.log('brr before splice::',brr)

brr.splice(0,1)

console.log('brr after splice::',brr)


