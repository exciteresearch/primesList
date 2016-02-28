function listPrimes(from,to){
    var primeList = [];
    
    if( to<from || to === undefined || from === undefined || to < 2){
        //missing to
        //missing from and too
        //to<=from
        console.log("error");
        return;
    }
    
    if( from < 2 ){
        //if to and from are less than or equal to 2
        from = 2;
    }

    if( to === from ){
        addIfPrime(to);
    }
    
    if( from < to ){
        while(from<=to){
            addIfPrime(from);
            from++;
        }
    }
    
    function addIfPrime(no){
        //optimized for speed by using the current list of primes
        //if not divisible by list of primes then check all above list of primes
        var isPrime = true;
        var startNo = 2;
        // divisors in the list of primes
        if(primeList.length>0){ 
            startNo = primeList[primeList.length] + 1;
        }
        primeList.forEach(function(el){
            if(isDivisible(no,el)){
                isPrime = false;
            }
        });
        // divisors greater than largest prime
        for(var i=startNo;i<no;i++){
            if(isDivisible(no,i)){
                isPrime = false;
            }
        }
        if(isPrime){
            primeList.push(no);
        }
    }
    
    function isDivisible(num,i){
        if (num % i){
            return false;
        }
        else {
            return true;
        }
    }

    console.log(primeList.toString());
    console.log('list count',primeList.length);
}
listPrimes(1,100000);
//list count 9592 for listPrimes(1,100000);