<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

        <h1>Routing</h1>
        <hr>
        <router-view name="top"></router-view>
        <transition name="slide"
                    mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components: {
    Header
  }
}
</script>

<style>
.slide-leave-active {
  transition: opacity .3s ease;
  opacity: 0;
  animation: slide-out .3s ease-out;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active {
  animation: slide-in .3s ease-out;
}

@keyframes slide-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>