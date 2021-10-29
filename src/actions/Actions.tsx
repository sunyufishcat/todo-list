export interface todo {
    id: string;
    value: string;
    isCompleted: boolean;
}

export type TodoItems = Array<todo>;

export enum ACTIONS {
    ADD_TODO="ADD_TODO",
    TOGGLE_ALL = "TOGGLE_ALL",
    CLEAR_COMPLETED = "CLEAR_COMPLETED",
    INPUT_DELETE = "INPUT_DELETE",
    BUTTON_DELETE = "BUTTON_DELETE"
}


export interface Actions {
    type: ACTIONS, payload?: todo | boolean | string;
}
