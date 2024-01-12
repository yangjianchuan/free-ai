# 免费的虚拟机

## codespaces

临时虚拟机，需要一个github账号，通过codespaces运行一个vnc的docker镜像

参考以下教程中的前三个步骤：[Github Codespaces](wiki/bingcookie2.html)

## 微软虚拟机

临时虚拟机，需要一个微软账号，==这个虚拟机操作很卡顿==，能不用就不用吧，而且这个虚拟机里面有些网站访问不了

https://learn.microsoft.com/zh-cn/training/modules/implement-common-integration-features-finance-ops/10-exercise-1

2024-01-02：下面两个方法失效了。

segfault直接连不上，huggingface把我的账号penguin2023封号了。

不知道是不是我分享出来被用的太多的原因。目前我自己也没有vnc使用了。

## huggingface

长期虚拟机，在huggingface上面自己部署一个vnc，好处是机器配置很高，2核心cpu，16gb内存。

这一步需要在魔法环境（比如上一个临时虚拟机中）下操作

建议使用小号部署，==这个项目会被封号==，我已经被封了两个了

为了防止再次被封号，我就不放huggingface的一键部署地址了

代码我放Github了，需要的自取，然后手工部署到huggingface

[点击查看代码](https://github.com/yangjianchuan/noVNC)

## ~~segfault~~

~~临时虚拟机，直接打开就可以获取一个~~

~~https://shell.segfault.net/#/login~~

