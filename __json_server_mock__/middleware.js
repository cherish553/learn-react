module.exports = (req, res, next) => {
  // login and register
  if (req.method === 'POST' && (req.path === '/login' || req.path === '/register')) {
    if (req.body.username === 'cherish' && req.body.password === '111111') {
      setTimeout(() => {
        res.status(200).json({
          user: {
            token: '=asdasdasdasd',
            id: 'aaa',
            name: req.body.username,
            email: '123',
            title: '123',
            organization: '123'
          }
        })
      }, 1000)
      return
    }
    return res.status(400).json({
      message: '用户名或密码错误'
    })
  }
  // no authorize
  if (!req.headers.authorize) {
    return res.status(401).json({
      message: 'A token must be provided'
    })
  }
  next()
}
