const path = require('path');

exports.index = (req, res) => {
    res.sendFile('Mathreact/views/calculator.html', { root: "../" });
};

exports.sayYow = (req, res) => {
    var answer = 2 + 3;
    console.log(answer);
    res.send(answer.toString());
};