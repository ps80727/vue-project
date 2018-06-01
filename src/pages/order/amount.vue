<template>
  <div class="amount">
      <div class="left">
        <h2>购买数量</h2>
        <p>最多5张</p>
      </div>
      <div class="right">
          <button class="btn1 iconfont" @click.prevent="handleReduce">&#xe72a;</button>
          <h3>{{num}}</h3>
          <button class="btn2 iconfont" @click.prevent="handleAdd">&#xe61a;</button>
      </div>   
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'OrderAmount',
  computed: {
    ...mapState(['num'])
  },
  methods: {
    ...mapMutations(['changeRuduce', 'changeAdd']),
    handleReduce: function () {
      this.changeRuduce()
    },
    handleAdd: function () {
      this.changeAdd()
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stytus/varibles.styl";
  .amount
    display: flex
    height: 2.2rem
    padding: .8rem .3rem 0 .3rem
    margin-top: .3rem
    background: #fff
    .left
      display: flex
      flex: 1
      height: .9rem
      line-height: .9rem
      bckground: blue
      h2
        font-size: .4rem   
        padding-right: .35rem
      p
        font-size: .34rem
        color: #ccc
    .right
      display: flex
      height: .9rem
      width: 2.82rem
      padding: .03rem
      border: 1px solid #ccc
      .btn1
        width: .84rem
        height: .84rem
        line-height: .84rem
        background: #ccc
        text-align: center
        font-weight 700
      h3
        width: 1.14rem
        text-align: center
        line-height: .84rem
        font-size : .27rem
        font-weight 700
      .btn2
        width: .84rem
        height: .84rem
        background: $bgColor
        line-height: .84rem
        text-align: center
        font-weight 700
        color: #fff
</style>