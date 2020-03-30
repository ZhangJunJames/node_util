//这个文件由tools/fishGenarate生成的，不要手动修改
import { ComponentBase } from "../core/ComponentBase"
export class FishComponent extends ComponentBase{
}
export class BulletComponent extends ComponentBase{
    private _res: string;
    public get res(){
        return this._res;
    }
    public replaceBullet(res: string){
        this._res = res;
    }
}
export class PositionComponent extends ComponentBase{
    private _x: number;
    private _y: number;
    private _z: number;
    public get x(){
        return this._x;
    }
    public get y(){
        return this._y;
    }
    public get z(){
        return this._z;
    }
    public replacePosition(x: number, y: number, z: number){
        this._x = x;
        this._y = y;
        this._z = z;
    }
}
export class SizeComponent extends ComponentBase{
    private _width: number;
    private _height: number;
    public get width(){
        return this._width;
    }
    public get height(){
        return this._height;
    }
    public replaceSize(width: number, height: number){
        this._width = width;
        this._height = height;
    }
}



