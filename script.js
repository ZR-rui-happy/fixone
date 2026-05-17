// 一级分类数据
const categories = [
  { id: "phone", name: "手机维修", icon: "📱", description: "智能手机和平板手机维修" },
  { id: "computer", name: "电脑维修", icon: "💻", description: "笔记本电脑和台式机维修" },
  { id: "tablet", name: "平板维修", icon: "📱", description: "平板电脑和电子阅读器" },
  { id: "appliance", name: "家电维修", icon: "🏠", description: "家用电器和智能家居" },
  { id: "gaming", name: "游戏主机", icon: "🎮", description: "游戏机和游戏设备" },
  { id: "camera", name: "相机维修", icon: "📷", description: "相机和摄影设备" },
  { id: "wearable", name: "智能穿戴", icon: "⌚", description: "智能手表和健身设备" },
  { id: "other", name: "其他设备", icon: "🔧", description: "其他电子设备维修" }
];

// 品牌数据（按分类组织）
const brandsByCategory = {
  phone: [
    { id: "apple", name: "Apple / iPhone", enabled: true },
    { id: "samsung", name: "Samsung / 三星", enabled: true },
    { id: "huawei", name: "Huawei / 华为", enabled: true },
    { id: "xiaomi", name: "Xiaomi / 小米", enabled: true },
    { id: "oppo", name: "OPPO", enabled: true },
    { id: "vivo", name: "vivo", enabled: true },
    { id: "oneplus", name: "OnePlus / 一加", enabled: false },
    { id: "google", name: "Google Pixel", enabled: false }
  ],
  computer: [
    { id: "apple-mac", name: "Apple Mac", enabled: true },
    { id: "dell", name: "Dell / 戴尔", enabled: true },
    { id: "hp", name: "HP / 惠普", enabled: true },
    { id: "lenovo", name: "Lenovo / 联想", enabled: true },
    { id: "asus", name: "ASUS / 华硕", enabled: false },
    { id: "acer", name: "Acer / 宏碁", enabled: false },
    { id: "msi", name: "MSI / 微星", enabled: false },
    { id: "microsoft", name: "Microsoft Surface", enabled: false }
  ],
  tablet: [
    { id: "ipad", name: "iPad", enabled: true },
    { id: "samsung-tablet", name: "Samsung Galaxy Tab", enabled: true },
    { id: "huawei-tablet", name: "Huawei MatePad", enabled: true },
    { id: "xiaomi-tablet", name: "Xiaomi Pad", enabled: true },
    { id: "lenovo-tablet", name: "Lenovo Tab", enabled: false }
  ],
  appliance: [
    { id: "midea", name: "美的 Midea", enabled: true },
    { id: "haier", name: "海尔 Haier", enabled: true },
    { id: "gree", name: "格力 Gree", enabled: true },
    { id: "xiaomi-app", name: "小米智能家居", enabled: true },
    { id: "panasonic", name: "松下 Panasonic", enabled: false }
  ],
  gaming: [
    { id: "playstation", name: "PlayStation", enabled: true },
    { id: "xbox", name: "Xbox", enabled: true },
    { id: "nintendo", name: "Nintendo Switch", enabled: true },
    { id: "valve", name: "Steam Deck", enabled: false }
  ],
  camera: [
    { id: "canon", name: "Canon / 佳能", enabled: true },
    { id: "nikon", name: "Nikon / 尼康", enabled: true },
    { id: "sony-camera", name: "Sony / 索尼", enabled: true },
    { id: "fujifilm", name: "Fujifilm / 富士", enabled: false },
    { id: "gopro", name: "GoPro", enabled: false }
  ],
  wearable: [
    { id: "apple-watch", name: "Apple Watch", enabled: true },
    { id: "samsung-watch", name: "Samsung Galaxy Watch", enabled: true },
    { id: "huawei-watch", name: "Huawei Watch", enabled: true },
    { id: "xiaomi-watch", name: "Xiaomi / 小米手环", enabled: false },
    { id: "fitbit", name: "Fitbit", enabled: false }
  ],
  other: [
    { id: "drone", name: "无人机 / 航拍", enabled: true },
    { id: "router", name: "路由器 / 网络设备", enabled: true },
    { id: "printer", name: "打印机 / 扫描仪", enabled: true },
    { id: "audio", name: "音频设备 / 音响", enabled: false }
  ]
};

// 型号数据（按品牌组织）
const modelsByBrand = {
  // 手机品牌型号
  "Apple / iPhone": [
    "iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17", "iPhone Air",
    "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16",
    "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
    "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
    "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 mini",
    "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 mini",
    "iPhone 11", "iPhone X"
  ],
  "Samsung / 三星": [
    "Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 FE",
    "Galaxy Z Fold5", "Galaxy Z Flip5", "Galaxy A54", "Galaxy A34"
  ],
  "Huawei / 华为": [
    "Mate 60 Pro", "Mate 60", "P60 Pro", "P60", "P50 Pro", "nova 12"
  ],
  "Xiaomi / 小米": [
    "Xiaomi 14 Pro", "Xiaomi 14", "Xiaomi 13 Ultra", "Xiaomi 13",
    "Redmi K70", "Redmi Note 13 Pro"
  ],
  "OPPO": [
    "Find X7 Ultra", "Find X7", "Reno 11 Pro", "Reno 11"
  ],
  "vivo": [
    "X100 Pro", "X100", "X90 Pro+", "X90", "S18 Pro"
  ],
  
  // 电脑品牌型号
  "Apple Mac": [
    "MacBook Air M3", "MacBook Air M2", "MacBook Pro 16\" M3",
    "MacBook Pro 14\" M3", "iMac 24\" M3", "Mac mini M2", "Mac Studio"
  ],
  "Dell / 戴尔": [
    "XPS 13", "XPS 15", "Inspiron 14", "Inspiron 16", "Alienware m16",
    "Latitude 5440", "Precision 5680"
  ],
  "HP / 惠普": [
    "Spectre x360 14", "Envy x360 15", "Pavilion 15", "Omen 16",
    "Victus 16", "EliteBook 840 G10"
  ],
  "Lenovo / 联想": [
    "ThinkPad X1 Carbon", "ThinkPad T14", "Yoga 9i", "Legion 5 Pro",
    "IdeaPad Slim 5", "ThinkBook 14"
  ],
  
  // 平板品牌型号
  "iPad": [
    "iPad Pro 12.9\" M2", "iPad Pro 11\" M2", "iPad Air M1", "iPad 10th Gen",
    "iPad mini 6", "iPad 9th Gen"
  ],
  "Samsung Galaxy Tab": [
    "Galaxy Tab S9 Ultra", "Galaxy Tab S9+", "Galaxy Tab S9",
    "Galaxy Tab S8", "Galaxy Tab A9+"
  ],
  "Huawei MatePad": [
    "MatePad Pro 13.2", "MatePad Pro 11", "MatePad 11.5",
    "MatePad SE 10.4", "MatePad 10.4"
  ],
  "Xiaomi Pad": [
    "Xiaomi Pad 6 Max", "Xiaomi Pad 6 Pro", "Xiaomi Pad 6",
    "Xiaomi Pad 5 Pro", "Redmi Pad SE"
  ],
  
  // 家电品牌型号
  "美的 Midea": [
    "微波炉 M1", "空调 KFR-35GW", "洗衣机 MB80V331", "冰箱 BCD-630WKPZM"
  ],
  "海尔 Haier": [
    "洗衣机 EG10012B509G", "冰箱 BCD-601WGHSS", "空调 KFR-35GW", "热水器 ES60H"
  ],
  "格力 Gree": [
    "空调 KFR-35GW", "电风扇 FS-40", "空气净化器 KJ700G", "除湿机 DH20EH"
  ],
  "小米智能家居": [
    "小米空气净化器 4 Pro", "小米扫地机器人 2 Ultra", "小米净水器 600G",
    "小米智能门锁 M20", "小米摄像头 云台版 2K"
  ],
  
  // 游戏主机型号
  "PlayStation": [
    "PlayStation 5", "PlayStation 5 Slim", "PlayStation 5 Pro",
    "PlayStation 4 Pro", "PlayStation 4 Slim", "PlayStation VR2"
  ],
  "Xbox": [
    "Xbox Series X", "Xbox Series S", "Xbox One X", "Xbox One S",
    "Xbox 360", "Xbox Elite Controller 2"
  ],
  "Nintendo Switch": [
    "Nintendo Switch OLED", "Nintendo Switch", "Nintendo Switch Lite",
    "Nintendo Switch Pro Controller", "Joy-Con 手柄"
  ],
  
  // 相机品牌型号
  "Canon / 佳能": [
    "EOS R5", "EOS R6 Mark II", "EOS R8", "EOS R50", "EOS 5D Mark IV"
  ],
  "Nikon / 尼康": [
    "Z9", "Z8", "Z7 II", "Z6 II", "Z5", "D850"
  ],
  "Sony / 索尼": [
    "α7 IV", "α7R V", "α7C II", "α6700", "ZV-E1", "FX3"
  ],
  
  // 智能穿戴型号
  "Apple Watch": [
    "Apple Watch Ultra 2", "Apple Watch Series 9", "Apple Watch SE 2",
    "Apple Watch Series 8", "Apple Watch Series 7"
  ],
  "Samsung Galaxy Watch": [
    "Galaxy Watch6 Classic", "Galaxy Watch6", "Galaxy Watch5 Pro",
    "Galaxy Watch5", "Galaxy Watch4 Classic"
  ],
  "Huawei Watch": [
    "Huawei Watch GT 4", "Huawei Watch 4", "Huawei Watch 3 Pro",
    "Huawei Watch GT 3", "Huawei Watch Fit 2"
  ],
  
  // 其他设备型号
  "无人机 / 航拍": [
    "DJI Air 3", "DJI Mini 4 Pro", "DJI Mavic 3 Pro", "DJI Avata",
    "Autel EVO Lite+", "DJI Phantom 4 Pro V2.0"
  ],
  "路由器 / 网络设备": [
    "TP-Link Archer AXE95", "小米路由器 AX9000", "华为路由器 AX3 Pro",
    "华硕 RT-AX86U Pro", "网件 RAXE300"
  ],
  "打印机 / 扫描仪": [
    "惠普 LaserJet Pro MFP", "爱普生 L4266", "佳能 TS3480",
    "兄弟 DCP-T426W", "富士通 ScanSnap iX1600"
  ]
};

// 故障部位数据（按分类组织不同的故障部位）
const partsByCategory = {
  phone: [
    { id: "screen", name: "屏幕", icon: "📱" },
    { id: "battery", name: "电池", icon: "🔋" },
    { id: "back", name: "后盖玻璃", icon: "🔲" },
    { id: "camera", name: "摄像头", icon: "📷" },
    { id: "charging", name: "充电口", icon: "⚡" },
    { id: "speaker", name: "扬声器/听筒", icon: "🔊" },
    { id: "faceid", name: "Face ID", icon: "👁️" },
    { id: "button", name: "按键", icon: "🔘" },
    { id: "board", name: "主板", icon: "🔌" }
  ],
  computer: [
    { id: "battery", name: "电池", icon: "🔋" },
    { id: "screen", name: "屏幕", icon: "💻" },
    { id: "keyboard", name: "键盘", icon: "⌨️" },
    { id: "fan", name: "风扇/散热", icon: "🌀" },
    { id: "ssd", name: "硬盘/SSD", icon: "💾" },
    { id: "ram", name: "内存", icon: "🧠" },
    { id: "ports", name: "接口/端口", icon: "🔌" },
    { id: "motherboard", name: "主板", icon: "🔧" },
    { id: "charging", name: "电源适配器", icon: "⚡" }
  ],
  tablet: [
    { id: "screen", name: "屏幕", icon: "📱" },
    { id: "battery", name: "电池", icon: "🔋" },
    { id: "housing", name: "外壳/边框", icon: "🔲" },
    { id: "camera", name: "摄像头", icon: "📷" },
    { id: "charging", name: "充电口", icon: "⚡" },
    { id: "speaker", name: "扬声器", icon: "🔊" },
    { id: "home", name: "Home 键", icon: "🔘" },
    { id: "board", name: "主板", icon: "🔌" }
  ],
  appliance: [
    { id: "power", name: "电源/电路", icon: "⚡" },
    { id: "motor", name: "电机/马达", icon: "🌀" },
    { id: "heating", name: "加热元件", icon: "🔥" },
    { id: "cooling", name: "制冷系统", icon: "❄️" },
    { id: "pump", name: "水泵", icon: "💧" },
    { id: "sensor", name: "传感器", icon: "📡" },
    { id: "control", name: "控制面板", icon: "🎛️" },
    { id: "door", name: "门/密封", icon: "🚪" }
  ],
  gaming: [
    { id: "disc", name: "光驱", icon: "💿" },
    { id: "fan", name: "风扇/散热", icon: "🌀" },
    { id: "power", name: "电源", icon: "⚡" },
    { id: "hdmi", name: "HDMI 接口", icon: "🔌" },
    { id: "controller", name: "手柄/控制器", icon: "🎮" },
    { id: "housing", name: "外壳", icon: "🔲" },
    { id: "thermal", name: "散热膏", icon: "🧴" },
    { id: "motherboard", name: "主板", icon: "🔧" }
  ],
  camera: [
    { id: "lens", name: "镜头", icon: "🔍" },
    { id: "sensor", name: "传感器", icon: "📡" },
    { id: "screen", name: "屏幕", icon: "📱" },
    { id: "battery", name: "电池", icon: "🔋" },
    { id: "shutter", name: "快门", icon: "📸" },
    { id: "card", name: "存储卡槽", icon: "💾" },
    { id: "ports", name: "接口", icon: "🔌" },
    { id: "housing", name: "机身", icon: "🔲" }
  ],
  wearable: [
    { id: "screen", name: "屏幕", icon: "📱" },
    { id: "battery", name: "电池", icon: "🔋" },
    { id: "strap", name: "表带", icon: "⌚" },
    { id: "sensor", name: "传感器", icon: "📡" },
    { id: "charging", name: "充电器", icon: "⚡" },
    { id: "button", name: "按钮", icon: "🔘" },
    { id: "housing", name: "外壳", icon: "🔲" },
    { id: "board", name: "主板", icon: "🔌" }
  ],
  other: [
    { id: "motor", name: "电机", icon: "🌀" },
    { id: "battery", name: "电池", icon: "🔋" },
    { id: "propeller", name: "螺旋桨", icon: "✈️" },
    { id: "antenna", name: "天线", icon: "📡" },
    { id: "ports", name: "接口", icon: "🔌" },
    { id: "fan", name: "风扇", icon: "🌀" },
    { id: "board", name: "主板", icon: "🔧" },
    { id: "housing", name: "外壳", icon: "🔲" }
  ]
};

// 部位别名映射
const PART_ALIASES = {
  屏幕: ["屏幕", "显示面板", "Screen", "Display", "显示屏", "触摸屏"],
  电池: ["电池", "電池", "Battery", "电源", "锂电池"],
  后盖玻璃: ["后盖玻璃", "后盖", "後玻璃", "后玻璃", "Back Glass", "Rear Case", "背板"],
  摄像头: ["摄像头", "后置摄像头", "前置摄像头", "Rear Camera", "Rear Cameras", "Front Camera", "main camera", "相机", "镜头"],
  充电口: ["充电口", "Lightning 连接器组件", "Lightning Connector Assembly", "USB-C 端口", "Charging Port", "充电接口", "Type-C接口"],
  扬声器: ["扬声器", "底部扬声器", "Lower Speaker", "Loudspeaker", "喇叭", "外放"],
  听筒: ["听筒", "听筒扬声器", "耳机扬声器", "耳机扬声器和前传感器组件", "Earpiece Speaker", "Ear Speaker", "受话器"],
  "Face ID": ["Face ID", "前传感器", "TrueDepth", "面容ID", "人脸识别"],
  按键: ["按键", "Audio Control Cable", "音量", "电源按钮", "Side Button", "按钮", "开关"],
  主板: ["主板", "逻辑板", "邏輯板", "Logic Board", "主电路板"]
};

// 当前状态
let currentCategory = "phone";
let currentBrand = "Apple / iPhone";
let currentModel = "iPhone 15";
let currentPart = "屏幕";
let currentDifficulty = "all";
let currentPlatform = "all";

// DOM 元素
const categoryList = document.getElementById("categoryList");
const brandList = document.getElementById("brandList");
const modelList = document.getElementById("modelList");
const partList = document.getElementById("partList");
const videoList = document.getElementById("videoList");
const productList = document.getElementById("productList");
const breadcrumb = document.getElementById("breadcrumb");
const brandTitle = document.getElementById("brandTitle");
const modelTitle = document.getElementById("modelTitle");
const currentModelText = document.getElementById("currentModel");
const currentPartText = document.getElementById("currentPart");
const pageTitle = document.getElementById("pageTitle");
const searchInput = document.getElementById("searchInput");
const videoCount = document.getElementById("videoCount");

// 工具函数
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
  const inSidebar = modelsByBrand[currentBrand]?.includes(candidateModel) ? 0 : 1;
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

// 渲染函数
function renderCategories() {
  categoryList.innerHTML = "";
  
  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = "category-btn";
    button.dataset.category = category.id;
    
    if (category.id === currentCategory) {
      button.classList.add("active");
    }
    
    button.innerHTML = `
      <span class="category-icon">${category.icon}</span>
      <span class="category-text">
        <strong>${category.name}</strong>
        <small>${category.description}</small>
      </span>
    `;
    
    button.onclick = () => {
      currentCategory = category.id;
      
      // 更新品牌列表标题
      const categoryObj = categories.find(c => c.id === currentCategory);
      brandTitle.innerHTML = `<i class="fas fa-tags"></i> ${categoryObj.name}品牌`;
      
      // 重置品牌和型号
      const availableBrands = brandsByCategory[currentCategory] || [];
      currentBrand = availableBrands.find(b => b.enabled)?.name || availableBrands[0]?.name || "";
      
      if (currentBrand && modelsByBrand[currentBrand]) {
        currentModel = modelsByBrand[currentBrand][0] || "";
      } else {
        currentModel = "";
      }
      
      updatePage();
    };
    
    categoryList.appendChild(button);
  });
}

function renderBrands() {
  brandList.innerHTML = "";
  
  const brands = brandsByCategory[currentCategory] || [];
  
  if (brands.length === 0) {
    brandList.innerHTML = '<p class="empty-message">暂无品牌数据</p>';
    return;
  }
  
  brands.forEach(brand => {
    const button = document.createElement("button");
    button.className = "brand-btn";
    
    if (brand.name === currentBrand) {
      button.classList.add("active");
    }
    
    if (!brand.enabled) {
      button.classList.add("disabled");
      button.title = "即将上线，敬请期待";
    }
    
    button.textContent = brand.name;
    
    button.onclick = () => {
      if (!brand.enabled) return;
      
      currentBrand = brand.name;
      
      // 更新型号列表标题
      modelTitle.innerHTML = `<i class="fas fa-mobile-alt"></i> ${brand.name} 型号`;
      
      // 重置型号
      if (modelsByBrand[currentBrand] && modelsByBrand[currentBrand].length > 0) {
        currentModel = modelsByBrand[currentBrand][0];
      } else {
        currentModel = "";
      }
      
      updatePage();
    };
    
    brandList.appendChild(button);
  });
}

function renderModels() {
  modelList.innerHTML = "";
  
  const models = modelsByBrand[currentBrand] || [];
  
  if (models.length === 0) {
    modelList.innerHTML = '<p class="empty-message">暂无型号数据</p
