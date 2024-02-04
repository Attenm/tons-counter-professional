
export default class BtnMain {
    constructor(){
        this.btnMainElem = null;
        this.value = 0;
        this.btnMainHtml = `<div class="btn-main"><span class="summ">${this.value}</span></div><div class="content"></div>`;
        this.timeout = null;
    }
    render(){
        document.querySelector('.app__wrapper').insertAdjacentHTML('beforeend', this.btnMainHtml);
        this.btnMainElem = document.querySelector('.btn-main');
        this.handleEvents();
    }

    summ(){
        const input = document.querySelector('.value');
        const summ  = document.querySelector('.summ');

        const initValue = +summ.innerText;
        summ.innerText = initValue + +input.value;
    }

    handleEvents(){
        this.btnMainElem.addEventListener('touchstart', this.handleTouchStart.bind(this));
        this.btnMainElem.addEventListener('touchend', this.handleTouchEnd.bind(this));
    }
    
    handleTouchStart(e){
        e.target.classList.add('btn-main--active');

        this.timeout = setTimeout(() => {
                this.summ();
                this.vibrating();
        }, 3000);
    }
    
    handleTouchEnd(e){
        clearTimeout(this.timeout);
        e.target.removeEventListener('touchstart', this.handleTouchStart);
        e.target.classList.remove('btn-main--active');
    }


    vibrating(duration = 300) {
        if ("vibrate" in navigator) {
            navigator.vibrate(duration);
        } else {
            alert("Ваше устройство не поддерживает API вибрации.");
        }
    }


}