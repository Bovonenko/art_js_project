const changeModalState = (state) => {
    const photoSize = document.querySelector('#size'),
          photoMaterial = document.querySelector('#material'),
          photoOptions = document.querySelector('#options'),
          photoPromoCode = document.querySelector('.promocode');
        //   photoPrice = document.querySelector('.calc-price').innerHTML;


    function bindActionToElems(event, elem, prop) {
        elem.addEventListener(event, () => {
            elem.value == 'IWANTPOPART' ? state[prop] = true : state[prop] = false;
            state[prop] = elem.value;
            // switch(item.nodeName) {
            //     case 'SPAN' :
            //         state[prop] = i;
            //         break;
            //     case 'INPUT' :
            //         if (item.getAttribute('type') === 'checkbox') {
            //             i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
            //             elem.forEach((box, j) => {
            //                 box.checked = false;
            //                 if (i == j) {
            //                     box.checked = true;
            //                 }
            //             });
            //         } else {
            //             state[prop] = item.value;
            //         }
            //         break;
            //     case 'SELECT' :
            //         state[prop] = item.value;
            //         break;
            // }
            console.log(state);
        });
    }

    bindActionToElems('change', photoSize, 'size');
    bindActionToElems('change', photoMaterial, 'material');
    bindActionToElems('change', photoOptions, 'options');
    bindActionToElems('input', photoPromoCode, 'promocode');
    
};

export default changeModalState;