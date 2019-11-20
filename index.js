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
