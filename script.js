// 完整 script.js
// 1. 品类、品牌、型号的模拟数据结构框架
const categoryData = {
  phone: {
    name: "手机 / 平板",
    brands: {
      apple: {
        name: "Apple / iPhone",
        models: [
          "iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17", "iPhone Air",
          "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16",
          "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
          "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
          "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 mini",
          "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 mini",
          "iPhone 11", "iPhone X"
        ]
      },
      samsung: { name: "Samsung / Galaxy", models: ["Galaxy S24", "Galaxy Z Fold6", "（更多型号待扩展）"] },
      huawei: { name: "Huawei / 华为", models: ["Mate 60 Pro", "Pura 70", "（更多型号待扩展）"] },
      xiaomi: { name: "Xiaomi / 小米", models: ["（型号待扩展）"] },
      oppo: { name: "OPPO", models: ["（型号待扩展）"] },
      vivo: { name: "vivo", models: ["（型号待扩展）"] }
    }
  },
  tv: {
    name: "电视 / 显示器",
    brands: {
      samsung: { name: "Samsung / 三星", models: ["QLED 系列", "The Frame", "（型号待扩展）"] },
      sony: { name: "Sony / 索尼", models: ["BRAVIA XR", "（型号待扩展）"] },
      lg: { name: "LG", models: ["（型号待扩展）"] },
      tcl: { name: "TCL", models: ["（型号待扩展）"] }
    }
  },
  ac: {
    name: "空调",
    brands: {
      gree: { name: "Gree / 格力", models: ["（型号待扩展）"] },
      midea: { name: "Midea / 美的", models: ["（型号待扩展）"] },
      haier: { name: "Haier / 海尔", models: ["（型号待扩展）"] }
    }
  },
  refrigerator: {
    name: "冰箱",
    brands: {
      haier: { name: "Haier / 海尔", models: ["（型号待扩展）"] },
      midea: { name: "Midea / 美的", models: ["（型号待扩展）"] },
      siemens: { name: "Siemens / 西门子", models: ["（型号待扩展）"] }
    }
  },
  washer: {
    name: "洗衣机",
    brands: {
      littleSwan: { name: "Little Swan / 小天鹅", models: ["（型号待扩展）"] },
      midea: { name: "Midea / 美的", models: ["（型号待扩展）"] },
      haier: { name: "Haier / 海尔", models: ["（型号待扩展）"] }
    }
  },
  laptop: {
    name: "笔记本电脑",
    brands: {
      lenovo: { name: "Lenovo / 联想", models: ["ThinkPad", "Yoga", "（型号待扩展）"] },
      dell: { name: "Dell / 戴尔", models: ["XPS", "Inspiron", "（型号待扩展）"] },
      apple: { name: "Apple / Mac", models: ["MacBook Air", "MacBook Pro", "（型号待扩展）"] }
    }
  }
};

// 2. 部件列表 (通用，可根据品类扩展不同的列表)
const parts = [
  { id: "screen", name: "屏幕" },
  { id: "battery", name: "电池" },
  { id: "back", name: "后盖玻璃" },
  { id: "camera", name: "摄像头" },
  { id: "charging", name: "充电口" },
  { id: "speaker", name: "扬声器/听筒" },
  { id: "faceid", name: "Face ID" },
  { id: "button", name: "按键" },
  { id: "board", name: "主板" }
];

// 3. 部件别名映射 (主要为手机设计，其他品类可后续扩展)
const PART_ALIASES = {
  屏幕: ["屏幕", "显示面板", "Screen", "Display"],
  电池: ["电池", "電池", "Battery"],
  后盖玻璃: ["后盖玻璃", "后盖", "後玻璃", "后玻璃", "Back Glass", "Rear Case"],
  摄像头: [
    "摄像头",
    "后置摄像头",
    "前置摄像头",
    "Rear Camera",
    "Rear Cameras",
    "Front Camera",
    "main camera"
  ],
  充电口: [
    "充电口",
    "Lightning 连接器组件",
    "Lightning Connector Assembly",
    "USB-C 端口",
    "Charging Port"
  ],
  扬声器: ["扬声器", "底部扬声器", "Lower Speaker", "Loudspeaker"],
  听筒: [
    "听筒",
    "听筒扬声器",
    "耳机扬声器",
    "耳机扬声器和前传感器组件",
    "Earpiece Speaker",
    "Ear Speaker"
  ],
  "Face ID": ["Face ID", "前传感器", "TrueDepth"],
  按键: ["按键", "Audio Control Cable", "音量", "电源按钮", "Side Button"],
  主板: ["主板", "逻辑板", "邏輯板", "Logic Board"]
};
function getSiteBase() { /* ... 同原 script.js，此处省略以节约篇幅 ... */ }
const IFIXIT_IPHONE_BASE = getSiteBase() + "assets/ifixit/iphone/";
let partThumbIndex = {};
function normalizePartText(value) { /* ... 同原 script.js ... */ }
function partNameMatches(alias, scrapedName) { /* ... 同原 script.js ... */ }
function findCanonicalPart(scrapedName) { /* ... 同原 script.js ... */ }
function buildThumbSrc(model, filename) { /* ... 同原 script.js ... */ }
function parseIphoneModel(model) { /* ... 同原 script.js ... */ }
function variantSimilarity(a, b) { /* ... 同原 script.js ... */ }
function modelSimilarity(targetModel, candidateModel) { /* ... 同原 script.js ... */ }
function getModelSearchOrder(targetModel) { /* ... 同原 script.js ... */ }
function getCanonicalKeysForSitePart(sitePartName) { /* ... 同原 script.js ... */ }
function getThumbForSitePart(model, sitePartName) { /* ... 同原 script.js ... */ }
async function loadPartThumbs() { /* ... 同原 script.js ... */ }

// 4. 视频数据 (当前仅有Apple手机数据，其他品类视频数据待扩展)
const videos = [ /* ... 与原 script.js 中的 videos 数组完全相同，此处省略 ... */ ];

// 5. 配件商品数据 (当前仅有Apple手机配件，其他品类配件数据待扩展)
const products = [ /* ... 与原 script.js 中的 products 数组完全相同，此处省略 ... */ ];

// 6. 当前选中状态
let currentCategory = 'phone';
let currentBrand = 'apple';
let currentModel = "iPhone 15";
let currentPart = "屏幕";

// 7. 获取DOM元素
const categoryList = document.querySelector('.category-sidebar');
const brandList = document.getElementById('brandList');
const modelList = document.getElementById('modelList');
const partList = document.getElementById('partList');
const videoList = document.getElementById('videoList');
const productList = document.getElementById('productList');
const currentCategoryText = document.getElementById('currentCategory');
const currentBrandText = document.getElementById('currentBrand');
const currentModelText = document.getElementById('currentModel');
const currentPartText = document.getElementById('currentPart');
const pageTitle = document.getElementById('pageTitle');
const searchInput = document.getElementById('searchInput');
const brandPanelTitle = document.getElementById('brandPanelTitle');
const modelPanelTitle = document.getElementById('modelPanelTitle');

// 8. 初始化品类选择
function initCategories() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  categoryButtons.forEach(btn => {
    btn.onclick = () => {
      const cat = btn.dataset.category;
      if (cat && cat !== currentCategory) {
        // 更新选中状态
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // 切换到新品类
        switchCategory(cat);
      }
    };
  });
}

// 9. 切换品类
function switchCategory(catId) {
  currentCategory = catId;
  const category = categoryData[catId];
  if (!category) return;

  // 更新面包屑和面板标题
  currentCategoryText.textContent = category.name;
  brandPanelTitle.textContent = `${category.name} 品牌`;
  modelPanelTitle.textContent = `${category.name} 型号`;

  // 重置为默认品牌和型号
  const brandKeys = Object.keys(category.brands);
  currentBrand = brandKeys[0] || '';
  const firstBrand = category.brands[currentBrand];
  currentModel = (firstBrand && firstBrand.models[0]) || '（请选择型号）';
  currentPart = "屏幕"; // 重置为默认故障部位

  // 重新渲染品牌、型号、视频、配件
  updatePage();
}

// 10. 渲染品牌列表
function renderBrands() {
  brandList.innerHTML = '';
  const category = categoryData[currentCategory];
  if (!category) return;

  Object.entries(category.brands).forEach(([brandId, brandData]) => {
    const button = document.createElement('button');
    button.className = 'brand-btn';
    button.dataset.brand = brandId;
    button.textContent = brandData.name;

    if (brandId === currentBrand) {
      button.classList.add('active');
    }

    button.onclick = () => {
      if (brandId === currentBrand) return;
      currentBrand = brandId;
      const brandModels = category.brands[brandId].models;
      currentModel = brandModels && brandModels.length > 0 ? brandModels[0] : '（请选择型号）';
      updatePage();
    };

    brandList.appendChild(button);
  });
}

// 11. 渲染型号列表
function renderModels() {
  modelList.innerHTML = '';
  const category = categoryData[currentCategory];
  const brand = category && category.brands[currentBrand];
  const models = (brand && brand.models) || [];

  if (models.length === 0) {
    const emptyMsg = document.createElement('p');
    emptyMsg.textContent = '该品牌下暂无型号数据';
    emptyMsg.style.color = '#6b7280';
    emptyMsg.style.fontSize = '14px';
    modelList.appendChild(emptyMsg);
    return;
  }

  models.forEach(modelName => {
    const button = document.createElement('button');
    button.className = 'model-btn';
    button.textContent = modelName;

    if (modelName === currentModel) {
      button.classList.add('active');
    }

    button.onclick = () => {
      currentModel = modelName;
      updatePage();
    };

    modelList.appendChild(button);
  });
}

// 12. 渲染故障部位 (功能与原 script.js 相同，但需适配多品类。目前部件列表是通用的。)
function renderParts() {
  partList.innerHTML = '';

  parts.forEach(part => {
    const button = document.createElement('button');
    button.className = 'part-btn part-item';

    if (part.name === currentPart) {
      button.classList.add('active');
    }

    // 注意：当前缩略图索引仅针对iPhone。如需为其他品类添加，需扩展 getThumbForSitePart 逻辑。
    if (currentCategory === 'phone') {
      const thumb = getThumbForSitePart(currentModel, part.name);
      if (thumb) {
        const img = document.createElement('img');
        img.className = 'part-thumb';
        img.src = thumb.src;
        img.alt = "";
        img.loading = "lazy";
        if (thumb.fromModel) {
          img.title = `示意图来自 ${thumb.fromModel}`;
        }
        img.onerror = () => img.remove();
        button.appendChild(img);
      }
    }

    const label = document.createElement('span');
    label.textContent = part.name;
    button.appendChild(label);

    button.onclick = () => {
      currentPart = part.name;
      updatePage();
    };

    partList.appendChild(button);
  });
}

// 13. 渲染视频 (筛选逻辑加入品类和品牌判断。目前视频数据均为Apple手机。)
function renderVideos() {
  const keyword = searchInput.value.trim();
  const category = categoryData[currentCategory];
  const brand = category && category.brands[currentBrand];
  const brandName = brand ? brand.name.split(' / ')[0].toLowerCase() : '';

  // 合成标题
  const syntheticTitle = `${currentModel} ${currentPart}维修视频`;

  // 筛选视频：品牌名需匹配，型号需匹配，部位需匹配
  let matched = videos.filter(v => {
    // 简单映射：当前视频数据的 brand 字段是 "Apple"，需与当前选中的品牌名匹配
    const videoBrandLower = v.brand.toLowerCase();
    const currentBrandLower = brandName.toLowerCase();
    // 如果当前品类不是手机，或者品牌不匹配，则返回空
    if (currentCategory !== 'phone' || !videoBrandLower.includes(currentBrandLower)) {
      return false;
    }
    return v.model === currentModel && v.part === currentPart;
  });

  if (matched.length === 0) {
    videoList.innerHTML = `
      <article class="video-card">
        <div class="video-cover">暂无视频 / 待上传</div>
        <div class="video-info">
          <h3>${syntheticTitle}</h3>
          <p>品类：${category ? category.name : 'N/A'}</p>
          <p>品牌：${brand ? brand.name : 'N/A'}</p>
          <p>型号：${currentModel}</p>
          <p>故障部位：${currentPart}</p>
          <p>来源：等待后续爬取或上传</p>
          <span class="status">待上传</span>
        </div>
      </article>
    `;
    return;
  }

  let toShow = matched;
  if (keyword) {
    toShow = matched.filter(v => {
      const haystack = `${v.title} ${v.model} ${v.part}`.toLowerCase();
      return haystack.includes(keyword.toLowerCase());
    });
  }

  if (keyword && toShow.length === 0) {
    videoList.innerHTML = `<p>没有找到相关视频。</p>`;
    return;
  }

  videoList.innerHTML = toShow
    .map(
      v => `
    <article class="video-card">
      <div class="repair-video-wrap">
        <video class="repair-video" controls playsinline preload="metadata" onerror="this.closest('.video-card').classList.add('video-error')">
          <source src="${encodeURI(v.videoUrl)}" type="video/mp4">
          你的浏览器不支持 video 标签。
        </video>
        <div class="video-error-message">视频加载失败：请检查文件路径或视频编码。</div>
      </div>
      <div class="video-info">
        <h3>${v.title}</h3>
        <p>品牌：${v.brand}</p>
        <p>型号：${v.model}</p>
        <p>故障部位：${v.part}</p>
        <p>来源：${v.source}</p>
        <p>难度：${v.difficulty}</p>
        <p>时长：${v.duration}</p>
        <p>状态：<span class="status status-uploaded">已上传</span></p>
      </div>
    </article>
  `
    )
    .join("");
}

// 14. 渲染配件商品 (筛选逻辑加入品类和品牌判断。目前商品数据均为Apple手机。)
function renderProducts() {
  const keyword = searchInput.value.trim().toLowerCase();
  const category = categoryData[currentCategory];
  const brand = category && category.brands[currentBrand];
  const brandName = brand ? brand.name.split(' / ')[0].toLowerCase() : '';

  // 筛选商品：品牌名需匹配，型号需匹配，部位需匹配
  let matched = products.filter(product => {
    const productBrandLower = product.brand.toLowerCase();
    const currentBrandLower = brandName.toLowerCase();
    if (currentCategory !== 'phone' || !productBrandLower.includes(currentBrandLower)) {
      return false;
    }
    return product.model === currentModel && product.part === currentPart;
  });

  if (keyword) {
    matched = matched.filter(product => {
      const haystack =
        `${product.title} ${product.model} ${product.compatibleModels || ""} ${product.part} ${product.platform} ${product.sales || ""}`.toLowerCase();
      return haystack.includes(keyword);
    });
  }

  if (matched.length === 0) {
    productList.innerHTML = `
      <article class="product-empty-card">
        <h3>暂无对应配件商品</h3>
        <p>当前品类（${category ? category.name : 'N/A'}）的商品数据待采集</p>
        <p>等待后续采集京东 / 淘宝 / 拼多多商品图</p>
      </article>
    `;
    return;
  }

  productList.innerHTML = matched
    .map(product => {
      const title = escapeHtml(product.title);
      const platform = escapeHtml(product.platform);
      const compatibleModels = escapeHtml(product.compatibleModels || product.model);
      const part = escapeHtml(product.part);
      const price = escapeHtml(product.price);
      const sales = escapeHtml(product.sales || "未填写");
      const tag = escapeHtml(product.tag);
      const imageUrl = encodeURI(product.imageUrl);
      const productUrl = product.productUrl ? escapeHtml(product.productUrl) : "";
      const cardOpen = productUrl
        ? `<a class="product-card product-card-link" href="${productUrl}" target="_blank" rel="noopener noreferrer">`
        : `<article class="product-card">`;
      const cardClose = productUrl ? "</a>" : "</article>";
      const linkTip = productUrl ? `<div class="product-link-tip">点击查看商品</div>` : "";

      return `
        ${cardOpen}
          <div class="product-image-wrap">
            <img
              class="product-image"
              src="${imageUrl}"
              alt="${title}"
              loading="lazy"
              onerror="this.parentElement.classList.add('image-error')"
            >
            <div class="product-image-placeholder">商品图片待采集</div>
          </div>
          <div class="product-info">
            <h3>${title}</h3>
            <p>平台：${platform}</p>
            <p>适配型号：${compatibleModels}</p>
            <p>故障部位：${part}</p>
            <p>价格：${price}</p>
            <p>销量：${sales}</p>
            <span class="product-tag">${tag}</span>
            ${linkTip}
          </div>
        ${cardClose}
      `;
    })
    .join("");
}
function escapeHtml(value) { /* ... 同原 script.js ... */ }

// 15. 更新页面
function updatePage() {
  const category = categoryData[currentCategory];
  const brand = category && category.brands[currentBrand];
  currentCategoryText.textContent = category ? category.name : '';
  currentBrandText.textContent = brand ? brand.name : '';
  currentModelText.textContent = currentModel;
  currentPartText.textContent = currentPart;
  pageTitle.textContent = `${currentModel} 维修视频`;
  renderBrands();
  renderModels();
  renderParts();
  renderVideos();
  renderProducts();
}

// 16. 事件监听与初始化
searchInput.addEventListener("input", () => {
  renderVideos();
  renderProducts();
});

// 初始化网站
initCategories();
loadPartThumbs().then(updatePage);
