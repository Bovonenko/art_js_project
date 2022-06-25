const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    // Scrolling with raf

    let links = document.querySelectorAll('[href^="#"]'),        // finds all links begin with #
        speed = 0.3;                                            // скорость прокрутки 

    links.forEach(link => {                                     // перебераем каждую ссылку
        link.addEventListener('click', function(event) {        // навешиваем обработчик событий на ссылки
            event.preventDefault();                             // отключаем перезагрузку страницы

            let heightTop = document.documentElement.scrollTop, // записываем сколько пролистал пользователь 
                hash = this.hash,                               // значение href у ссылки на которую кликнул пользователь
                toBlock = document.querySelector(hash).getBoundingClientRect().top,    // как высоко/низко находиться якорь 
                start = null;   

            requestAnimationFrame(step);     debugger   // запускаем анимацию

            function step(time) {       // создаем функцию для нашей анимации(аргумент тайм - это время прошедшее с момента начала загрузки страицы в миллисекундах)
                if (start === null) { debugger   // проверяем если функция запускается первый раз
                    start = time;   debugger    // если да, то присваеваем время прошедшее с момента начала загрузки страицы
                }debugger

                let progress = time - start,  // сколко времени прошло с запуска функции, как быстро она выполняется (это для установки плавного скролла )
                    r = (toBlock < 0 ? Math.max(heightTop - progress/speed, heightTop + toBlock) : Math.min(heightTop + progress/speed, heightTop + toBlock)); debugger
                    // в первом условии проверяем куда делается скролл вверх/вниз 

                document.documentElement.scrollTo(0, r); debugger  // плавно скролим

                if (r != heightTop + toBlock) { debugger    // рекурсивно вызываем анимацию пока не дойдем до нужного элемента
                    requestAnimationFrame(step); debugger
                } else { debugger
                    location.hash = hash; debugger   // записываем в поисковую строку #id
                }
            }

        });
    });
        








    // Pure js scrolling

    // const element = document.documentElement,
    //       body = document.body;

    // const calcScroll = () => {
    //     upElem.addEventListener('click', function (event) {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (this.hash !== '') {
    //             event.preventDefault();
    //             let hashElement = document.querySelector(this.hash),
    //                 hashElementTop = 0;

    //             while (hashElement.offsetParent) {
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent;
    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElement, this.hash);
    //         }
    //     });
    // };

    // const smoothScroll = (from, to, hash) => {
    //     let timeInterval = 1,
    //         prevScrollTop,
    //         speed;
        
    //     if (to > from) {
    //         speed = 30;
    //     } else {
    //         speed = -30;
    //     }

    //     let move = setInterval(function() {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         } else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };

    // calcScroll();
};

export default scrolling;