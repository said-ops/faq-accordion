document.addEventListener('DOMContentLoaded', function (){

    const buttons = document.querySelectorAll('.show');
    const answers = document.querySelectorAll('.answer');

    buttons.forEach((button, index) => {
    button.addEventListener('click' , function (){
        const answer = answers[index];
        if(answer.style.display==='none'){
           
                answers.forEach(a => a.style.display='none');
                answer.style.display='block';
            
            
            button.style.backgroundImage ='url(./assets/images/icon-minus.svg)';
        }else{
            answer.style.display='none';
            button.style.backgroundImage ='url(./assets/images/icon-plus.svg)';
            

        }
    });
});
}); 

