const INITIAL_STATE = {
  transactions: {},
};

const applySetTransactions = (state, action) => ({
  ...state,
  trasnactions: action.transactions
});

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'USERS_SET' : {
      return applySetUsers(state, action);
    }
    default : return state;
  }
}

export default userReducer;
