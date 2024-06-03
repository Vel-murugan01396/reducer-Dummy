
export const InitialValue={
    User:[],
}


export const ReducerFunction = (state, action) => {
    switch (action.type) {
        case "AddUser":
            return {
                ...state,
                User: [...state.User, action.payload], // Add empty user form
            };
            case  "UpdateUser":
                return{
                    ...state,
                    User:state.User.map((user,index)=>(
                       index===action.payload.index?action.payload.user:user 
                    ))
                }

                case"DeleteUser":
                return{
                    ...state,
                    User:state.User.filter((_,index)=>(index!==action.payload))
                }
       
        default:
            return state;
    }
};
