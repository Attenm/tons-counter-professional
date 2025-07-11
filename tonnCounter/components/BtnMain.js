
export default class BtnMain {
    constructor(){
        this.btnMainElem = null;
        this.total = 0;
        this.timeout = null;
        this.summElem = null;
    }
    render(){
        if('total' in localStorage){
            this.total = +localStorage.total;
            if(this.total % 1 === 0){
                this.total.toFixed();
            } else {
                this.total.toFixed(1);
            }
        }

        const btnMainHtml = `<div class="btn-main"><span class="summ">${this.total}</span></div><div class="content"></div>`;
        
        document.querySelector('.app__wrapper').insertAdjacentHTML('beforeend', btnMainHtml);
        this.btnMainElem = document.querySelector('.btn-main');
        this.summElem = document.querySelector('.summ');
        this.handleEvents();
    }

    summ(){
        const input = document.querySelector('.value');
        const inputValue = input.value;
        if(+inputValue <= 0){
            alert('Не спать');
            return;
        }
        const initValue = +this.summElem.innerText;
        const summValue = initValue + +inputValue;
        let totalSumm = summValue.toFixed(1);

        if(totalSumm % 1 === 0){
            totalSumm = summValue.toFixed();
        }

        this.summElem.innerText = totalSumm;
        localStorage.total = summValue;
        this.saveToHistory(input)
    }

    saveToHistory(input){
        const historyListElem = document.querySelector('.history-list');
        const valueToAdd = +input.value;
        const date = new Date();
        const timeStamp = date.getTime();
        const hours     = date.getHours().toString().padStart(2, '0');
        const minutes   = date.getMinutes().toString().padStart(2, '0');
        const fullTime  = `${hours}:${minutes}`;
        const newHistoryItemHtml = `<li class="history-item">
                                    <span class="history-item__amount">
                                    ${valueToAdd}</span>
                                    ${fullTime}</li>`;
        if(historyListElem.querySelector('.empty')){
            historyListElem.innerHTML = '';
        }
        historyListElem.insertAdjacentHTML('afterbegin', newHistoryItemHtml);

        const newHistoryItem = {amount: valueToAdd, timeStamp: timeStamp};
        if('historyItems' in localStorage){
            const initHistoryItems = JSON.parse(localStorage.historyItems);
            const historyItems = [...initHistoryItems, newHistoryItem];
            localStorage.historyItems = JSON.stringify(historyItems);
        } else {
            localStorage.historyItems = JSON.stringify([newHistoryItem]);
        }
    }

    handleEvents(){
        this.btnMainElem.addEventListener('touchstart', this.handleTouchStart.bind(this));
    }
    
    handleTouchStart(e){
        this.btnMainElem.addEventListener('touchend', this.handleTouchEnd.bind(this));
        e.target.classList.add('btn-main--active');

        this.timeout = setTimeout(() => {
                this.summ();
        }, 1500);
    }
    
    handleTouchEnd(e){
        clearTimeout(this.timeout);
        e.target.classList.remove('btn-main--active');
        e.target.removeEventListener('touchstart', this.handleTouchStart);
        e.target.removeEventListener('touchend', this.handleTouchEnd)
    }


    vibrating(duration = 300) {
        if ("vibrate" in navigator) {
            navigator.vibrate(duration);
        } else {
            alert("Ваше устройство не поддерживает API вибрации.");
        }
    }


}