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
      huawei: { name: "Huawei / 华为", models: ["Mate 60 Pro", "Pura 70", "（更多型号待扩展）"] }
    }
  },
  tv: {
    name: "电视 / 显示器",
    brands: {
      samsung: { name: "Samsung / 三星", models: ["QLED 系列", "The Frame", "（型号待扩展）"] },
      sony: { name: "Sony / 索尼", models: ["BRAVIA XR", "（型号待扩展）"] },
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
  }
  // 注：为保持代码简洁，此处仅展示部分品类。冰箱(refrigerator)、洗衣机(washer)、笔记本电脑(laptop)等可按此结构在后续扩展。
};

// 2. 当前选中状态
let currentCategory = 'phone';
let currentBrand = 'apple';
let currentModel = "iPhone 15";
let currentPart = "屏幕";

// 3. 获取DOM元素
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

// 4. 初始化品类选择
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

// 5. 切换品类
function switchCategory(catId) {
  currentCategory = catId;
  const category = categoryData[catId];
  if (!category) return;

  // 更新面包屑
  currentCategoryText.textContent = category.name;
  // 更新品牌面板标题
  brandPanelTitle.textContent = `${category.name} 品牌`;
  modelPanelTitle.textContent = `${category.name} 型号`;

  // 重置为默认品牌和型号
  const brandKeys = Object.keys(category.brands);
  currentBrand = brandKeys[0] || '';
  const firstBrand = category.brands[currentBrand];
  currentModel = (firstBrand && firstBrand.models[0]) || '（请选择型号）';

  // 重新渲染品牌、型号、视频、配件
  updatePage();
}

// 6. 渲染品牌列表
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

// 7. 渲染型号列表 (基于当前品类和品牌)
function renderModels() {
  modelList.innerHTML = '';
  const category = categoryData[currentCategory];
  const brand = category && category.brands[currentBrand];
  const models = (brand && brand.models) || [];

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

// 8. 以下为原有函数，基本逻辑不变，但数据筛选需加入“品类”和“品牌”条件
// 为节约篇幅，此处仅列出函数签名和关键修改点，具体实现详见下方“完整 script.js”
function renderParts() { /* ... 同之前，但缩略图查找逻辑可能需要根据品类调整 ... */ }
function renderVideos() { /* 筛选 videos 时，加入条件：v.brand 需匹配 currentBrand (需映射)，v.model 需匹配 currentModel */ }
function renderProducts() { /* 筛选 products 时，加入条件：product.brand 需匹配 currentBrand, product.model 需匹配 currentModel */ }
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
// 初始化
initCategories();
updatePage();
searchInput.addEventListener('input', () => { renderVideos(); renderProducts(); });
// 加载缩略图等原有逻辑...
(async function init() {
  await loadPartThumbs();
  updatePage();
})();
