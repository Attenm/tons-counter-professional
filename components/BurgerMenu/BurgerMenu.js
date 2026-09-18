import BtnToggleTheme from "./BtnToggleTheme.js";

export default class BurgerMenu {
    constructor(){
        this.wrapper = document.querySelector('.app__wrapper');
        this.burgerMenuTggleBtn = null;
        this.btnToggleTheme = new BtnToggleTheme();
    }

    render(){
        this.wrapper.insertAdjacentHTML('afterbegin', `<input id="toggle-burger_menu" type="checkbox">
                                                            <label class="btn-burger_menu" for="toggle-burger_menu">
                                                                <span></span>
                                                            </label>
                                                            <ul class="burger_menu-list">
                                                            </ul>`
                                                        );
        this.burgerMenuTggleBtn = this.wrapper.querySelector('#toggle-burger_menu');
        this.btnToggleTheme.render();
    }
}