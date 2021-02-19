const initialState={
    screenName: "Home",
    username: "",
    navigation: ()=>{},
    name:""
}

function rootReducer(state = initialState, action){
    if(action.type == "updateScreen"){
        let tim = {...state}
        delete tim.screenName
        return {
            ... tim,
            screenName: action.payload
        }
    }
    else if(action.type == "updateUsername"){
        let tim = {...state}
        delete tim.username
        return {
            ... tim,
            username: action.payload
        }
    }
    else if(action.type == "nav"){
        let tim = {...state}
        delete tim.navigation
        return {
            ... tim,
            navigation: action.payload
        }
    }
    else if(action.type == "name"){
        let tim = {...state}
        delete tim.name
        return {
            ... tim,
            name: action.payload
        }
    }
    return state
}

export default rootReducer