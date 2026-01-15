// document.querySelector('.btn').onclick = myClick;
// function myClick() {
//         //получить инпут 
//     const inPut1 = Number(document.querySelector('.input_1').value)
//     const inPut2 = Number(document.querySelector('.input_2').value)
//     const inPut3 = Number(document.querySelector('.input_3').value)
//     // const num = Number(inPut1, inPut2, inPut3)
//     console.log(inPut1+inPut2+inPut3);
// }
const button = document.querySelector('.btn')
button.addEventListener('click', function () {
    const one = Number (document.querySelector('.input_1').value)
    console.log(one+1);
})
