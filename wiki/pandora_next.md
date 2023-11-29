# 在render部署pandora-next

render对bing的封锁很严，只要fork过go-proxy-bingai，bingo，chat-sydney的很大几率会被封号。

## 1.获取license_id
license_url获取方法，复制红色框内的字符串（两个斜杠之间，不包含斜杠）
![image](https://github.com/renqabs/pdrn1/assets/130155002/2bfd795b-47f3-41a8-a913-d5b722b6eaaf)
![image](https://github.com/renqabs/pdrn/assets/130155002/7eec537b-bbc2-4a9d-bd65-472da5dc52fb)
## 2.fork本项目
https://github.com/renqabs/pdrn1/fork
然后准备好自己的tokens.json以及config.json，详细配置详见[pandora-next](https://github.com/pandora-next/deploy)

无额外需求,在config.json中setup password尽量设置的复杂一些

### 3.登陆render

https://render.com/

3.1 点击右上角的 New+，然后下拉框中选择 Web Service

3.2 选择默认的`Build and deploy from a Git repository`点击 Next

3.3 在`Connect a repository`中找到 pdrn，点击Connext

3.4 Name填写一个唯一的名字，例如 `pandora-next`

3.5 Region选择一个距离你相对近一些的，比如`Singapore`

3.6 然后拉到最下方，展开`Advanced`

点击Add Secret File

3.7 Filename填写 `CONFIG_JSON `
File Contents 填写 config.json 文件里面的内容
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
3.8 【可选步骤】参考3.7添加
Filename填写 `TOKEN_JSON `
File Contents 填写 tokens.json 文件里面的内容

3.9 滑动到最下面，点击 Create Web Service


## 4.部署完成

部署完成以后会自动分批一个域名给你，左上方可以看到类似这样的域名

```
https://pandora-next-xxx.onrender.com
```

## 5.常见问题
如遇到报错429,在setting下，拉到最下方，点击 Suspend Web Service（等同暂停），等待三分钟以上，回到setting下点击Resume Web Service（等同启动），等待1分钟左右，出现版本信息以及[GIN]开头的日志就表明pandora运行成功（即使状态显示为Failed deploy 也可以正常使用）
![285636802-54d659ad-a2d6-432d-a2af-5a4db862044e](https://github.com/pengjins/pdrn1/assets/151594243/6abfbfd1-0be9-413b-bd48-9d85817e9d84)
![285636911-e5f13abc-d6ea-4bf9-a4de-0932aebd4a8b](https://github.com/pengjins/pdrn1/assets/151594243/dfb933d0-15f2-4522-841d-724f1935438c)
![285637074-c73f2cc1-6f41-4ecc-84eb-8d3112c97025](https://github.com/pengjins/pdrn1/assets/151594243/52db4779-3281-4e6a-8977-6f702b2140a1)
![285637343-9233d3a6-90e6-4aad-9096-15360e658327](https://github.com/pengjins/pdrn1/assets/151594243/a6e83dc6-4798-4f05-b8f2-44171561dd4f)





