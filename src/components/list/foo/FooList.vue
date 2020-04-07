<template>
  <div>
    <h2 class="sub-header">装备列表</h2>
    <a class="btn btn-success"
       href="add.html">增加</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>编号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(h,i) in list"
              :key="i">
            <td>{{h.id}}</td>
            <td>{{h.name}}</td>
            <td>{{h.gender}}</td>
            <td>{{h.age}}</td>
            <td>
              <a href="edit.html">编辑</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('你确定要删除吗')">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
// import http from 'axios'
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getList () {
      this.$http.get('heros')
        .then(res => {
          const { status, data } = res
          if (status === 200) {
            this.list = data
          }
        })
    }
  },
  mounted () {
    this.getList()
  }
}
</script>