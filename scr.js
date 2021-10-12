document.querySelector('button').onclick = myClick;

function myClick() {
    console.log('формочка');
    let a = document.querySelector('.name').value;
    console.log(a);
    let b = document.querySelector('.email').value;
    console.log(b);
    let c = document.querySelector('.number').value;
    console.log(c);
    
    let p = document.querySelector('.text');
    console.log(p.value)

    document.querySelector('.sum').innerHTML = "DONE!"
   setTimeout
}
