//Functions 1, Domain not defined:

//1.1 Non-Recursive Factorial:
function NonRecursiveFactorial(n) {
    let result = 1;
    for(let k = 1; k <= n; k++){
        result *= k;
    }
    return result;
}

//1.2 Recursive Factorial:
function RecursiveFactorial(n) {
    return n != 1 ? RecursiveFactorial(n-1) * n : 1;
}

//1.3 Non-Recursive Hyperfactorial: 
function  NonRecursiveHyperFactorial(n) {
    let result = 1;
    for(let k = 1; k <= n; k++){
        result *= Math.pow(k, k);
    }
    return result;
}

//1.4 Recursive Hyperfactorial: 
function  RecursiveHyperFactorial(n) {
    return n != 1 ? RecursiveHyperFactorial(n-1) * Math.pow(n, n) : 1;
}

//1.5 Non-Recursive Exponential Factorial:
function NonRecursiveExpFactorial(n) {
    let result = 1;
    for(let k = 2; k <= n; k++){
        result = Math.pow(k, result);
    }
    return result;
}

//1.6 Recursive Exponential Factorial:
function RecursiveExpFactorial(n) {
    return n!=1 ? Math.pow(n,RecursiveExpFactorial(n-1)) : 1;
}

//1.7 Superfactorial (Version: Clifford A. Pickover):
// **Uses Function 1 (but you can alterate to use Function 2)**
function SuperFactorialClifford(n) {
    let result = 1;
    for(let k = 1; k <= NonRecursiveFactorial(n); k++){
        result = Math.pow(NonRecursiveFactorial(n),result);
    }
    return result;
}

//1.8 Non-Recursive Superfactorial (Version: Neil J.A. Sloane and Simon Plouffe): 
// **Uses Function 1 (but you can alterate to use Function 2)**
function NonRecursiveSuperFactorialNeil(n) {
    let result = 1;
    for(let k = 1; k <= n; k++){
        result *= NonRecursiveFactorial(k);
    }
    return result;
}

//1.9 Recursive Superfactorial (Version: Neil J.A. Sloane and Simon Plouffe): 
// **Uses Function 1 (but you can alterate to use Function 2)**
function RecursiveSuperFactorialNeil(n) {
    return n!= 1 ? RecursiveSuperFactorialNeil(n-1) * NonRecursiveFactorial(n) : 1;
}

//Functions 2, Domain not defined:

//2.1 Tetration:
// **Tetration just to start, afterwards we’ll work with hyper-operators**
// **We also can alterate SuperFactorialClifford(n) to work with Tetration, try it at home!**
function Tetration(n, tower) {
    let result = 1;
    for(let k = 1; k <= tower; k++){
        result = Math.pow(n, result);
    }
    return result;
}

//2.2 NestedFactorial:
// **Uses Function 1 (but you can alterate to use Function 2)**
function NestedFactorial(n, nested) {
    let result = n;
    for(let k = 1; k <= nested; k++){
        result = NonRecursiveFactorial(result);
    }
    return result
}

//2.3 Ackermann Function:
function Ackermann(m, n) {
    return m == 0 ? n+1 : (m > 0 && n == 0 ? Ackermann(m-1, 1) : Ackermann(m-1, Ackermann(m, n-1)));
}