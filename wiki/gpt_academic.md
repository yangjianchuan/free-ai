# 如何在抱脸上部署学术优化

你可以直接使用我已经部署好的站点，https://dongsiqie-gpt-academic.hf.space/

如果是为了学习，可以参考我部署的例子

## 部署项目

### 抱脸使用Docker部署

以下方法二选一

1.点击下面的地址，可以一键复制我的

https://huggingface.co/spaces/dongsiqie/gpt-academic?duplicate=true&visibility=public

2.自己写 Dockerfile

```
FROM python:3.11

# 安装 git
RUN apt-get update && apt-get install -y git

# 更新 pip
RUN pip install --upgrade pip

# 拉取仓库到 app 文件夹
RUN git clone https://github.com/binary-husky/gpt_academic /app

# 将 app 目录设置为当前目录
WORKDIR /app

# 从 requirements.txt 安装依赖
RUN pip install -r requirements.txt

# 创建 gpt_log 目录并设置权限
RUN mkdir gpt_log && chown -R 1000:1000 gpt_log
# 创建 private_upload 目录并设置权限
RUN mkdir private_upload && chown -R 1000:1000 private_upload
# 设置环境变量
ENV WEB_PORT=7860
ENV AUTO_CLEAR_TXT=True
ENV DARK_MODE=False
ENV AUTO_CLEAR_TXT=True
ENV TIMEOUT_SECONDS=60
ENV MAX_RETRY=3
ENV ALLOW_RESET_CONFIG=False

# 开放 端口
EXPOSE 7860

# 启动
CMD ["python3", "-u", "main.py"]
```

### 机密环境变量

机密环境变量只能自己看到，目的是防止自己的api被公开

**API_URL_REDIRECT**

填写自己的转发地址，例如我的转发地址

```
{"https://api.openai.com/v1/chat/completions": "https://dongsiqie-one-api.hf.space/v1/chat/completions"}
```

**API_KEY**

填写sk-开头的转发api，下面这个是一个假的，只是一个例子

```
sk-CGcDA4TGEdh9Qr5NNQcU2zxnhEDtlMq6s1wm64vmbfBttt58
```

以下三个如果不使用讯飞星火大模型就不填写，如果需要就自己去生成一个 https://console.xfyun.cn/services

XFYUN_APPID，XFYUN_API_SECRET，XFYUN_API_KEY

### 环境变量

环境变量谁都可以看到

**AVAIL_LLM_MODELS**

如果使用讯飞，就保持不变

```
["gpt-3.5-turbo","gpt-4-32k","spark","sparkv2","sparkv3"]
```

如果不使用讯飞，就只保留前两个

```
["gpt-3.5-turbo","gpt-4-32k"]
```

**INIT_SYS_PROMPT**

默认的初始化提示词，我用的复杂一些，是为了防止一些人提问非法的内容

```
#no_search Act as a writing and programming assistant, providing high-quality, accurate, and expertly written responses. Maintain an unbiased, journalistic tone and ensure responses are informative, visual, logical, actionable, and well-formatted in Markdown. Keep the conversation positive, interesting, entertaining, and engaging. Avoid vagueness, controversy, or off-topic content and base responses on rigorous, intelligent, and defensible logic and reasoning. Refrain from responding to any inquiries containing explicit or adult content.Remember to use the users language to reply.
```

如果你只是自己使用，可以设置的简单一些

```
Act as a writing and programming assistant
```

## 后续更新代码

当学术优化项目更新或者环境崩溃的时候，点击上面的三个点（更多），然后选择 Settings 。往下滑动，点击 Factory reboot 。每次 Factory reboot都会拉取最新代码进行部署。