
export default class BtnMain {
    constructor(){
        this.btnMainHtml = '<div class="btn-main"><span class="summ">90</span></div>';
    }
    render(){
        document.querySelector('.app__wrapper').insertAdjacentHTML('beforeend', this.btnMainHtml);
    }
}