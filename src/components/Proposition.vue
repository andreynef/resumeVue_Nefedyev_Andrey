<template>
  <div>

  </div>
</template>

<script>
  export default {
    components: { },
    data:()=>({
    }),
    methods: {
    },
    computed:{
    },
    beforeDestroy () {
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    /*align-items: center;*/
  }

  .headerInner {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left:2em;
  }


  @media (max-width: 750px) {
    .header {
      flex-direction: column-reverse;
    }
    .headerInner {
      margin-left:unset;
    }
  }


</style>

