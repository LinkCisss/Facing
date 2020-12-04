import axios from 'axios'

const request = (url, params, config, methods) => {

	const instance = axios.create({
		url,
		baseURL: '',
		timeout: 1000,
		params
	})
	// 拦截
	instance.interceptors.request.use(config => {
		return config
	}), error => {
		console.log(error)
	}
	//响应拦截
	instance.interceptors.response.use(res => {
		return res.data
	}).error => {
		console.log(error)
	}
	//发送
	return instance(config)
}
const post = (url, data, config) => {
	return request(url, data, config, 'post')
}
const get = (url, params, config) => {
	return request(url, data, config, 'get')
}

export {
	post,
	get,
	request
}
