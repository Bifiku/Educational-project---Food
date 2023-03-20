document.addEventListener('DOMContentLoaded', () => {
    // TABS
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabcontainer');

    function HideTabsContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hide', 'fade');
            item.classList.remove('show');
        });
        
        tabs.forEach((item) => {
            if (item.classList.contains('tabheader__item_active')){
                item.classList.remove('tabheader__item_active');
            }
        });
    }

    function ShowTabsContent(i){
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');

        tabs[i].classList.add('tabheader__item_active');

    }
    
    HideTabsContent();
    ShowTabsContent(0);

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if(item == target){
                    HideTabsContent();
                    ShowTabsContent(i);
                }
            });
        }

    }); 
    
    // TIMER
    const deadline = '2023-08-14';

    function getTimeRemaping(endTime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endTime) - Date.now();

        if(t <= 0){
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            minutes = Math.floor(t / (1000 * 60) % 60),
            seconds = Math.floor(t / 1000 % 60);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if(num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const t = document.querySelector(selector),
              days = t.querySelector('#days'),
              hours = t.querySelector('#hours'),
              minutes = t.querySelector('#minutes'),
              seconds = t.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock(){
            const t = getTimeRemaping(endtime);
            if(t.total <= 0){
                clearInterval(timeInterval);
                days.innerHTML = '00';
                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
            } else {
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);
            }    
        }            
    }     
    setClock('.timer', deadline);



    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');


    modalTrigger.forEach((btn) => {
        btn.addEventListener('click', openModal);
        
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; 
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }    

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if(e.target === modal){
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 3000);

    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);









});

















});