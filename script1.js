var numofdrum_btn = document.querySelectorAll(".drum").length;

for (var i=0 ; i< numofdrum_btn ; i++ )
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var btn_innerhtml = this.innerHTML;
      makeSound(btn_innerhtml);
      btnAnimation(btn_innerhtml);
    }
  );

document.addEventListener("keypress",function(event)
{
  makeSound(event.key);
  btnAnimation(event.key);
}
);

 function makeSound(key)
 {
   switch (key) {
     case 'w':
       var tom1 = new Audio("sounds/tom-1.mp3");
       tom1.play();
       break;

      case 'a':
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;

         case 's':
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           break;

           case 'd':
             var tom4 = new Audio("sounds/tom-4.mp3");
             tom4.play();
             break;

             case 'j':
               var crash = new Audio("sounds/crash.mp3");
               crash.play();
               break;

               case 'k':
                 var snare = new Audio("sounds/snare.mp3");
                 snare.play();
                 break;

                 case 'l':
                   var kick = new Audio("sounds/kick-bass.mp3");
                   kick.play();
                   break;

                 default: consol.log (btn_innerhtml);

   }
 }

function btnAnimation(currentBtn)
{
  var activeBtn = document.querySelector('.' + currentBtn) ;
  activeBtn.classList.add("pressed");

  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  },100);
}
}
