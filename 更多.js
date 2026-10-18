// AnonNav 一键导入引擎｜清空原有列表，无alert弹窗，右下角手动按钮
(function () {
    const box = document.createElement('div');
    box.style.cssText = 'position:fixed;right:20px;bottom:20px;background:#222;color:#fff;padding:10px 14px;border-radius:8px;z-index:99999;cursor:pointer;user-select:none;';
    box.textContent = '📥 导入全部引擎';

    box.onclick = async function () {
        // 状态变更：导入中
        box.textContent = '⏳ 正在导入...';
        box.style.background = '#444';

        if (!window.engineList || !window.Store) {
            box.textContent = '❌ 页面未就绪';
            box.style.background = '#b71c1c';
            setTimeout(() => {
                box.textContent = '📥 导入全部引擎';
                box.style.background = '#222';
            }, 2000);
            return;
        }

        const rawList = [
            // 一、搜索引擎
            { name: "百度", url: "https://www.baidu.com/s?wd=%s" },
            { name: "必应（中国版）", url: "https://cn.bing.com/search?q=%s" },
            { name: "360搜索", url: "https://www.so.com/s?q=%s" },
            { name: "搜狗搜索", url: "https://www.sogou.com/web?query=%s" },
            { name: "头条搜索", url: "https://so.toutiao.com/search?keyword=%s" },
            { name: "神马搜索", url: "https://m.sm.cn/s?q=%s" },
            { name: "中国搜索", url: "https://www.chinaso.com/search/pagesearch.htm?q=%s" },
            { name: "央视搜索", url: "https://search.cctv.com/m/search.php?type=video&qtext=%s" },

            // 二、社交平台
            { name: "微博", url: "https://s.weibo.com/weibo?q=%s" },
            { name: "知乎", url: "https://www.zhihu.com/search?q=%s" },
            { name: "豆瓣", url: "https://www.douban.com/search?q=%s" },
            { name: "小红书", url: "https://www.xiaohongshu.com/search_result?keyword=%s" },
            { name: "抖音", url: "https://www.douyin.com/search/%s" },
            { name: "快手", url: "https://www.kuaishou.com/search/video?keyword=%s" },
            { name: "微信公众号搜索", url: "https://weixin.sogou.com/weixin?query=%s" },
            { name: "QQ搜索", url: "https://search.qq.com/search/?keyword=%s" },
            { name: "脉脉", url: "https://m.maimai.cn/search/%s" },

            // 三、视频平台
            { name: "腾讯视频", url: "https://v.qq.com/x/search/?q=%s" },
            { name: "爱奇艺", url: "https://so.iqiyi.com/so/q_%s" },
            { name: "优酷", url: "https://s.youku.com/search_video/q_%s" },
            { name: "B站", url: "https://search.bilibili.com/all?keyword=%s" },
            { name: "芒果TV", url: "https://www.mgtv.com/search/?q=%s" },
            { name: "西瓜视频", url: "https://www.ixigua.com/search/?keyword=%s" },
            { name: "好看视频", url: "https://haokan.baidu.com/search?query=%s" },

            // 四、直播平台
            { name: "斗鱼", url: "https://www.douyu.com/search?kw=%s" },
            { name: "虎牙直播", url: "https://search.huya.com/cache.php?kw=%s" },
            { name: "B站直播", url: "https://live.bilibili.com/search?keyword=%s" },
            { name: "抖音直播", url: "https://live.douyin.com/search?keyword=%s" },
            { name: "快手直播", url: "https://m.kuaishou.com/search/%s" },
            { name: "淘宝直播", url: "https://live.taobao.com/search?keyword=%s" },

            // 五、电商平台
            { name: "淘宝", url: "https://s.taobao.com/search?q=%s" },
            { name: "京东", url: "https://search.jd.com/Search?keyword=%s" },
            { name: "拼多多", url: "https://mobile.yangkeduo.com/search.html?search_key=%s" },
            { name: "天猫", url: "https://list.tmall.com/search_product.htm?q=%s" },
            { name: "苏宁易购", url: "https://search.suning.com/%s/" },

            // 六、音乐平台
            { name: "QQ音乐", url: "https://y.qq.com/n/yqq/s.html?w=%s" },
            { name: "网易云音乐", url: "https://music.163.com/#/search/m/?s=%s" },
            { name: "酷狗音乐", url: "https://www.kugou.com/search/?keyword=%s" },
            { name: "咪咕音乐", url: "https://music.migu.cn/v3/search?keyword=%s" },
            { name: "千千音乐", url: "https://www.taihe.com/search?key=%s" },

            // 七、学习平台
            { name: "中国大学MOOC", url: "https://www.icourse163.org/search.htm?keywords=%s" },
            { name: "学堂在线", url: "https://www.xuetangx.com/search?keyword=%s" },
            { name: "国家中小学智慧教育平台", url: "https://www.zxx.edu.cn/search?keywords=%s" },
            { name: "学习强国", url: "https://www.xuexi.cn/lgpage/search.html?query=%s" },
            { name: "Coursera", url: "https://www.coursera.org/search?query=%s" },
            { name: "edX", url: "https://www.edx.org/search?q=%s" },
            { name: "菜鸟教程", url: "https://www.runoob.com/search.html?w=%s" },
            { name: "TED演讲", url: "https://www.ted.com/search?q=%s" },

            // 八、其他平台
            { name: "大众点评", url: "https://www.dianping.com/search/keyword?keyword=%s" },
            { name: "携程", url: "https://m.ctrip.com/webapp/you/search/%s" },
            { name: "百度知道", url: "https://zhidao.baidu.com/search?word=%s" },
            { name: "国家数字图书馆", url: "https://find.nlc.cn/search/doSearch?query=%s" },
            { name: "摄图网", url: "https://699pic.com/search.html?word=%s" },
            { name: "千图网", url: "https://www.58pic.com/search/%s.html" }
        ];

        // 【重点】清空原有全部引擎列表
        engineList.length = 0;
        // 批量加入新引擎
        rawList.forEach(item => engineList.push(item));

        // 保存到IndexedDB
        await Store.setJSON('search_engine_list', engineList);

        // 成功状态
        box.textContent = '✅导入完成';
        box.style.background = '#2e7d32';
        setTimeout(() => {
            box.textContent = '📥 导入全部引擎';
            box.style.background = '#222';
        }, 2500);
    };
    document.body.appendChild(box);
})();
