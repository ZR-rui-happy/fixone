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
      samsung: { 
        name: "Samsung / Galaxy", 
        models: ["Galaxy S24", "Galaxy Z Fold6", "（更多型号待扩展）"] 
      },
      huawei: { 
        name: "Huawei / 华为", 
        models: ["Mate 60 Pro", "Pura 70", "（更多型号待扩展）"] 
      },
      xiaomi: { 
        name: "Xiaomi / 小米", 
        models: ["（型号待扩展）"] 
      },
      oppo: { 
        name: "OPPO", 
        models: ["（型号待扩展）"] 
      },
      vivo: { 
        name: "vivo", 
        models: ["（型号待扩展）"] 
      }
    }
  },
  tv: {
    name: "电视 / 显示器",
    brands: {
      samsung: { 
        name: "Samsung / 三星", 
        models: ["QLED 系列", "The Frame", "（型号待扩展）"] 
      },
      sony: { 
        name: "Sony / 索尼", 
        models: ["BRAVIA XR", "（型号待扩展）"] 
      },
      lg: { 
        name: "LG", 
        models: ["（型号待扩展）"] 
      },
      tcl: { 
        name: "TCL", 
        models: ["（型号待扩展）"] 
      }
    }
  },
  ac: {
    name: "空调",
    brands: {
      gree: { 
        name: "Gree / 格力", 
        models: ["（型号待扩展）"] 
      },
      midea: { 
        name: "Midea / 美的", 
        models: ["（型号待扩展）"] 
      },
      haier: { 
        name: "Haier / 海尔", 
        models: ["（型号待扩展）"] 
      }
    }
  },
  refrigerator: {
    name: "冰箱",
    brands: {
      haier: { 
        name: "Haier / 海尔", 
        models: ["（型号待扩展）"] 
      },
      midea: { 
        name: "Midea / 美的", 
        models: ["（型号待扩展）"] 
      },
      siemens: { 
        name: "Siemens / 西门子", 
        models: ["（型号待扩展）"] 
      }
    }
  },
  washer: {
    name: "洗衣机",
    brands: {
      littleSwan: { 
        name: "Little Swan / 小天鹅", 
        models: ["（型号待扩展）"] 
      },
      midea: { 
        name: "Midea / 美的", 
        models: ["（型号待扩展）"] 
      },
      haier: { 
        name: "Haier / 海尔", 
        models: ["（型号待扩展）"] 
      }
    }
  },
  laptop: {
    name: "笔记本电脑",
    brands: {
      lenovo: { 
        name: "Lenovo / 联想", 
        models: ["ThinkPad", "Yoga", "（型号待扩展）"] 
      },
      dell: { 
        name: "Dell / 戴尔", 
        models: ["XPS", "Inspiron", "（型号待扩展）"] 
      },
      apple: { 
        name: "Apple / Mac", 
        models: ["MacBook Air", "MacBook Pro", "（型号待扩展）"] 
      }
    }
  }
};

// 2. 部件列表 (通用)
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

// 3. 每个故障部位的缩略图映射
const partThumbnails = {
  // 手机品类
  phone: {
    "屏幕": "images/part-screens.png",
    "电池": "images/part-batteries.png", 
    "后盖玻璃": "images/part-backglass.png",
    "摄像头": "images/part-cameras.png",
    "充电口": "images/part-charging.png",
    "扬声器/听筒": "images/part-speakers.png",
    "Face ID": "images/part-faceid.png",
    "按键": "images/part-buttons.png",
    "主板": "images/part-motherboards.png"
  },
  // 电视品类
  tv: {
    "屏幕": "images/tv-screens.png",
    "电源板": "images/tv-powerboards.png",
    "主板": "images/tv-motherboards.png",
    "背光灯条": "images/tv-backlights.png",
    "音响": "images/tv-speakers.png"
  },
  // 空调品类
  ac: {
    "压缩机": "images/ac-compressors.png",
    "风扇电机": "images/ac-fanmotors.png",
    "电路板": "images/ac-circuitboards.png",
    "散热器": "images/ac-radiators.png",
    "遥控器": "images/ac-remotes.png"
  },
  // 冰箱品类
  refrigerator: {
    "压缩机": "images/fridge-compressors.png",
    "温控器": "images/fridge-thermostats.png",
    "蒸发器": "images/fridge-evaporators.png",
    "门封条": "images/fridge-doorseals.png",
    "灯开关": "images/fridge-lightswitches.png"
  },
  // 洗衣机品类
  washer: {
    "电机": "images/washer-motors.png",
    "排水泵": "images/washer-drainpumps.png",
    "门锁": "images/washer-doorlocks.png",
    "控制板": "images/washer-controlboards.png",
    "减震器": "images/washer-dampers.png"
  },
  // 笔记本电脑品类
  laptop: {
    "屏幕": "images/laptop-screens.png",
    "电池": "images/laptop-batteries.png",
    "键盘": "images/laptop-keyboards.png",
    "风扇": "images/laptop-fans.png",
    "硬盘": "images/laptop-harddrives.png"
  }
};

// 部件别名映射
const PART_ALIASES = {
  屏幕: ["屏幕", "显示面板", "Screen", "Display", "显示屏", "液晶屏"],
  电池: ["电池", "電池", "Battery", "电芯", "锂电池"],
  后盖玻璃: ["后盖玻璃", "后盖", "後玻璃", "后玻璃", "Back Glass", "Rear Case", "背板"],
  摄像头: [
    "摄像头",
    "后置摄像头", 
    "前置摄像头",
    "Rear Camera",
    "Rear Cameras", 
    "Front Camera",
    "main camera",
    "相机"
  ],
  充电口: [
    "充电口",
    "Lightning 连接器组件",
    "Lightning Connector Assembly", 
    "USB-C 端口",
    "Charging Port",
    "充电接口"
  ],
  扬声器: ["扬声器", "底部扬声器", "Lower Speaker", "Loudspeaker", "喇叭"],
  听筒: [
    "听筒",
    "听筒扬声器", 
    "耳机扬声器",
    "耳机扬声器和前传感器组件",
    "Earpiece Speaker", 
    "Ear Speaker"
  ],
  "Face ID": ["Face ID", "前传感器", "TrueDepth", "面容识别"],
  按键: ["按键", "Audio Control Cable", "音量", "电源按钮", "Side Button", "按钮"],
  主板: ["主板", "逻辑板", "邏輯板", "Logic Board", "电路板"]
};

function getSiteBase() {
  let path = window.location.pathname;
  const lastSegment = path.split("/").pop() || "";
  if (lastSegment.includes(".")) {
    path = path.slice(0, path.lastIndexOf("/") + 1);
  } else if (!path.endsWith("/")) {
    path += "/";
  }
  return path;
}

const IFIXIT_IPHONE_BASE = getSiteBase() + "assets/ifixit/iphone/";
let partThumbIndex = {};

function normalizePartText(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function partNameMatches(alias, scrapedName) {
  const aliasNorm = normalizePartText(alias);
  const scrapedNorm = normalizePartText(scrapedName);
  if (!aliasNorm || !scrapedNorm) return false;
  return (
    scrapedNorm === aliasNorm ||
    scrapedNorm.includes(aliasNorm) ||
    aliasNorm.includes(scrapedNorm)
  );
}

function findCanonicalPart(scrapedName) {
  for (const [canonical, aliases] of Object.entries(PART_ALIASES)) {
    if (aliases.some(alias => partNameMatches(alias, scrapedName))) {
      return canonical;
    }
  }
  return null;
}

function buildThumbSrc(model, filename) {
  const path = `${IFIXIT_IPHONE_BASE}${model}/${filename}`;
  return encodeURI(path);
}

function parseIphoneModel(model) {
  if (model === "iPhone X") return { gen: 10, variant: "base" };
  if (model === "iPhone Air") return { gen: 17, variant: "air" };

  const match = model.match(/iPhone\s+(\d+)\s*(.*)$/i);
  if (!match) return { gen: 0, variant: "base" };

  const variantRaw = (match[2] || "").trim().toLowerCase();
  let variant = "base";
  if (variantRaw.includes("pro max")) variant = "pro max";
  else if (variantRaw.includes("pro")) variant = "pro";
  else if (variantRaw.includes("plus")) variant = "plus";
  else if (variantRaw.includes("mini")) variant = "mini";
  else if (variantRaw.includes("air")) variant = "air";

  return { gen: parseInt(match[1], 10), variant };
}

function variantSimilarity(a, b) {
  if (a === b) return 0;
  const proFamily = new Set(["pro", "pro max"]);
  if (proFamily.has(a) && proFamily.has(b)) return 1;
  if ((a === "base" && b === "plus") || (a === "plus" && b === "base")) return 1;
  if ((a === "base" && b === "mini") || (a === "mini" && b === "base")) return 1;
  return 2;
}

function modelSimilarity(targetModel, candidateModel) {
  const target = parseIphoneModel(targetModel);
  const candidate = parseIphoneModel(candidateModel);
  const genDiff = Math.abs(target.gen - candidate.gen);
  const variantDiff = variantSimilarity(target.variant, candidate.variant);
  const inSidebar =
    models.includes(candidateModel) && models.includes(targetModel) ? 0 : 1;
  return genDiff * 10 + variantDiff * 3 + inSidebar;
}

function getModelSearchOrder(targetModel) {
  return Object.keys(partThumbIndex)
    .filter(model => partThumbIndex[model])
    .sort(
      (a, b) =>
        modelSimilarity(targetModel, a) - modelSimilarity(targetModel, b)
    );
}

function getCanonicalKeysForSitePart(sitePartName) {
  if (sitePartName === "扬声器/听筒") return ["扬声器", "听筒"];
  const canonical = findCanonicalPart(sitePartName);
  if (canonical) return [canonical];
  return [sitePartName];
}

function getThumbForSitePart(model, sitePartName) {
  const partKeys = getCanonicalKeysForSitePart(sitePartName);

  for (const candidateModel of getModelSearchOrder(model)) {
    const modelMap = partThumbIndex[candidateModel];
    if (!modelMap) continue;

    for (const key of partKeys) {
      if (modelMap[key]) {
        return {
          src: modelMap[key],
          fromModel: candidateModel !== model ? candidateModel : null
        };
      }
    }
  }

  return null;
}

async function loadPartThumbs() {
  try {
    const response = await fetch(`${IFIXIT_IPHONE_BASE}all_guides.json`);
    if (!response.ok) return;

    const guides = await response.json();
    if (!Array.isArray(guides)) return;

    const nextIndex = {};

    guides.forEach(entry => {
      const { model, part_name: partName, local_image_filename: filename } =
        entry || {};
      if (!model || !partName || !filename) return;

      const canonical = findCanonicalPart(partName);
      if (!canonical) return;

      if (!nextIndex[model]) nextIndex[model] = {};
      if (nextIndex[model][canonical]) return;

      nextIndex[model][canonical] = buildThumbSrc(model, filename);
    });

    partThumbIndex = nextIndex;
    const modelCount = Object.keys(nextIndex).length;
    if (modelCount > 0) {
      console.info(`已加载 ${modelCount} 个型号的部件缩略图。`);
    }
  } catch (error) {
    console.warn("部件缩略图数据未加载，将仅显示文字。", error);
  }
}

// 4. 视频数据
const videos = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 13 mini",
    part: "屏幕",
    title: "iPhone 13 mini 屏幕更换维修视频",
    videoUrl: "videos/iiPhone13mini换屏.mp4",
    source: "本地上传",
    difficulty: "中等",
    duration: "待填写"
  },
  {
    id: 2,
    brand: "Apple",
    model: "iPhone 12 Pro Max",
    part: "电池",
    title: "iPhone 12 Pro Max 电池更换维修视频",
    videoUrl: "videos/iPhone 12 Pro Max换电池.mp4",
    source: "本地上传",
    difficulty: "中等",
    duration: "待填写"
  },
  {
    id: 3,
    brand: "Apple",
    model: "iPhone 12",
    part: "屏幕",
    title: "iPhone 12 屏幕总成更换维修视频",
    videoUrl: "videos/iPhone 12，12pro换屏幕总成.mp4",
    source: "本地上传",
    difficulty: "中等",
    duration: "待填写"
  },
  {
    id: 4,
    brand: "Apple",
    model: "iPhone 12 Pro",
    part: "屏幕",
    title: "iPhone 12 Pro 屏幕总成更换维修视频",
    videoUrl: "videos/iPhone 12，12pro换屏幕总成.mp4",
    source: "本地上传",
    difficulty: "中等",
    duration: "待填写"
  },
  {
    id: 5,
    brand: "Apple",
    model: "iPhone 14 Pro Max",
    part: "屏幕",
    title: "iPhone 14 Pro Max 屏幕总成更换维修视频",
    videoUrl: "videos/iPhone 14 Pro Max换总成.mp4",
    source: "本地上传",
    difficulty: "中等",
    duration: "待填写"
  },
  {
    id: 6,
    brand: "Apple",
    model: "iPhone 12",
    part: "电池",
    title: "iPhone 12 电池更换维修视频",
    videoUrl: "videos/iPhone12_12PRO换电池 .mp4",
    source: "本地上传",
    difficulty: "简单",
    duration: "待填写"
  },
  {
    id: 7,
    brand: "Apple",
    model: "iPhone 12 Pro",
    part: "电池",
    title: "iPhone 12 Pro 电池更换维修视频",
    videoUrl: "videos/iPhone12_12PRO换电池 .mp4",
    source: "本地上传",
    difficulty: "简单",
    duration: "待填写"
  },
  {
    id: 8,
    brand: "Apple",
    model: "iPhone 12 Pro Max",
    part: "屏幕",
    title: "iPhone 12 Pro Max 屏幕更换维修视频",
    videoUrl: "videos/iPhone12Pro Max换屏.mp4",
    source: "本地上传",
    difficulty: "中等",
    duration: "待填写"
  },
  {
    id: 9,
    brand: "Apple",
    model: "iPhone 12",
    part: "电池",
    title: "iPhone 12 电池更换维修视频",
    videoUrl: "videos/iPhone12换电池.mp4",
    source: "本地上传",
    difficulty: "简单",
    duration: "待填写"
  },
  {
    id: 10,
    brand: "Apple",
    model: "iPhone 12",
    part: "后盖玻璃",
    title: "iPhone 12 后盖后壳更换维修视频",
    videoUrl: "videos/iphone12换后盖后壳.mp4",
    source: "本地上传",
    difficulty: "较难",
    duration: "待填写"
  },
  {
    id: 11,
    brand: "Apple",
    model: "iPhone 13 mini",
    part: "电池",
    title: "iPhone 13 mini 电池更换维修视频",
    videoUrl: "videos/iPhone13mini更换电池（最详细）.mp4",
    source: "本地上传",
    difficulty: "简单",
    duration: "待填写"
  },
  {
    id: 12,
    brand: "Apple",
    model: "iPhone 13 Pro Max",
    part: "屏幕",
    title: "iPhone 13 Pro Max 屏幕盖板更换维修视频",
    videoUrl: "videos/iPhone13Pro Max更换屏幕盖板教程.mp4",
    source: "本地上传",
    difficulty: "较难",
    duration: "待填写"
  },
  {
    id: 13,
    brand: "Apple",
    model: "iPhone 13 Pro Max",
    part: "电池",
    title: "iPhone 13 Pro Max 电池更换维修视频",
    videoUrl: "videos/iPhone13Pro Max换电池.mp4",
    source: "本地上传",
    difficulty: "中等",
    duration: "待填写"
  },
  {
    id: 14,
    brand: "Apple",
    model: "iPhone 13 Pro",
    part: "电池",
    title: "iPhone 13 Pro 电池更换维修视频",
    videoUrl: "videos/iPhone13pro拆机更换电池.mp4",
    source: "本地上传",
    difficulty: "中等",
    duration: "待填写"
  },
  {
    id: 15,
    brand: "Apple",
    model: "iPhone 13 Pro",
    part: "屏幕",
    title: "iPhone 13 Pro 屏幕总成更换维修视频",
    videoUrl: "videos/iPhone13Pro更换屏幕总成.mp4",
    source: "本地上传",
    difficulty: "中等",
    duration: "待填写"
  },
  {
    id: 16,
    brand: "Apple",
    model: "iPhone 13",
    part: "电池",
    title: "iPhone 13 电池更换维修视频",
    videoUrl: "videos/iPhone13换电池.mp4",
    source: "本地上传",
    difficulty: "简单",
    duration: "待填写"
  },
  {
    id: 17,
    brand: "Apple",
    model: "iPhone 13",
    part: "屏幕",
    title: "iPhone 13 屏幕总成更换维修视频",
    videoUrl: "videos/iPhone13换屏幕总成.mp4",
    source: "本地上传",
    difficulty: "中等",
    duration: "待填写"
  },
  {
    id: 18,
    brand: "Apple",
    model: "iPhone 14 Pro",
    part: "电池",
    title: "iPhone 14 Pro 电池更换维修视频",
    videoUrl: "videos/iPhone14 Pro换电池.mp4",
    source: "本地上传",
    difficulty: "中等",
    duration: "待填写"
  },
  {
    id: 19,
    brand: "Apple",
    model: "iPhone 16 Pro Max",
    part: "电池",
    title: "iPhone 16 Pro Max 电池更换维修视频",
    videoUrl: "videos/iPhone16 Pro Max换电池 .mp4",
    source: "本地上传",
    difficulty: "中等",
    duration: "待填写"
  },
  {
    id: 20,
    brand: "Apple",
    model: "iPhone 11",
    part: "电池",
    title: "iPhone 11 电池更换维修视频",
    videoUrl: "videos/苹果 11 换电池.mp4",
    source: "本地上传",
    difficulty: "简单",
    duration: "待填写"
  },
  {
    id: 21,
    brand: "Apple",
    model: "iPhone 11",
    part: "屏幕",
    title: "iPhone 11 屏幕总成更换维修视频",
    videoUrl: "videos/苹果11换屏幕总成.mp4",
    source: "本地上传",
    difficulty: "中等",
    duration: "待填写"
  },
  {
    id: 22,
    brand: "Apple",
    model: "iPhone 12 mini",
    part: "电池",
    title: "iPhone 12 mini 电池更换维修视频",
    videoUrl: "videos/苹果12mini更换电池教程.mp4",
    source: "本地上传",
    difficulty: "简单",
    duration: "待填写"
  },
  {
    id: 23,
    brand: "Apple",
    model: "iPhone 15",
    part: "电池",
    title: "iPhone 15 电池更换维修视频",
    videoUrl: "videos/苹果15换电池.mp4",
    source: "本地上传",
    difficulty: "简单",
    duration: "待填写"
  },
  {
    id: 24,
    brand: "Apple",
    model: "iPhone X",
    part: "电池",
    title: "iPhone X 电池更换维修视频",
    videoUrl: "videos/苹果X换电池.mp4",
    source: "本地上传",
    difficulty: "简单",
    duration: "待填写"
  },
  {
    id: 25,
    brand: "Apple",
    model: "iPhone X",
    part: "屏幕",
    title: "iPhone X 屏幕总成更换维修视频",
    videoUrl: "videos/苹果X换总成.mp4",
    source: "本地上传",
    difficulty: "中等",
    duration: "待填写"
  }
];

// 5. 配件商品数据
const products = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 12",
    part: "电池",
    title: "诺希 iPhone 12 / 12 Pro 旗舰版 3100mAh 电池",
    platform: "天猫",
    imageUrl: "assets/products/iphone12-battery-1.jpg",
    price: "¥166.5起",
    compatibleModels: "iPhone 12 / iPhone 12 Pro",
    sales: "已售8000+",
    tag: "电池配件",
    status: "已采集商品图"
  },
  {
    id: 2,
    brand: "Apple",
    model: "iPhone 13",
    part: "电池",
    title: "德赛原装正品 iPhone 电池",
    platform: "天猫",
    imageUrl: "assets/products/iphone13-battery-1.jpg",
    price: "¥53.84起",
    compatibleModels: "iPhone X / iPhone 11 / iPhone 12 Pro / iPhone 13 / XR / XS Max / 7 / 8P",
    sales: "已售6000+",
    tag: "电池配件",
    status: "已采集商品图"
  },
  {
    id: 3,
    brand: "Apple",
    model: "iPhone 13",
    part: "屏幕",
    title: "手机屏幕总成更换配件",
    platform: "天猫",
    imageUrl: "assets/products/iphone13-screen-1.jpg",
    price: "¥290起",
    compatibleModels: "iPhone 11 / iPhone X / iPhone XR / XS Max / 12PM / iPhone 13 mini 等",
    sales: "已售8000+",
    tag: "屏幕总成",
    status: "已采集商品图"
  },
  {
    id: 4,
    brand: "Apple",
    model: "iPhone 14 Pro Max",
    part: "屏幕",
    title: "iPhone 14 Pro Max 柔性 OLED 屏幕总成",
    platform: "商品页截图",
    imageUrl: "assets/products/iphone14promax-screen-1.jpg",
    price: "¥516.69",
    compatibleModels: "iPhone 14 Pro Max",
    sales: "未显示",
    tag: "屏幕总成",
    status: "已采集商品图"
  }
];

// 6. 当前选中状态
let currentCategory = 'phone';
let currentBrand = 'apple';
let currentModel = "iPhone 15";
let currentPart = "屏幕";
let globalSearchKeyword = "";

// 7. 获取DOM元素
const globalSearchInput = document.getElementById("globalSearchInput");
const globalSearchBtn = document.getElementById("globalSearchBtn");
const brandList = document.getElementById("brandList");
const modelList = document.getElementById("modelList");
const partList = document.getElementById("partList");
const videoList = document.getElementById("videoList");
const productList = document.getElementById("productList");
const currentCategoryText = document.getElementById("currentCategory");
const currentBrandText = document.getElementById("currentBrand");
const currentModelText = document.getElementById("currentModel");
const currentPartText = document.getElementById("currentPart");
const pageTitle = document.getElementById("pageTitle");
const brandPanelTitle = document.getElementById("brandPanelTitle");
const modelPanelTitle = document.getElementById("modelPanelTitle");

// 8. 全局搜索功能
function performGlobalSearch() {
  globalSearchKeyword = globalSearchInput.value.trim().toLowerCase();
  renderVideos();
  renderProducts();
  
  // 如果有搜索关键词，在页面标题中显示
  if (globalSearchKeyword) {
    pageTitle.textContent = `搜索"${globalSearchKeyword}"的结果`;
  } else {
    pageTitle.textContent = `${currentModel} 维修视频`;
  }
}

// 绑定全局搜索事件
globalSearchInput.addEventListener("input", () => {
  performGlobalSearch();
});

globalSearchBtn.addEventListener("click", () => {
  performGlobalSearch();
});

globalSearchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performGlobalSearch();
  }
});

// 9. 初始化品类选择
function initCategories() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  categoryButtons.forEach(btn => {
    btn.onclick = () => {
      const cat = btn.dataset.category;
      if (cat && cat !== currentCategory) {
        // 更新选中状态
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // 清空全局搜索
        globalSearchInput.value = "";
        globalSearchKeyword = "";
        // 切换到新品类
        switchCategory(cat);
      }
    };
  });
}

// 10. 切换品类
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

// 11. 渲染品牌列表
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

// 12. 渲染型号列表
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
    emptyMsg.style.padding = '12px';
    emptyMsg.style.textAlign = 'center';
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

// 13. 渲染故障部位 - 每个部位都有对应产品的缩略图
function renderParts() {
  partList.innerHTML = '';

  parts.forEach(part => {
    const button = document.createElement('button');
    button.className = 'part-btn part-item';

    if (part.name === currentPart) {
      button.classList.add('active');
    }

    // 获取当前品类下该故障部位的缩略图
    const categoryThumbs = partThumbnails[currentCategory];
    let thumbnailSrc = '';
    let hasThumbnail = false;
    
    if (categoryThumbs && categoryThumbs[part.name]) {
      thumbnailSrc = categoryThumbs[part.name];
      hasThumbnail = true;
    } else if (currentCategory === 'phone') {
      // 对于手机品类，尝试从ifixit获取
      const thumb = getThumbForSitePart(currentModel, part.name);
      if (thumb) {
        thumbnailSrc = thumb.src;
        hasThumbnail = true;
      }
    }

    if (hasThumbnail && thumbnailSrc) {
      const img = document.createElement('img');
      img.className = 'part-thumb';
      img.src = thumbnailSrc;
      img.alt = part.name;
      img.loading = "lazy";
      img.onerror = function() {
        // 如果图片加载失败，显示占位符
        this.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.className = 'part-thumb-placeholder';
        placeholder.textContent = part.name;
        button.insertBefore(placeholder, button.firstChild);
      };
      button.appendChild(img);
    } else {
      // 没有缩略图时显示占位符
      const placeholder = document.createElement('div');
      placeholder.className = 'part-thumb-placeholder';
      placeholder.textContent = part.name;
      button.appendChild(placeholder);
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

// 14. 渲染视频
function renderVideos() {
  const category = categoryData[currentCategory];
  const brand = category && category.brands[currentBrand];
  const brandName = brand ? brand.name.split(' / ')[0].toLowerCase() : '';

  // 如果有全局搜索关键词
  if (globalSearchKeyword) {
    // 全局搜索：在所有视频中搜索
    const allResults = videos.filter(v => {
      const searchText = `${v.title} ${v.brand} ${v.model} ${v.part} ${v.difficulty} ${v.source}`.toLowerCase();
      return searchText.includes(globalSearchKeyword);
    });

    if (allResults.length === 0) {
      videoList.innerHTML = `
        <div class="no-results">
          <h3>没有找到匹配"${globalSearchKeyword}"的视频</h3>
          <p>请尝试其他关键词或清除搜索条件</p>
        </div>
      `;
      return;
    }

    // 分组显示结果
    const groupedResults = {};
    allResults.forEach(video => {
      const key = `${video.brand} ${video.model}`;
      if (!groupedResults[key]) {
        groupedResults[key] = [];
      }
      groupedResults[key].push(video);
    });

    let html = '';
    for (const [groupName, groupVideos] of Object.entries(groupedResults)) {
      html += `<h3 class="search-group-title">${groupName}</h3>`;
      html += '<div class="search-video-group">';
      html += groupVideos.map(v => renderVideoCard(v)).join('');
      html += '</div>';
    }
    
    videoList.innerHTML = html;
    return;
  }

  // 没有全局搜索关键词时，按原来的逻辑筛选
  const matched = videos.filter(v => {
    const videoBrandLower = v.brand.toLowerCase();
    const currentBrandLower = brandName.toLowerCase();
    if (currentCategory !== 'phone' || !videoBrandLower.includes(currentBrandLower)) {
      return false;
    }
    return v.model === currentModel && v.part === currentPart;
  });

  if (matched.length === 0) {
    const syntheticTitle = `${currentModel} ${currentPart}维修视频`;
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

  videoList.innerHTML = matched.map(v => renderVideoCard(v)).join('');
}

// 渲染单个视频卡片
function renderVideoCard(v) {
  return `
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
  `;
}

// 15. 渲染配件商品
function renderProducts() {
  // 如果有全局搜索关键词
  if (globalSearchKeyword) {
    // 全局搜索：在所有商品中搜索
    const allResults = products.filter(product => {
      const searchText = `${product.title} ${product.brand} ${product.model} ${product.part} ${product.compatibleModels || ""} ${product.platform} ${product.sales || ""} ${product.tag}`.toLowerCase();
      return searchText.includes(globalSearchKeyword);
    });

    if (allResults.length === 0) {
      productList.innerHTML = `
        <div class="no-results">
          <h3>没有找到匹配"${globalSearchKeyword}"的商品</h3>
          <p>请尝试其他关键词或清除搜索条件</p>
        </div>
      `;
      return;
    }

    // 分组显示结果
    const groupedResults = {};
    allResults.forEach(product => {
      const key = `${product.brand} ${product.model}`;
      if (!groupedResults[key]) {
        groupedResults[key] = [];
      }
      groupedResults[key].push(product);
    });

    let html = '';
    for (const [groupName, groupProducts] of Object.entries(groupedResults)) {
      html += `<h3 class="search-group-title">${groupName}</h3>`;
      html += '<div class="search-product-group">';
      html += groupProducts.map(p => renderProductCard(p)).join('');
      html += '</div>';
    }
    
    productList.innerHTML = html;
    return;
  }

  // 没有全局搜索关键词时，按原来的逻辑筛选
  const category = categoryData[currentCategory];
  const brand = category && category.brands[currentBrand];
  const brandName = brand ? brand.name.split(' / ')[0].toLowerCase() : '';

  let matched = products.filter(product => {
    const productBrandLower = product.brand.toLowerCase();
    const currentBrandLower = brandName.toLowerCase();
    if (currentCategory !== 'phone' || !productBrandLower.includes(currentBrandLower)) {
      return false;
    }
    return product.model === currentModel && product.part === currentPart;
  });

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

  productList.innerHTML = matched.map(p => renderProductCard(p)).join('');
}

// 渲染单个商品卡片
function renderProductCard(product) {
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
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = String(value || "");
  return div.innerHTML;
}

// 16. 更新页面
function updatePage() {
  const category = categoryData[currentCategory];
  const brand = category && category.brands[currentBrand];
  currentCategoryText.textContent = category ? category.name : '';
  currentBrandText.textContent = brand ? brand.name : '';
  currentModelText.textContent = currentModel;
  currentPartText.textContent = currentPart;
  
  // 如果没有全局搜索关键词，显示正常标题
  if (!globalSearchKeyword) {
    pageTitle.textContent = `${currentModel} 维修视频`;
  }
  
  renderBrands();
  renderModels();
  renderParts();
  renderVideos();
  renderProducts();
}

// 17. 初始化网站
function init() {
  initCategories();
  loadPartThumbs().then(updatePage);
  
  // 添加搜索组样式
  const style = document.createElement('style');
  style.textContent = `
    .search-group-title {
      font-size: 18px;
      color: #374151;
      margin: 24px 0 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid #e5e7eb;
    }
    .search-group-title:first-child {
      margin-top: 0;
    }
    .search-video-group {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }
    .search-product-group {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .no-results {
      text-align: center;
      padding: 40px 20px;
      color: #6b7280;
    }
    .no-results h3 {
      color: #374151;
      margin-bottom: 8px;
    }
  `;
  document.head.appendChild(style);
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
