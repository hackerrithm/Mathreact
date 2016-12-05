const path = require('path');

exports.index = (req, res) => {
res.sendFile('Mathreact/views/index.html', { root: "../" });
};

exports.calculateRandom = (req, res) => {
//var answer = Number(req.body);
console.log(req.body);
//res.send(answer.toString());
res.send(200);
};

function cal(a) {
    return 7 + Number(a);
}