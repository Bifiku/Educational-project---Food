document.addEventListener('DOMContentLoaded', () => {

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
    






















});