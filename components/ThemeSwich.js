export default class ThemeSwitch {
    constructor(){
        this.wrapper = document.querySelector('.app__wrapper');
    }
    render(){
        this.wrapper.insertAdjacentHTML('afterbegin', `<input id="btn-theme_switch" type="checkbox">`);
        this.btnResetElem = document.getElementById('btn-theme_switch');
        this.addEvent();
    }

    toggleTheme(){
        if(document.body.className === "night"){
            document.body.className = "day";
            localStorage.setItem("theme", "day");
        } else {
            document.body.className = "night";
            localStorage.setItem("theme", "night");
        }
    }

    addEvent(){
        this.btnResetElem.addEventListener("change", this.toggleTheme)
    }
}
