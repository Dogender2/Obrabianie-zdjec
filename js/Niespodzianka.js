var clicks = 0;
        
        function counter(){
            clicks += 1;
            
            if(clicks === 5)
            {
                $(".logo").text("AŁA!!! To boli.");
            }

            if(clicks === 10)
            {
                $(".logo").text("Nie bij!");
            }

            if(clicks === 15){
                $(".logo").text("Musisz tak mocno klikać?");
            }

            if(clicks === 20){
                $(".logo").text("Czyję się molestowany.");
            }

            if(clicks === 25){
                $(".logo").text("Właściwie. Na co ty liczysz?");
            }
            
            if(clicks === 30){
                $(".logo").text("Jeszcze raz mnie klikniesz tooo...");
            }
            
            if(clicks === 31){
                $(".logo").text("Noo kurdeeee!!!");
            }

            if(clicks === 35){
                $(".logo").text("Denerwujesz mnie.");
            }

            if(clicks === 40){
                Ups();
                $(".logo").text("Widzisz co zrobiłeś?");
            }

            if(clicks === 45){
                Ups2();
                $(".logo").text("Psuja :P");
            }

            if(clicks === 50){
                location.reload();
            }
        }

        function Ups(){
            $(".wrapper").css("transform", "rotate(90deg)");
            $(".wrapper").css("transform-origin", "bottom left");
            $(".wrapper").css("position", "absolute");
            $(".wrapper").css("top", "-100vw");
            $(".wrapper").css("left", "0");
            $(".wrapper").css("height", "100vw");
            $(".wrapper").css("width", "100vh");
            $(".wrapper").css("overflow", "auto");
        }

        function Ups2(){
            $(".wrapper").css("transform", "rotate(180deg)");
            $(".wrapper").css("height", "100vh");
            $(".wrapper").css("width", "100vw");
            $(".wrapper").css("position", "absolute");
            
            $(".wrapper").css("transform-origin", "top left");
            $(".wrapper").css("top", "100%");
            $(".wrapper").css("left", "100%");
        }