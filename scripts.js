// 搜索功能
function performSearch() {
    const query = document.getElementById('search-input').value;
    const selectedEngine = document.getElementById('search-engine').value;
    const searchUrl = selectedEngine.replace('%s', encodeURIComponent(query));
    window.open(searchUrl, '_blank');
}

// 加载已保存的搜索引擎
window.onload = function() {
    const engines = JSON.parse(localStorage.getItem('customEngines') || '[]');
    const selectElement = document.getElementById('search-engine');
    engines.forEach(engine => {
        const newOption = new Option(engine.name, engine.url);
        selectElement.add(newOption);
    });
};

// 添加自定义搜索引擎
document.getElementById('custom-search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const engineName = document.getElementById('engine-name').value;
    const engineUrl = document.getElementById('engine-url').value;
    const selectElement = document.getElementById('search-engine');
    const newOption = new Option(engineName, engineUrl);
    selectElement.add(newOption);

    // 保存到LocalStorage
    let engines = JSON.parse(localStorage.getItem('customEngines') || '[]');
    engines.push({ name: engineName, url: engineUrl });
    localStorage.setItem('customEngines', JSON.stringify(engines));

    // 清空表单
    document.getElementById('engine-name').value = '';
    document.getElementById('engine-url').value = '';
});

// 删除选中的搜索引擎
function removeSearchEngine() {
    const selectElement = document.getElementById('search-engine');
    const selectedIndex = selectElement.selectedIndex;
    if (selectedIndex !== -1) {
        // 禁止删除默认搜索引擎和菜单中的搜索引擎
        if (selectedIndex > 3) {
            selectElement.remove(selectedIndex);

            // 更新LocalStorage
            let engines = JSON.parse(localStorage.getItem('customEngines') || '[]');
            engines = engines.filter((_, index) => index !== selectedIndex - 4);
            localStorage.setItem('customEngines', JSON.stringify(engines));
        } else {
            alert("默认搜索引擎和菜单中的搜索引擎禁止删除");
        }
    }
}
