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

// 品牌数据（按分类组织）- 手机维修品牌扩展
const brandsByCategory = {
  phone: [
    { id: "apple", name: "Apple / iPhone", enabled: true },
    { id: "samsung", name: "Samsung / 三星", enabled: true },
    { id: "huawei", name: "Huawei / 华为", enabled: true },
    { id: "xiaomi", name: "Xiaomi / 小米", enabled: true },
    { id: "oppo", name: "OPPO", enabled: true },
    { id: "vivo", name: "vivo", enabled: true },
    { id: "honor", name: "Honor / 荣耀", enabled: true },
    { id: "realme", name: "realme / 真我", enabled: true },
    { id: "oneplus", name: "OnePlus / 一加", enabled: true },
    { id: "google", name: "Google Pixel", enabled: true },
    { id: "sony", name: "Sony Xperia", enabled: true },
    { id: "nokia", name: "Nokia / 诺基亚", enabled: true },
    { id: "motorola", name: "Motorola / 摩托罗拉", enabled: true },
    { id: "zte", name: "ZTE / 中兴", enabled: true },
    { id: "meizu", name: "Meizu / 魅族", enabled: true }
  ],
  computer: [
    { id: "apple-mac", name: "Apple Mac", enabled: true },
    { id: "dell", name: "Dell / 戴尔", enabled: true },
    { id: "hp", name: "HP / 惠普", enabled: true },
    { id: "lenovo", name: "Lenovo / 联想", enabled: true },
    { id: "asus", name: "ASUS / 华硕", enabled: true },
    { id: "acer", name: "Acer / 宏碁", enabled: false },
    { id: "msi", name: "MSI / 微星", enabled: false }
  ],
  tablet: [
    { id: "apple-ipad", name: "Apple iPad", enabled: true },
    { id: "samsung-tab", name: "Samsung Tab", enabled: true },
    { id: "huawei-matepad", name: "Huawei MatePad", enabled: true },
    { id: "xiaomi-pad", name: "Xiaomi Pad", enabled: false }
  ],
  appliance: [
    { id: "midea", name: "Midea / 美的", enabled: true },
    { id: "gree", name: "Gree / 格力", enabled: true },
    { id: "haier", name: "Haier / 海尔", enabled: true },
    { id: "siemens", name: "Siemens / 西门子", enabled: false }
  ],
  gaming: [
    { id: "sony-ps", name: "Sony PlayStation", enabled: true },
    { id: "microsoft-xbox", name: "Microsoft Xbox", enabled: true },
    { id: "nintendo", name: "Nintendo Switch", enabled: true }
  ],
  camera: [
    { id: "canon", name: "Canon / 佳能", enabled: true },
    { id: "nikon", name: "Nikon / 尼康", enabled: true },
    { id: "sony-camera", name: "Sony Camera", enabled: true }
  ],
  wearable: [
    { id: "apple-watch", name: "Apple Watch", enabled: true },
    { id: "samsung-watch", name: "Samsung Galaxy Watch", enabled: true },
    { id: "huawei-watch", name: "Huawei Watch", enabled: true }
  ],
  other: [
    { id: "other", name: "其他品牌", enabled: true }
  ]
};

// 型号数据（按品牌组织）- 手机型号扩展
const modelsByBrand = {
  // Apple iPhone 型号
  apple: [
    { id: "iphone-15-pro-max", name: "iPhone 15 Pro Max", enabled: true },
    { id: "iphone-15-pro", name: "iPhone 15 Pro", enabled: true },
    { id: "iphone-15-plus", name: "iPhone 15 Plus", enabled: true },
    { id: "iphone-15", name: "iPhone 15", enabled: true },
    { id: "iphone-14-pro-max", name: "iPhone 14 Pro Max", enabled: true },
    { id: "iphone-14-pro", name: "iPhone 14 Pro", enabled: true },
    { id: "iphone-14-plus", name: "iPhone 14 Plus", enabled: true },
    { id: "iphone-14", name: "iPhone 14", enabled: true },
    { id: "iphone-13-pro-max", name: "iPhone 13 Pro Max", enabled: true },
    { id: "iphone-13-pro", name: "iPhone 13 Pro", enabled: true },
    { id: "iphone-13", name: "iPhone 13", enabled: true },
    { id: "iphone-12-pro-max", name: "iPhone 12 Pro Max", enabled: true },
    { id: "iphone-12-pro", name: "iPhone 12 Pro", enabled: true },
    { id: "iphone-12", name: "iPhone 12", enabled: true },
    { id: "iphone-11-pro-max", name: "iPhone 11 Pro Max", enabled: true },
    { id: "iphone-11-pro", name: "iPhone 11 Pro", enabled: true },
    { id: "iphone-11", name: "iPhone 11", enabled: true },
    { id: "iphone-se-3", name: "iPhone SE (第三代)", enabled: true },
    { id: "iphone-se-2", name: "iPhone SE (第二代)", enabled: true }
  ],
  
  // Samsung Galaxy 型号
  samsung: [
    { id: "galaxy-s24-ultra", name: "Galaxy S24 Ultra", enabled: true },
    { id: "galaxy-s24-plus", name: "Galaxy S24+", enabled: true },
    { id: "galaxy-s24", name: "Galaxy S24", enabled: true },
    { id: "galaxy-s23-ultra", name: "Galaxy S23 Ultra", enabled: true },
    { id: "galaxy-s23-plus", name: "Galaxy S23+", enabled: true },
    { id: "galaxy-s23", name: "Galaxy S23", enabled: true },
    { id: "galaxy-s22-ultra", name: "Galaxy S22 Ultra", enabled: true },
    { id: "galaxy-s22-plus", name: "Galaxy S22+", enabled: true },
    { id: "galaxy-s22", name: "Galaxy S22", enabled: true },
    { id: "galaxy-z-fold5", name: "Galaxy Z Fold5", enabled: true },
    { id: "galaxy-z-flip5", name: "Galaxy Z Flip5", enabled: true },
    { id: "galaxy-a54", name: "Galaxy A54", enabled: true },
    { id: "galaxy-a34", name: "Galaxy A34", enabled: true },
    { id: "galaxy-a14", name: "Galaxy A14", enabled: true }
  ],
  
  // Huawei 型号
  huawei: [
    { id: "mate-60-pro", name: "Mate 60 Pro", enabled: true },
    { id: "mate-60", name: "Mate 60", enabled: true },
    { id: "mate-50-pro", name: "Mate 50 Pro", enabled: true },
    { id: "mate-50", name: "Mate 50", enabled: true },
    { id: "p60-pro", name: "P60 Pro", enabled: true },
    { id: "p60", name: "P60", enabled: true },
    { id: "p50-pro", name: "P50 Pro", enabled: true },
    { id: "p50", name: "P50", enabled: true },
    { id: "nova-12", name: "Nova 12", enabled: true },
    { id: "nova-11", name: "Nova 11", enabled: true },
    { id: "nova-10", name: "Nova 10", enabled: true },
    { id: "mate-x5", name: "Mate X5", enabled: true },
    { id: "mate-xs2", name: "Mate Xs 2", enabled: true }
  ],
  
  // Xiaomi 型号
  xiaomi: [
    { id: "xiaomi-14-pro", name: "Xiaomi 14 Pro", enabled: true },
    { id: "xiaomi-14", name: "Xiaomi 14", enabled: true },
    { id: "xiaomi-13-pro", name: "Xiaomi 13 Pro", enabled: true },
    { id: "xiaomi-13", name: "Xiaomi 13", enabled: true },
    { id: "xiaomi-12-pro", name: "Xiaomi 12 Pro", enabled: true },
    { id: "xiaomi-12", name: "Xiaomi 12", enabled: true },
    { id: "redmi-k70", name: "Redmi K70", enabled: true },
    { id: "redmi-k60", name: "Redmi K60", enabled: true },
    { id: "redmi-note-13-pro", name: "Redmi Note 13 Pro", enabled: true },
    { id: "redmi-note-13", name: "Redmi Note 13", enabled: true },
    { id: "redmi-note-12", name: "Redmi Note 12", enabled: true },
    { id: "xiaomi-mix-fold3", name: "Xiaomi MIX Fold 3", enabled: true },
    { id: "xiaomi-mix-fold2", name: "Xiaomi MIX Fold 2", enabled: true }
  ],
  
  // OPPO 型号
  oppo: [
    { id: "find-x7-ultra", name: "Find X7 Ultra", enabled: true },
    { id: "find-x7", name: "Find X7", enabled: true },
    { id: "find-x6-pro", name: "Find X6 Pro", enabled: true },
    { id: "find-x6", name: "Find X6", enabled: true },
    { id: "reno-11-pro", name: "Reno 11 Pro", enabled: true },
    { id: "reno-11", name: "Reno 11", enabled: true },
    { id: "reno-10-pro", name: "Reno 10 Pro", enabled: true },
    { id: "reno-10", name: "Reno 10", enabled: true },
    { id: "a98", name: "A98", enabled: true },
    { id: "a78", name: "A78", enabled: true },
    { id: "a58", name: "A58", enabled: true }
  ],
  
  // vivo 型号
  vivo: [
    { id: "x100-pro", name: "X100 Pro", enabled: true },
    { id: "x100", name: "X100", enabled: true },
    { id: "x90-pro", name: "X90 Pro", enabled: true },
    { id: "x90", name: "X90", enabled: true },
    { id: "s18-pro", name: "S18 Pro", enabled: true },
    { id: "s18", name: "S18", enabled: true },
    { id: "s17-pro", name: "S17 Pro", enabled: true },
    { id: "s17", name: "S17", enabled: true },
    { id: "y100", name: "Y100", enabled: true },
    { id: "y78", name: "Y78", enabled: true },
    { id: "y55", name: "Y55", enabled: true }
  ],
  
  // 其他品牌的型号数据（简化）
  honor: [
    { id: "magic6-pro", name: "Magic6 Pro", enabled: true },
    { id: "magic6", name: "Magic6", enabled: true },
    { id: "magic5-pro", name: "Magic5 Pro", enabled: true },
    { id: "magic5", name: "Magic5", enabled: true },
    { id: "90-pro", name: "90 Pro", enabled: true },
    { id: "90", name: "90", enabled: true }
  ],
  
  realme: [
    { id: "gt5-pro", name: "GT5 Pro", enabled: true },
    { id: "gt5", name: "GT5", enabled: true },
    { id: "gt-neo5", name: "GT Neo5", enabled: true },
    { id: "11-pro-plus", name: "11 Pro+", enabled: true },
    { id: "11-pro", name: "11 Pro", enabled: true }
  ],
  
  oneplus: [
    { id: "oneplus-12", name: "OnePlus 12", enabled: true },
    { id: "oneplus-11", name: "OnePlus 11", enabled: true },
    { id: "oneplus-ace3", name: "OnePlus Ace 3", enabled: true },
    { id: "oneplus-ace2", name: "OnePlus Ace 2", enabled: true }
  ],
  
  google: [
    { id: "pixel-8-pro", name: "Pixel 8 Pro", enabled: true },
    { id: "pixel-8", name: "Pixel 8", enabled: true },
    { id: "pixel-7-pro", name: "Pixel 7 Pro", enabled: true },
    { id: "pixel-7", name: "Pixel 7", enabled: true }
  ],
  
  // 其他分类的型号数据（保持原样）
  "apple-mac": [
    { id: "macbook-pro-16", name: "MacBook Pro 16英寸", enabled: true },
    { id: "macbook-pro-14", name: "MacBook Pro 14英寸", enabled: true },
    { id: "macbook-air-15", name: "MacBook Air 15英寸", enabled: true },
    { id: "macbook-air-13", name: "MacBook Air 13英寸", enabled: false }
  ],
  dell: [
    { id: "xps-15", name: "XPS 15", enabled: true },
    { id: "xps-13", name: "XPS 13", enabled: true },
    { id: "inspiron-15", name: "Inspiron 15", enabled: false }
  ],
  hp: [
    { id: "spectre-x360", name: "Spectre x360", enabled: true },
    { id: "envy-16", name: "Envy 16", enabled: false }
  ]
};

// 故障部位数据（按分类组织）- 手机维修故障部位扩展
const partsByCategory = {
  phone: [
    { id: "battery", name: "电池更换", icon: "🔋", difficulty: "easy" },
    { id: "screen", name: "屏幕更换", icon: "📱", difficulty: "medium" },
    { id: "back-glass", name: "后盖玻璃更换", icon: "🪟", difficulty: "medium" },
    { id: "charging-port", name: "充电接口维修", icon: "🔌", difficulty: "medium" },
    { id: "speaker", name: "扬声器更换", icon: "🔊", difficulty: "easy" },
    { id: "microphone", name: "麦克风更换", icon: "🎤", difficulty: "medium" },
    { id: "camera", name: "摄像头更换", icon: "📷", difficulty: "hard" },
    { id: "front-camera", name: "前置摄像头更换", icon: "🤳", difficulty: "medium" },
    { id: "vibration-motor", name: "振动马达更换", icon: "📳", difficulty: "easy" },
    { id: "earpiece", name: "听筒更换", icon: "📞", difficulty: "easy" },
    { id: "power-button", name: "电源键维修", icon: "🔘", difficulty: "medium" },
    { id: "volume-button", name: "音量键维修", icon: "🔊", difficulty: "medium" },
    { id: "home-button", name: "Home键维修", icon: "🏠", difficulty: "medium" },
    { id: "fingerprint", name: "指纹识别维修", icon: "👆", difficulty: "hard" },
    { id: "face-id", name: "面容ID维修", icon: "👁️", difficulty: "hard" },
    { id: "charging-board", name: "充电板更换", icon: "⚡", difficulty: "hard" },
    { id: "logic-board", name: "主板维修", icon: "💻", difficulty: "hard" },
    { id: "water-damage", name: "进水维修", icon: "💧", difficulty: "hard" },
    { id: "software", name: "软件故障修复", icon: "💾", difficulty: "easy" },
    { id: "other", name: "其他故障", icon: "🔧", difficulty: "medium" }
  ],
  computer: [
    { id: "keyboard", name: "键盘更换", icon: "⌨️", difficulty: "easy" },
    { id: "screen", name: "屏幕更换", icon: "💻", difficulty: "medium" },
    { id: "battery", name: "电池更换", icon: "🔋", difficulty: "easy" },
    { id: "hard-drive", name: "硬盘更换", icon: "💾", difficulty: "easy" },
    { id: "ram", name: "内存升级", icon: "🧠", difficulty: "easy" },
    { id: "fan", name: "风扇清理", icon: "🌀", difficulty: "medium" },
    { id: "thermal-paste", name: "硅脂更换", icon: "🌡️", difficulty: "medium" },
    { id: "other", name: "其他故障", icon: "🔧", difficulty: "medium" }
  ],
  tablet: [
    { id: "battery", name: "电池更换", icon: "🔋", difficulty: "easy" },
    { id: "screen", name: "屏幕更换", icon: "📱", difficulty: "medium" },
    { id: "charging-port", name: "充电接口维修", icon: "🔌", difficulty: "medium" },
    { id: "other", name: "其他故障", icon: "🔧", difficulty: "medium" }
  ],
  appliance: [
    { id: "compressor", name: "压缩机维修", icon: "❄️", difficulty: "hard" },
    { id: "motor", name: "电机更换", icon: "⚙️", difficulty: "medium" },
    { id: "heating-element", name: "加热元件更换", icon: "🔥", difficulty: "medium" },
    { id: "control-board", name: "控制板维修", icon: "🎛️", difficulty: "hard" },
    { id: "other", name: "其他故障", icon: "🔧", difficulty: "medium" }
  ],
  gaming: [
    { id: "joystick", name: "摇杆更换", icon: "🕹️", difficulty: "easy" },
    { id: "fan", name: "风扇清理", icon: "🌀", difficulty: "medium" },
    { id: "thermal-paste", name: "硅脂更换", icon: "🌡️", difficulty: "medium" },
    { id: "other", name: "其他故障", icon: "🔧", difficulty: "medium" }
  ],
  camera: [
    { id: "lens", name: "镜头更换", icon: "🔍", difficulty: "hard" },
    { id: "sensor", name: "传感器清理", icon: "📸", difficulty: "hard" },
    { id: "shutter", name: "快门维修", icon: "⚡", difficulty: "hard" },
    { id: "other", name: "其他故障", icon: "🔧", difficulty: "medium" }
  ],
  wearable: [
    { id: "battery", name: "电池更换", icon: "🔋", difficulty: "easy" },
    { id: "screen", name: "屏幕更换", icon: "⌚", difficulty: "medium" },
    { id: "strap", name: "表带更换", icon: "⛓️", difficulty: "easy" },
    { id: "other", name: "其他故障", icon: "🔧", difficulty: "medium" }
  ],
  other: [
    { id: "general", name: "通用维修", icon: "🔧", difficulty: "medium" }
  ]
};

// 视频数据（按型号组织）- 手机维修视频扩展
const videosByModel = {
  // iPhone 15 Pro Max 视频
  "iphone-15-pro-max": [
    {
      id: "iphone15pm-battery",
      title: "iPhone 15 Pro Max 电池更换完整教程",
      description: "详细展示如何安全更换iPhone 15 Pro Max的电池，包括拆机步骤和注意事项",
      duration: "15:23",
      views: "1.2M",
      uploader: "手机维修大师",
      status: "uploaded",
      partId: "battery",
      thumbnail: "https://example.com/thumb1.jpg"
    },
    {
      id: "iphone15pm-screen",
      title: "iPhone 15 Pro Max 屏幕更换指南",
      description: "从拆机到安装新屏幕的完整过程，包含Face ID保护技巧",
      duration: "22:45",
      views: "890K",
      uploader: "维修技术分享",
      status: "uploaded",
      partId: "screen",
      thumbnail: "https://example.com/thumb2.jpg"
    },
    {
      id: "iphone15pm-camera",
      title: "iPhone 15 Pro Max 后置摄像头维修",
      description: "解决摄像头模糊、无法对焦等问题，更换摄像头模组教程",
      duration: "18:12",
      views: "540K",
      uploader: "专业维修工",
      status: "pending",
      partId: "camera",
      thumbnail: "https://example.com/thumb3.jpg"
    },
    {
      id: "iphone15pm-charging",
      title: "iPhone 15 Pro Max 充电接口维修",
      description: "修复充电接触不良、无法快充等问题，更换Type-C接口",
      duration: "12:36",
      views: "320K",
      uploader: "电子维修站",
      status: "uploaded",
      partId: "charging-port",
      thumbnail: "https://example.com/thumb4.jpg"
    },
    {
      id: "iphone15pm-backglass",
      title: "iPhone 15 Pro Max 后盖玻璃更换",
      description: "修复碎裂的后盖玻璃，保持无线充电功能正常",
      duration: "25:18",
      views: "410K",
      uploader: "玻璃修复专家",
      status: "uploaded",
      partId: "back-glass",
      thumbnail: "https://example.com/thumb5.jpg"
    }
  ],
  
  // iPhone 15 Pro 视频
  "iphone-15-pro": [
    {
      id: "iphone15p-battery",
      title: "iPhone 15 Pro 电池更换教程",
      description: "详细步骤更换iPhone 15 Pro电池，延长手机续航",
      duration: "14:52",
      views: "980K",
      uploader: "电池专家",
      status: "uploaded",
      partId: "battery",
      thumbnail: "https://example.com/thumb6.jpg"
    },
    {
      id: "iphone15p-speaker",
      title: "iPhone 15 Pro 扬声器更换",
      description: "解决声音小、破音问题，更换底部扬声器",
      duration: "11:24",
      views: "230K",
      uploader: "音频维修",
      status: "uploaded",
      partId: "speaker",
      thumbnail: "https://example.com/thumb7.jpg"
    }
  ],
  
  // iPhone 14 Pro Max 视频
  "iphone-14-pro-max": [
    {
      id: "iphone14pm-battery",
      title: "iPhone 14 Pro Max 电池更换",
      description: "更换老化电池，恢复续航能力",
      duration: "16:45",
      views: "1.5M",
      uploader: "维修大师",
      status: "uploaded",
      partId: "battery",
      thumbnail: "https://example.com/thumb8.jpg"
    },
    {
      id: "iphone14pm-faceid",
      title: "iPhone 14 Pro Max Face ID修复",
      description: "面容ID无法识别问题解决方案",
      duration: "28:33",
      views: "670K",
      uploader: "面容修复专家",
      status: "uploaded",
      partId: "face-id",
      thumbnail: "https://example.com/thumb9.jpg"
    }
  ],
  
  // Samsung Galaxy S24 Ultra 视频
  "galaxy-s24-ultra": [
    {
      id: "s24u-screen",
      title: "Galaxy S24 Ultra 屏幕更换",
      description: "更换碎裂的曲面屏，保持S Pen功能正常",
      duration: "26:18",
      views: "720K",
      uploader: "三星维修中心",
      status: "uploaded",
      partId: "screen",
      thumbnail: "https://example.com/thumb10.jpg"
    },
    {
      id: "s24u-spen",
      title: "Galaxy S24 Ultra S Pen维修",
      description: "修复S Pen无法充电、连接问题",
      duration: "13:42",
      views: "190K",
      uploader: "三星配件维修",
      status: "uploaded",
      partId: "other",
      thumbnail: "https://example.com/thumb11.jpg"
    }
  ],
  
  // Huawei Mate 60 Pro 视频
  "mate-60-pro": [
    {
      id: "mate60p-battery",
      title: "华为Mate 60 Pro 电池更换",
      description: "卫星通话功能手机电池更换特别注意事项",
      duration: "18:56",
      views: "450K",
      uploader: "华为维修专家",
      status: "uploaded",
      partId: "battery",
      thumbnail: "https://example.com/thumb12.jpg"
    },
    {
      id: "mate60p-satellite",
      title: "Mate 60 Pro 卫星天线维修",
      description: "卫星通话功能天线模块更换教程",
      duration: "32:15",
      views: "310K",
      uploader: "通信维修",
      status: "pending",
      partId: "other",
      thumbnail: "https://example.com/thumb13.jpg"
    }
  ],
  
  // Xiaomi 14 Pro 视频
  "xiaomi-14-pro": [
    {
      id: "mi14p-camera",
      title: "小米14 Pro 徕卡镜头更换",
      description: "更换主摄像头徕卡镜头模组",
      duration: "22:48",
      views: "380K",
      uploader: "小米维修站",
      status: "uploaded",
      partId: "camera",
      thumbnail: "https://example.com/thumb14.jpg"
    },
    {
      id: "mi14p-charging",
      title: "小米14 Pro 120W快充维修",
      description: "修复无法快充问题，更换充电模块",
      duration: "19:33",
      views: "290K",
      uploader: "快充维修",
      status: "uploaded",
      partId: "charging-port",
      thumbnail: "https://example.com/thumb15.jpg"
    }
  ],
  
  // 其他型号的示例视频
  "iphone-13-pro": [
    {
      id: "iphone13p-battery",
      title: "iPhone 13 Pro 电池更换",
      description: "标准电池更换流程",
      duration: "14:20",
      views: "1.8M",
      uploader: "苹果维修",
      status: "uploaded",
      partId: "battery",
      thumbnail: "https://example.com/thumb16.jpg"
    }
  ],
  
  "galaxy-s23-ultra": [
    {
      id: "s23u-screen",
      title: "Galaxy S23 Ultra 屏幕更换",
      description: "曲面屏更换完整教程",
      duration: "24:50",
      views: "620K",
      uploader: "三星维修",
      status: "uploaded",
      partId: "screen",
      thumbnail: "https://example.com/thumb17.jpg"
    }
  ],
  
  "p60-pro": [
    {
      id: "p60p-camera",
      title: "华为P60 Pro 可变光圈镜头维修",
      description: "更换可变光圈摄像头模组",
      duration: "27:15",
      views: "410K",
      uploader: "华为相机维修",
      status: "uploaded",
      partId: "camera",
      thumbnail: "https://example.com/thumb18.jpg"
    }
  ]
};

// 商品数据（按故障部位组织）- 手机维修配件扩展
const productsByPart = {
  battery: [
    {
      id: "battery-iphone15pm",
      name: "iPhone 15 Pro Max 原装电池",
      description: "原装品质，容量4500mAh，支持PD快充",
      price: "¥299",
      platform: "taobao",
      sales: "2.4万+",
      rating: "4.9",
      image: "https://example.com/product1.jpg",
      link: "https://taobao.com/item/iphone15pm-battery"
    },
    {
      id: "battery-iphone15p",
      name: "iPhone 15 Pro 高容量电池",
      description: "3800mAh大容量，循环1000次以上",
      price: "¥269",
      platform: "jd",
      sales: "1.8万+",
      rating: "4.8",
      image: "https://example.com/product2.jpg",
      link: "https://jd.com/item/iphone15p-battery"
    },
    {
      id: "battery-s24u",
      name: "三星S24 Ultra 原厂电池",
      description: "5000mAh原厂电芯，支持45W快充",
      price: "¥329",
      platform: "pdd",
      sales: "1.2万+",
      rating: "4.7",
      image: "https://example.com/product3.jpg",
      link: "https://pdd.com/item/s24u-battery"
    },
    {
      id: "battery-mate60p",
      name: "华为Mate 60 Pro 电池",
      description: "5000mAh大容量，支持88W快充",
      price: "¥289",
      platform: "taobao",
      sales: "1.5万+",
      rating: "4.8",
      image: "https://example.com/product4.jpg",
      link: "https://taobao.com/item/mate60p-battery"
    },
    {
      id: "battery-mi14p",
      name: "小米14 Pro 电池",
      description: "4880mAh高密度电池，支持120W快充",
      price: "¥249",
      platform: "jd",
      sales: "9千+",
      rating: "4.7",
      image: "https://example.com/product5.jpg",
      link: "https://jd.com/item/mi14p-battery"
    },
    {
      id: "battery-universal",
      name: "通用手机电池检测仪",
      description: "专业电池健康度检测设备",
      price: "¥89",
      platform: "taobao",
      sales: "5千+",
      rating: "4.6",
      image: "https://example.com/product6.jpg",
      link: "https://taobao.com/item/battery-tester"
    }
  ],
  
  screen: [
    {
      id: "screen-iphone15pm",
      name: "iPhone 15 Pro Max 原装屏",
      description: "原厂品质，支持120Hz ProMotion",
      price: "¥1899",
      platform: "jd",
      sales: "8千+",
      rating: "4.8",
      image: "https://example.com/product7.jpg",
      link: "https://jd.com/item/iphone15pm-screen"
    },
    {
      id: "screen-iphone15p",
      name: "iPhone 15 Pro 高仿屏",
      description: "国产优质，显示效果接近原装",
      price: "¥1299",
      platform: "taobao",
      sales: "1.2万+",
      rating: "4.7",
      image: "https://example.com/product8.jpg",
      link: "https://taobao.com/item/iphone15p-screen"
    },
    {
      id: "screen-s24u",
      name: "三星S24 Ultra 曲面屏",
      description: "原厂AMOLED，支持S Pen",
      price: "¥2199",
      platform: "pdd",
      sales: "6千+",
      rating: "4.9",
      image: "https://example.com/product9.jpg",
      link: "https://pdd.com/item/s24u-screen"
    },
    {
      id: "screen-mate60p",
      name: "华为Mate 60 Pro 昆仑玻璃屏",
      description: "第二代昆仑玻璃，十倍耐摔",
      price: "¥1699",
      platform: "taobao",
      sales: "7千+",
      rating: "4.8",
      image: "https://example.com/product10.jpg",
      link: "https://taobao.com/item/mate60p-screen"
    },
    {
      id: "screen-tools",
      name: "专业屏幕分离机",
      description: "液晶屏分离设备，维修必备",
      price: "¥899",
      platform: "jd",
      sales: "3千+",
      rating: "4.7",
      image: "https://example.com/product11.jpg",
      link: "https://jd.com/item/screen-separator"
    }
  ],
  
  "back-glass": [
    {
      id: "backglass-iphone15pm",
      name: "iPhone 15 Pro Max 后盖玻璃",
      description: "钛金属边框，原厂工艺",
      price: "¥499",
      platform: "taobao",
      sales: "4千+",
      rating: "4.7",
      image: "https://example.com/product12.jpg",
      link: "https://taobao.com/item/iphone15pm-backglass"
    },
    {
      id: "backglass-s24u",
      name: "三星S24 Ultra 后盖总成",
      description: "带摄像头框，原装品质",
      price: "¥399",
      platform: "jd",
      sales: "3千+",
      rating: "4.6",
      image: "https://example.com/product13.jpg",
      link: "https://jd.com/item/s24u-backglass"
    },
    {
      id: "backglass-glue",
      name: "手机后盖专用胶水",
      description: "高强度防水胶，维修必备",
      price: "¥29",
      platform: "pdd",
      sales: "2万+",
      rating: "4.8",
      image: "https://example.com/product14.jpg",
      link: "https://pdd.com/item/backglass-glue"
    }
  ],
  
  "charging-port": [
    {
      id: "charging-iphone15",
      name: "iPhone 15 Type-C接口",
      description: "原装Type-C充电接口模块",
      price: "¥89",
      platform: "taobao",
      sales: "1.5万+",
      rating: "4.7",
      image: "https://example.com/product15.jpg",
      link: "https://taobao.com/item/iphone15-charging"
    },
    {
      id: "charging-android",
      name: "安卓通用Type-C接口",
      description: "支持快充协议，多种型号",
      price: "¥39",
      platform: "pdd",
      sales: "3万+",
      rating: "4.6",
      image: "https://example.com/product16.jpg",
      link: "https://pdd.com/item/android-charging"
    },
    {
      id: "charging-tools",
      name: "精密焊接工具套装",
      description: "手机接口维修专用工具",
      price: "¥199",
      platform: "jd",
      sales: "8千+",
      rating: "4.8",
      image: "https://example.com/product17.jpg",
      link: "https://jd.com/item/welding-tools"
    }
  ],
  
  camera: [
    {
      id: "camera-iphone15pm",
      name: "iPhone 15 Pro Max 摄像头",
      description: "4800万像素主摄，原装品质",
      price: "¥899",
      platform: "jd",
      sales: "3千+",
      rating: "4.9",
      image: "https://example.com/product18.jpg",
      link: "https://jd.com/item/iphone15pm-camera"
    },
    {
      id: "camera-mate60p",
      name: "华为Mate 60 Pro 摄像头",
      description: "可变光圈主摄像头模组",
      price: "¥799",
      platform: "taobao",
      sales: "2千+",
      rating: "4.8",
      image: "https://example.com/product19.jpg",
      link: "https://taobao.com/item/mate60p-camera"
    },
    {
      id: "camera-tools",
      name: "摄像头校准工具",
      description: "专业对焦校准设备",
      price: "¥299",
      platform: "jd",
      sales: "1千+",
      rating: "4.7",
      image: "https://example.com/product20.jpg",
      link: "https://jd.com/item/camera-calibration"
    }
  ],
  
  speaker: [
    {
      id: "speaker-iphone",
      name: "iPhone 通用扬声器",
      description: "立体声扬声器，音质清晰",
      price: "¥69",
      platform: "pdd",
      sales: "2万+",
      rating: "4.6",
      image: "https://example.com/product21.jpg",
      link: "https://pdd.com/item/iphone-speaker"
    },
    {
      id: "speaker-android",
      name: "安卓手机扬声器",
      description: "多种型号通用，高音质",
      price: "¥49",
      platform: "taobao",
      sales: "1.8万+",
      rating: "4.5",
      image: "https://example.com/product22.jpg",
      link: "https://taobao.com/item/android-speaker"
    }
  ],
  
  "face-id": [
    {
      id: "faceid-iphone",
      name: "iPhone Face ID模组",
      description: "原深感摄像头系统",
