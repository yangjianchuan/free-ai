// 网站数据
const sitesData = [
  {
    "title": "豆包",
    "tags": ["recommend", "official"],
    "description": "免登录可以使用部分功能，字节跳动推出的智能助手、可以聊天、生成图片、生成音乐、生成博客、AI编程、学术搜索、深入研究等",
    "link": "https://www.doubao.com/chat",
    "buttonText": "免登录聊天"
  },
  {
    "title": "DeepSeek",
    "tags": ["recommend", "official"],
    "description": "DeepSeek-V3.1，使用手机号或者邮箱登录，支持联网",
    "link": "https://chat.deepseek.com/",
    "buttonText": "点击查看"
  },
  {
    "title": "新版LMArena",
    "tags": ["recommend"],
    "description": "免登录，模型竞技，你的数据会被他们存储使用。随机两个模型回答问题。有deepseek，qwen，gpt，gemini，claude，grok，glm等",
    "link": "https://lmarena.ai/?mode=side-by-side",
    "buttonText": "免登录聊天"
  },
  {
    "title": "akash",
    "tags": [],
    "description": "免登录，右上角可切换GPT-OSS-120B、Kimi-K2、Qwen3-235B-A22B、DeepSeek-V3.1等",
    "link": "https://chat.akash.network/",
    "buttonText": "免登录聊天"
  },
  {
    "title": "sophnet",
    "tags": [],
    "description": "免登录，sophnet云算力平台，免费Kimi-K2、DeepSeek-v3、DeepSeek-v3.1、Qwen3-235B-A22B、Qwen3-Coder、GLM-4.5等",
    "link": "https://www.sophnet.com/#/playground/chat?model=Kimi-K2",
    "buttonText": "免登录聊天"
  },
  {
    "title": "QwenChat",
    "tags": ["recommend", "official"],
    "description": "免登录，也可使用非实名邮箱注册。有Qwen3-235B-A22B、Qwen3-Coder等模型，支持深度思考、联网功能、图片生成",
    "link": "https://chat.qwen.ai/",
    "buttonText": "免登录聊天"
  },
  {
    "title": "当贝AI",
    "tags": ["official"],
    "description": "免登录，免费Kimi-K2、DeepSeek-R1、DeepSeek-v3、豆包、通义3-235B、GLM-4.5等",
    "link": "https://ai.dangbei.com/chat",
    "buttonText": "免登录聊天"
  },
  {
    "title": "智谱AI",
    "tags": ["official"],
    "description": "免登录，也可使用非实名邮箱注册。有GLM-4.5、推理模型GLM-Z1-32B和沉思模型GLM-Z1-Rumination，支持联网功能",
    "link": "https://chat.z.ai/",
    "buttonText": "免登录聊天"
  },
  {
    "title": "秘塔AI搜索",
    "tags": ["recommend"],
    "description": "免登录，多种搜索模式（简洁、深入、研究），搜索结果除了文字以为还有思维导图、大纲、参考来源",
    "link": "https://metaso.cn/",
    "buttonText": "免登录聊天"
  },
  {
    "title": "DeepSeek资料",
    "tags": ["recommend"],
    "description": "up主【秋芝2046】整理的资料，包含使用途径、入门技巧、提示词库、本地部署、API调用等",
    "link": "https://ccnk05wgo092.feishu.cn/wiki/Q52dwmohyi5dNAkUmMWcTFEfnLq",
    "buttonText": "点击查看"
  },
  {
    "title": "硅基流动",
    "tags": ["recommend", "official"],
    "description": "接受邀请你我各得到14元额度。额度可以用来调用Kimi-K2、DeepSeek-V3、DeepSeek-V3.1、Qwen3-Coder和R1、GLM-4.5模型",
    "link": "https://cloud.siliconflow.cn/i/B5MUWgID",
    "buttonText": "接受邀请"
  },
  {
    "title": "VITS语音在线合成",
    "tags": [],
    "description": "免登录，主要有赛马娘，原神中文，原神日语，崩坏3的音色",
    "link": "https://zomehwh-vits-uma-genshin-honkai.hf.space",
    "buttonText": "点击查看"
  },
  {
    "title": "qwen-tts语音在线合成",
    "tags": [],
    "description": "免登录，支持输入中文、英文、中英混合的文本。主要有Dylan（北京话-男）、Jada（吴语-女）、Sunny（四川话-女）",
    "link": "https://modelscope.cn/studios/Qwen/Qwen-TTS-Demo",
    "buttonText": "点击查看"
  },
  {
    "title": "sd3-medium",
    "tags": [],
    "description": "免登录，stable-diffusion-3-medium，AI绘画",
    "link": "https://stabilityai-stable-diffusion-3-medium.hf.space",
    "buttonText": "点击绘画"
  },
  {
    "title": "NoCode",
    "tags": ["official"],
    "description": "零代码应用生成工具 NoCode，可以创建产品原型、数据看板、网站应用等，美团登录",
    "link": "https://nocode.cn/",
    "buttonText": "点击查看"
  },
  {
    "title": "mastergo",
    "tags": ["official"],
    "description": "AI生成产品原型图，微信登录",
    "link": "https://mastergo.com/",
    "buttonText": "点击查看"
  },
  {
    "title": "napkin",
    "tags": ["official"],
    "description": "AI生成PPT的图表，谷歌或者邮箱登录",
    "link": "https://app.napkin.ai/",
    "buttonText": "点击查看"
  }
];

// 渲染卡片的函数
function renderCards() {
  const container = document.querySelector('.container');
  if (!container) {
    console.error('未找到容器元素 .container');
    return;
  }

  // 清空容器内容（除了可能存在的其他元素，这里我们只处理卡片）
  // 为了安全起见，我们只移除具有特定类名的卡片
  const existingCards = container.querySelectorAll('.card');
  existingCards.forEach(card => card.remove());

  // 遍历网站数据并生成卡片
  sitesData.forEach(site => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    
    // 处理标签
    if (site.tags.includes('recommend')) {
      const recommendTag = document.createElement('span');
      recommendTag.className = 'recommend-tag';
      recommendTag.textContent = '👍';
      cardTitle.appendChild(recommendTag);
    }
    
    if (site.tags.includes('official')) {
      const officialTag = document.createElement('span');
      officialTag.className = 'official-tag';
      officialTag.textContent = '官网';
      cardTitle.appendChild(officialTag);
    }
    
    // 添加网站标题
    const titleText = document.createTextNode(site.title);
    cardTitle.appendChild(titleText);
    
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = site.description;
    
    const cardLink = document.createElement('a');
    cardLink.href = site.link;
    cardLink.target = '_blank';
    cardLink.className = 'btn';
    cardLink.textContent = site.buttonText;
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
    
    card.appendChild(cardBody);
    container.appendChild(card);
  });
}

// 页面加载完成后自动渲染
document.addEventListener('DOMContentLoaded', renderCards);