class Student {
constructor(){
    this.id = 1;
    this.name = "Saidur"
}
}

const student1 = new Student();
const student2 = new Student();
console.log(student1, student2);


class Students {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
    }
    }
    
    const students1 = new Students(1, "Saidur");
    const students2 = new Students(2, "Shuvo");
    console.log(students1, students2);