
// state
interface IUserInfoState {
  userid?: number;
  username?: string;
}
export const initialState: IUserInfoState = {};
// action
interface LoginAction {
  type: 'userinfo/login';
  payload: Required<IUserInfoState>;
}
interface LogoutAction {
  type: 'userinfo/logout';
}
export function doLogin(): LoginAction {
  return {
    type: 'userinfo/login',
    payload: {
      userid: 101,
      username: '乾元亨利贞'
    }
  };
}
export function doLogout(): LogoutAction {
  return {
    type: 'userinfo/logout'
  };
}
// reducer
export function applyUserInfo(state = initialState, action: LoginAction | LogoutAction): IUserInfoState {
  switch (action.type) {
    case 'userinfo/login':
      return {
        ...action.payload
      };
    case 'userinfo/logout':
      return {};
  }
}