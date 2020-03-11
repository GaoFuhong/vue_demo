<template>
  <div class="todo-footer">
    <label>
      <slot name="checkAll"></slot>
    </label>
    <span>
      <slot name="count"></slot>
    </span>
    <slot name="clear"></slot>
  </div>
</template>

<script>
export default {}
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
</style>
