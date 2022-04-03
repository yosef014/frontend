<template>
  <div class="footer-container">
    <footer class="footer">
      <div class="worker-logo">
        <WorkerLogo />
        <div class="sworker-ltd">&copy; International Ltd.2022</div>
      </div>

      <ul class="social-media-icons">
        <li><a class="fa fa-twitter"></a></li>
        <li><a class="fa fa-facebook"></a></li>
        <li><a class="fa fa-linkedin"></a></li>
        <li><a class="fa fa-pinterest"></a></li>
        <li><a class="fa fa-instagram"></a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
import WorkerLogo from "../svgs/fiiverr-logo.vue";
export default {
  components: {
    WorkerLogo,
  },
};
</script>

<style></style>
