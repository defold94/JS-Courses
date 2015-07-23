/**
 * Created by defold on 23.07.2015.
 */
function RandomRange( min, max) {
    return Matth.floor(Math.random() * (max - min) + min);
}
console.log(RandomRange);