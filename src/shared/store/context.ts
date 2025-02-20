import { ActionDispatch, createContext } from 'react';
import { Actions, ActionTypes, AppState } from './interfaces';

export const StoreContext = createContext<AppState | null>(null);
export const DispatchContext = createContext<ActionDispatch<[Actions[ActionTypes]]> | null>(null);
