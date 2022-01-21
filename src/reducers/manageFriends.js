export function manageFriends(state = {friends: []}, action) {
    switch (action.type) {
        case "ADD_FRIEND":
            let moreFriends = [ ...state.friends, action.friend];
            return {friends: moreFriends};
        case "REMOVE_FRIEND":
            let lessFriends = state.friends.filter(friend => friend.id !== action.id);
            return {friends: lessFriends};
        default:
            return state; 
    }
}
