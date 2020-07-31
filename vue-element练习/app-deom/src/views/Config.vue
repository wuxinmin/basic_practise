<template>
  <div class="about">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        // {
        //   date: "2016-05-02",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄"
        // },
        // {
        //   date: "2016-05-04",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1517 弄"
        // },
        // {
        //   date: "2016-05-01",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1519 弄"
        // },
        // {
        //   date: "2016-05-03",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1516 弄"
        // }
      ]
    };
  },
  methods: {
    // 发送请求
    getData() {
      axios.get('http://127.0.0.1:3333/tablist').then(res=>{  //res就是后端返回的数据
        console.log(res);
        //最好判断一下，以免背锅
        if(res.data.code == "200"){
          this.tableData = res.data.result;
        }
        
      },error=>{

      })
    },
    mounted(){  //生命周期的钩子函数，  表示挂载完成
      this.getData();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>