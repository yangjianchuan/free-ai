# 如何将自己的gpt账号逆向为apikey

## 公共的apikey

你可以直接使用这个公共的api，这是一个有100多个账号逆向的api

```
pk-this-is-a-real-free-pool-token-for-everyone
```

## 如何使用apikey

将接口地址`API_BASE`中的`api.openai.com`替换成`ai.fakeopen.com`

一般接口地址是以下三种格式

如果是 `https://api.openai.com` 就替换成 `https://ai.fakeopen.com`

如果是 `https://api.openai.com/v1` 就替换成 `https://ai.fakeopen.com/v1`

如果是 `https://api.openai.com/v1/chat/completions` 就替换成 `https://ai.fakeopen.com/v1/chat/completions`

## 常见软件/插件使用方法

### 镜像站点ChatGPT Next Web

官网演示站点 https://nb.nextweb.fun/

将接口地址改成 `https://ai.fakeopen.com`

### **python openai官方库（使用AutoGPT，langchain等）**

方法1

```
import openai
openai.api_base = "https://ai.fakeopen.com/v1"
```

方法2

```
OPENAI_API_BASE=https://ai.fakeopen.com/v1
```

### **开源gpt_academic**

以使用公共key为例，找到`config.py`文件配置并修改为以下内容：

```
API_KEY = "pk-this-is-a-real-free-pool-token-for-everyone" 
API_URL_REDIRECT = {"https://api.openai.com/v1/chat/completions":"https://ai.fakeopen.com/v1/chat/completions"}
# 自定义API KEY格式
CUSTOM_API_KEY_PATTERN = "pk-(\w+-)*\w+"
```

### **ChatBox(推荐使用)**

ChatGPT开源桌面应用，支持全部桌面平台。

下载链接：https://github.com/Bin-Huang/chatbox/releases

使用方法：如图在设置中填入购买的密钥，并将代理设置为`https://ai.fakeopen.com`即可
## 生成自己的apikey

1.获取ChatGPT Auth

https://ai.fakeopen.com/auth1

2.生成Share Token

https://ai.fakeopen.com/token

你会得到一个fk-开头的Share Token

【可选步骤】3.生成pool token

如果你有多个Share Token，你可以生成一个key池

https://ai.fakeopen.com/pool

==这个Share Token和pool token就可以作为api来使用==