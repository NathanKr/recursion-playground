export function factorial(num : number) : number{
    // --- end condition
    if(num <= 1){
        return 1;
    }

    // --- Compose the full solution by dividing it to small parts
    return factorial(num-1)*num;
}