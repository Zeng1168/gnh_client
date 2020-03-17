import axios from 'axios';
// import { Message } from 'element-ui';
import router from '../router' // 引入路由
import qs from 'qs' // 使用qs对post传送的据序列化

// axios设置
const FP = 'http://122.51.31.39:21306/'; // 远程生产
const FD = 'http://122.51.31.39:21305/'; // 远程测试
const NP = 'http://127.0.0.1:21306/'; // 本地生产
const ND = 'http://127.0.0.1:21305/'; // 本地测试


axios.defaults.baseURL = ND // 默认连接地址
axios.defaults.timeout = 60000; // 响应时间
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头



/**
 * http状态 status
 * 200 登录成功、退出登录成功
 * 210 登录失败
 *
 * 401 未登录、登录超时
 * 403 权限不足等原因禁止访问
 */
// 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data) {
            if (response.data && String(response.data).substring(0, 15) == "<!DOCTYPE html>") {
                Message("请重新登录！");
                router.push({
                    path: '/',
                    query: { redirect: router.currentRoute.fullPath }
                })
            }
        }
        return response;
    },
    error => {
        if (error.response.data) {
            if (error.response.data.status == 401) {
                Message(error.response.data.message);
                router.push({
                    path: '/',
                    query: { redirect: router.currentRoute.fullPath }
                })
            } else if (error.response.data.status == 403) {
                Message(error.response.data.msg);
            }
        }
        return Promise.reject(error.response.data);
    }
)

/**
 * 封装get请求
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: params })
            .then(response => {
                if (!response || !response.data) {
                    this.warnMsg("微信预约未接入！");
                    resolve({ ok: false, data: null });
                } else if (response.data.status == 0) {
                    resolve({ ok: true, data: response.data.data, msg: response.data.msg });
                } else {
                    this.warnMsg(response.data.msg);
                    resolve({ ok: false, data: null });
                }
            }).catch(err => {
                if (err.status == 404) {
                    this.warnMsg("微信预约未接入！");
                } else {
                    this.errMsg("系统异常！" + err);
                }
                resolve({ ok: false, data: null });
            })
    })
}

/**
 * 封装post请求
 */
export function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params))
            .then(response => {
                if (!response || !response.data) {
                    this.warnMsg("数据获取失败！");
                    resolve({ ok: false, data: null });
                } else if (response.data.status == 0) {
                    resolve({ ok: true, data: response.data.data, msg: response.data.msg });
                } else {
                    this.warnMsg(response.data.msg);
                    resolve({ ok: false, data: null });
                }
            }).catch(err => {
                this.errMsg("系统异常！" + err);
                resolve({ ok: false, data: null });
            })
    })
}

// /**
//  * 封装patch请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

// export function patch(url, data = {}) {
//     return new Promise((resolve, reject) => {
//         axios.patch(url, data)
//             .then(response => {
//                 resolve(response.data);
//             }, err => {
//                 reject(err)
//             })
//     })
// }

// /**
//  * 封装put请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

// export function put(url, data = {}) {
//     return new Promise((resolve, reject) => {
//         axios.put(url, data)
//             .then(response => {
//                 resolve(response.data);
//             }, err => {
//                 reject(err)
//             })
//     })
// }