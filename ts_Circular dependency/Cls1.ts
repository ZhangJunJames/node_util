import { ClsCtrl } from "./ClsCtrl";

export class Cls1{
    constructor(){
    }

    public init(){
        ClsCtrl.inst().getCls2();
    }
}