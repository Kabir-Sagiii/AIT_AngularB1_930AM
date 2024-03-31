
function fn(x:unknown):void{
       if(typeof x === 'function'){
           x()
       }
}

fn(8)