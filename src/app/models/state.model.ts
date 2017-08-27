export const initialState: IState = {
    counter: 0,
    idUser: null,
    loggedIn: false
};

export interface IState {
    counter: number;
    idUser: number;
    loggedIn: boolean;
}