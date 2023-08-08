export const loggerMiddleware = store => next => action => {
    if(!action.type) return next(action);
    
    console.dir();
    console.log(`%c========== ${action.type.toString()} ==========`, "color:lightgreen; margin:10px 0;")
    console.log(`type: `, action.type);
    console.log(`payload: `, action.payload);
    console.log(`currentState: `, store.getState());
    
    next(action);
    
    console.log(`next state: `, store.getState());
    
    console.log("%c========== END ACTION ==========", "color:red; margin:10px 0;")
}