const BYPASS_SERVERS = [
    "https://pass.yangjianchuan2023.workers.dev",
    "https://pass.yangjianchuan.workers.dev",
    "https://pass-worker.dongsiqie.me",
    "https://pass.spring-brook-7b96.workers.dev",
    "https://pass.10001-91b.workers.dev",
    "https://pass.10002.workers.dev"
  ];
  
  /**
   * 随机整数 [min,max)
   * @param {number} min
   * @param {number} max
   * @returns
   */
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  
  // 从服务器列表中选择一个服务器
  function chooseServer() {
    return BYPASS_SERVERS[getRandomInt(0, BYPASS_SERVERS.length-1)];
  }
  
  addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  })
  
  async function handleRequest(request) {
    if (request.method != 'POST') {
      return new Response('{"code":405,"message":"Method Not Allowed","data":null}');
    }
  
    const apiurl = chooseServer(); // 使用负载均衡选择一个服务器
    const apiRequest = new Request(apiurl, {
      method: 'POST',
      body: request.body,
    }); // 创建请求对象
    
    try {
      const response = await fetch(apiRequest); // 发起请求
      // 可在此处添加修改响应头或响应体的代码
      return response; // 返回响应
    } catch (error) {
      return new Response('Error contacting server', { status: 502 }); // 如果出错返回502
    }
  }
  