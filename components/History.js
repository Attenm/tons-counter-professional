
class HistoryList {
    constructor(){
        this.historyItems = [
            {amount : 1.5,time : new Date().getMilliseconds()},
            {amount : 1.5,time : new Date().getMilliseconds()},
            {amount : 1.5,time : new Date().getMilliseconds()},
            {amount : 1.5,time : new Date().getMilliseconds()}
        ];
    }

    render(){
        const historyListHtml = '<ul class="history-list"><span class="empty">История чиста</span></ul'
        document.querySelector('.content').insertAdjacentHTML('beforeend', historyListHtml);
    }
}

const historyList = new HistoryList();
export default historyList;