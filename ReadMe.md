the password of NPM :  uzWVDp5JSTOnqRgh+hTmJOErDjQ=
user name : ad.sulemann


#create our NPM private packages and using it:






-----------------get perfect shadow-package every time for a non-designer developer-----------------

to make any packages we have to create our Js code then :

EX:

function softshadow(option){
    let images = document.querySelectorAll('.softshadow');
    if(option.shadow_type === 'hard'){
        option.shadow_type='15px'
    }
    else{
        option.shadow_type='0';
    }

    images.forEach(image=>{
        image.atyle.boxSahdow=`15px 10px 10px${option.shadow_type} rgb(0,0,0,0.22)`;
        if(option.padding){
            image.style.padding= '1em';
        }
        image.style.margin= '1em';
    })
}
module.exports.softshadow=softshadow;








then hit these in the terminal one by one: 


npm adduser 
Username: adsulemann
Password: 
Email: (this IS public) ad.sulemann@gmail.com









#installation


npm i softshadow 

``````````````````````````


then import{softshadow} from 'softshadow';

softshadow({
    shadow_type: 'soft,
    padding: false
})



```````````````````````````


