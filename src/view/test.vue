<template>
  <div>
    <div class="main-box">
      <div class="g-of-h">
        <div class="g-f-l box-l animated"></div>
        <div class="g-f-l box-r animated"></div>
      </div>
      <div class="box-b animated"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style scoped>
  .g-of-h{
    overflow: hidden;
  }
  .g-f-l{
    float: left;
  }
  .g-f-r{
    float: right;
  }
  .main-box{
    width: 1200px;
    margin: 0 auto;
  }
  .box-l{
    width: 200px;
    height: 200px;
    background-color: #8a6de9;
    animation-name: fadeLeftIn;
    -webkit-animation-name: fadeLeftIn;
  }
  .box-r{
    margin-left: 20px;
    width: 500px;
    height: 200px;
    background-color: #FDB9B9;
    animation-name: fadeRightIn;
    -webkit-animation-name: fadeRightIn;
  }
  .box-b{
    width: 720px;
    height: 200px;
    animation-name: fadeBottomIn;
    -webkit-animation-name: fadeBottomIn;
    background-color: #888888;
    margin-top: 20px;
  }
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @keyframes fadeLeftIn {
    0%{
      opacity: 0;
      transform: translate3d(-100%,0,0);
    }
    100%{
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeRightIn {
    0%{
      opacity: 0;
      transform: translate3d(100%,0,0);
    }
    100%{
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeBottomIn {
    0%{
      opacity: 0;
      transform: translate3d(0,100%,0);
      -webkit-transform: translate3d(0,100%,0);
    }
    100%{
      opacity: 1;
      transform: none;
      -webkit-transform: none;
    }
  }
</style>
