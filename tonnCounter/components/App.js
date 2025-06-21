import BtnMain from "./BtnMain.js";
import historyList from "./History.js";
import resetBtn from "./ResetBtn.js";
import valueInput from "./Value.js";

export default class App {
    constructor (){
        this.btnMain = new BtnMain()
        this.historyList = historyList;
        this.valueInput = valueInput;
        this.resetBtn = resetBtn;
    }

    init (){
        this.resetBtn.render()
        this.btnMain.render();
        this.historyList.render();
        this.valueInput.render();
    }
}