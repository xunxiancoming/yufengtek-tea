import types from '@/store/constants/types'
import ajax from '../../lib/ajax'
import util from '@/lib/util'

export default {
    [types.GET_ORIGIN_DATA] (context) {
        ajax({ url: util.globeURL + '/bigdata/origin/detail', method: 'post' }).then(res => {
            context.state.cityDatas = res.repData.originCity.map(item => { return { value: item.count, name: item.city } })
            context.state.countStatDatas = res.repData.originCount
            var value = []
            res.repData.originCity.map((item, index) => { value[index] = [item.latitude, item.longitude] })
            context.state.mapDatas = res.repData.originCity.map((item, index) => { return { value: value[index].concat(item.count), name: item.city } })
        })
    },
    [types.GET_ORIGIN_LIST_DATA] (context, payload) {
        if (payload.currentPage == 1) { context.state.addressList = [] }
        const data = { currentPage: payload.currentPage, originDate: payload.originDate || '' }
        ajax({ url: util.globeURL + '/bigdata/origin/pageList', method: 'post', data: data }).then(res => {
            context.state.addressList = context.state.addressList.concat(res.repData.originList)
            context.state.totalPage = res.repData.pageInfo.totalPages
            context.state.currentPage = payload.currentPage
            context.dispatch(types.GETWEBSOCKET)
        })
    },
    [types.GETWEBSOCKET] (context, payload) {
        const wsuri = 'ws://192.168.0.132:8066/myHandler'
        context.state.websocket = new WebSocket(wsuri)
        context.state.websocket.onopen = function (e) {
            // console.log(e)
        }
        context.state.websocket.onmessage = function (e) {
            // console.log(e)
            var ss = typeof e.data
            if (ss == 'Object') {
                var data = JSON.parse(e.data)
                if (data.date == context.state.addressList[0].date) {
                    context.state.addressList[0].list.unshift(data)
                } else {
                    const addr = { date: data.date, list: [data] }
                    context.state.addressList.unshift(addr)
                }
            }
        }
        context.state.websocket.onclose = function (e) {
            console.log('连接关闭')
        }
        context.state.websocket.send = function (message) {
            console.log('发送成功')
        }
        console.log(context.state.websocket.readyState)
    }
}
