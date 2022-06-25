import { postData } from "../services/request";

const drop = () => {
    // drag *
    // dragend *
    // dragenter
    // dragexit *
    // dragleave
    // dragover
    // dragstart *
    // drop


    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) { // в аргумент передаем элемент который хотим подсветить
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0 .7)";
    }

    function unhighlight(item) { // в аргумент передаем элемент который хотим подсветить
        item.closest('.file_upload').style.border = "none";
        item.closest('.file_upload').style.backgroundColor = "unset";
    }

    ['dragenter', 'dragover'].forEach(eventName => { // берем 2 события
        fileInputs.forEach(input => {               // берём все файловые инпуты с которыми будем работать
            input.addEventListener(eventName, () => highlight(input), false); // на каждый инпут навешиваем событие
        });
    });

    ['dragleave', 'drop'].forEach(eventName => { // берем 2 события
        fileInputs.forEach(input => {               // берём все файловые инпуты с которыми будем работать
            input.addEventListener(eventName, () => unhighlight(input), false); // на каждый инпут навешиваем событие
        });
    });

    fileInputs.forEach(input => {              
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;

            if (input.closest('.main')) {
                let formData = new FormData();
                [...input.files].forEach(file => {
                    formData.append('files', file);
                    postData('assets/server.php', formData)
                        .then(res => console.log(res))
                        .catch(error => console.error(error));
                });

            }

            let dots;
            let arr = input.files[0].name.split('.');

            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });

};

export default drop;