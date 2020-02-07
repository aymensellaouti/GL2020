// setTimeout(function () {
//     console.log('cc');
// }, 2000);
//
//
// i = 5;
// x = setInterval(function () {
//     console.log(i--);
//     if(i == 0) clearInterval(x);
// }, 1000);
// console.log('je viens apres le timeout');
//

var tab1=[1,2,3];
var tab2 = [4,5,6];
var tab3 = tab1.concat(tab2);
x = tab3.forEach(function(val,ind,monTab){
    console.log("tab["+ind+"]="+val);
    console.log(monTab);
});
console.log(x);
