function lengthOfLongestSubstring(s: string): number {
    // 중복되는 문자는 제외된다.
    //abcabcbb => abc
  
    let left =0;
    let maxLength = 0;
    
    let charSet = new Set();
    
    for(let right = 0; right <s.length; right++){

            //s[right]가 이미 Set에 있는지 확인한다.있다면 중복제거할 때가지 left를 이동한다.
            while(charSet.has(s[right])){
                
            //left 포인터 문자를 Set에서 제거한다.
            charSet.delete(s[left]);
                left++;
            }
           // Set에 현재 문자를 추가한다.
          charSet.add(s[right]);
        // 인덱스 - 시작인덱스 + 1
          maxLength = Math.max(maxLength, right-left +1)
    }
    
   return maxLength;
    
};