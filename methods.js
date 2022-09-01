const student = {
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
const output =student.exam()
// console.log(output)

const reExam = student.improveExam('algebra');
// console.log(reExam);

const remining= student.treatDay(950)
console.log(remining);