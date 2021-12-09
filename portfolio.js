// menu show y hidden


  const navMenu=document.getElementById('nav_menu');
  const navToggle=document.getElementById('nav-toggle');
  const navClose=document.getElementById('nav-close');


//   menu show


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    });
}

// MENU HIDDEN 

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    });
}

// remove menu mobile

const navLink=document.querySelectorAll('.nav_link');


function linkAction(){
    const navMenu=document.getElementById('nav_menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n=>n.addEventListener('click',linkAction));

// ----ACCORDION SKILLS

const skillsContent=document.getElementsByClassName('skills_content');
const skillsHeader=document.querySelectorAll('.skills_header');

function toggleSkills(){
    let itemClass=this.parentNode.className;
    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className='skills_content skills_close';

    }

    if(itemClass==='skills_content skills_close'){
        this.parentNode.className='skills_content skills_open';
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills);
});


// -----QUALIFICATION TABS

const tabs=document.querySelectorAll('[data-target]');
const tabContents=document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification_active');
        });

        target.classList.add('qualification_active');

        tabs.forEach(tab=>{
            tab.classList.remove('qualification_active');
        });
        tab.classList.add('qualification_active');
    });
});

// -----SERVICES

const modalViews= document.querySelectorAll('.services_modal'),
      modalBtns=document.querySelectorAll('.services_button'),
      modalCloses=document.querySelectorAll('.services_modal-close');

      let modal=function(modalClick){
          modalViews[modalClick].classList.add('active-modal');
      };

      modalBtns.forEach((modalBtn,i)=>{
          modalBtn.addEventListener('click',()=>{
              modal(i);
          })
      });

      modalCloses.forEach(modalClose=>{
          modalClose.addEventListener('click',()=>{
              modalViews.forEach((modalView)=>{
                  modalView.classList.remove('active-modal');
              });
          });
      });

   



