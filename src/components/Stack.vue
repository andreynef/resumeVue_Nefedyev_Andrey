<template>
  <section class="propositionContainer">
    <p class="propositionText">
      Начинающий frontend-разработчик
      ищет организацию с которой будет расти профессионально,
      помогать расти компании и создавать удобные програмные продукты.
    </p>

    <p class="propositionText">
      В IT сфере опыта работы нет, но есть желание развиваться в сфере web-разработки,
      изучать полезные технологии и углублять уже существующие знания.
    </p>

  </section>
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
  .propositionContainer {
    margin-bottom: 2em;
  }

  .propositionText {
    text-indent: 1.5em;
    text-align: justify;
  }

  @media (max-width: 760px) {
    .propositionText {
      font-size: 12px;
    }
  }


</style>

