# 在render部署pandora-next

以下是大致的部署思路，不适合零基础的新手阅读。

另外render对bing的封锁很严，==只要fork过==go-proxy-bingai，bingo，chat-sydney的很大几率会被封号，我已经被封了三个了。

目前拉取的是固定版本v0.3.1
## 1.获取license_id
license_url获取方法，复制红色框内的字符串（两个斜杠之间，不包含斜杠）
![image](https://github.com/renqabs/pdrn1/assets/130155002/2bfd795b-47f3-41a8-a913-d5b722b6eaaf)
![image](https://github.com/renqabs/pdrn/assets/130155002/7eec537b-bbc2-4a9d-bd65-472da5dc52fb)
## 2.fork本项目
https://github.com/renqabs/pdrn1/fork
然后准备好自己的tokens.json以及config.json，详细配置详见[pandora-next](https://github.com/pandora-next/deploy)
### 2.1【可选步骤】修改config.json
如果不想其他人使用你部署的镜像，可以给网站添加一个密码，需要修改 site_password 的值

```
{
  "bind": "0.0.0.0:8080",
  "timeout": 600,
  "proxy_url": "",
  "public_share": false,
  "site_password": "your_password",
  "whitelist": null
}
```
### 3.登陆render

https://render.com/

点击右上角的 New+，然后下拉框中选择 Web Service

选择默认的`Build and deploy from a Git repository`点击 Next

在`Connect a repository`中找到 pdrn，点击Connext

Name填写一个唯一的名字，例如 `pandora-next`

Region选择一个，比如`Singapore`

然后拉到最下方，展开`Advanced`

点击Add Secret File

Filename填写 `CONFIG_JSON `

File Contents填写示例如下，注意替换掉`license_id`,`site_password`,`setup_password`等敏感配置信息

```
{
  "bind": "0.0.0.0:8080",
  "timeout": 600,
  "proxy_url": "",
  "license_id": "Replace it",
  "public_share": false,
  "site_password": "Replace it",
  "setup_password": "Replace it",
  "server_tokens": true,
  "server_mode": "web",
  "captcha": {
    "provider": "",
    "site_key": "",
    "site_secret": "",
    "site_login": true,
    "setup_login": true,
    "oai_username": true,
    "oai_password": true
  },
  "whitelist": null
}
```

滑动到最下面，点击 Create Web Service



## 4.部署完成

部署完成以后会自动分批一个域名给你，左上方可以看到类似这样的域名

```
https://pandora-next-xxx.onrender.com
```
