
let names = prompt('ismingizni kiriting')
let currentYear = +prompt ('hozirgi yilni kiriting')
let birthYear  = +prompt ('tugilgan yilingizni kiriting')

function name(){
        return currentYear - birthYear
}
console.log(names, 'yosh: ', name())

 let qiymat = +prompt('istalgan son kiriting, biz sizga shuncha misollar beramiz :) ')
 function number(min,max){
         return Math.floor(Math.random()* (min,max)+min)
 }

 function symbol(){
         return Math.floor(Math.random()*(5-1)+1)
 }

 for (let i = 0; i <qiymat; i++){
         
        let num1 = number(1,10), num2 = number(1,10), Letsymbol = symbol() , javob = 0;
        if (Letsymbol === 1){
                javob = num1+ num2
                Letsymbol = '+'
        } else if(Letsymbol === 2){
                javob = num1 - num2
                Letsymbol = '-'
        }else if(Letsymbol === 3){
                javob = num1 / num2
                Letsymbol = '/'
        }else if(Letsymbol === 4){
                javob = num1 * num2
                Letsymbol = '*'
        }

        let yiguvchi = +prompt(num1+Letsymbol+num2)
        console.log( javob === yiguvchi ? 'sizning javobingiz togri! ' +yiguvchi : 'sizning javobingiz notogri  :( ' +yiguvchi + 'togri javob : ' +javob );
 } 
