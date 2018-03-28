 // 路径配置
 require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
 // 使用
 require(
    [
        'echarts',
        'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('two')); 
        option = {
            title: {
                text: '故障率',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#0482BE',
                    fontSize: 30
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params, ticket, callback) {
                    var res = params.seriesName;
                    res += '<br/>' + params.name + ' : ' + params.percent + '%';
                    return res;
                }
            },
            legend: {
                orient: 'vertical',
                right: '0%',
                bottom: '0%',
                data: ['烟感','用电', '用水', '检测'],
                itemWidth: 20,
                itemHeight: 10
            },
            series: [{
                name: '报警分类',
                type: 'pie',
                selectedMode: 'single',
                radius: ['45%', '60%'],
                color: [
                        '#00A0E9',
                        '#00508E',
                        '#00F8FD',
                        '#EB0D60',
                        '#EBC033',
                        
                    ],label: {
                        normal: {
                            formatter:'{c}',
                            fontSize: 26 ,
                            color:'#0482BE'
                        }
                    },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 11,
                    name: '烟感'
                }, {
                    value: 22,
                    name: '用电'
                }, {
                    value: 33,
                    name: '用水'
                }, {
                    value: 22,
                    name: '检测'
                }]
            }]
        };
        // 为echarts对象加载数据 
        myChart.setOption(option); 
    }
);
 // 路径配置
 require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
 // 使用
 require(
    [
        'echarts',
        'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('one')); 
        option = {
            title: {
                text: '报警分类',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#0482BE',
                    fontSize: 30
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params, ticket, callback) {
                    var res = params.seriesName;
                    res += '<br/>' + params.name + ' : ' + params.percent + '%';
                    return res;
                }
            },
            legend: {
                orient: 'vertical',
                right: '0%',
                bottom: '0%',
                data: ['烟感','用电', '用水', '检测'],
                itemWidth: 20,
                itemHeight: 10
            },
            series: [{
                name: '报警分类',
                type: 'pie',
                selectedMode: 'single',
                radius: ['45%', '60%'],
                color: [
                        '#00A0E9',
                        '#00508E',
                        '#00F8FD',
                        '#EB0D60',
                        '#EBC033',
                        
                    ],label: {
                        normal: {
                            formatter:'{c}',
                            fontSize: 26 ,
                            color:'#0482BE'
                        }
                    },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 11,
                    name: '烟感'
                }, {
                    value: 22,
                    name: '用电'
                }, {
                    value: 33,
                    name: '用水'
                }, {
                    value: 22,
                    name: '检测'
                }]
            }]
        };
        // 为echarts对象加载数据 
        myChart.setOption(option); 
    }
);