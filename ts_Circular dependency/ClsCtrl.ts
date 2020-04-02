import { Cls1 } from "./Cls1";
import { Cls2 } from "./Cls2";

export class ClsCtrl {
    _cls1: Cls1;
    _cls2: Cls2;
    static _instance: ClsCtrl;
    public static inst(): ClsCtrl {
        if (this._instance == null) {
            this._instance = new ClsCtrl();

        }
        return this._instance;
    }

    private constructor() {
        this._cls1 = new Cls1();
        this._cls2 = new Cls2();
    }

    getCls2() {
        return this._cls2;
    }
}

//在某处调用
//new Cls1().init();