import BtnMain from "./BtnMain.js";
import historyList from "./History.js";
import resetBtn from "./ResetBtn.js";
import valueInput from "./Value.js";
import ThemeSwitch from "./ThemeSwich.js";

export default class App {
    constructor (){
        this.btnMain = new BtnMain()
        this.historyList = historyList;
        this.valueInput = valueInput;
        this.resetBtn = resetBtn;
        this.themeSwitch = new ThemeSwitch();
    }

    init (){
        this.resetBtn.render()
        this.btnMain.render();
        this.historyList.render();
        this.valueInput.render();
        this.themeSwitch.render();
        this.checkTheme()
    }

    checkTheme(){
        const themeToggle = document.getElementById("btn-theme_switch");
        document.addEventListener("DOMContentLoaded", function () {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme === "night") {
                document.body.className = "night";
                themeToggle.checked = true;
            } else {
                document.body.className = "day";
                themeToggle.checked = false;
            }
        });
    }
}