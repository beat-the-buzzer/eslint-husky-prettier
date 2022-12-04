<template>
  <el-dialog title="测试" :visible.sync="dialogVisible" :close-on-click-modal="false">
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">保 存</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    save() {
      console.log('保存')
    },
    close() {
      console.log('取消')
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog-footer {
  text-align: center;
}
</style>
