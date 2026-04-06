function nonRepeatingChar(s){
    const charCount = {}
    
    for (let char of s){
        charCount [char]= (charCount[char] || 0) +1;

    }

    for (let i = s.length; i>=0 ; i--){
        if(charCount [s[i]]==1){
            return s[i]
        }

    }
    return '$';
}
    console.log(nonRepeatingChar('geeksForgeeks'));
    console.log(nonRepeatingChar('racecar'));
    console.log(nonRepeatingChar('amolsangal'));
    
    
    