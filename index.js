// // // // // /**
// // // // //  * 
// // // // //  * @param {String} name 
// // // // //  * @param {Number} age 
// // // // //  * @returns {String}
// // // // //  */

// // // // // function Krishna(name,age){
   
// // // // // }

// // // // // Krishna()


// // // // // /**
// // // // //  * @returns {String}
// // // // //  */
// // // // // var a;

// // // // // console.log(a);




// // // // // /**
// // // // //  * Calculates the sum of two numbers.
// // // // //  * @param {number} a - The first number.
// // // // //  * @param {number} b - The second number.
// // // // //  * @return {number} - The sum of the two numbers.
// // // // //  */
// // // // // function add(a, b) {
// // // // //     return a + b;
// // // // // }

// // // // // // function a (){
// // // // // //     return function (){
// // // // // //        return  function (){
// // // // // //         console.log("b");
// // // // // //        }
        
// // // // // //     }
// // // // // // } 


// // // // // // console.log(a()()());

// // // // // var a;
// // // // // console.log(a); 

// // // // // let b;
// // // // // console.log(b);

// // // // // const c;
// // // // // console.log(c); 


// // // // // var num = 12233;

// // // // // console.log(typeof(""+num));
// // // // // console.log(typeof(num+""));
// // // // // console.log(typeof(String(num)));
// // // // // console.log(typeof(`${num}`));

// // // // // var isAdmin = true

// // // // // console.log(typeof(isAdmin));
// // // // // console.log(typeof(String(isAdmin)));
// // // // // console.log(typeof(""+isAdmin));
// // // // // console.log(typeof(`${isAdmin}`));


// // // //     // var num = "10"
// // // //     // var num1 = "10a"

// // // //     // console.log(typeof(num));
// // // //     // console.log(typeof(num1));

// // // //     // const a = Number(num)
// // // //     // console.log(a);
// // // //     // console.log(typeof(a));
// // // //     // const b = Number(num1)
// // // //     // console.log(b);
// // // //     // console.log(typeof(b));


// // // //     // var data = "Krishna";
// // // //     // var data1 = "";

// // // //     // console.log(Boolean(data));
// // // //     // console.log(Boolean(data1));
    

// // // //     // var arr = [10,20,30,40]

// // // //     // console.log(typeof(arr));

// // // //     // console.log(typeof(arr.toString()));
// // // //     // console.log(typeof(JSON.stringify(arr)));
// // // //     // console.log(typeof(String(arr)));
    


// // // //     // var arr = "[1,2,3,4,5,6]"
// // // //     // console.log(JSON.parse(arr));
    

// // // //     // console.log(arr.split(","));
// // // //     // console.log(Array(arr));
    
    

// // // //     // const user = '{"name": "Krishna"}';

// // // //     // console.log(Object(user))
// // // //     // console.log(JSON.parse(user))




// // // //     var a = 10 

// // // //     a+=10
// // // //     console.log(a);
// // // //     a-=2
// // // //     console.log(a);
// // // //     a*=2
// // // //     console.log(a);
// // // //     a/=2
// // // //     console.log(a);
// // // //     a%=2
// // // //     console.log(a);
    
    

// // // // console.log(typeof(true) instanceof Boolean);


// // // // let name = "KrishnA"
// // // // console.log(name.at(-2));
// // // // console.log(name.charAt(0));
// // // // console.log(name.charAt(-2));
// // // // console.log(name.charCodeAt(6));


// // // // const name1= 'Krishna'
// // // // const name2= ' Sir'
// // // // console.log(name1.concat(name2))
// // // // console.log(name1+name2)
// // // // console.log(`${name1} ${name2}`)



// // // // const str1= 'i am a good boy' 

// // // // console.log(str1.endsWith("boy"))//true
// // // // console.log(str1.endsWith("girl"))//false
// // // // console.log(str1.includes("girl"))//false
// // // // console.log(str1.includes("boy"))//false


// // // const str1= 'i am a good boy' 

// // // // console.log(str1.padEnd(50,'0')) //00000000000000000000000000000000000i am a good boy
// // // // console.log('i am a good boy00000000000000000000000000000000000'.length);


// // // // console.log(str1.search('good'));
// // // // console.log(str1.split(' ')); 
// // // console.log(str1.toUpperCase());

// // // const arr = [1, 2, 3];

// // // ; // "1,2,3"
// // // console.log(arr.toString());


// // // // Invalid string
// // // // const str1 = `can`t wait`; 

// // // // Valid string
// // // const str2 = `can\`t wait`; 


// // // const arr = []
// // // const arr = Array(1,2,3,4,5,6)

// // // console.log(arr);
// // // console.log(typeof(arr));

// // // const arr = Array(1,2,3,4,5,6)
// // // // const arr1 = Array(1,2,3,4,5,6)

// // // // console.log(arr+arr1)


// // // console.log(arr.length)
// // // console.log(arr.keys)

// // // const arr = Array(10)
// // // console.log(arr);
// // // console.log(arr.length);

// //  const arr = Array(1,2,3,4,5,6)

// // // console.log(arr.at(2));
// // console.log(arr.indexOf(2));


// // console.log(arr.includes(2));

// // // console.log(arr.find((c)=>c===2));

// // // console.log(arr.some((c)=>c==2));
// // // console.log(arr.some((c)=>c===!isNaN()));

// // // console.log(arr.some((c)=>c>0));


// // // console.log(arr.slice(1,3));
// // // console.log(arr.concat([1,3]));

// // //  arr.splice(2,3)
// // //  console.log(arr);
 

// // // arr.splice(2,3,1)
// // // console.log(arr);

// // // arr.sort()

// // // console.log(arr);


// // // arr.sort((a,b)=>b-a)
// // // console.log(arr);


// // arr.reverse()


// // console.log(arr);



// // const arr = [
// //     [1,2,3,4],
// //     [1,2,3,4],
// //     [1,2,3,4],
// //     [1,2,3,4],
// // ]
 

// // for(let i =0;i<arr.length;i++){
// //     for(j=0;j<arr[i].length;j++){
// //        console.log(arr[i][j]);
       
// //     }
// // }
// // let str = ''
// // for(let i=0;i<5;i++){
// //     for(let j=0;j<i;j++){
// //         str+=' * '
// //     }
// //     str+='\n'
// // }

// // console.log(str);

// let str = ''

// for(let i=0;i<5;i++){
//     for(let j=0;j<5;j++){
//         if( j==5-i-1){
//         str+=' * '

//         }
//         str+=' '


//     }
//     str+='\n'

// }
// console.log(str);


// let str = ''
// let n =5
// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         if(i==j || j==n-i-1){
//             str+='*'
//         }else{
//             str+=' '
//         }
//     }
//     str+=' \n'
// }
// console.log(str);


// let str = ''
// let n = 4
// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         //j==0 ||  left
//         //i==0 || upper
//         //j==n-1 || right 
//         //i==n-1 bottom
//         if(j==0 || i==0 || j==n-1 || i==n-1){
//             str+=`${i}${j}|`
//         }
//         str+="--"
        
//     }
//     str+="\n "

// }
// console.log(str);
 