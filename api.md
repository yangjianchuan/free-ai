# 免费api

**aivvm**

注册送100美元，有gpt-4。

https://oneapi.aivvm.com/

```
import openai
openai.api_base = "https://oneapi.aivvm.com/v1"
openai.api_key = "你自己的api"
response = openai.ChatCompletion.create(
    model='gpt-3.5-turbo',
    messages=[
        {'role': 'user', 'content': "1+3=?"},
    ],
    temperature=0,
    stream=True
)
for chunk in response:
    print(chunk.choices[0].delta.get("content", ""), end="", flush=True)
```

**chat2api**

chat2api，将OPENAI官网接口转换为API格式

开源地址：https://github.com/xyhelper/chat2api

```
import openai
openai.api_base = "https://api.xyhelper.cn/v1"
openai.api_key = "sk-api-xyhelper-cn-free-token-for-everyone-xyhelper"
response = openai.ChatCompletion.create(
    model='gpt-3.5-turbo',
    messages=[
        {'role': 'user', 'content': "who are you?"},
    ],
    temperature=0,
    stream=True
)
for chunk in response:
    print(chunk.choices[0].delta.get("content", ""), end="", flush=True)
```

**bingo**

自行部署bingo以后可以当做api使用，以下是我搭建的4个免费API。可能不稳定，随时可能失效。

```
import openai
openai.api_base = "https://dongsiqie-bingo-api.hf.space/api/v1"
# api_key随便填
openai.api_key = "sk-CGcDA4TGEdh9Qr5NNQcU2zxnhEDtlMq6s1wm64vmbfBttt58"
response = openai.ChatCompletion.create(
    # model随便填
    model='gpt-4-32k',
    messages=[
        {'role': 'user', 'content': "who are you?"},
    ],
    temperature=0,
    stream=True
)
for chunk in response:
    print(chunk.choices[0].delta.get("content", ""), end="", flush=True)
```

api_base也可以换成下面的

```
openai.api_base = "https://dongsiqie-bingov1.hf.space/api/v1"
```
```
openai.api_base = "https://dongsiqie-bingo-sydney.hf.space/api/v1"
```
```
openai.api_base = "https://dongsiqie-bg.hf.space/api/v1"
```

**ninja**

ninja，将OPENAI官网接口转换为API格式，接口调用没有次数限制

开源地址：https://github.com/gngpp/ninja

备注：

先拿到自己的Access Token，可以去官网或者借助fakeopen提供的地址

https://ai.fakeopen.com/auth1

如果是自己在render部署，直接fork这个项目即可 https://github.com/renqabs/nja/fork

api_base可以自己在render部署一个，也可以使用我部署好的 https://nja-i0tc.onrender.com

```
import openai
openai.api_base = "https://nja-i0tc.onrender.com/v1"
openai.api_key = "自己的Access Token"
response = openai.ChatCompletion.create(
    model='gpt-3.5-turbo',
    messages=[
        {'role': 'user', 'content': "who are you?"},
    ],
    temperature=0,
    stream=True
)
for chunk in response:
    print(chunk.choices[0].delta.get("content", ""), end="", flush=True)
```

