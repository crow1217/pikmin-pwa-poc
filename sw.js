// 安裝 Service Worker 
self.addEventListener('install', (event) => {
  console.log('👷‍♂️ Service Worker 安裝成功！準備就緒。');
  self.skipWaiting(); // 強制立即接管網頁
});

// 監聽並處理推播事件 (未來伺服器發送推播時會觸發這裡)
self.addEventListener('push', (event) => {
  // 若伺服器有傳資料，就解析出來；否則用預設文字
  const payload = event.data ? event.data.text() : '附近有新情報！';
  
  const options = {
    body: payload,
    icon: 'https://via.placeholder.com/192/ff6347/FFFFFF?text=Pik',
    vibrate: [200, 100, 200], // 手機震動模式
  };

  // 喚醒手機並跳出通知卡片
  event.waitUntil(
    self.registration.showNotification('🍄 皮克敏雷達', options)
  );
});