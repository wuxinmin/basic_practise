<template>
  <div>
    <h1>这是首页面</h1>
    <div class="home">
      <el-row :gutter="20">
        <!-- 后面两个其实也不用写 -->
        <el-col :xs="24" :sm="12" :md="6" v-for="(src,i) in srcs" :key="i">
          <el-image :src="src"></el-image>
        </el-col>
        <el-col :xs="24">
          <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
          <div id="chart" style="width: 100%;height:300px;"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// 只在此页面加载
import echarts from "echarts";
export default {
  data() {
    return {
      srcs: [
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1854660699,1354488368&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=464710591,741924175&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1854660699,1354488368&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=464710591,741924175&fm=26&gp=0.jpg"
        
      ]
    };
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      // 基于准备好的dom，初始化echarts实例

        //全局引入操作
        //var myChart = this.$echarts.init(document.getElementById('chart'));
        
        //只在此页面引入操作
        var myChart = echarts.init(document.getElementById('chart'));
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
}
};
</script>

<style lang="scss" scoped>
</style>