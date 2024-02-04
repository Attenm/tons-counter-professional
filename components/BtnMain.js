
export default class BtnMain {
    constructor(){
        this.btnMainHtml = '<div class="btn-main"><span class="summ">90</span></div>';
        this.btnMainElem = null;
        this.isClicked = false;
        this.isSent = false;
    }
    render(){
        document.querySelector('.app__wrapper').insertAdjacentHTML('beforeend', this.btnMainHtml);
        this.btnMainElem = document.querySelector('.btn-main');
        this.handleEvents();
    }

    handleEvents(){
        this.btnMainElem.addEventListener('touchstart', this.handleTouchStart.bind(this));
        this.btnMainElem.addEventListener('touchend', this.handleTouchEnd);
    }
    
    handleTouchStart(e){
        this.isSent = false;
        this.isClicked = true;
        console.log('hello');
        e.target.classList.add('btn-main--active');

        setTimeout(() => {
            console.log(this.isClicked)
            console.log(this.isSent)
            if(this.isClicked){
                if(!this.isSent){
                    this.vibrating();
                    this.isSent = true;
                }
            }
        }, 3000)
    }
    
    handleTouchEnd(e){
        this.isClicked = false;
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