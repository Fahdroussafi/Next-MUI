import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const COOKIE_AGE = 30 * 24 * 60 * 60; // 30 days;

export default class JWTToken {
  static store(token) {
    cookies.set('token', token, { path: '/', maxAge: COOKIE_AGE });
  }

  static getToken() {
    const token = cookies.get('token');
    return token ? `Bearer ${token}` : '';
  }

  static removeToken() {
    cookies.remove('token', { path: '/' });
  }
}
