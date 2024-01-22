# Openai新 API 用法

## 注册Openai账号

首先注册一个Openai的账号，注册不了就随便找个号商买一个。

##  session key 如何获取？

需要魔法，新的sess-xxxx 与之前的sk-xxxx使用方法一样。

并且获取session key不需要短信验证。

session key可以在 https://platform.openai.com/account/usage 网页的请求里抓包得到。

在浏览器按 F12 打开调试模式，在【网络】里找到  credit_grants 请求

然后在【标头】里找到 authorization ，后面的 Bearer sess-xxxx 就是 session key 了

![image](assets\2023-04-05-openai_update_check_balance_api-01.png)

## free-api

共享的API，可能很快就会失效，可以使用[这个网站](https://dongsiqie-openai-credit-grants.hf.space)查询剩余额度

```
2024-01-17可用
sess-H9apflhBTAYumAgqxKw5XwikB0KObwCoEOvesZWx
sess-NhKZmKtZb9xfaJIjigxVBrEoiu4ftQCOnb8EWeEI
```

