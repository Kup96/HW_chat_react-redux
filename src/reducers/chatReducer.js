import ACTION_TYPES from '../Actions/actionTypes'

const initialState = {
    messages: [
        { id_msg: 1, id_user: 1, nick: 'John', text: "Hello guys, do you need some help?", avatar: 'http://4.bp.blogspot.com/-2pgZzky2r3U/VeG5Q6mX36I/AAAAAAAARs0/aVCOXYuA1ZE/s1600/1320176277_administrator.png', self: false},
        { id_msg: 2, id_user: 2, nick: 'Elza', text: "No, thanks!", avatar: 'https://avatarko.ru/img/kartinka/14/galstuk_Alf_13693.jpg', self: false},
        { id_msg: 3, id_user: 1, nick: 'John', text: "Okay, but maybe if someone want to ask some questions, lets go", avatar: 'http://4.bp.blogspot.com/-2pgZzky2r3U/VeG5Q6mX36I/AAAAAAAARs0/aVCOXYuA1ZE/s1600/1320176277_administrator.png', self: false},
        { id_msg: 4, id_user: 3, nick: 'Tom', text: "No, same haven't ", avatar: 'https://i.ytimg.com/vi/OqWRDKKO10M/maxresdefault.jpg', self: false},
        { id_msg: 5, id_user: 1, nick: 'John', text: "Ok", avatar: 'http://4.bp.blogspot.com/-2pgZzky2r3U/VeG5Q6mX36I/AAAAAAAARs0/aVCOXYuA1ZE/s1600/1320176277_administrator.png', self: false},
    ],

}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_MESSAGE: {
            const {messages} = state;
            const {data} = action;
            const newMessage = {id_msg: messages.length++, id_user: 4, nick: 'Kup', text: data, avatar: '#', self: true};
            const newMessages = [...messages, newMessage];
            return {messages: newMessages};
        }
        default: return state;
    }
}







export default chatReducer;
