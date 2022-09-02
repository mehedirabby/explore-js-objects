const kodomAli = {
    name: 'kodom ali',
    money:5000,
    study:'mathmatics',
    sujects:['calculus','algebra','geomatry'],
    exam: function(){
        return this.name+' is participating in an exam';
    },
    improveExam:function(subject){
        this.exam();
        return `${this.name} is taking improvement exm on ${subject}`
    },
    treatDay:function(amount){
        this.money= this.money - amount;
        return this.money;
    }
}


const result = kodomAli.exam();
console.log(result);

const badam ={
    name:'kacha badam',
    money:800
}
const result2 = kodomAli.exam.call(badam);
// console.log(result2)

const badamMoney = kodomAli.treatDay.call(badam,400,40)
// console.log(badamMoney);
const badamMoney2 = kodomAli.treatDay.apply(badam,[1000,100]);
console.log(badamMoney2);



const badamAlitreat = kodomAli.treatDay.blind(badam);
const remining = badamAlitreat(1000,100)
console.log(remining)