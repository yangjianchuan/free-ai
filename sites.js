// 渲染卡片的函数
function renderCards(sitesData) {
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
document.addEventListener('DOMContentLoaded', function() {
  // 显示加载指示器
  const loadingIndicator = document.getElementById('loadingIndicator');
  if (loadingIndicator) {
    loadingIndicator.classList.remove('hidden');
  }

  fetch('sitesData.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(sitesData => {
      // 隐藏加载指示器
      if (loadingIndicator) {
        loadingIndicator.classList.add('hidden');
      }
      
      // 清空容器内容
      const container = document.querySelector('.container');
      if (container) {
        container.innerHTML = '';
      }
      
      renderCards(sitesData);
    })
    .catch(error => {
      console.error('获取 sitesData.json 失败:', error);
      // 隐藏加载指示器
      if (loadingIndicator) {
        loadingIndicator.classList.add('hidden');
      }
      
      // 显示错误信息
      const container = document.querySelector('.container');
      if (container) {
        container.innerHTML = '<div class="alert alert-danger" role="alert">加载数据失败，请刷新页面重试。</div>';
      }
    });
});