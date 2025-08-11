
function titleToNumber(columnTitle:string):number {
    //각 문자는 A=1, B=2, ..., Z=26의 값을 가진다.
    //AB -> A는 1*26 = 26, B는 2*26^0 =2 총합 28
    //ZY -> Z는 26*26^1= 676, Y는 25*26^0 =25 총합 701

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = 0;
    
    for (let char of columnTitle){
        result = result * 26 +(alphabet.indexOf(char)+1)
        //또다른 방법
        result = result * 26 + (char.charCodeAt(0) - 64);
    }
  return result;

}