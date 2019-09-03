<script>
export default {
  name: 'test',
  mounted() {
    var operation = this.params.payload.operation
    operation[this.params.operate].test()
  },
  computed: {
    params() {
      return this.$route.params
    }
  }
}
</script>