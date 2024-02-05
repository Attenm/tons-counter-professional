
export default class BtnMain {
    constructor(){
        this.btnMainElem = null;
        this.total = 0;
        this.timeout = null;
        this.summElem = null;
    }
    render(){
        if('total' in localStorage){
            this.total = localStorage.total;
        }
        const btnMainHtml = `<div class="btn-main"><span class="summ">${this.total}</span></div><div class="content"></div>`;
        document.querySelector('.app__wrapper').insertAdjacentHTML('beforeend', btnMainHtml);
        this.btnMainElem = document.querySelector('.btn-main');
        this.summElem = document.querySelector('.summ');
        this.handleEvents();
    }

    summ(){
        const input = document.querySelector('.value');
        const initValue = +this.summElem.innerText;
        const summValue = initValue + +input.value;

        this.summElem.innerText = summValue;
        localStorage.total = summValue;
    }

    handleEvents(){
        this.btnMainElem.addEventListener('touchstart', this.handleTouchStart.bind(this));
        this.btnMainElem.addEventListener('touchend', this.handleTouchEnd.bind(this));
    }
    
    handleTouchStart(e){
        e.target.classList.add('btn-main--active');

        this.timeout = setTimeout(() => {
                this.summ();
                // this.vibrating();
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