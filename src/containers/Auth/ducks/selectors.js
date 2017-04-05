export const getLoggedIn = state => state.auth.user.isLoggedIn;
export const getRegistered = state => state.auth.user.hasRegistered;
export const getMaxAccounts = state => state.auth.user.data.maxAccounts;
