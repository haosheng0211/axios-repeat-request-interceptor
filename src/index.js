export default (axios) => {
  const queue = new Map()

  axios.interceptors.request.use(config => {
    const hash = JSON.stringify({ url: config.url, method: config.method })

    if (queue.has(hash)) {
      const cancel = queue.get(hash)
      cancel('repeat-request-interceptor')
      queue.delete(hash)
    }

    config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
      queue.set(hash, cancel)
    })

    return config
  })
}
