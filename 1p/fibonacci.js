function Fibonacci(number){
    let a=0;
    let b=1;
    let c;
    let s=1;
    if(number>2){
        for(let i = 3; i<=number;i++){
          c=a+b;
          s = s +c;
          a =b;
          b=c;
        } return b;
    } else{ 
          if(number==1) return a;
          if(number==2) return a,b;
        }
    }

console.log(Fibonacci(1));
