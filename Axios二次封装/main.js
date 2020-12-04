import Vue from 'vue'
// import App from './App'

import {post,get,request} from 'network/request.js'

Vue.config.productionTip = false
request({
	url:'',
}).then(res => {
	console.log(res);
}).catch(error => {
	console.log(error);
})
get('', params)
post('', data)