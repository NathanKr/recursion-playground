<h2>Motivation</h2>
Play with recursion with coding interview in mind. use typescript

<h2>Basic recursion algorithm</h2>
<ul>
<li>Assume the function can solve the full problem</li>
<li>Set the end of recursion condition</li>
<li>Compose the full solution by dividing it to small parts</li>
</ul>

<h2>Example</h2>

```typescript

 function factorial(num : number) : number{
    // --- end condition
    if(num <= 1){
        return 1;
    }

    // --- Compose the full solution by dividing it to small parts
    return factorial(num-1)*num;
}

```
