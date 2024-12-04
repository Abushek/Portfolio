

document.addEventListener("DOMContentLoaded", function(event) { 
let btnGroup = document.querySelector('.button-layout');
let buttons = document.querySelectorAll('.button');

let dlbtnGroup = document.querySelector('.button-layout-dl');
let dlbuttons = document.querySelectorAll('.button-dl');
// Button Animation
gsap.to(btnGroup, {
  opacity: 1, 
  delay: .5,
  duration: .5
});

buttons.forEach((button, i) => {
  gsap.to(button, {
    opacity: 1, 
    delay: .3 + (.1 * i),
    duration: .2
  });
});

gsap.to(dlbtnGroup, {
  opacity: 1, 
  delay: .5,
  duration: .5
});

dlbuttons.forEach((button, i) => {
  gsap.to(button, {
    opacity: 1, 
    delay: .3 + (.1 * i),
    duration: .2
  });
});

});


//Home Page Animation\



document.addEventListener("DOMContentLoaded", function(event) { 
// var frameIndex=0
// function animate()
// {
//   requestAnimationFrame(() => {
//     animate();
//   });

// var homeText= document.getElementById("homeanim");  
// if (frameIndex>3)
// {
//   switch(frameIndex)
//   {
//    case 60: homeText.innerHTML= "YoRHa";
//             break;
//   case 120: homeText.innerHTML= "For";
//   break;

//   case 240: homeText.innerHTML= "Life";
//   break;

//   }
// }

// frameIndex++;
// console.log(frameIndex);
// }

// function startAnimate()
// {
//   animate();
// }

// Home Page load and singe click functionality

  
  let buttons = document.querySelectorAll('.button');
  $(buttons).on('click',loadpage);
  $(buttons).on('click',disableclick);
  window.onload=function(){
    $("#home").trigger('focus')
    $("#home").trigger('click');
    
    }
  function loadpage(){
    // if (this.id=='home')
    // {
    //   console.log('Are you even calling?');
    //   startAnimate();
    // }
    $("#varpage").load("./html_files/"+this.id+".html", function( response, status, xhr ) {
      
      clearInterval(TypeWriter);
      textanim(document);

    });
  }
  function disableclick()
  {
    for(i=0;i<5;i++)
    {
      if (buttons[i] != this && $._data(buttons[i], "events")['click'].length==1)
      {
        $(buttons[i]).on('click',loadpage);
        $(buttons).off('click',disableclick);
        $(buttons).on('click',disableclick);
      }
      else if (buttons[i]==this)
      {
        $(buttons[i]).off('click',loadpage);
      }
    }
  }
});

var TypeWriter;
//Animation function
function textanim (document)
{
  // Heading text animation
  var title = ['N', 'I', 'E','R'];
  changelim=document.getElementsByClassName("change").length;  
  
  var n =[];
  var j =[];
  const txt=[];
  const uptxt=[];
  for (l=0;l<changelim;l++)
  {
  txt[l]=document.getElementsByClassName("change")[l].innerHTML;
  uptxt[l]=document.getElementsByClassName("change")[l].innerHTML='';
  n[l]=0;
  j[l]=0;
  }
  
  TypeWriter= setInterval(function() { 
    for(k=0;k<changelim;k++)
  {
    if (j[k]<title.length && n[k] < txt[k].length)
    {
      temp = uptxt[k].split('');
      temp[n[k]] = title[j[k]];
      uptxt[k] = temp.join('');
      document.getElementsByClassName("change")[k].innerHTML = uptxt[k];
    }
    j[k]++;
    if (n[k] < txt[k].length && j[k] == title.length+1) {
      temp = uptxt[k].split('');
      temp[n[k]] = txt[k].charAt(n[k])
      uptxt[k] = temp.join('');
      document.getElementsByClassName("change")[k].innerHTML = uptxt[k];
      n[k]++;
      j[k]=0;   
    }
  }
  },8);

  // Stagger animation for paragraphs
  allparas=document.getElementsByClassName("para");
  for(i=0;i<allparas.length;i++)
  {  
  const text = new SplitType(allparas[i], { types: 'words'})
  gsap.from(text.words, {
    opacity: 0,
    x: -50,
    duration: 0.5,
    stagger: { amount: 0.5 },
  })
  }
}