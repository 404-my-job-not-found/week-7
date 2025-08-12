function myPow(x: number, n: number): number {
    return x ** n
};

//연산자 쓰지 않고 직접 알고리즘 작성 필요하면? 단순 반복방식, 분할 정복 방식 사용하기
//단순 반복 방식 예
function myPow2(x:number,n:number):number{
    if(n === 0) return 1;

    let isNegative = n < 0;
    let power =Math.abs(n);
    let result = 1;

    for(let i=0; i<power; i++){
        result *= x;
    }
     
    return isNegative ? 1/ result : result;
}