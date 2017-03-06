// Initial State
// TODO change me!
const INITIAL_STATE = [
  {
    id: 0,
    username: 'tTester',
    domain: 'example.com'
  },
  {
    id: 1,
    username: 'LSP',
    domain: 'Ooo.com'
  }
];

//Reducer
export function AccountListReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    default:
      return INITIAL_STATE;
  }
}

export default AccountListReducer;
