/**
 * Created by defold on 23.07.2015.
 * @return {number}
 */
function RandomRange( min, max) {
    min = min || 1;
    max = max || 10;

    return Math.floor( Math.random () * ( max - min + 1 ) + min );
}

for(var i= 0; i<10; i++){
    console.log(RandomRange(1,20));
}