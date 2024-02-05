
class ValueInput {
    constructor(){
        this.value = 0;
    }

    render(){
        if('valueToAdd' in localStorage){
            this.value = localStorage.valueToAdd;
        }

        const valueInputHtml = `<input class="value" type="number" value="${this.value}">`;
        document.querySelector('.content').insertAdjacentHTML('beforeend', valueInputHtml);
        this.handleEvent();
    }

    handleEvent(){
        document.querySelector('.value').addEventListener('input', (e)=>{
            const value = +e.target.value;
            localStorage.valueToAdd = value;
        });
    }
}

const valueInput = new ValueInput();

export default valueInput;
