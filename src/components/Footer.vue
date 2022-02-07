<template>
  <footer class="styles.footerContainer">
    <small class="styles.footerText">&copy; Andrey Nefedyev 2020</small>

    <small class="styles.footerText">
      <a class="styles.footerLink" href="https://github.com/andreynef/resume_Nefedyev_Andrey" target="_blank"
         rel="noopener noreferrer">Код приложения-резюме на Github</a>
    </small>
  </footer>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .footerContainer {
    margin-top: 3em;
    color: black;
    text-align: center;
  }

  .footerText:first-child {
    margin-right: 20px;
  }

  .footerLink:link {
    color: black;
  }

  .footerLink:link {
    color: black;
  }

  .footerLink:visited {
    color: black;
  }

  @media (max-width: 480px) {
    .footerText {
      display: block;
    }

    .footerText:first-child {
      margin-right: 0;
      margin-bottom: 5px;
    }
  }

</style>

