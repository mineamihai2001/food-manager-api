export interface IController {
    /**
     * @description controller handler method
     * Each controller must implement this method and only this, for the controller's route
     */
    handle(...params: any[]): any | Promise<any>;
}
