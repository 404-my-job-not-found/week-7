function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();

    
    for (let word of strs){

     const sorted = word.split("").sort().join('');
        console.log(sorted)

        
      if(!map.has(sorted)){
          map.set(sorted,[])
      }
       map.get(sorted).push(word)
    }
    
        // [['eat', 'tea', 'ate'],['tan', 'nat'], ['bat']
    return  Array.from(map.values());
};