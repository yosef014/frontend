<template>
  <svg
    class="microphone-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
  >
    <path
      data-name="layer2"
      d="M41 32a10 10 0 0 1-10 10 10 10 0 0 1-10-10V12A10 10 0 0 1 31 2a10 10 0 0 1 10 10z"
      fill="transparent"
      stroke="#202020"
      stroke-miterlimit="5"
      stroke-width="4"
    ></path>
    <path
      data-name="layer1"
      d="M49 22v10a18 18 0 0 1-18 18 18 18 0 0 1-18-18V22m18 28v12m-10 0h20"
      fill="transparent"
      stroke="#202020"
      stroke-miterlimit="5"
      stroke-width="4"
    ></path>
  </svg>
</template>

<script>
export default {};
</script>

<style>
.microphone-icon {
  height: 16px;
  width: 16px;
  position: absolute;
  top: 35%;
  right: 120px;
  z-index: 5;
}
</style>
