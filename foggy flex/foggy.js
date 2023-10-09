const button=document.querySelector('button')
button.addEventListener('click',addCSS);
function addCSS(){
    const textAreaElement=document.querySelector('textarea');
    const css=textAreaElement.value;
    const foreFront=document.querySelector('#forefront')
    console.log(foreFront);
    foreFront.style.cssText=css;

}