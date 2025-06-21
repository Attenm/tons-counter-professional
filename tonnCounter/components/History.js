
class HistoryList {
    constructor(){
        this.historyItems = [];
    }

    render(){
        const historyListHtml = `<ul class="history-list"><span class="empty">История чиста</span></ul`;

        document.querySelector('.content').insertAdjacentHTML('beforeend', historyListHtml);

        if('historyItems' in localStorage){
            this.historyItems = JSON.parse(localStorage.historyItems);
            this.historyListElem = document.querySelector('.history-list');
            this.historyListElem.innerHTML = '';
            this.getHistoryItems();
        }
    }

    getHistoryItems(){
        let historyItemsHtml = '';
        this.historyItems.forEach((item) => {
            const amount    = item.amount;
            const timeStamp = item.timeStamp;
            const time      = new Date(timeStamp);
            const hours     = time.getHours().toString().padStart(2, '0');
            const minutes   = time.getMinutes().toString().padStart(2, '0');
            const fullTime  = `${hours}:${minutes}`;

            historyItemsHtml = `<li class="history-item">
                                <span class="history-item__amount">
                                ${amount}</span>
                                ${fullTime}</li>`;
            this.historyListElem.insertAdjacentHTML('afterbegin', historyItemsHtml);
        });
    }
}

const historyList = new HistoryList();
export default historyList;