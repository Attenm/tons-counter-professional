
class ResetBtn {
    constructor(){
        this.imageUrl = 'images/reset.svg';
        this.wrapper = document.querySelector('.app__wrapper');
        this.btnResetElem = null;
        this.timeout = null;
    }

    render(){
        this.wrapper.insertAdjacentHTML('beforeend', `<img class="btn-reset" src="${this.imageUrl}">`);
        this.btnResetElem = document.querySelector('.btn-reset');
        this.handleEvents()
    }

    handleEvents(){
        this.btnResetElem.addEventListener('touchstart', this.handleTouchStart.bind(this))
    }
    
    handleTouchStart(){
        this.btnResetElem.addEventListener('touchend', this.handleTouchEnd.bind(this));

        this.timeot = setTimeout(() => {
            const clear = confirm('Удалить историю?');
            if(clear){
                localStorage.clear();
            }
        }, 2000)
    }

    handleTouchEnd(){
        clearTimeout(this.timeot);
        this.btnResetElem.removeEventListener('touch', this.handleTouchEnd)
        this.btnResetElem.removeEventListener('touch', this.handleTouchStart)
    }


}

const resetBtn =  new ResetBtn();
export default resetBtn;