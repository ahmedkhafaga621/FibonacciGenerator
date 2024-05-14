function fibonacciGenerator (n) {

    var squence = [0,1]; 
    if(n === 1){
        return[0] ; 
    }else if (n === 2){
        return [0,1] ;
    }else{
        for(var i = 2 ; i < n ;i++){
            squence.push(squence[i-1] + squence[i-2]);
        }
        return squence ;
    }
    }
    
    