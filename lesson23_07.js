/**
 * Created by defold on 23.07.2015.
 * @return {number}
 */
function RandomRange( min, max) {
    min = min || 1;
    max = max || 10;

    return Math.floor( Math.random () * ( max - min ) + min );
}
console.log(RandomRange(1,20));
console.log(RandomRange(1));