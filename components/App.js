import BtnMain from "./BtnMain.js";
import historyList from "./History.js";
import valueInput from "./Value.js";

export default class App {
    constructor (){
        this.btnMain = new BtnMain()
        this.historyList = historyList;
        this.valueInput = valueInput;
    }

    init (){
        this.btnMain.render();
        this.historyList.render();
        this.valueInput.render();
    }
}