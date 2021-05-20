export const initialState = {
    basket: [],
    user: null
};

export const getBasketSubtotal = (basket) => 
basket?.reduce((amount,item) => item.cost + amount, 0);

const reducer = (state, action) => {
    // console.log(action)
    switch(action.type){
        case "Add_to_Cart":
            return {
                ...state,
                basket: [...state.basket, action.basket]
            }

            case "Remove_from_Cart":              
                    const indexofItem = state.basket.findIndex((item) => item.id === action.id);
                    let newBasket = [...state.basket];
                    if(indexofItem >= 0){
                        newBasket.splice(indexofItem, 1)
                    }
                    else{
                        console.log("I cannot delete")
                    }
                    console.log(action)
                    return {
                        ...state,
                        basket: newBasket
                    }
                    
        case "Create_user":
            return {
                ...state,
                user: action.user,
            }
        default:
            return state
    }
   
}

export default reducer

