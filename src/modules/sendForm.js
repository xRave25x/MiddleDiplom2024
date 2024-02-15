const validate = (formData) => {
    const fio = formData.get('fio');
    const phone = formData.get('phone');

    if(fio === '' || phone === ''){
        return false;
    }

    return true;
}

const sendForm = ({ formName, someElemId }) => {
    let form = document.querySelector(formName);
    const name = form.querySelector('input[name="fio"]');
    const phone = form.querySelector('input[name="phone"]')
    const maxlenght = 16;

    name.addEventListener('input', () => {
        name.value = name.value.replace(/[^a-zа-яё]/gi, '');
    });

    phone.addEventListener('input', () => {
        phone.value = phone.value.replace(/[^+0-9]/gi, '');
        if (phone.value.length >= maxlenght) {
            phone.value = phone.value.substr(0,maxlenght);
        }
    });

    const sendData = (formData, type) => {

        
        let body;
        let headers;
        if(type === 'json'){
            body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            body = JSON.stringify(body);
            headers = {
                'Content-Type': 'application/json'
            }
        }else{
            body = formData;
            headers = {
                'Content-Type': 'multipart/form-data'
            }
        }

        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: body,
            headers: headers
        }).then(res => res.json());

    } 
    
    form.addEventListener('submit', e => {
        e.preventDefault();

        let stbl = form.querySelector('.statusBlock');
        if(stbl) stbl.remove();

        const statusBlock = document.createElement('div');
        statusBlock.classList.add('statusBlock');
        form.append(statusBlock);

        let formData = new FormData(document.querySelector(formName));
        
        const someElem = document.getElementById(someElemId);

        if(someElem){
            formData.set(someElemId, someElem.value);
        }

        try{
            
            
            if(!validate(formData)){
                throw new Error('Заполните все поля!');
                
            } 
    
            sendData(formData, 'json').then(data => {
                statusBlock.innerText = 'спасибо';
                setTimeout(() => {
                    statusBlock.remove();
                }, 3000);
            }).catch(() => {
                throw new Error('Ошибка');
            })

        }catch(e){
            statusBlock.innerText = e.message;
        }

        
    });
}

export default sendForm;