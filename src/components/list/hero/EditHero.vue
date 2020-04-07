<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <app-header></app-header>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <app-slider></app-slider>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h2 class="sub-header">编辑英雄</h2>
          <form>
            <div class="form-group">
              <label for="name">英雄姓名</label>
              <input type="text"
                     class="form-control"
                     id="name"
                     v-model="formData.name"
                     placeholder="请输入英雄姓名">
            </div>
            <div class="form-group">
              <label for="gender">英雄性别</label>
              <input type="text"
                     class="form-control"
                     id="gender"
                     v-model="formData.gender"
                     placeholder="请输入英雄性别">
            </div>
            <div class="form-group">
              <label for="age">英雄年龄</label>
              <input type="text"
                     class="form-control"
                     id="age"
                     v-model="formData.age"
                     placeholder="请输入英雄年龄">
            </div>
            <button type="submit"
                    class="btn btn-success"
                    @click.prevent="handleEdit()">提交</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appHeader from '../../common/AppHeader'
import appSlider from '../../common/AppSlider'
// import http from 'axios'
export default {
  data () {
    return {
      formData: {}
    }
  },
  components: {
    appHeader,
    appSlider
  },
  methods: {
    handleEdit () {
      this.$http.put('heros/' + this.$route.params.id, this.formData)
        .then(res => {
          var { status, data } = res
          if (status === 200) {
            this.$router.push({ name: 'heroes' })
          }
        })
    },
    getHeroById () {
      this.$http.get('heros/' + this.$route.params.id)
        .then(res => {
          var { status, data } = res
          if (status === 200) {
            this.formData = data
          }
        })
    }
  },
  mounted () {
    this.getHeroById()
  },
}
</script>