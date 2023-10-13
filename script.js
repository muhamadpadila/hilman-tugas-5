let input = prompt("asup keun bilangana! ")
if (isNaN(input) ){
    alert(input + "ieu lain bilangan! coba di ulang dei")
}else{
    if(input % 2 === 0){
        alert(input + " ieu bilangan genap!")
    }else{
        alert(input + "ieu bilangan ganjil")
    }
}