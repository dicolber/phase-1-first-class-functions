function receivesAFunction (cb) {
 return (cb())
}

function returnsANamedFunction() {
    function empty(){

    }
    return empty

}

function returnsAnAnonymousFunction () {
    return function() {
    }
}
