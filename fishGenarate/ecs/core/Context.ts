import { ComponentBase } from "./ComponentBase";
import { Group } from "./Group";
import { Entity } from "./Entity";

export class Context{
    private _entityList: Array<Entity> = [];
    private _groups: Array<Group> = [];
    private _compMap = [];//每个comp映射到对应的entity列表
    constructor(){
    }

    public createEntity(){
        let entity = new Entity(this);
        this._entityList.push(entity);
        return entity;
    }

    public createUniqueComponent(comp: ComponentBase){
        
    }
    
    public getUniqueComponent(cls){
        
    }

    public compAddedOrRemoved(comp: ComponentBase, added: boolean){
        let clsName = comp.constructor.name;
        this._compMap[clsName] = this._compMap[clsName] || [];
        let entity = comp.getEntity();
        if(added){
            this._compMap.push(entity);
        }
        else{
            for (let index = 0; index < this._compMap.length; index++) {
                if(entity == this._compMap[index]){
                    this._compMap.splice(index, 1);
                    break;
                }
            }
        }
    }

    public getEntityListByComp(clsName: string){
        return this._compMap[clsName];
    }

    
    public listenComp(compCls, grp: Group){
        let clsName = compCls.name;
        this._compMap[clsName] = this._compMap[clsName] || [];
        this._compMap.push(grp);
        
    }

    public unlistenComp(compCls, grp: Group){
        let clsName = compCls.name;
        for (let index = 0; index < this._compMap.length; index++) {
            if(grp == this._compMap[index]){
                this._compMap.splice(index, 1);
                break;
            }
        }
    }

    public getGroup(compClsList: Array<any>) {
        let grp = new Group(this, compClsList);
        // this._groups.push(grp);
        return grp;
    }
}