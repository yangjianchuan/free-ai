# 获取 Cookie

如果需要画图或者禁用联网插件，只需要获取cookie中_U的值即可

国内打开网址：https://cn.bing.com/

国外打开网址：https://www.bing.com/

登陆自己的微软账号

按`F12`或者`ctrl+shift+i`打开开发者工具

然后找到`Application`在Cookies中找到`_U`的值，复制它

![image-20240115143007888](https://pic.dongsiqie.me/assets/image-20240115143007888.png)



在go-proxy-bingai项目中，点击右上角的齿轮，点【设置】，将刚刚复制的`_U`的值填写到`Token`中，然后保存

![image-20240115143433222](https://pic.dongsiqie.me/assets/image-20240115143433222.png)

==手工刷新一下==网页，你就登陆成功了，登陆后可以画图和使用插件。

![image-20240115143932479](https://pic.dongsiqie.me/assets/image-20240115143932479.png)





### 



