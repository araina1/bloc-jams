forEach(scaleX(1) translateY(0), myCallback);

function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}