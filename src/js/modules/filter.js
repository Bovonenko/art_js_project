const filter = (menuSelector, itemsSelector, contentWrapper, contentItems, text) => {
    const menu = document.querySelector(menuSelector),
          items = menu.querySelectorAll(itemsSelector),
          wrapper = document.querySelector(contentWrapper),
          markAll = wrapper.querySelectorAll(contentItems),
          no = document.querySelector(text);

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });
        
        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    function useFilter(selector) {
        const btn = menu.querySelector(selector),
              mark = wrapper.querySelectorAll(selector);

        btn.addEventListener('click', () => {
            if (mark.length == 0) {
                typeFilter();
            } else {
                typeFilter(mark);
            }
        });
    }

    useFilter('.all');
    useFilter('.lovers');
    useFilter('.chef');
    useFilter('.girl');
    useFilter('.guy');
    useFilter('.grandmother');
    useFilter('.granddad');

    menu.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.tagName == 'LI') {
            items.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
        }
    });

};

export default filter; 