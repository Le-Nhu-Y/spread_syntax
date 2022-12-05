// Buoc 1:
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum.apply(null, numbers));

//Sau khi sử dụng spread syntax:
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

//Buoc 2:đẩy các phần tử vào trong một mảng.
var a = [1, 2];
a.push([1, 2, 3]);
console.log(a);
//Sau khi sử dụng spread syntax:
var a = [1, 2];
var b= [1,2,3];
a.push(...b);
console.log(a);

//Buoc 3: Sao chep 1 mang:
var a = [1, 2];
var b= [1,2,3];
a = [...b];
console.log(a);
// Buoc 4:  sao chép một đối tượng
var obj1={a:1, b:2};
var obj2 = {...obj1};
console.log(obj2);
// Buoc 5: nối 2 mảng:
var a = [1,2];
var b = [3,4,5];
var c = [...a,...b];
console.log(c);
