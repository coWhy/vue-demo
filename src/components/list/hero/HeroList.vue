<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <a class="btn btn-success"
       @click="showAddForm()">增加</a>
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
              <a @click="showEditForm(h.id)">编辑</a>
              &nbsp;&nbsp;
              <a @click="del(h.id)">删除</a>
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
    },
    del (id) {
      if (window.confirm('你确定要删除吗?')) {
        this.$http.delete('heros/' + id)
          .then(res => {
            const { status, data } = res
            if (status === 200) {
              //更新视图
              this.getList()
            }
          })
      }
    },
    showAddForm () {
      //编程式导航 js改标识
      this.$router.push({ name: 'addHero' })
    },
    showEditForm (id) {
      this.$router.push(
        {
          name: 'editHero', //路由配置
          params: { id: id }//传参
        })
    }

  },
  mounted () {
    this.getList()
  }
}
</script>