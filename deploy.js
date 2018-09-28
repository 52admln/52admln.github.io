let FtpDeploy = require('ftp-deploy')
let ftpDeploy = new FtpDeploy()
let config = {
  user: ENV.FTP_SERVER_USER, // 用户名
  password: ENV.FTP_SERVER_PWD, // 密码
  host: ENV.FTP_SERVER_HOST, // 服务器地址
  port: ENV.FTP_SERVER_PORT || 21, // 端口
  deleteRemote: true, // 上传之前删除远端的所有文件
  localRoot: __dirname + '/dist', // 要部署的本地文件夹路径
  remoteRoot: ENV.FTP_SERVER_PATH || '/public_html/', // 远程文件夹路径
  exclude: [], // 排除文件类型
  include: ['*', '**/*'] // 要上传的文件类型,这样写就是上传所有文件
}

ftpDeploy.deploy(config, function(err) {
  if (err) console.log(err)
  else console.log('finished')
})
