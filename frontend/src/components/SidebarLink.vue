<template>
  <component :is="tag"
             @click.native="hideSidebar"
             class="nav-item"
             v-bind="$attrs"
             tag="li">
    <a class="nav-link">
      <slot>
        <i v-if="icon" :class="icon"></i>
        <p>{{name}}</p>
      </slot>
    </a>
  </component>
</template>
<script>
export default {
}
</script>
<style>
</style>
