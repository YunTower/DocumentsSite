# 🚀 快速开始


## 安装面板端
1. 在服务器执行以下命令安装面板
```shell
curl -L https://raw.githubusercontent.com/YunTower/CloudSentinel-Backend/refs/heads/master/install.sh -o cloudsentinel.sh && chmod +x cloudsentinel.sh && sudo ./cloudsentinel.sh
```
2. 待面板安装完成后会输出面板地址、管理员账号、密码，然后就可以登录面板了。

> [!NOTE]
> ❗注意：需要在 __云服务器服务商防火墙/安全组__ 以及 __服务器防火墙或宝塔、1Panel、AcePanel之类的运维面板__ 处，放行面板端口。

## 安装被控探针
1. 在需要被监控的服务器上执行以下命令。   
这个命令会在面板端添加好服务器后自动生成，你也可以选择自己手动填入。   
> [!NOTE]
> ❗注意：需要修改命令中的`--server`和`--key`参数，不要直接复制执行    。

```shell
curl -L https://raw.githubusercontent.com/YunTower/CloudSentinel-Agent/refs/heads/master/install.sh -o cloudsentinel_agent.sh && chmod +x cloudsentinel_agent.sh && sudo ./cloudsentinel_agent.sh --server=服务端websocket地址 --key=通信密钥 --daemon
```
若不需要以进程守护模式启动，则去掉末尾的`--daemon`参数即可
```shell
curl -L https://raw.githubusercontent.com/YunTower/CloudSentinel-Agent/refs/heads/master/install.sh -o cloudsentinel_agent.sh && chmod +x cloudsentinel_agent.sh && sudo ./cloudsentinel_agent.sh --server=服务端websocket地址 --key=通信密钥
```
