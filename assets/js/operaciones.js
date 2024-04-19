

/*sumar*/
export const sumar = (n1,n2) => {

    n1 = parseInt(n1.value);
    n2 = parseInt(n2.value);

    return n1 + n2;
}


/*restar*/
export const restar = (n1,n2) => {

    n1 = parseInt(n1.value);
    n2 = parseInt(n2.value);

    return n1 - n2;
}

/*multiplicar*/
export const multiplicar = (n1,n2) => {

    n1 = parseInt(n1.value);
    n2 = parseInt(n2.value);

    return n1 * n2;
}
/*dividir*/
export const dividir = (n1,n2) => {

    
    n1 = parseInt(n1.value);
    n2 = parseInt(n2.value);

    if(n2 == 0){
        return "No es posible dividir por 0";
    }else{

    return n1 / n2;
    }
}