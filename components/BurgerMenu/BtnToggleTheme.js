export default class BtnToggleTheme {
    constructor(){
        this.wrapper = null;
        this.burgerMenuList = null;
        this.btnToggleTheme = null;
    }
    render(){
        this.wrapper = document.querySelector('.app__wrapper');
        this.burgerMenuList = this.wrapper.querySelector('.burger_menu-list');
        this.burgerMenuList.insertAdjacentHTML("beforeend", '<li class="burger_menu-item" id="theme-toggle_btn"></li>');
        this.btnToggleTheme = this.wrapper.querySelector('#theme-toggle_btn');
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
        this.btnToggleTheme.addEventListener("click", this.toggleTheme)
    }
}
