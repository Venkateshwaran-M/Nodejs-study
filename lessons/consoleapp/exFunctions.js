exports.m1 = function () {
    var text1 = "Hello m1";
    console.log(text1);
}

m2 = function () {
    var text1 = "hello m2";
    console.log(text1);
}

exports.m3 = function () {
    var text1 = "Calling m2 from m3";
    console.log(text1);
    m2();
}
exports.m4 = function () {
    var text1 = "hello node";
    return text1;
}