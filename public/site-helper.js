// public/site-helper.js
(function() {
  "use strict";

  // 配置数据（包含URL、关键词等）
  var config = {
    siteUrl: "https://mofficial-i-game.com.cn",
    keyword: "爱游戏",
    license: "MIT",
    version: "1.0.1"
  };

  // 提示卡片文案
  var tips = [
    "欢迎来到" + config.keyword + "，请使用最新浏览器体验。",
    "本站域名：" + config.siteUrl + "，请认准官方地址。",
    "内容仅供学习交流，不涉及商业用途。",
    "如遇加载问题，请尝试清除缓存或切换网络。"
  ];

  // 关键词徽章数据
  var badges = [
    { label: "类型", value: "H5 游戏" },
    { label: "平台", value: config.keyword },
    { label: "状态", value: "开放访问" },
    { label: "域名", value: config.siteUrl }
  ];

  // 访问说明条目
  var instructions = [
    "本页面无需登录即可浏览。",
    "所有操作均在浏览器本地完成。",
    "请勿将页面用于非法用途。",
    "如有疑问，请参考页脚说明。"
  ];

  // 创建并追加提示卡片
  function createTipCard() {
    var card = document.createElement("div");
    card.className = "site-helper-tip-card";
    card.style.cssText = "background:#f0f8ff;border:1px solid #b0d4ff;border-radius:8px;padding:12px 16px;margin:12px 0;font-size:14px;color:#333;box-shadow:0 2px 6px rgba(0,0,0,0.05);";

    var title = document.createElement("strong");
    title.textContent = "💡 提示";
    card.appendChild(title);

    var list = document.createElement("ul");
    list.style.cssText = "margin:8px 0 0 0;padding-left:20px;";
    tips.forEach(function(text) {
      var li = document.createElement("li");
      li.textContent = text;
      list.appendChild(li);
    });
    card.appendChild(list);

    var body = document.body;
    if (body) {
      body.insertBefore(card, body.firstChild);
    }
  }

  // 创建关键词徽章容器
  function createBadgeContainer() {
    var container = document.createElement("div");
    container.className = "site-helper-badges";
    container.style.cssText = "display:flex;flex-wrap:wrap;gap:8px;margin:12px 0;";

    badges.forEach(function(item) {
      var badge = document.createElement("span");
      badge.style.cssText = "background:#e0f2e0;color:#2e7d32;border:1px solid #a5d6a7;border-radius:12px;padding:4px 12px;font-size:12px;font-weight:500;";
      badge.textContent = item.label + ": " + item.value;
      container.appendChild(badge);
    });

    var body = document.body;
    if (body) {
      body.appendChild(container);
    }
  }

  // 创建访问说明区域
  function createAccessInfo() {
    var info = document.createElement("div");
    info.className = "site-helper-access-info";
    info.style.cssText = "background:#fff8e1;border:1px solid #ffe082;border-radius:8px;padding:12px 16px;margin:12px 0;font-size:13px;color:#5d4037;";

    var title = document.createElement("strong");
    title.textContent = "📋 访问说明";
    info.appendChild(title);

    var list = document.createElement("ul");
    list.style.cssText = "margin:8px 0 0 0;padding-left:20px;";
    instructions.forEach(function(text) {
      var li = document.createElement("li");
      li.textContent = text;
      list.appendChild(li);
    });
    info.appendChild(list);

    var body = document.body;
    if (body) {
      body.appendChild(info);
    }
  }

  // 检查页面是否加载完成，然后执行
  function init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function() {
        createTipCard();
        createBadgeContainer();
        createAccessInfo();
      });
    } else {
      createTipCard();
      createBadgeContainer();
      createAccessInfo();
    }
  }

  init();
})();