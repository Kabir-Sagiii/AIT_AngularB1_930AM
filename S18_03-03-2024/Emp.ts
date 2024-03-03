interface IEmp{
    empname:string,
    empid:number

     display(name:string):void
    
}


class IEmp implements IEmp{
    empname: string = "Raj"
    empid: number = 101

    display(name:string): void {
        console.log(this.empid,this.empname,name)
    }
}