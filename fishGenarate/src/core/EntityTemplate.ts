import { ComponentBase } from "./ComponentBase";
import { Context } from "./Context";
import * as Componets from "../data/Components";
export class EntityTemplate {
    private _compList: Array<ComponentBase> = [];
    private _context: Context;
    private _id: number;
    constructor(context: Context) {
        this._context = context;
    }

    public addComponent(comp: ComponentBase) {
        this._compList.push(comp);
    }

    private _getComponentIndex(cls) {
        let className = cls.name;
        for (let index = 0; index < this._compList.length; index++) {
            const element = this._compList[index];
            if (element.constructor.name == className) {
                return index;
            }
        }
        return -1;
    }

    private _hasComponent(cls) {
        return this._getComponentIndex(cls) >= 0;
    }

    private _getComponent(cls) {
        let index = this._getComponentIndex(cls);
        if (index >= 0) {
            return this._compList[index];
        }
        return null;
    }

    public removeComponent(cls) {
        let index = this._getComponentIndex(cls);
        if (index >= 0) {
            this._compList.splice(index, 1);
        }
    }

    public getId() {
        return this._id;
    }
}