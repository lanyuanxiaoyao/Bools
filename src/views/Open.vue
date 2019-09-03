<script>
export default {
  name: 'open',
  mounted() {
    var operation = this.params.payload.operation
    operation[this.params.operate].open(this.params.addition)
  },
  computed: {
    params() {
      return this.$route.params
    }
  }
}
</script>