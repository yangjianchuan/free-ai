# Openai新 API 用法

## 注册Openai账号

首先注册一个Openai的账号，参考文章：https://zhile.io/2023/12/09/pandoranext-introduction.html

神烦老狗视频演示教程：https://b23.tv/vBSfjlm

冻死企鹅视频演示教程：https://b23.tv/S5hyiNT

注册地址：https://chat.oaifree.com/auth/signup

## session key 如何免魔法获取？

免魔法，但是需要你搭建了pandora-next

获取你的 OpenAI API key: https://dongsiqie-get-openai-sess-api.hf.space

##  session key 如何获取？

需要魔法，新的sess-xxxx 与之前的sk-xxxx使用方法一样。

并且获取session key不需要短信验证。

session key可以在 https://platform.openai.com/account/usage 网页的请求里抓包得到。

在浏览器按 F12 打开调试模式，在【网络】里找到  credit_grants 请求

然后在【标头】里找到 authorization ，后面的 Bearer sess-xxxx 就是 session key 了

![image](assets\2023-04-05-openai_update_check_balance_api-01.png)

## free-api

我自己生成的API

可以使用这个网站查询剩余额度：https://dongsiqie-openai-credit-grants.hf.space

```
sess-o2qn39PEUzCgZ6BPBKa0WW4j7LwjUUcttUXPewBm
sess-SewUYCRwPaXmNS5c8DKSwIJEad0ck5TK2zvlIYfA
sess-CkCNgukpi7xqxvyjriz8fwLslbQfQgiGtGec9UqZ
sess-0r95qkbZ5lUdqEzyKlsVW67VZ528vrD8ILhvjFBd
sess-1Gx33IBgZc9Qsi9BCjBTTN6Ov0vFLFz6Q4ACQvjq
sess-gaa1KJjcyiAiXSXdNhEOUkfXSSbASnzBpxJn3HWl
sess-bdgsMIC46paqiHC4KL2r9H5a3QHC4qV0tbhFG8Av
sess-dtR2l3CZFbDj304Aj2RUmcnnIyZS25Dvmu4Hxe3n
sess-X7f3evUPc7dZnIx7k4WaBithfcnnTKF1p7nKODDM
sess-itclzPerMYLdzt4xI2IuZNKuBEAJL047ZfAST45T
sess-N2yiwvuaue2zzharE7bp3unO2qVyom4QIedvbPac
```

