
function f_tabuada() {

    let num=document.getElementById('txtnum')  
    let sel=document.getElementById('txtcxa')
    
    if (num.value.length ==0) {
        window.alert('ERRO! DIGITE UM NUMERO')
    } else{
        let n=Number(num.value)
        let c=1
        while (c<=10) {
            let item=document.createElement('option')
            item.text=`${n} X ${c} = ${n*c}`
            sel.appendChild(item)
            c++
        }
    }

    
    
   


  
}