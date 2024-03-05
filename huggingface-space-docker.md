[首页](https://dongsiqie.me/)

# huggingface新建docker

> 原文：https://github.com/Harry-zklcdc/go-proxy-bingai/wiki/HuggingFace-%E9%83%A8%E7%BD%B2



打开网址 https://huggingface.co/spaces

## 1.点击上栏`Space`

![261017955-4d441f9d-72b0-42ee-8c68-1197a8405f16](https://pic.dongsiqie.me/assets/261017955-4d441f9d-72b0-42ee-8c68-1197a8405f16.png)

## 2.右方`New Space`

![261017988-70f2dff8-4c80-4ebc-b6b5-70a88945db81](https://pic.dongsiqie.me/assets/261017988-70f2dff8-4c80-4ebc-b6b5-70a88945db81.png)

3.参建以下要求建立：

> 1. `Space Name`填写你自己想要的名称；
> 2. `License`输入`mit`；
> 3. `Select the Space SDK`选`Docker`，`Choose a Docker template`选`Blank`
> 4. `Space Hardware`下的`Public`和`Private`：
>
> - `Public`——不在你组织或未登录的人能访问你的Space（公用）。
> - `Private`——不在你组织或未登录的人不能能访问你的Space（私有）
>
> 5. 点`Create Space`。

![261018024-4c156a60-7ba2-4401-9cc1-13dea73298b4](https://pic.dongsiqie.me/assets/261018024-4c156a60-7ba2-4401-9cc1-13dea73298b4.png)

![261018058-fc84c771-01ab-4924-ba90-cb50b4db3e46](https://pic.dongsiqie.me/assets/261018058-fc84c771-01ab-4924-ba90-cb50b4db3e46.png)

![261018136-77796245-c23e-43dd-bbfa-0f53e53fdc51](https://pic.dongsiqie.me/assets/261018136-77796245-c23e-43dd-bbfa-0f53e53fdc51.png)

## 3.部署Dockerfile

1.下滑，有个**create**，点击一下；

![261018160-1a357a8b-0c51-48f1-9117-2b8f867f79b9](https://pic.dongsiqie.me/assets/261018160-1a357a8b-0c51-48f1-9117-2b8f867f79b9.png)

2.在打开的页面的文本编辑器里输入自己的代码：

![261018193-12717b9c-679c-403e-b317-b47ed8a994cb](https://pic.dongsiqie.me/assets/261018193-12717b9c-679c-403e-b317-b47ed8a994cb.png)

3.底下点击按钮**Commit new file to** `main`

![261018219-63591c39-02a9-4ac6-89c6-d988e13c8379](https://pic.dongsiqie.me/assets/261018219-63591c39-02a9-4ac6-89c6-d988e13c8379.png)

4.**不要**等待部署完成，接着点击上方的`Files`；

![261018258-3610a46d-bc8a-4079-950f-ee13addd5b81](https://pic.dongsiqie.me/assets/261018258-3610a46d-bc8a-4079-950f-ee13addd5b81.png)

5.点击`Readme.md`；

![261018258-3610a46d-bc8a-4079-950f-ee13addd5b81](https://pic.dongsiqie.me/assets/261018258-3610a46d-bc8a-4079-950f-ee13addd5b81-1705305194630-15.png)

6.点工具栏（文本编辑器框上的）`Edit`；

![261018290-1d03e110-d33e-4050-a2a4-e77960a0ba41](https://pic.dongsiqie.me/assets/261018290-1d03e110-d33e-4050-a2a4-e77960a0ba41.png)

7.在`license: mit`后回车输入需要开放的端口，注意冒号后面要有空格，例如

```
app_port: 8080
```

![261018311-cf199ed4-a1f8-4ebe-8af2-222f76a7e29b](https://pic.dongsiqie.me/assets/261018311-cf199ed4-a1f8-4ebe-8af2-222f76a7e29b.png)

8.底下点击按钮**Commit new file to** `main`

![261018336-1674e1c4-a4c7-45af-be7b-a5481b91d6e4](https://pic.dongsiqie.me/assets/261018336-1674e1c4-a4c7-45af-be7b-a5481b91d6e4.png)

## 4.验证成功OR失败

![261018464-26365d8a-7af3-4d32-9bfd-0211b6da9a7d](https://pic.dongsiqie.me/assets/261018464-26365d8a-7af3-4d32-9bfd-0211b6da9a7d.png)——**祝贺你，成功了！**

![261018410-715184de-e460-4841-87df-99b400316816](https://pic.dongsiqie.me/assets/261018410-715184de-e460-4841-87df-99b400316816.png)——**等一会，稍安勿躁，还没部署完！不行的话，看看你的`readme.md`填写对了吗？**

**No application file**——**dockerfile忘记保存了吧？**

**Build error**或 **Runtime error**——**出错了，检查dockerfile是否多了回车！**

## 5.获取地址（`Public`专享）

1.点上面的三个点（更多），然后再点 `Embed this Space`

![261539251-38e636da-e076-4fda-af04-374711b5376c](https://pic.dongsiqie.me/assets/261539251-38e636da-e076-4fda-af04-374711b5376c.png)

2.记下网址，大改长这样：

```
https://你的名字-Space名称.hf.space
```

![261538947-43a660db-8661-4e64-8632-f5155b6e27f6](https://pic.dongsiqie.me/assets/261538947-43a660db-8661-4e64-8632-f5155b6e27f6.png)

## 6.重新部署

可以用于重新部署，拉取最新代码、更换IP、更新升级等

1.点上面三个点（更多）, 然后点 `Settings`

![261539539-ba9ebebb-6954-4ca9-b7b8-b058a4bcf21f](https://pic.dongsiqie.me/assets/261539539-ba9ebebb-6954-4ca9-b7b8-b058a4bcf21f.png)

2.点击 `Factory reboot`

![261539997-959c1fe2-4494-4434-bddc-3353452edca8](https://pic.dongsiqie.me/assets/261539997-959c1fe2-4494-4434-bddc-3353452edca8.png)

