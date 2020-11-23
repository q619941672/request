//request封装请求
const baseURL = 'http://123.207.32.32:8000'
export const request = (options) => {
	return new Promise((ressolve,reject) => {
		uni.request({
			url:baseURL+options.url,
			method:options.method || 'GET',
			data:options.data || {},
			success: (res) => {
				ressolve(res)
			},
			fail(err) {
				uni.showToast({
					title:'接口请求失败'
				})
				reject(err)
			}
		})
	})
}

request({
	url:'/home/multidata',
	// method:'POST',
	data:{
		
	}
})