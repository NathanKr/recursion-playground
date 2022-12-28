export function factorial(num : number) : number{
    // --- end condition
    if(num <= 1){
        return 1;
    }

    // --- Compose the full solution by dividing it to small parts
    return factorial(num-1)*num;
}

export function reverseString(str : string) : string{
     // --- end condition
     if(str.length <= 1){
        return str;
     }

    // --- Compose the full solution by dividing it to small parts
    const lastChar = str[str.length-1];
    const stringWithoutLastChar = str.slice(0,str.length-1);
    return `${lastChar}${reverseString(stringWithoutLastChar)}`;
}
