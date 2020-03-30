import { Context } from "./Context";

export class BaseSystem {
    protected _context: Context;
    constructor(context: Context) {
        this._context = context;
    }

    public init() {

    }

    public clean() {

    }

    public excute(delta: number) {

    } 
}