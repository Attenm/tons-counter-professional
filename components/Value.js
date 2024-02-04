
class ValueInput {
    constructor(){

    }

    render(){
        const valueInputHtml = `<input class="value" type="number" value="0">`;
        document.querySelector('.content').insertAdjacentHTML('beforeend', valueInputHtml)
    }
}

const valueInput = new ValueInput();

export default valueInput;
