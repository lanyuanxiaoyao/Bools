<script>
export default {
  name: 'remove',
  mounted() {
    var operation = this.params.payload.operation
    operation[this.params.operate].remove(this.params.addition)
  },
  computed: {
    params() {
      return this.$route.params
    }
  }
}
</script>