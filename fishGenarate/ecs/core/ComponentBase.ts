import { Entity } from "./Entity";

export class ComponentBase {
    private _entity: Entity;
    public getEntity() {
        return this._entity;
    }
}