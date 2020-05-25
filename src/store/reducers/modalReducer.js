import ActionsConst from "../actionConstatns/actionConstans";


const initialState={
    modalIsOpened:false,
    currentItem:null
}
const modal=(store=initialState, action)=>{
    switch (action.type) {
        case ActionsConst.TOGGLE_MODAL:
            return {...store, modalIsOpened: !store.modalIsOpened, currentItem: action.payload};
        case ActionsConst.CLOSE_MODAL:
            return {...store, modalIsOpened: false};
    }
    return store;
}

export default modal;