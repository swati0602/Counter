let  count = 0 ;

const counterEl = document.getElementById("conter")

document.getElementById("increase").addEventListener("click" ,
    function(){
        count++;
        counterEl.textContent = count
    });

    document.getElementById("decrease").addEventListener("click" ,
        function(){
            count--;
            counterEl.textContent = count
        });

        document.getElementById("10").addEventListener("click" ,
            function(){
                count = count + 10;
                counterEl.textContent = count
            });

            document.getElementById("reset").addEventListener("click" ,
                function(){
                    count = 0;
                    counterEl.textContent = count
                });
    
            
