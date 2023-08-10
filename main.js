const btn=document.querySelector('.btn');

btn.addEventListener('mouseover',(e)=>{
    e.preventDefault()
    document.querySelector('#my-form').style.background='yellow'
    console.log('Mouse over Sumbit')
});
 btn.addEventListener('mouseout',(e)=>{
    e.preventDefault()
    document.querySelector('#my-form').style.background='blue'
    console.log('Mouse out submit')
});
 btn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='#ccc';
    console.log('Submit clicked');
    const temp=document.querySelector('#name').value;
    const email=document.querySelector('#email').value
    console.log('Name: '+temp+' Email: '+email)
});
