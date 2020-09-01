/**
 * Created by Bessi on 2019/7/18.
 */
import {
    request
} from './config'
// import store from "../store/store";

export default {
    // ----------------------------------用户-----------------------------------
    // example:    login: obj => request('/user/mobileLogin/' + obj.loginName, "post", obj),

    register: obj => request("/api/account/register", "post", obj),
}