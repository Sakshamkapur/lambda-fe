import { fabric } from 'fabric';

export const STATE_ID = "editor";
export const SET_CANVAS = "SET_CANVAS";
export const SET_LOADER = "SET_LOADER";
export const SET_ACTIVE_OBJECT = "SET_ACTIVE_OBJECT";

export type IState = {
    canvas: fabric.Canvas | null;
    activeObject: fabric.Object | null;
    loading: boolean;
}

export type SetCanvas = {
    type: typeof SET_CANVAS;
    payload: fabric.Canvas | null;
}

export type SetLoader = {
    type: typeof SET_LOADER;
    payload: boolean;
}

export type SetActiveObject = {
    type: typeof SET_ACTIVE_OBJECT;
    payload: fabric.Object | null
}