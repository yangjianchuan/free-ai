# Bingo OpenAI 

项目地址：https://github.com/weaigc/bingo

bingo项目部署完以后可以当做OpenAI的接口使用

## 共享的api地址

注意：hf.space上面部署的接口并不稳定，基本都是封一天然后再解封一天，如果要稳定使用，==需要换成你自己部署的地址才可以==

```
https://dnwmf8-3000.csb.app/api
https://5x222y-3000.csb.app/api
https://dongsiqie-bingo-api.hf.space/api
https://dongsiqie-bingov1.hf.space/api
https://dongsiqie-bg.hf.space/api
https://dongsiqie-bingo-sydney.hf.space/api
```

下面以我以其中一个为例，说明api的使用方法

## 接口地址API_BASE

项目站点地址拼接一个 `/api`就可以作为接口地址。

将接口地址`API_BASE`中的`api.openai.com`替换成`dongsiqie-bingov1.hf.space/api`

一般接口地址是以下三种格式

如果是 `https://api.openai.com` 就替换成 `https://dongsiqie-bingov1.hf.space/api`

如果是 `https://api.openai.com/v1` 就替换成 `https://dongsiqie-bingov1.hf.space/api/v1`

如果是 `https://api.openai.com/v1/chat/completions` 就替换成 `https://dongsiqie-bingov1.hf.space/api/v1/chat/completions`

## API_KEY

随便填写什么都可以，比如下面这些都可以

```
sk-CGcDA4TGEdh9Qr5NNQcU2zxnhEDtlMq6s1wm64vmbfBttt58
```

```
dummy
```

## 模型名称models

此字段被用于指定 new bing 风格，参数为以下任意一种

```
Creative,Balanced,Precise
```

或者使用任意一种标准模型

```
gpt-3.5-turbo,gpt-3.5-turbo-0613,gpt-3.5-turbo-0301,gpt-3.5-turbo-16k,gpt-3.5-turbo-16k-0613,gpt-4,gpt-4-0314,gpt-4-0613,gpt-4-32k,gpt-4-32k-0314,gpt-4-32k-0613
```

## 常见软件/插件使用方法

### 镜像站点ChatGPT Next Web

官网演示站点 https://ab.nextweb.fun/

将接口地址改成 `https://dongsiqie-bingov1.hf.space/api`

将API Key随便填一个，例如`dummy`

### **python openai官方库**

```
import openai
openai.api_base = "https://dongsiqie-bingov1.hf.space/api/v1"
openai.api_key = "dummy"

response = openai.ChatCompletion.create(
    model='gpt-4',
    messages=[
        {'role': 'user', 'content': "鲁迅和周树人什么关系"},
    ],
    temperature=0,
    stream=True
)

for chunk in response:
    # print(chunk, end="", flush=True)
    print(chunk.choices[0].delta.get("content", ""), end="", flush=True)
```


### **开源gpt_academic**

以使用公共key为例，找到`config.py`文件配置并修改为以下内容：

注意API_KEY需要是标准的gpt的key的格式

```
API_KEY = "sk-CGcDA4TGEdh9Qr5NNQcU2zxnhEDtlMq6s1wm64vmbfBttt58" 
API_URL_REDIRECT = {"https://api.openai.com/v1/chat/completions":"https://dongsiqie-bingov1.hf.space/api/v1/chat/completions"}
```

### **ChatBox(推荐使用)**

ChatGPT开源桌面应用，支持全部桌面平台。

下载链接：https://github.com/Bin-Huang/chatbox/releases

使用方法：如图在设置中填入购买的密钥，并将代理设置为`https://dongsiqie-bingov1.hf.space/api`即可

将API Key随便填一个，例如`sk-CGcDA4TGEdh9Qr5NNQcU2zxnhEDtlMq6s1wm64vmbfBttt58`
