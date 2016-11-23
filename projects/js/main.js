function renderData(data) {
    var str = "";
    for (var index in data) {
        if (!data[index].fork) { // 不是fork的仓库
            var language = data[index].language || "project",
                url = data[index].homepage || data[index]['svn_url'], // 无演示地址则使用仓库地址
                name = data[index].name,
                desc = data[index].description || "暂无描述"; //如无描述,则显示暂无描述

            str += '<li class="repo grid ' + (language.toString()).toLowerCase() + '">'
                + '<a href="' + url + '" target="_blank">'
                + '<h2>' + name + '</h2>'
                + '<p>' + desc + '</p>'
                + '</a>'
                + '</li>';
        }
    }
    $('.js-list').html(str);
}

function init() {
    // 此方法支持跨域调用
    $.getJSON('https://api.github.com/users/52admln/repos?access_token=da37078ed81a57f38be8c74f837cbe052989a195', function (source,status) {
        // console.log(source.data[0].id);
        console.log(status);
        if(status === 'success'){
            $(".loader").addClass("hidden"); // 隐藏loader
            $(".wrapper").removeClass("hidden").addClass("animated"); // 页面载入动画
            renderData(source);
        }
    });
}
init();
