import { Context } from "./Context";
import { Entity } from "./Entity";

export class Group {
    private _context: Context;
    private _clsNames = [];
    constructor(context: Context, compClsList: Array<any>) {
        this._context = context;
        compClsList.forEach((cls) => {
            this._clsNames.push(cls.name);
        });
    }


    public getEntities() {
        //这个是实时计算的，更好的方法是group保存cache，但复杂度变高。
        let entities: Array<Entity> = [];
        for (let index = 0; index < this._clsNames.length; index++) {
            const clsName = this._clsNames[index];
            const temp = this._context.getEntityListByComp(clsName);
            entities = entities.concat(temp);
        }
        let countMap = {};
        let targetEntities = [];
        entities.forEach((entity: Entity, index) => {
            let id = entity.getId();
            countMap[id] = countMap[id] || 0;
            countMap[id]++;
            if(countMap[id] >= this._clsNames.length){
                targetEntities.push(entity);
            }
        })
        return targetEntities;
    }
}