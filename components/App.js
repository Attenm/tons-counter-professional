import BtnMain from "./BtnMain.js";

export default class App {
    constructor (){
        this.btnMain = new BtnMain()
    }

    init (){
        this.btnMain.render();
    }
}