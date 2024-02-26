let buttonAnimation         = document.getElementById("button_like"),
    buttonAnimationContent  = document.getElementById("button_like"),
    buttonMenu              = document.getElementsByClassName("row_menu_block__element_dynamic_button"),
    lang                    = document.getElementById("lang"),
    blockHidden             = document.getElementById("block_hidden"),
    html                    = document.getElementById("html")


addEventListener("click", function(event){
    if(event.target.closest(".row_main_block_flights__element_button_like_content")){

    }
    if(event.target.closest(".row_menu_block__element_list_lang hidden") || event.target.closest(".row_menu_block__element_list_lang_hidden")){
        console.log(1)
        if(event.target.closest(".ru")){
            console.log(2)
            if(!html.lang == "ru"){
                console.log(3)
                html.setAttribute("lang", "ru") 
            }
        }
        if(event.target.closest(".en")){
            console.log(2)
            if(!html.lang == "en"){
                console.log(3)
                html.setAttribute("lang", "en") 
            }
        }
        if(event.target.closest(".ua")){
            console.log(2)
            if(!html.lang == "ua"){
                console.log(3)
                html.setAttribute("lang", "ua") 
            } 
        }
    }
});


addEventListener("click", function(event){
    if(event.target.closest(".row_menu_block__element_dynamic_button")){
        if(blockHidden.className == "row_menu_block__element_list_hidden visible"){
            blockHidden.classList.remove("visible");
        }
        else{
            blockHidden.classList.add("visible");
        }
    }
    if(!event.target.closest(".row_menu_block__element_dynamic_button") && !event.target.closest(".row_menu_block__element_list_hidden")){
        blockHidden.classList.remove("visible");
    }
});