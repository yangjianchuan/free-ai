# 谷歌Gemini Pro

Gemini Pro的api key获取地址，目前是免费的，每分钟限速60次地址二选一

https://ai.google.dev/

https://makersuite.google.com/app/apikey

## 如果你没有api

支持多轮对话，上传图片。作者内置了他自己的API，可以直接使用。

https://roboflow-gemini.hf.space



有广告，支持多轮对话，不能上传图片。作者内置了他自己的API，可以直接使用。

https://geminiprochat.com/

## 如果你有api

### Gemini Playground 

支持多轮对话，上传图片。需要使用自己的API。

https://dongsiqie-gemini.hf.space/

### 国内代理

https://zhile.io/2023/12/24/gemini-pro-proxy.html

curl示例

```
curl \
  -H 'Content-Type: application/json' \
  -d '{"contents":[{"parts":[{"text":"Write a story about a magic backpack"}]}]}' \
  -X POST https://gemini.baipiao.io/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY
```

python示例

```
import requests
import json

url = "https://gemini.baipiao.io/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY"

headers = {
    'Content-Type': 'application/json'
}

data = {
    "contents": [
        {
            "parts": [
                {
                    "text": "Write a story about a magic backpack"
                }
            ]
        }
    ]
}

response = requests.post(url, headers=headers, data=json.dumps(data))

if response.status_code == 200:
    # 成功接收到响应
    result = response.json()
    print(result)
else:
    # 请求失败
    print(f"请求失败: {response.status_code} - {response.text}")

```

