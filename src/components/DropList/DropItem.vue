<template>
  <li v-for="(item,index) in $store.state.droplist" :key="index" :class="{'mainItemContainer':isLevelOne(item.title), 'subItemContainer':!isLevelOne(item.title)}">
      <div :class="{'mainItemTitleWrapper': isLevelOne(item.title),'subItemTitleWrapper': !isLevelOne(item.title)}"
           @click="$store.dispatch('onTitleClickHandler',item.id)"
      >
      <h2 class="itemTitle" style="font-size:23px; font-weight:600">{item.title} </h2>
      <div class="sitePics" v-if="item.title==='Портфолио'">
        <img src="/img/reddit.png" alt="pic"/>
        <img src="/img/html.png" alt="pic"/>
        <img src="/img/affinage.png" alt="pic"/>
        <img src="/img/news.png" alt="pic"/>
        <img src="/img/arc.png" alt="pic"/>
        <img src="/img/arc2.png" alt="pic"/>
        <img src="/img/kon.png" alt="pic"/>
        <img src="/img/unsplash.png" alt="pic"/>
      </div>
<!--      <a-->
<!--          class="link"-->
<!--          :href="item.finalWorkGithubUrl"-->
<!--          target='_blank'-->
<!--          rel="noopener noreferrer"-->
<!--          v-if="item.done && item.finalWorkGithubUrl"-->
<!--      >-->
<!--        Итоговая работа-->
<!--      </a>-->
<!--      <a-->
<!--              class="link"-->
<!--              :href="item.githubLink"-->
<!--              target='_blank' rel="noopener noreferrer">-->
<!--              v-if="item.done && item.githubLink"-->
<!--        Домашняя работа-->
<!--      </a>-->
<!--        <div class="iconArrowDown" v-if="item.done"/>-->
<!--        <div class="iconPause" v-if="item.inProcess"/>-->
<!--        <div class="iconGithub" v-if="item.githubLink"/>-->
<!--        <div class="iconArrowDown" v-if="item.open"/>-->
<!--        <div class="iconArrowUp" v-else/>-->
      </div>
<!--  <ul class="subDroplistContainer" v-if="item.open">-->
<!--    {item.body.map((item, index)=>(-->
<!--    <DropItems key={index} item={item}/>-->
<!--      ))}-->
<!--  </ul>-->
    </li>
<!--    <li class="plainItemContainer">-->
<!--      <div class="plainItemTitleWrapper">-->
<!--        <h3 class="plainItemTitle" v-if="item.title">-->
<!--          <a :href="item.websiteLink" target='_blank' rel='noopener noreferrer' class="link" v-if="item.websiteLink">{{item.title}} </a>-->
<!--          <span v-else>{{item.title}}</span>-->
<!--        </h3>-->
<!--        <a class="iconGithub" :href="item.githubLink" target="_blank" rel="noopener noreferrer"/>-->
<!--        <a class="iconWebsite" :href="item.websiteLink" target="_blank" rel="noopener noreferrer"/>-->
<!--        <div class="iconArrowDown" v-if="item.done"/>-->
<!--      </div>-->
<!--      <p class="plainItemText" v-if="item.position">Должность: {item.position}</p>-->
<!--      <p class="plainItemText" v-if="item.yearStart">Год начала: {item.yearStart}</p>-->
<!--      <p class="plainItemText" v-if="item.yearEnd">Год окончания: {item.yearEnd}</p>-->
<!--      <p class="plainItemText" v-if="item.duties">Обязанности: {item.duties}</p>-->
<!--      <p class="plainItemText" v-if="item.grade">Академическая степень: {item.grade}</p>-->
<!--      <p class="plainItemText" v-if="item.faculty">Факультет: {item.faculty}</p>-->
<!--      <p class="plainItemText" v-if="item.specialization">Специализация: {item.specialization}</p>-->
<!--      <p class="plainItemText" v-if="item.about">{item.about}</p>-->
<!--      <p class="plainItemText" v-if="item.sport">Спорт: {item.sport}</p>-->
<!--      <p class="plainItemText" v-if="item.relax">Отдых: {item.relax}</p>-->
<!--      <p class="plainItemText" v-if="item.freeTime">Свободное время: {item.freeTime}</p>-->
<!--      <div v-if="item.courses">-->
<!--        <p class="plainItemText" v-for="itemInner in item.courses" :key="itemInner" >{itemInner}</p>-->
<!--      </div>-->
<!--    </li>-->
</template>

<script>
  export default {
    components: { },
    data:()=>({
    }),
    methods: {
      isLevelOne(titleStr) {
        const filteredItem = this.levelOneArr.filter(itemTitle => titleStr === itemTitle);
        return filteredItem[0] === titleStr;
      }
    },
    computed:{
      // cDropList(){
      //
      // },
      levelOneArr(){
        return this.$store.state.droplist.map(item=>item.title);
      }
    },
    beforeDestroy () {
    }

  }
</script>

<style scoped>
  .mainItemContainer {
    transition: 0.5s;
    margin:5px 0 5px 0;
    background-color: #694D2F33;
    border-radius: 5px;
  }

  .mainItemTitleWrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #694D2F;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
    transition: .5s;
  }
  .sitePics {
    display: flex;
    position: absolute;
    right: 70px;
  }
  .sitePics img{
    height:40px;
    width: 60px;
    border-radius:3px;
    margin-left:1em;

  }

  .mainItemTitleWrapper:hover , .subItemTitleWrapper:hover, .link:hover {
    opacity: 0.9;
    /*transition: .3s;*/
    color:orange;
  }

  .subItemContainer {
    margin-bottom:0.5em;
    padding-left: 2em;
  }
  .subItemContainer:last-child, .plainItemContainer:last-child {
    margin-bottom:0;
  }

  .subItemTitleWrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #8C663C;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px 20px;
    transition: .2s;
  }

  .subDroplistContainer {
    padding: 0.5em 0;
  }

  .itemTitle, .plainItemTitle {
    font-size: 16px;
    width: 100%;
    font-weight: 400;
  }

  .link:visited {
    color: black;
  }

  .plainItemContainer{
    padding: 1em 2.5em 1em 2em;
    background-color: #f7f3e3;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    transition: .5s;
    margin: 0 1em 1em 1em;
  }
  .plainItemTitleWrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .plainItemText {
    color: #696969;
  }

  /*.fb {*/
  /*    background-image: url('../../../img/github.svg');*/
  /*    composes: contactsIcons;*/
  /*}*/

  /*.contactsIcons {*/
  /*    height: 32px;*/
  /*    width: 32px;*/
  /*    background-repeat: no-repeat;*/
  /*    background-position: center;*/
  /*    margin-right: 10px;*/
  /*    transition: .2s;*/
  /*    background-size: cover;*/
  /*    opacity: .3;*/
  /*}*/

  .droplistContainer {
    margin-bottom: 20px;
    position:relative;
  }
  .droplistContainer::before {
    position:absolute;
    top: -20px;
    right:0;
    content: 'Redux';
    padding-left: 5px;
    font-size: 12px;
    opacity: 0.5;
  }


  @media (max-width: 480px) {
    .mainItemTitleWrapper {
      padding: 10px;
    }

    .mainItemTitle {
      font-size: 14px;
    }
  }
  @media (max-width: 1024px) {
    .sitePics{
      display:none;
    }
  }

</style>

