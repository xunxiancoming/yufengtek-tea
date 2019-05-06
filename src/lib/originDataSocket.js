import config from '@/lib/config'
import store from '@/store/index'
import ns from '@/store/constants/ns'
import types from '@/store/constants/types'

const socket = new WebSocket(config.originDataSocketUrl)
socket.onopen = function (e) {
    console.log('origin web socket open...')
}
socket.onmessage = function (e) {
    const socketData = e.data
    const state = store.state[ns.ORIGIN] // 溯源数据
    const currPageName = store.state.currRouter.to
    if (socketData.startsWith('{') && /(home|origin)/.test(currPageName)) {
        try {
            const data = JSON.parse(e.data)
            if (currPageName == 'home') { // 首页，溯源排行
                store.dispatch(ns.HOME + '/' + types.HOME_GET_DATA)
            } else {
                store.dispatch(ns.ORIGIN + '/' + types.GET_ORIGIN_DATA)
                if (state.addressList[0] && data.date == state.addressList[0].date) {
                    store.commit(ns.ORIGIN + '/' + types.ORIGIN_REAL_TIME_DATA, {
                        type: 1, data
                    })
                } else {
                    store.commit(ns.ORIGIN + '/' + types.ORIGIN_REAL_TIME_DATA, {
                        type: 2, data: { date: data.date, list: [data] }
                    })
                }
            }
        } catch (error) {
            console.log(e.data, error)
        }
    }
}

socket.onerror = function (e) {
    console.log('socket error....', e)
}

socket.onclose = function (e) {
    console.log('socket close....', e)
}

socket.send = function (e) {
    console.log('send successful...', e)
}
export default socket
