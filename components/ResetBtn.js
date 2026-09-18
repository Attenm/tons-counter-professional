
class ResetBtn {
    constructor(){
        this.wrapper = document.querySelector('.app__wrapper');
        this.btnResetElem = null;
        this.timeout = null;
        this.valInput = null;
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
        const valInput = document.querySelector("#inputValueToAdd");
        const historyListElem = document.querySelector('.history-list');
        const summDisplay = document.querySelector(".summ");

        this.timeot = setTimeout(() => {
            const clear = confirm('Удалить историю?');
            if(clear){
                localStorage.removeItem("historyItems");
                localStorage.removeItem("total");
                localStorage.removeItem("valueToAdd");
                valInput.value = 0;
                historyListElem.innerHTML = `<ul class="history-list"><span class="empty">История чиста</span></ul`;
                summDisplay.innerHTML = 0;
            }
        }, 1000)
    }

    handleTouchEnd(){
        clearTimeout(this.timeot);
        this.btnResetElem.removeEventListener('touchend', this.handleTouchEnd)
        this.btnResetElem.removeEventListener('touchstart', this.handleTouchStart)
    }


}

const resetBtn =  new ResetBtn();
export default resetBtn;