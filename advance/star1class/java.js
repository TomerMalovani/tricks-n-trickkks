class Student{
    constructor(course,name){
        this.name= name;
        this.course = course;
    }
}

class Programmer extends Student{
    constructor(name,os,lang,vcs){
        super("programming",name)
        this.os = os;
        this.lang = lang;
        this.vcs = vcs;
    }

    isProgramming(langtocheck){
        if(this.lang === langtocheck){
            return true;
        }
        else{
            return false;
        }
    }
}

let e = [new Programmer ("tomer","windos","java","git"),new Student("ron","maths")]
checkProgrammers("java",e);
function checkProgrammers (lang,arr){
    for (let i = 0; i < Array.length;i++){
        if (arr[i].isProgramming(lang)){
           console.log(arr[i].name+" is the first one") ;
            break;
        }
    }
}

