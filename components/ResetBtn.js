
class ResetBtn {
    constructor(){
        this.wrapper = document.querySelector('.app__wrapper');
        this.btnResetElem = null;
        this.timeout = null;
    }

    render(){
        this.wrapper.insertAdjacentHTML('beforeend', `<div class="btn-reset"></div>`);
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
                location.reload()
            }
        }, 1500)
    }

    handleTouchEnd(){
        clearTimeout(this.timeot);
        this.btnResetElem.removeEventListener('touchend', this.handleTouchEnd)
        this.btnResetElem.removeEventListener('touchstart', this.handleTouchStart)
    }


}

const resetBtn =  new ResetBtn();
export default resetBtn;