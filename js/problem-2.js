function matchFinder (string1, string2){
    console.log(typeof(string1));
if (typeof(string1) !== "string" || typeof(string2) !== 'string') {
    return 'go to hell'
}
else if (string1.includes(string2) === true) {
    return true
}
else{
    return false
}
}

console.log(matchFinder('asif', 'A'));