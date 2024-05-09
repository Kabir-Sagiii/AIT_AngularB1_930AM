class A {
    private id = 1001
 get getId(){
    return this.id
 }
 
 set idV(id:number){
this.id = id
 }
    
}

var a1 = new A()
var idvalue = a1.getId
console.log(idvalue)

 a1.idV = 1
 idvalue = a1.getId
console.log(idvalue)