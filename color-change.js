$(function(){    
    var r = $("#red")
    var o = $("#orange")
    var y = $("#yellow")
    var g = $("#green")
    var b = $("#blue")
    var p = $("#purple")

    var RandCol = new Array ()
    RandCol[0] = Math.floor(Math.random() * 6) + 1;
    RandCol[1] = Math.floor(Math.random() * 6) + 1;
    RandCol[2] = Math.floor(Math.random() * 6) + 1;
    RandCol[3] = Math.floor(Math.random() * 6) + 1;
    alert (RandCol);
    
    var ClickCount = 0
    var CurLev = 1


    r.click(function(e){

        var x = document.getElementsByClassName(("lv" + CurLev.toString()));

        if (ClickCount == 4){
            ClickCount = 0;
        }
        else{}

        x[ClickCount].style.backgroundColor = "red";
        ClickCount++;     
    })
    o.click(function(e){

        var x = document.getElementsByClassName(("lv" + CurLev.toString()));

        if (ClickCount == 4){
            ClickCount = 0;
        }
        else{}

        x[ClickCount].style.backgroundColor = "orange";
        ClickCount++;

    })
    y.click(function(e){

        var x = document.getElementsByClassName(("lv" + CurLev.toString()));

        if (ClickCount == 4){
            ClickCount = 0;
        }
        else{}

        x[ClickCount].style.backgroundColor = "yellow";
        ClickCount++;
    })
    g.click(function(e){

        var x = document.getElementsByClassName(("lv" + CurLev.toString()));

        if (ClickCount == 4){
            ClickCount = 0;
        }
        else{}

        x[ClickCount].style.backgroundColor = "green";
        ClickCount++;
    })
    b.click(function(e){

        var x = document.getElementsByClassName(("lv" + CurLev.toString()));

        if (ClickCount == 4){
            ClickCount = 0;
        }
        else{}

        x[ClickCount].style.backgroundColor = "blue";
        ClickCount++;
    })
    p.click(function(e){

        var x = document.getElementsByClassName(("lv" + CurLev.toString()));

        if (ClickCount == 4){
            ClickCount = 0;
        }
        else{}

        x[ClickCount].style.backgroundColor = "purple";
        ClickCount++;
    })

    var check = $("#check");
    var NumCol = new Array ();

    check.click(function(e){
        
        var FinalCol = document.getElementsByClassName(("lv" + CurLev.toString()));

        CurLev++;

        for (i=0; i<=3; i++) {

            if(FinalCol[i].style.backgroundColor == "red"){
                NumCol[i]= 1;
            }
            else if(FinalCol[i].style.backgroundColor == "orange"){
                NumCol[i]= 2;
            }
            else if(FinalCol[i].style.backgroundColor == "yellow"){
                NumCol[i]= 3;
            }
            else if(FinalCol[i].style.backgroundColor == "green"){
                NumCol[i]= 4;
            }
            else if(FinalCol[i].style.backgroundColor == "blue"){
                NumCol[i]= 5;
            }
            else if(FinalCol[i].style.backgroundColor == "purple"){
                NumCol[i]= 6;
            }

        }
        var res = document.getElementById(("res" + CurLev.toString()));
        var dots = res.childNodes;
      

        if(JSON.stringify(NumCol) == JSON.stringify(RandCol)){
            alert("Mastermind")
        }
        else{
        
            if (NumCol[0] == RandCol[0]){
                dots[0].style.backgroundColor = "black";
                alert(dots)
                console.log
            }
            else{
                for(i = 0; i < 4; i++){
                    if(NumCol[0] == RandCol[i]){
                        dots[0].style.backgroundColor = "white";
                    }
                    break
                }
            }
            if (NumCol[1] == RandCol[1]){
                dots[1].style.backgroundColor = "black";
            }
            else{
                for(i = 0; i < 4; i++){
                    if(NumCol[1] == RandCol[i]){
                        dots[1].style.backgroundColor = "white";
                    }
                    break
                }
            }
            if (NumCol[2] == RandCol[2]){
                dots[2].style.backgroundColor = "black";
            }
            else{
                for(i = 0; i < 4; i++){
                    if(NumCol[2] == RandCol[i]){
                        dots[2].style.backgroundColor = "white";
                    }
                    break
                }
            }
            if (NumCol[3] == RandCol[3]){
                dots[3].style.backgroundColor = "black";
            }
            else{
                for(i = 0; i < 4; i++){
                    if(NumCol[3] == RandCol[i]){
                        dots[3].style.backgroundColor = "white";
                    }
                    break
                }
            }
        }
        
    })
})
