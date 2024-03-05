# 通过Github Codespaces获取Cookie

原文地址：https://github.com/Harry-zklcdc/go-proxy-bingai/issues/150

## 首次使用

### 1.创建空白codespaces

点击 https://github.com/codespaces 并创建空白codespaces

![1](https://pic.dongsiqie.me/assets/261897065-cb3c9286-fbd4-4fbd-b02e-7d993c111f94.png)

### 2.运行命令

创建好后在webIDE的“终端”处输入以下指令并按回车：

```
docker run -p 8080:80 dorowu/ubuntu-desktop-lxde-vnc
```

![2](https://pic.dongsiqie.me/assets/261897147-fdae2ece-62df-4931-866d-ab761fbf1dda.png)

### 3.打开远程服务器桌面

首次使用会加载一两分钟，加载完后在页面右下角弹窗点击“在浏览器中打开”，会进入一个远程服务器桌面

![3](https://pic.dongsiqie.me/assets/261897154-7fb4536f-fc04-40a8-9fb4-b6fa04728a1b.png)

### 4.配置FireFox

在左下角启动菜单处打开FireFox火狐浏览器

![5](https://pic.dongsiqie.me/assets/261897196-c8d3108a-cfc3-416f-b4dc-c1696ad04ce8.png)

> 注意：这里只能使用自带的火狐浏览器，Edge和Chrome安装不上，可以通过插件让FireFox支持BingAI。

复制下面网址，打开网页左侧工具栏，粘贴到“剪贴板”，通过剪贴板实现复制。

```
https://addons.mozilla.org/en-US/firefox/addon/enable-bing-chat/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search
```

![6](https://pic.dongsiqie.me/assets/261897337-64e6603e-ee16-463f-92db-04c5afd66045.png)

粘贴到地址栏并访问

![7](https://pic.dongsiqie.me/assets/261897344-2ab35970-4c30-465b-b623-45414e343f13.png)

安装Bing插件

![8](https://pic.dongsiqie.me/assets/261897359-7424f81b-30a1-4166-8c9b-6e1601cee624.png)

![9](https://pic.dongsiqie.me/assets/261897376-58cc32a2-5726-407b-90f6-b6bd30281cb8.png)

### 5.进入首页网址点击 CHAT。

```
https://www.bing.com
```

或者直接打开聊天网址：

```
https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx
```

- 点击 Sign in 登陆自己的微软账号。

### 6.随便发送一句话进行聊天。

### 7.按F12打开开发者工具，如果F12呼出了外部浏览器的开发者工具，则从菜单栏打开。

![12](https://pic.dongsiqie.me/assets/261897412-22c9942e-532b-4f7a-9708-87a74a51f8d5.png)

![13](https://pic.dongsiqie.me/assets/261897418-fa073553-ed9a-47cb-978d-d7dd87ec0e22.png)

### 8.获取cookie。

详见 [获取cookie教程](bingcookie.html)

## 非首次使用

1.点击 https://github.com/codespaces 找到你创建过的codespaces
2.直接运行 `docker run -p 8080:80 dorowu/ubuntu-desktop-lxde-vnc` 即可快速打开桌面

## 备注

此方法类似于微软虚拟机，Codespaces安装桌面环境后就相当于是一个永久境外云电脑，可以访问外网。Codespaces每个月最多免费用60小时，已经足够了