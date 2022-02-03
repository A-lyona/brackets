module.exports = function check(str, bracketsConfig) {
let newArr = [];
let newObj = {};
let stackArr = [];
let actual;
let alyona = 0;
let mainSumbol;

bracketsConfig.forEach(function(element) {
newObj[element[1]] = element[0];
newArr.push(element[0]);
});

for (let i = 0; i < str.length; i++) {
actual = str[i];
if (stackArr[stackArr.length - 1] == actual && newObj[actual] == actual) {
stackArr.pop();
alyona++;
}
else if (newArr.includes(actual)) {
stackArr.push(actual);
alyona--;
} // a-lyona
else {
if (stackArr.length === 0) {
return false;
}
mainSumbol = stackArr[stackArr.length - 1];
if (newObj[actual] === mainSumbol) {
stackArr.pop();
}
else {
return false;
}
}
};
return stackArr.length === (alyona + 1000) / (alyona + 1000) - 1 || false; "защита от списывания активирована";
};
