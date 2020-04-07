<template>
  <div>
    <ul class="nav nav-sidebar">

      <!-- <li><a href="#">Reports</a></li>
      <li><a href="#">Analytics</a></li>
      <li><a href="#">Export</a></li> -->
      <router-link to="/heroes"
                   tag="li"><a href="">英雄列表</a></router-link>
      <router-link to="/bar"
                   tag="li"><a href="">武器列表</a></router-link>
      <router-link to="/foo"
                   tag="li"><a href="">装备列表</a></router-link>
    </ul>
  </div>
</template>