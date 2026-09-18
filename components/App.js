import BtnMain from "./BtnMain.js";
import historyList from "./History.js";
import resetBtn from "./ResetBtn.js";
import valueInput from "./Value.js";
import BurgerMenu from "./BurgerMenu/BurgerMenu.js";

export default class App {
    constructor (){
        this.btnMain = new BtnMain()
        this.historyList = historyList;
        this.valueInput = valueInput;
        this.resetBtn = resetBtn;
        this.burgerMenu = new BurgerMenu();
    }

    init (){
        this.resetBtn.render()
        this.btnMain.render();
        this.historyList.render();
        this.valueInput.render();
        this.burgerMenu.render();
        this.checkTheme()
    }

    checkTheme(){
        const themeToggle = document.getElementById("btn-theme_switch");
        document.addEventListener("DOMContentLoaded", function () {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme === "night") {
                document.body.className = "night";
            } else {
                document.body.className = "day";
            }
        });
    }
}