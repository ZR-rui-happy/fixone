// 数据定义
const models = [
    "iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17 Plus", "iPhone 17",
    "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16",
    "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
    "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
    "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 mini",
    "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 mini",
    "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone XS Max", 
    "iPhone XS", "iPhone XR", "iPhone X", "iPhone 8 Plus", "iPhone 8", 
    "iPhone 7 Plus", "iPhone 7", "iPhone 6s Plus", "iPhone 6s", 
    "iPhone SE (2020)", "iPhone SE (2016)"
];

const parts = [
    { id: "screen", name: "屏幕", icon: "fas fa-mobile-alt" },
    { id: "battery", name: "电池", icon: "fas fa-battery-full" },
    { id: "camera", name: "摄像头", icon: "fas fa-camera" },
    { id: "charging_port", name: "充电口", icon: "fas fa-plug" },
    { id: "speaker", name: "扬声器", icon: "fas fa-volume-up" },
    { id: "microphone", name: "麦克风", icon: "fas fa-microphone" },
    { id: "back_cover", name: "后盖", icon: "fas fa-square" },
    { id: "housing", name: "中框", icon: "fas fa-cube" },
    { id: "logic_board", name: "主板", icon: "fas fa-microchip" },
    { id: "charging_flex", name: "充电排线", icon: "fas fa-bolt" },
    { id: "vibrator", name: "振动器", icon: "fas fa-vibrate" },
    { id: "water_damage", name: "进水修复", icon: "fas fa-tint" }
];

// 部件名称别名映射（用于智能匹配）
const PART_ALIASES = {
    "屏幕": ["屏幕", "显示器", "显示屏", "液晶", "触摸屏", "外屏", "内屏", "display", "screen", "lcd", "oled"],
    "电池": ["电池", "电芯", "电池续航", "battery", "cell"],
    "摄像头": ["摄像头", "相机", "后摄", "前摄", "镜头", "camera", "lens", "rear camera", "front camera"],
    "充电口": ["充电口", "充电接口", "尾插", "充电排线", "lightning", "usb-c", "charging port", "charge port"],
    "扬声器": ["扬声器", "喇叭", "外放", "speaker", "loudspeaker"],
    "麦克风": ["麦克风", "话筒", "送话器", "microphone", "mic"],
    "后盖": ["后盖", "后壳", "背板", "back cover", "back glass", "rear housing"],
    "中框": ["中框", "边框", "中壳", "housing", "frame", "middle frame"],
    "主板": ["主板", "逻辑板", "pcb", "logic board", "mainboard"],
    "充电排线": ["充电排线", "电池排线", "flex cable", "charge flex", "battery flex"],
    "振动器": ["振动器", "震动马达", "振动马达", "vibrator", "haptic engine"],
    "进水修复": ["进水", "液体损坏", "防水修复", "water damage", "liquid damage"]
};

const videos = [
    { brand: "Apple", model: "iPhone 15 Pro Max", part: "屏幕", title: "iPhone 15 Pro Max 屏幕更换教程", videoFile: "video/iphone_15_pro_max_screen.mp4", duration: "12:30", uploaded: "2024-03-15" },
    { brand: "Apple", model: "iPhone 15 Pro Max", part: "电池", title: "iPhone 15 Pro Max 电池更换指南", videoFile: "video/iphone_15_pro_max_battery.mp4", duration: "18:45", uploaded: "2024-03-10" },
    { brand: "Apple", model: "iPhone 15 Pro", part: "屏幕", title: "iPhone 15 Pro 显示屏更换", videoFile: "video/iphone_15_pro_screen.mp4", duration: "14:20", uploaded: "2024-03-12" },
    { brand: "Apple", model: "iPhone 15 Pro", part: "电池", title: "iPhone 15 Pro 电池维修", videoFile: "video/iphone_15_pro_battery.mp4", duration: "16:10", uploaded: "2024-03-08" },
    { brand: "Apple", model: "iPhone 15 Plus", part: "屏幕", title: "iPhone 15 Plus 屏幕拆卸安装", videoFile: "video/iphone_15_plus_screen.mp4", duration: "11:15", uploaded: "2024-03-05" },
    { brand: "Apple", model: "iPhone 15", part: "屏幕", title: "iPhone 15 屏幕总成更换", videoFile: "video/iphone_15_screen.mp4", duration: "10:40", uploaded: "2024-03-03" },
    { brand: "Apple", model: "iPhone 15", part: "电池", title: "iPhone 15 电池更换步骤详解", videoFile: "video/iphone_15_battery.mp4", duration: "15:30", uploaded: "2024-02-28" },
    { brand: "Apple", model: "iPhone 14 Pro Max", part: "屏幕", title: "iPhone 14 Pro Max 屏幕修复", videoFile: "video/iphone_14_pro_max_screen.mp4", duration: "13:25", uploaded: "2024-02-20" },
    { brand: "Apple", model: "iPhone 14 Pro Max", part: "摄像头", title: "iPhone 14 Pro Max 后置摄像头更换", videoFile: "video/iphone_14_pro_max_camera.mp4", duration: "22:10", uploaded: "2024-02-18" },
    { brand: "Apple", model: "iPhone 14 Pro", part: "屏幕", title: "iPhone 14 Pro 屏幕维修", videoFile: "video/iphone_14_pro_screen.mp4", duration: "12:50", uploaded: "2024-02-15" },
    { brand: "Apple", model: "iPhone 13 Pro Max", part: "电池", title: "iPhone 13 Pro Max 电池更换教程", videoFile: "video/iphone_13_pro_max_battery.mp4", duration: "19:30", uploaded: "2024-02-10" },
    { brand: "Apple", model: "iPhone 13 Pro", part: "屏幕", title: "iPhone 13 Pro 显示屏更换", videoFile: "video/iphone_13_pro_screen.mp4", duration: "13:15", uploaded: "2024-02-05" },
    { brand: "Apple", model: "iPhone 13", part: "充电口", title: "iPhone 13 充电端口维修", videoFile: "video/iphone_13_charging_port.mp4", duration: "25:40", uploaded: "2024-02-01" },
    { brand: "Apple", model: "iPhone 12 Pro Max", part: "屏幕", title: "iPhone 12 Pro Max 屏幕更换", videoFile: "video/iphone_12_pro_max_screen.mp4", duration: "11:20", uploaded: "2024-01-25" },
    { brand: "Apple", model: "iPhone 12 Pro", part: "电池", title: "iPhone 12 Pro 电池维修指南", videoFile: "video/iphone_12_pro_battery.mp4", duration: "17:15", uploaded: "2024-01-20" },
    { brand: "Apple", model: "iPhone 12", part: "屏幕", title: "iPhone 12 屏幕总成更换", videoFile: "video/iphone_12_screen.mp4", duration: "10:10", uploaded: "2024-01-15" },
    { brand: "Apple", model: "iPhone 11 Pro Max", part: "摄像头", title: "iPhone 11 Pro Max 摄像头更换", videoFile: "video/iphone_11_pro_max_camera.mp4", duration: "20:30", uploaded: "2024-01-10" },
    { brand: "Apple", model: "iPhone 11 Pro", part: "电池", title: "iPhone 11 Pro 电池更换", videoFile: "video/iphone_11_pro_battery.mp4", duration: "16:45", uploaded: "2024-01-05" },
    { brand: "Apple", model: "iPhone 11", part: "屏幕", title: "iPhone 11 屏幕维修教程", videoFile: "video/iphone_11_screen.mp4", duration: "9:50", uploaded: "2024-01-01" },
    { brand: "Apple", model: "iPhone XS Max", part: "电池", title: "iPhone XS Max 电池更换步骤", videoFile: "video/iphone_xs_max_battery.mp4", duration: "18:20", uploaded: "2023-12-25" },
    { brand: "Apple", model: "iPhone XS", part: "屏幕", title: "iPhone XS 显示屏更换", videoFile: "video/iphone_xs_screen.mp4", duration: "12:10", uploaded: "2023-12-20" },
    { brand: "Apple", model: "iPhone XR", part: "充电口", title: "iPhone XR 充电端口修复", videoFile: "video/iphone_xr_charging_port.mp4", duration: "24:30", uploaded: "2023-12-15" },
    { brand: "Apple", model: "iPhone X", part: "屏幕", title: "iPhone X 屏幕更换教程", videoFile: "video/iphone_x_screen.mp4", duration: "14:40", uploaded: "2023-12-10" },
    { brand: "Apple", model: "iPhone 8 Plus", part: "电池", title: "iPhone 8 Plus 电池维修", videoFile: "video/iphone_8_plus_battery.mp4", duration: "15:15", uploaded: "2023-12-05" },
    { brand: "Apple", model: "iPhone 8", part: "屏幕", title: "iPhone 8 屏幕更换指南", videoFile: "video/iphone_8_screen.mp4", duration: "9:30", uploaded: "2023-12-01" }
];

const products = [
    { title: "iPhone 15 Pro Max 原装屏幕总成", price: "¥899", platform: "天猫", models: ["iPhone 15 Pro Max"], part: "屏幕", image: "product/iphone_15_pro_max_screen.jpg" },
    { title: "iPhone 15 Pro Max 高容量电池", price: "¥299", platform: "京东", models: ["iPhone 15 Pro Max"], part: "电池", image: "product/iphone_15_pro_max_battery.jpg" },
    { title: "iPhone 15 Pro 原装屏幕总成", price: "¥799", platform: "天猫", models: ["iPhone 15 Pro"], part: "屏幕", image: "product/iphone_15_pro_screen.jpg" },
    { title: "iPhone 15 Pro 高容量电池", price: "¥279", platform: "京东", models: ["iPhone 15 Pro"], part: "电池", image: "product/iphone_15_pro_battery.jpg" },
    { title: "iPhone 15 Plus 原装屏幕总成", price: "¥699", platform: "天猫", models: ["iPhone 15 Plus"], part: "屏幕", image: "product/iphone_15_plus_screen.jpg" },
    { title: "iPhone 15 原装屏幕总成", price: "¥599", platform: "天猫", models: ["iPhone 15"], part: "屏幕", image: "product/iphone_15_screen.jpg" },
    { title: "iPhone 15 高容量电池", price: "¥259", platform: "京东", models: ["iPhone 15"], part: "电池", image: "product/iphone_15_battery.jpg" },
    { title: "iPhone 14 Pro Max 原装屏幕", price: "¥849", platform: "天猫", models: ["iPhone 14 Pro Max"], part: "屏幕", image: "product/iphone_14_pro_max_screen.jpg" },
    { title: "iPhone 14 Pro Max 摄像头模组", price: "¥459", platform: "京东", models: ["iPhone 14 Pro Max"], part: "摄像头", image: "product/iphone_14_pro_max_camera.jpg" },
    { title: "iPhone 13 Pro Max 原装电池", price: "¥329", platform: "天猫", models: ["iPhone 13 Pro Max"], part: "电池", image: "product/iphone_13_pro_max_battery.jpg" },
    { title: "iPhone 12 Pro Max 屏幕总成", price: "¥749", platform: "京东", models: ["iPhone 12 Pro Max"], part: "屏幕", image: "product/iphone_12_pro_max_screen.jpg" },
    { title: "iPhone 11 Pro Max 摄像头", price: "¥389", platform: "天猫", models: ["iPhone 11 Pro Max"], part: "摄像头", image: "product/iphone_11_pro_max_camera.jpg" }
];

// 当前选择的型号和部位
let currentModel = "iPhone 15";
let currentPart = "屏幕";
let allGuidesData = null;

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    renderModels();
    renderParts();
    updatePage();
    loadPartThumbs();
    initEventListeners();
    initHomepageModules();
});

// 渲染型号列表
function renderModels() {
    const modelList = document.getElementById('modelList');
    modelList.innerHTML = '';
    
    models.forEach(model => {
        const button = document.createElement('button');
        button.className = 'model-btn';
        button.textContent = model;
        if (model === currentModel) {
            button.classList.add('active');
        }
        button.onclick = () => {
            currentModel = model;
            renderModels();
            updatePage();
        };
        modelList.appendChild(button);
    });
}

// 渲染部位选择
function renderParts() {
    const partList = document.getElementById('partList');
    partList.innerHTML = '';
    
    parts.forEach(part => {
        const button = document.createElement('button');
        button.className = 'part-btn';
        button.innerHTML = `
            <i class="${part.icon}"></i>
            <span class="part-name">${part.name}</span>
        `;
        if (part.name === currentPart) {
            button.classList.add('active');
        }
        button.onclick = () => {
            currentPart = part.name;
            renderParts();
            updatePage();
        };
        partList.appendChild(button);
    });
}

// 渲染视频列表
function renderVideos() {
    const videoList = document.getElementById('videoList');
    const videoCount = document.getElementById('videoCount');
    
    // 筛选视频
    const filteredVideos = videos.filter(video => 
        video.model === currentModel && video.part === currentPart
    );
    
    videoList.innerHTML = '';
    videoCount.textContent = filteredVideos.length;
    
    if (filteredVideos.length === 0) {
        videoList.innerHTML = `
            <div class="video-error-message">
                <i class="fas fa-video-slash" style="font-size: 48px; margin-bottom: 16px; color: #9ca3af;"></i>
                <h3>暂无相关维修视频</h3>
                <p>当前筛选条件下没有找到匹配的维修视频。</p>
                <p>请尝试选择其他型号或故障部位。</p>
            </div>
        `;
        return;
    }
    
    filteredVideos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-container">
                <div class="video-play-button">
                    <i class="fas fa-play"></i>
                </div>
                <video preload="metadata" onclick="togglePlay(this)">
                    <source src="${video.videoFile}" type="video/mp4">
                    您的浏览器不支持视频播放
                </video>
            </div>
            <div class="video-info">
                <h3 class="video-title">${escapeHtml(video.title)}</h3>
                <div class="video-meta">
                    <span>${video.model}</span>
                    <span>${video.duration}</span>
                    <span class="video-uploaded">已上传 ${video.uploaded}</span>
                </div>
                <p class="video-description">${getVideoDescription(video)}</p>
            </div>
        `;
        videoList.appendChild(videoCard);
    });
}

// 渲染商品列表
function renderProducts() {
    const productList = document.getElementById('productList');
    const productCount = document.getElementById('productCount');
    
    // 筛选商品
    const filteredProducts = products.filter(product => 
        product.models.includes(currentModel) && product.part === currentPart
    );
    
    productList.innerHTML = '';
    productCount.textContent = filteredProducts.length;
    
    if (filteredProducts.length === 0) {
        productList.innerHTML = `
            <div class="video-error-message">
                <i class="fas fa-shopping-bag" style="font-size: 48px; margin-bottom: 16px; color: #9ca3af;"></i>
                <h3>暂无相关配件商品</h3>
                <p>当前筛选条件下没有找到匹配的配件商品。</p>
                <p>请尝试选择其他型号或故障部位。</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('a');
        productCard.className = 'product-card';
        productCard.href = '#';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${escapeHtml(product.title)}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x120/f3f4f6/6b7280?text=Product+Image'">
            </div>
            <div class="product-info">
                <h4 class="product-title">${escapeHtml(product.title)}</h4>
                <div class="product-price">${product.price}</div>
                <div class="product-platform">平台：${product.platform}</div>
                <div class="product-models">适用：${product.models.join(', ')}</div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// 获取视频描述
function getVideoDescription(video) {
    const descriptions = {
        "屏幕": "本视频详细讲解如何安全拆卸和安装屏幕总成，包括注意事项和常见问题解决方法。",
        "电池": "完整的电池更换教程，包含安全注意事项、工具使用方法和测试步骤。",
        "摄像头": "摄像头模块更换指南，包含对焦测试和清洁步骤。",
        "充电口": "充电端口维修教程，解决充电问题和数据连接故障。",
        "扬声器": "扬声器更换指南，包含音频测试和质量检查。",
        "麦克风": "麦克风模块更换，解决通话和录音问题。"
    };
    
    return descriptions[video.part] || "专业的维修教程，详细讲解每个步骤和注意事项。";
}

// 更新页面
function updatePage() {
    // 更新面包屑
    const breadcrumb = document.getElementById('breadcrumb');
    if (breadcrumb) {
        breadcrumb.innerHTML = `
            <span onclick="resetSelection()" style="cursor: pointer;">首页</span> > 
            <span>Apple</span> > 
            <span>${currentModel}</span> > 
            <span>${currentPart}</span>
        `;
    }
    
    // 更新页面标题
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) {
        pageTitle.textContent = `${currentModel} ${currentPart}维修指南`;
    }
    
    // 渲染视频和商品
    renderVideos();
    renderProducts();
    
    // 更新热门指南模块显示
    updateHomepageVisibility();
}

// 重置选择
function reset
