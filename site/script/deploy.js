import { spawn, exec } from 'child_process'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)
const run = async (command, path) => {
  //cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
  const [cmd, ...args] = command.split(' ')
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: path, //执行命令的路径
      stdio: 'inherit', //输出共享给父进程
      shell: false //mac不需要开启，windows下git base需要开启支持
    })
    //执行完毕关闭并resolve
    app.on('close', resolve)
  })
}

// run('deploy.sh', resolve(__dirname, '../'))
exec('./deploy.sh', (error, stdout, stderr) => {
  if (error) {
    console.log('Error in removing files')
    return
  }
  if (stderr) {
    console.log('an error with file system')
    return
  }
  console.log('Result of shell script execution', stdout)
})
