//这个文件由tools/fishGenarate生成的，不要手动修改
import { ComponentBase } from "./ComponentBase";
import { Context } from "./Context";
import * as Componets from "../data/Components";
export class Entity {
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

    public isFish() {
        return this._hasComponent(Componets.FishComponent);
    }

    public setFish(value: boolean) {
        let comp = this._getComponent(new Componets.FishComponent());
        if(!value && comp){
            this.removeComponent(Componets.FishComponent);
        }
        else if(value && !comp){
            comp = new Componets.FishComponent();
            this.addComponent(comp);
        }
    }

    public get bullet(){
        return this._getComponent(Componets.BulletComponent) as Componets.BulletComponent;
    }

    public hasBullet(){
        return this._hasComponent(Componets.BulletComponent);
    }

    public addBullet(res: string) {
        let comp = new Componets.BulletComponent();
        comp.replaceBullet(res);
    }

    public replaceBullet(res: string) {
        this.bullet.replaceBullet(res);
    }

    public removeBullet(res: string) {
        this.removeComponent(Componets.BulletComponent);
    }

    public get position(){
        return this._getComponent(Componets.PositionComponent) as Componets.PositionComponent;
    }

    public hasPosition(){
        return this._hasComponent(Componets.PositionComponent);
    }

    public addPosition(x: number, y: number, z: number) {
        let comp = new Componets.PositionComponent();
        comp.replacePosition(x, y, z);
    }

    public replacePosition(x: number, y: number, z: number) {
        this.position.replacePosition(x, y, z);
    }

    public removePosition(x: number, y: number, z: number) {
        this.removeComponent(Componets.PositionComponent);
    }

}