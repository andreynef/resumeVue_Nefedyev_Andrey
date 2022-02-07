import Vue from "vue";
import Vuex from "vuex";
import generateRandomId from '../helpers/generateRandomId';
import fbAuth from './fbAuth';
import info from './info';
import coinGecko from './coinGecko';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    fbAuth,
    info,
    coinGecko,
  },
  state: {
    // status:{
    //   isAK:false,
    //   isLoading:false,
    //   isPopupOpen:false,
    //   isPopupOpenFB:false,
    // },
    currentInfo:'infoMain',
    idA:process.env.VUE_APP_FIREBASE_ANDREY_ID,
    idK:process.env.VUE_APP_FIREBASE_KONSTANTIN_ID,
    isAK:false,
    infoMain:null,
    infoAK:null,
    userId:null,
    // refreshGeckoInterval:120000,
    // refreshGeckoGlobalInterval:8000000,
    // currentHypTabIndex:0,
    fonMainDefaultUrl:'url(https://catherineasquithgallery.com/uploads/posts/2021-02/1613234884_97-p-fon-korichnevo-sinii-148.jpg)',
    // fonEmptyPermanentUrl:'url(https://catherineasquithgallery.com/uploads/posts/2021-02/1613234884_97-p-fon-korichnevo-sinii-148.jpg)',
    updateDate:null,
    allCoins:[],
    myGeckoList:[],
    myGeckoListBtc:[],
    global:null,
    exchangeList:['Binance','Ascendex','Coinbase', 'Robinhood','Metamask','Bkex','Crypto','Ftx','Kucoin','Bithumb','Gate','Hitbtc','Huobi'],
    popupText:'',
    popupTextFB:'',
    isPopupOpen:false,
    isPopupOpenFB:false,
    isLoading:false,
    isNoteItemOpen:false,
    isLoadingTrade:false,
    isLoadingPotential:false,
    error:null,
    reservesArr:[],
    reserveItem:null,
    scrollPosition:'',
    temporaryNewTradeListForReserve:[],
    refreshedReserveTradeList:[],
    reserveFonUrl:null
  },
  getters:{
    infoMain:state=>state.infoMain,
    infoAK:state=>state.infoAK,
    userId:state=>state.userId,
    isAK:state=>state.isAK,
  },
  mutations:{
    setInfo(state, { data,nameStr }){//установить изначальное состояние. Важно! Иначе ошибки с пустыми полями
      state[nameStr] = {
        tradeList:data&&data.tradeList?data.tradeList:[],
        trashList:data&&data.trashList?data.trashList:[],
        hypotheticalLists:data&&data.hypotheticalLists?data.hypotheticalLists:[],
        lastActivityList:data&&data.lastActivityList?data.lastActivityList:[],
        potentialList:data&&data.potentialList?data.potentialList:[],
        alarmAltsList:data&&data.alarmAltsList?data.alarmAltsList:[],
        alarmEventsList: data&&data.alarmEventsList?data.alarmEventsList:[],
        historyList:data&&data.historyList?data.historyList:[],
        notes:data&&data.notes?data.notes:[],
        cosmo:data&&data.cosmo?data.cosmo:[],
        cosmoDiaryList:data&&data.cosmoDiaryList?data.cosmoDiaryList:[],
        service:{
          refreshCoinsInterval: data&&data.service?data.service.refreshCoinsInterval:120000,
          refreshGlobalInterval: data&&data.service?data.service.refreshGlobalInterval:8000000,
          historyDifferenceToUpdate: data&&data.service?data.service.historyDifferenceToUpdate:500,
          fonUrl: data&&data.service?data.service.fonUrl:state.fonMainDefaultUrl,
        },
        weightList:data&&data.weightList?data.weightList:[],
        fundList:data&&data.fundList?data.fundList:[],
        fundManualTotal:data&&data.fundManualTotal?data.fundManualTotal:0,
        snapshotDatesList:data&&data.snapshotDatesList?data.snapshotDatesList:[],
      }
    },
    setSnapshotInfo(state, { info }){
      state.snapshotInfo = info
    },
    // setInfoMainCosmo(state, info){
    //   state.infoMain.cosmo = info.cosmo
    // },
    setStateLevel1(state, { data, nameLevel1 }){
      state[nameLevel1] = data
    },
    setStateLevel2(state, { data, nameLevel1, nameLevel2 }){
      state[nameLevel1][nameLevel2] = data
    },
    setUserId(state,id){
      state.userId = id
    },
    setCurrentInfo(state,infoName){
      state.currentInfo = infoName
    },
    setReservesArr(state, { reservesArr }){
      console.log('setting reserve',reservesArr )
      state.reservesArr = reservesArr||[]
    },
    setReserveFonUrl(state, { rUrl }){
      console.log('setting reserve',rUrl )
      state.reserveFonUrl = rUrl
    },
    // setParticularList(state, { listName, data }){
    //   // console.log('setting setParticularList',data )
    //   state[state.currentInfo][listName] = data||[]
    // },
    switchInfo(state){
      state.isAK = !state.isAK
      state.currentInfo = state.isAK?'infoAK':'infoMain'
    },
    // setHypotheticalListName(state, { name }){
    //   state.hypotheticalListName = name
    // },
    // setList(state, { listName, list ,info}){
    //   state[info][listName] = list
    // },
    clearInfoAfterLogout(state){
      state.userId = null
      state.isAK = false
      state.currentHypTabIndex = 0
      state.reservesArr = []
    },
    setService(state, {name,value}){
      state[state.currentInfo].service[name] = value
      this.commit('activatePopupFB',{text:'fon successfully set'});
      this.dispatch('updateFB',{name:'service',info:state.currentInfo});
    },
    setRare(state, {list,listName}){
      state[state.currentInfo][listName]= list;//переделываю у себя
      console.log(state.currentInfo,listName, list)
      this.dispatch('updateFB',{name:listName,info:state.currentInfo});
      this.commit('activatePopup', { text:'data set'});
    },
    // clearError(state){
    //   state.error=null
    // },
    setCurrentHypTabIndex(state, { index }){
      state.currentHypTabIndex = index
    },

    addTrade(state, payload){//добавление трейда в уже сущ монету. Создание новой перемещено в экшен.
      const btcPrice = this.state.myGeckoList.find(item=>item.symbol==='btc').current_price
      const coinInMyTradeList = state.infoMain.tradeList.find(item => item.coin === payload.coin);
      if(payload.amount===0){
        alert('Продажа 0 шт. Игнор.')
        return
      }
      if(payload.amount*(-1)>coinInMyTradeList.totalAmount){
        alert('Продажа больше чем имеется. Игнор.')
        return
      }
      // console.log('payload.amount:',payload.amount,'coinInMyTradeList.totalAmount:',coinInMyTradeList.totalAmount )
      if(payload.amount*(-1)===coinInMyTradeList.totalAmount){
        alert('Продажа под 0. Список обнулен. Урожай добавлен в "fixedProfit"')
        // console.log('in <0:',coinInMyTradeList)
        const profitLoss = payload.amount * (-1) * (payload.inBtc?payload.price*btcPrice:payload.price) - coinInMyTradeList.totalAmount * coinInMyTradeList.averagePrice;
        if(!coinInMyTradeList.fixedProfitArr){
          coinInMyTradeList.fixedProfitArr = [profitLoss]//создаем начальную запись
        }else
          coinInMyTradeList.fixedProfitArr.push(profitLoss)//добавляем нов запись
          coinInMyTradeList.trades = [];
          coinInMyTradeList.fixedProfit = coinInMyTradeList.fixedProfit + profitLoss;
          coinInMyTradeList.totalAmount = 0;//обнуляем тк при дальнейшей калькуляции при пустом trades идет игнор.
          coinInMyTradeList.averagePrice = 0;//обнуляем
          coinInMyTradeList.invested = 0;//обнуляем
          coinInMyTradeList.xs = 0;//обнуляем
          coinInMyTradeList.valueNow = 0;//обнуляем
          coinInMyTradeList.profit = 0;//обнуляем
      }else{
        const tradeItem = {
          amount:payload.amount,
          price:payload.inBtc?payload.price*btcPrice:payload.price,
          comment:payload.comment,
          id:payload.id,
          date:payload.date,
        }
        if(!coinInMyTradeList.trades){
          console.log('in no trades',[tradeItem])
          coinInMyTradeList.trades = [tradeItem]//создаем начальную запись
          // console.log('state tradelist',state.infoMain.tradeList)
        }else {
          coinInMyTradeList.trades.push(tradeItem)//добавляем нов запись
          console.log('in yes trades')
        }
      }
      //добавка трейда в юсдт
      const usdtTrade = {
        amount:payload.amount * (payload.inBtc?payload.price*btcPrice:payload.price) *(-1),
        price:1,//1долл за 1 долл
        comment:'trade: '+payload.coin.toUpperCase(),
        id:generateRandomId(),
        date:payload.date,
      }
      const btcTrade = {
        amount:payload.amount * (payload.inBtc?payload.price*btcPrice:payload.price) *(-1),
        price:payload.price,
        comment:'trade: '+payload.coin.toUpperCase(),
        id:generateRandomId(),
        date:payload.date,
      }
      if(payload.inBtc){
        console.log('btcTrade',btcTrade)
        let newBtcObj = state.infoMain.tradeList.find(item=>item.coin==='btc')
        newBtcObj = {...newBtcObj, trades : newBtcObj.trades.push(btcTrade) }
        this.commit('calculate',{coin:'btc'});
      }else{
        console.log('usdtTrade',usdtTrade)
        let newUsdtObj = state.infoMain.tradeList.find(item=>item.coin==='usdt')
        newUsdtObj = {...newUsdtObj, trades : newUsdtObj.trades.push(usdtTrade) }
        this.commit('calculate',{coin:'usdt'});
      }
      //добавка трейда в las actions
      state.infoMain.lastActivityList.unshift(//добавляем activity запись в начало
        {
          amount:payload.amount,
          id:generateRandomId(),
          date:payload.date,
          comment:payload.comment,
          coin:payload.coin,
          price:payload.inBtc?payload.price*btcPrice:payload.price,
          currentPrice:coinInMyTradeList.currentPrice,
          coinUrl:coinInMyTradeList.coinUrl,
          name:coinInMyTradeList.name,
        }
      )
      this.commit('calculate',{coin:payload.coin});
      this.dispatch('updateFB',{name:'tradeList',info:state.currentInfo});
      this.dispatch('updateFB',{name:'lastActivityList',info:state.currentInfo});
      this.commit('activatePopup', { text:'trade added'});
    },
    addAlarm(state, {item,info='infoMain',listName}){
      if(listName==='alarmEventsList'){
        state[info][listName].push(
          {
            date:item.date,//расписал чтоб было смотреть здесь а не в комп
            comment:item.comment,
            id:item.id,
          }
        )
      }else{//в ост случаях это альты
        const coinInMyTradeList = state[info].tradeList.find(titem => titem.coin === item.coin);
        console.log('coinInMyTradeList',coinInMyTradeList,item.coin)
        const coinInMyPotentialList = state[info].potentialList.find(pitem => pitem.coin === item.coin);
        if(!coinInMyTradeList && !coinInMyPotentialList){
          alert('Нет монеты в трейд и потен листах. Игнор')
          return
        }
        if(item.amount===0){
          alert('Продажа/покупка 0 шт. Игнор.')
          return
        }
        const currentPrice = coinInMyTradeList?coinInMyTradeList.currentPrice:coinInMyPotentialList.currentPrice;
        const coinUrl = coinInMyTradeList?coinInMyTradeList.coinUrl:coinInMyPotentialList.coinUrl;
        const name = coinInMyTradeList?coinInMyTradeList.name:coinInMyPotentialList.name;

        state[info][listName].push(
          {
            amount:item.amount,//расписал чтоб было смотреть здесь а не в комп
            desiredPrice:item.desiredPrice,
            id:item.id,
            date:item.date,
            comment:item.comment,
            coin:item.coin,
            currentPrice,
            coinUrl,
            name,
          }
        )
      }
      this.dispatch('updateFB',{name:listName,info:state.isAK?'infoAK':'infoMain'});
      this.commit('activatePopup', { text:'alarm set'});
    },

    addNotesTab(state, { item,listName }){
      state.infoMain[listName].push(item)//сразу пуш тк проверка на несущ обьект уже не нуж тк инициир в нач стейте
      this.dispatch('updateFB',{name:listName,info:state.isAK?'infoAK':'infoMain'});

    },
    addItemToList(state, {item,listName}){
      const info = state.isAK?'infoAK':'infoMain'
      state[info][listName].push(item)//сразу пуш тк проверка на несущ обьект уже не нуж тк инициир в нач стейте
      this.commit('activatePopup', { text:'done'});
      this.dispatch('updateFB',{name:listName,info});
    },
    // addItemToHyp(state, {item}){
    //     const tabObj = this.state[this.state.currentInfo].hypotheticalLists.find(i=>i.id===item.hypListId)
    //     console.log('tabObj',tabObj)
    //     if(!tabObj.hypTradeList){
    //       tabObj.hypTradeList = [item]
    //     }else tabObj.hypTradeList.push(item)
    //     console.log('tabObj',tabObj)
    //   this.commit('updateListWithMyGecko', {listName:'hypotheticalLists', info:state.currentInfo})
    //   // this.dispatch('updateFB',{name:'hypotheticalLists',info:state.currentInfo});
    // },
    // deleteHypTab(state, {id,listName}){
    //   state[state.currentInfo][listName] = state[state.currentInfo][listName].filter(item=>item.id!==id)
    //   this.commit('activatePopup', { text:'done'});
    //   this.dispatch('updateFB',{name:listName,info:state.currentInfo});
    // },
    deleteReserve(state, {id}){
      state.reservesArr = state.reservesArr.filter(item=>item.id!==id)
    },
    addNotesItem(state, {itemObj, tab, listName}){
      const tabObj = state.infoMain[listName].find(item=>item.title === tab)
      if(!tabObj.items){
        tabObj.items = [itemObj]
      }else tabObj.items.push(itemObj)

      this.dispatch('updateFB',{name:listName,info:state.isAK?'infoAK':'infoMain'});
      },
    deleteNotesItem(state, {itemName,tab,listName}){
      const tabObj = state.infoMain[listName].find(item=>item.title === tab)
      tabObj.items = tabObj.items.filter(item=>item.name!==itemName)
      this.dispatch('updateFB',{name:listName,info:state.isAK?'infoAK':'infoMain'});
    },
    changeTitleHyp(state, {newName,oldName,info}){
      const obj = state[info].hypotheticalLists.find(item=>item.title === oldName)
      obj.title = newName
      console.log('obj.title',obj.title,'newName',newName,'oldName',oldName)
      this.dispatch('updateFB',{name:'hypotheticalLists',info:state.currentInfo});
    },
    addDiaryItem(state, {itemObj}){
      state.infoMain.cosmoDiaryList.unshift(itemObj)
      this.dispatch('updateFB',{name:'cosmoDiaryList',info:state.isAK?'infoAK':'infoMain'});
    },
    addFundManualTotal(state, { item,listName }){
      state.infoMain[listName]=item
      this.dispatch('updateFB',{name:listName,info:state.isAK?'infoAK':'infoMain'});
    },
    addFundWeek(state, { item }){
      state.infoMain.fundList.unshift(item)
      console.log('state.infoMain.fundList',state.infoMain.fundList)
      this.dispatch('updateFB',{name:'fundList',info:state.isAK?'infoAK':'infoMain'});
      this.commit('activatePopup',{text:'week added'});
    },
    addWeight(state, payload) {
      state.infoMain.weightList.push(
        {
          date: payload.date,
          id: generateRandomId(),
          weight: payload.weight
        }
      )
      this.commit('activatePopup', { text:'weight added'});
    },
    activatePopup(state, {text}){
      state.isPopupOpen = true;
      state.popupText = text;
      setTimeout(() => {
        state.isPopupOpen = false
        state.popupText = '';
      }, 5000);
    },
    activatePopupFB(state, {text}){
      state.isPopupOpenFB = true;
      state.popupTextFB = text;
      setTimeout(() => {
        state.isPopupOpenFB = false
        state.popupTextFB = '';
      }, 3000);
    },
    calculate(state,{coin}){//пересчитать общие данные приходящего 1 койна.
      console.log('calculating')
      const coinObj = state.infoMain.tradeList.find(item=>item.coin===coin.toLowerCase());
      console.log('coin',coin)
      if(!coinObj){
        console.log('no coin found. Nothing to calculate. Return');
        return
      }
      if(coinObj.trades.length===0){
        console.log('trade arr is empty. Nothing to calculate. Return');
        return
      }
      //----------------монета есть ---------------------------
      const amountsArr = coinObj.trades.map(item=>item.amount);//формируем массив из количеств...
      let totalAmount = amountsArr.reduce((a, b) => a+b);//...и суммируем их.
      console.log('totalAmount check with arr', totalAmount)
      // console.log('coinObj.trades', coinObj.trades)

      const arrOfPricesByWeight = coinObj.trades.map(item=>{
        if(totalAmount===0){//исправление ошибки. если продажа под 0 то деление на 0 -> NaN
          return 0;
        }else{
          const percentage = item.amount / totalAmount;
          return +(item.price * percentage).toPrecision(5);
        }
      })
      console.log('arrOfPricesByWeight check', arrOfPricesByWeight)

      const averagePrice = +(arrOfPricesByWeight.reduce((a, b) => a+b)).toPrecision(5);//округлить
      console.log('averagePrice check', averagePrice)

      //запись результатов

      if(averagePrice <=0 && totalAmount===0 && coinObj.fixedProfit===0) {//удаление
        console.log('удаление coinObj.id',coinObj.id)
        state.infoMain.tradeList = state.infoMain.tradeList.filter(item=>item.id!==coinObj.id)
      }

      if(averagePrice <=0 && totalAmount!==0 && coin!=='usdt'){//безубыток
        alert('Безубыток. Список обнулен. Урожай добавлен в "fixedProfit"')
        // console.log('in <0:',coinObj.trades.length )
        if(coinObj.invested===0 && coinObj.trades.length!==2){//если уже бесплатное то количество вычитаем из предыдущ суммы
          // console.log('coinObj.trades.length',coinObj.trades.length)
          // console.log('in average <=0 and invested =0')

          coinObj.totalAmount += totalAmount;//было и прибавить минус посчитанное (= вычесть)
        }else{//если чтото инвестировано то обычные расчеты
          // console.log('in average <=0 and invested >0')
          coinObj.totalAmount = totalAmount;
        }
        coinObj.trades=[{
          amount:coinObj.totalAmount,
          price:0,
          comment:'урожай',
          id:generateRandomId(),
          date:new Date().toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }),
        }]
        coinObj.averagePrice = 0;//обнуляем цену монеты
        // console.log('coinObj.fixedProfitArr', coinObj.fixedProfitArr)
        if(!coinObj.fixedProfitArr){
          coinObj.fixedProfitArr = [totalAmount * averagePrice*(-1)]//создаем начальную запись
        }else coinObj.fixedProfitArr.push(totalAmount * averagePrice*(-1))//добавляем нов запись

        // console.log('push', totalAmount * averagePrice*(-1))
        coinObj.fixedProfit = coinObj.fixedProfitArr.reduce((a, b) => a+b);//сумма урожая для показа
        // console.log('fixedProfit', coinObj.fixedProfit);

      }else{
        // console.log('in average >0')
        coinObj.totalAmount = totalAmount;
        coinObj.averagePrice = averagePrice;
        // console.log('in average >0 valueNow:',coinObj.valueNow)
        // console.log('in average >0 invested:',coinObj.invested)
        if(coinObj.invested===0){coinObj.xs = 99}
        else coinObj.xs = coinObj.valueNow / coinObj.invested;
      }
      coinObj.valueNow = +(coinObj.totalAmount * coinObj.currentPrice).toFixed(2);//5знаков после запятой
      // console.log('valueNow',coinObj.valueNow)
      coinObj.invested = +(coinObj.totalAmount * coinObj.averagePrice).toFixed(2);//округлить до 1 знака п з;
      coinObj.profit = coinObj.valueNow - coinObj.invested;
    },
    filterHistory(state, {diff}){
      const info = state.currentInfo;
      const before = state[info].historyList.length
      console.log('history length before:',state[info].historyList.length)
      state[info].historyList = state[info].historyList.filter(item=>{
        // const prevValue = this.$store.state.history[this.$store.state.history.indexOf(item-1||0)];
        const prevIndex = state[info].historyList.indexOf(item)-1;
        if(prevIndex===-1){//оставить первое знач
          return true;
        }
        if(prevIndex===before-2){//оставить посл знач
          return true;
        }
        const prevValue = state[info].historyList[prevIndex].totalNow;
        const isNegative = item.totalNow < prevValue;//след число стало меньше чем пред?
        if(isNegative){//да
          return item.totalNow<prevValue-diff;
        }else {//нет
          return item.totalNow>prevValue+diff;
        }
      });
      const after = state[info].historyList.length
      this.dispatch('updateFB',{name:'historyList',info});
      this.commit('activatePopup',{text:'history reduced from '+before+' to '+after});
      },
    moveToTrashList(state, {coin}){
      const coinObjInTradeList = state.infoMain.tradeList.find(item=>item.coin === coin);
      state.infoMain.trashList.push(coinObjInTradeList)
      const usdtTrade = {
          amount:1,//помечаем потери 1 долларом ибо 0 нельзя
          price:coinObjInTradeList.invested,
          comment:coin.toUpperCase() + ' moved to trashList',
          id:generateRandomId(),
          date:new Date().toLocaleString('en-US'),
      }
      const newTradeList = state.infoMain.tradeList.filter(item=>item.coin !== coin)
      let newUsdtObj = newTradeList.find(item=>item.coin==='usdt')
      newUsdtObj = {...newUsdtObj, trades : newUsdtObj.trades.push(usdtTrade) }
      state.infoMain.tradeList = newTradeList
      this.commit('calculate',{coin:'usdt'});
      this.dispatch('updateFB',{name:'tradeList',info:this.isAK?'infoAK':'infoMain'});
      this.dispatch('updateFB',{name:'trashList',info:this.isAK?'infoAK':'infoMain'});
      this.commit('activatePopup',{text:'coin moved to trashList + USDT comment added'});
    },
    moveBackToTradeList(state, {coin}){
      const coinObjInTrashList = state.infoMain.trashList.find(item=>item.coin === coin);//найти койн в корзине
      state.infoMain.tradeList.push(coinObjInTrashList)//вставить его в основной список
      state.infoMain.trashList = state.infoMain.trashList.filter(item=>item.coin !== coin)//удалить из корзины
      const usdtObj = state.infoMain.tradeList.find(item=>item.coin === 'usdt')//найти ЮСДТ обьект в кот надо удалить запись
      const tradeId = usdtObj.trades.find(item=>item.comment.includes(coin.toUpperCase())).id//найти у этого обьекта айди трейда кот нужно удалить
      this.commit('deleteTrade',{coin:'usdt',id:tradeId})
      this.commit('calculate',{coin:coin});
      this.dispatch('updateFB',{name:'tradeList',info:this.isAK?'infoAK':'infoMain'});
      this.dispatch('updateFB',{name:'trashList',info:this.isAK?'infoAK':'infoMain'});
      this.commit('activatePopup',{text:'to tradeList + del USDT comment'});
    },

    updateTradeListWithMyGecko(state,payload) {// добавление в сущ лист свеж инфы с базы. Только если база и лист не пустые. Минимум [].
      if(state.myGeckoList.length && state[payload].tradeList.length){
        state[payload].tradeList = state[payload].tradeList.map(item => {
          const coinObjInGecko = state.myGeckoList.find(geckoitem=>geckoitem.symbol === item.coin);
          if(coinObjInGecko) {//если найдена моя монета в моей базе то дополняем сущ лист ценами с базы. Если не найдена то ничего не дел.
            // console.log('addFreshPrices, if coinObjInGecko:', coinObjInGecko);
            let xs;
            if (item.averagePrice <= 0) {
              xs = 1;
            } else {
              xs = coinObjInGecko.current_price / item.averagePrice
            }
            return {
              ...item,
              coinUrl: coinObjInGecko.image,//на случай если ранее была заплатка.
              currentPrice: coinObjInGecko.current_price,//кажд раз обновление.
              priceChangePercentage24h: coinObjInGecko.price_change_percentage_24h / 100,//кажд раз обновление.
              valueNow: +(item.totalAmount * coinObjInGecko.current_price).toFixed(5),//кажд раз пересчет.
              profit: +(item.totalAmount * coinObjInGecko.current_price).toFixed(5) - item.invested,//кажд раз пересчет.
              xs: xs,//кажд раз пересчет.
              name: coinObjInGecko.name,
              marketCapRank: coinObjInGecko.market_cap_rank,
              id: coinObjInGecko.id,
              sparklineIn7d: coinObjInGecko.sparkline_in_7d.price,
              exchangeUrl: `/myCrypto/img/${item.exchange}.jpg`,//для перезаписи старого резерва. Потом удалить
            }
          }else return item
        })
        state.updateDate = new Date().toLocaleString()
      }
    },
    updateListWithMyGecko(state,{listName, info='infoMain'}) {// добавление в сущ лист свеж инфы с базы. Только если база и лист не пустые. Минимум [].
      if(state.myGeckoList.length && state[info][listName].length && listName!=='hypotheticalLists' && listName!=='lastActivityList'){
        state[info][listName] = state[info][listName].map(item => {
          const coinObjInGecko = state.myGeckoList.find(geckoitem=>geckoitem.symbol === item.coin);
          if(coinObjInGecko) {//если найдена моя монета в моей базе то дополняем сущ лист ценами с базы. Если не найдена то ничего не дел.
            // console.log('addFreshPrices, if coinObjInGecko:', coinObjInGecko);
            let xs;
            if (item.averagePrice <= 0) {
              xs = 1;
            } else {
              xs = coinObjInGecko.current_price / item.averagePrice
            }
            return {
              ...item,
              coinUrl: coinObjInGecko.image,//на случай если ранее была заплатка.
              athPrice: coinObjInGecko.ath,
              // athPerc: coinObjInGecko.ath_change_percentage,
              currentPrice: coinObjInGecko.current_price,//кажд раз обновление.
              priceChangePercentage24h: coinObjInGecko.price_change_percentage_24h / 100,//кажд раз обновление.
              valueNow: +(item.totalAmount * coinObjInGecko.current_price).toFixed(5),//кажд раз пересчет.
              profit: +(item.totalAmount * coinObjInGecko.current_price).toFixed(5) - item.invested,//кажд раз пересчет.
              xs: xs,//кажд раз пересчет.
              name: coinObjInGecko.name,
              marketCapRank: coinObjInGecko.market_cap_rank,
              id: coinObjInGecko.id,
              sparklineIn7d: coinObjInGecko.sparkline_in_7d.price,
              exchangeUrl: `/myCrypto/img/${item.exchange}.jpg`,//для перезаписи старого резерва. Потом удалить
            }
          }else return item
        })
        state.updateDate = new Date().toLocaleString()
      }else if(listName==='hypotheticalLists'){
        state.infoMain.hypotheticalLists = state.infoMain.hypotheticalLists.map(itemMain => {
          itemMain.hypTradeList = itemMain.hypTradeList?itemMain.hypTradeList.map(item=>{
            const coinObjInGecko = state.myGeckoList.find(geckoitem=>geckoitem.symbol === item.coin);
            if(coinObjInGecko) {//если найдена моя монета в моей базе то дополняем сущ лист ценами с базы. Если не найдена то ничего не дел.
              // console.log('addFreshPrices, if coinObjInGecko:', coinObjInGecko);
              return {
                ...item,
                currentPrice: coinObjInGecko.current_price,//кажд раз обновление.
                priceChangePercentage24h: coinObjInGecko.price_change_percentage_24h / 100,//кажд раз обновление.
                valueNow: +(item.totalAmount * coinObjInGecko.current_price).toFixed(5),//кажд раз пересчет.
                profit: +(item.totalAmount * coinObjInGecko.current_price).toFixed(5) - item.invested,//кажд раз пересчет.
              }
            }else return item
          }):[]
          return itemMain
        })
      }else if(listName==='lastActivityList'){
        state.infoMain.lastActivityList = state.infoMain.lastActivityList.map(item=>{
            const coinObjInGecko = state.myGeckoList.find(geckoitem=>geckoitem.symbol === item.coin);
            if(coinObjInGecko) {//если найдена моя монета в моей базе то дополняем сущ лист ценами с базы. Если не найдена то ничего не дел.
              // console.log('addFreshPrices, if coinObjInGecko:', coinObjInGecko);
              return {
                ...item,
                currentPrice: coinObjInGecko.current_price,//кажд раз обновление.
              }
            }else return item
        })
      }
    },
    updatePotentialListWithMyGecko(state,payload) {// добавление в сущ лист свеж инфы с базы. Только если база и лист не пустые. Минимум [].
      if(state.myGeckoList.length && state[payload].potentialList.length){
        state[payload].potentialList = state[payload].potentialList.map(item => {
          const coinObjInGecko = state.myGeckoList.find(geckoitem=>geckoitem.symbol === item.coin);
          if(coinObjInGecko){//если найдена моя монета в базе то дополняем сущ лист данными с базы. Если не найдена то ничего не дел
            // console.log('addFreshPrices, if coinObjInGecko:', coinObjInGecko);
            return {
              ...item,
              coinUrl:coinObjInGecko.image,//на случай если ранее была заплатка.
              athPrice: coinObjInGecko.ath,
              athPerc: coinObjInGecko.ath_change_percentage,
              currentPrice:coinObjInGecko.current_price,
              priceChangePercentage24h:coinObjInGecko.price_change_percentage_24h/100,
              name: coinObjInGecko.name,
              marketCapRank: coinObjInGecko.market_cap_rank,
              id: coinObjInGecko.id,
              sparklineIn7d: coinObjInGecko.sparkline_in_7d.price,
              exchangeUrl: `/myCrypto/img/${item.exchange}.jpg`,//для перезаписи старого резерва. Потом удалить
            }
          }else return item
        })
      }
    },
    updateAlarmAltsListWithMyGecko(state,payload) {
      if(state.myGeckoList.length && state[payload].alarmAltsList){
        state[payload].alarmAltsList = state[payload].alarmAltsList?state[payload].alarmAltsList.map(item => {
          const coinObjInGecko = state.myGeckoList.find(geckoitem=>geckoitem.symbol === item.coin);
          if(coinObjInGecko){//если найдена моя монета в базе то дополняем сущ лист ценами с базы. Если не найдена то ничего не дел
            return {
              ...item,
              currentPrice:coinObjInGecko.current_price,
            }
          }else return item
        }):[]
      }
    },
    markRiskCategory(state,{coin,riskStr}) {
      state.infoMain.tradeList = state.infoMain.tradeList.map(item => {
        if(item.coin===coin){
          return {
            ...item,
            riskCategory: riskStr
          }
        }else return item
      })
      this.dispatch('updateFB',{name:'tradeList',info:this.isAK?'infoAK':'infoMain'});
    },
    markCoin(state,{coin,is}) {
      state[state.currentInfo].tradeList = state[state.currentInfo].tradeList.map(item => {
        if(item.coin===coin){
          return {
            ...item,
            isMarked: !is
          }
        }else return item
      })
      this.dispatch('updateFB',{name:'tradeList',info:state.currentInfo});
    },
    markIndustryCategory(state,{coin,industryStr}) {
      state.infoMain.tradeList = state.infoMain.tradeList.map(item => {
        if(item.coin===coin){
          return {
            ...item,
            industryCategory: industryStr
          }
        }else return item
      })
      this.dispatch('updateFB',{name:'tradeList',info:this.isAK?'infoAK':'infoMain'});
    },
    sellBackTrade(state, {coin,id,sellPrice,comment}){//зафиксировать сделку
      const coinObj = state.infoMain.tradeList.find(item=>item.coin===coin.toLowerCase());//койн полюбому есть
      console.log('coin obt to operate',coinObj)
      const tradeItem = coinObj.trades.find(item=>item.id===id);
      const profitLoss = tradeItem.amount*sellPrice - tradeItem.amount*tradeItem.price;
      if(!coinObj.fixedProfitArr){
        coinObj.fixedProfitArr = [profitLoss]
      }else coinObj.fixedProfitArr.push(profitLoss);
      coinObj.trades = coinObj.trades.filter(item=>item.id!==id);
      coinObj.fixedProfit = coinObj.fixedProfit+profitLoss;
      alert('Трейд удален, fxdProfit добавлен');
      if(coinObj.trades.length===0){//список пустой -> обнулить + оставить fxd p/l
        coinObj.totalAmount = 0;//обнуляем тк при дальнейшей калькуляции при пустом trades идет игнор.
        coinObj.averagePrice = 0;//обнуляем
        coinObj.invested = 0;//обнуляем
        coinObj.xs = 0;//обнуляем
        coinObj.valueNow = 0;//обнуляем
        coinObj.profit = 0;//обнуляем
      }
      //добавка трейда в юсдт
      const usdtTrade = {
        amount:tradeItem.amount * sellPrice,
        price:1,//1долл за 1 долл
        comment:'sellback: '+coin.toUpperCase(),
        id:generateRandomId(),
        date:new Date().toLocaleString('en-US'),
      }
        console.log('usdtTrade',usdtTrade)
        let newUsdtObj = state.infoMain.tradeList.find(item=>item.coin==='usdt')
        newUsdtObj = {...newUsdtObj, trades : newUsdtObj.trades.push(usdtTrade) }

      //добавка трейда в las actions
      state.infoMain.lastActivityList.unshift(//добавляем activity запись в начало
        {
          amount:-tradeItem.amount,
          id:generateRandomId(),
          date:new Date().toLocaleString('en-US'),
          coin:coinObj.coin,
          currentPrice:coinObj.currentPrice,
          price:sellPrice,
          coinUrl:coinObj.coinUrl,
          name:coinObj.name,
          comment
        }
      )
      this.commit('calculate',{coin:'usdt'});
      this.commit('calculate',{coin});
      this.dispatch('updateFB',{name:'tradeList',info:state.currentInfo});
      this.dispatch('updateFB',{name:'lastActivityList',info:state.currentInfo});
      this.commit('activatePopup', { text:'trade sold back'});
    },
    deleteNotesTab(state, {tabName,listName}){
      state.infoMain[listName] = state.infoMain[listName].filter(item=>item.title!==tabName)
      this.dispatch('updateFB',{name:listName,info:state.isAK?'infoAK':'infoMain'});

    },
    deleteItem(state, {id,listName}){
      state[state.currentInfo][listName] = state[state.currentInfo][listName].filter(item=>item.id!==id)
      this.commit('activatePopup', { text:'item deleted'});
      this.dispatch('updateFB',{name:listName,info:state.currentInfo});
    },
    deleteTrade(state, {coin,id,pageName}){//удалить часть либо весь койн
      if(pageName==='hyp'){
        const tabObj = state.infoMain.hypotheticalLists.find(item=>item.hypTradeList.find(item=>item.trades.find(item=>item.id===id)))
        console.log(tabObj)
        tabObj.hypTradeList = tabObj.hypTradeList.filter(item=>item.coin!==coin)
      }else{
        const coinTradeObj = state.infoMain.tradeList.find(item=>item.coin===coin.toLowerCase());//койн полюбому есть
        if(coinTradeObj.trades.length===1){//удалить полностью койн если это посл итем
          state.infoMain.tradeList = state.infoMain.tradeList.filter(item=>item.coin!==coin)
        }else{
          coinTradeObj.trades = coinTradeObj.trades.filter(item=>item.id!==id);
        }
      }
      this.commit('calculate',{coin});
      this.commit('activatePopup',  { text:'item deleted'});
      this.dispatch('updateFB',{name:pageName==='hyp'?'hypotheticalLists':'tradeList',info:state.currentInfo});
    },
    // deleteHistoryItem(state, {id}){
    //   console.log('deleting:',id)
    //   state.infoMain.historyList = state.infoMain.historyList.filter(item=>item.id!==id);
    //   this.dispatch('updateFB','historyList');
    //   this.commit('activatePopup',{text:'history item deleted'});
    // },
    addHistoryItem(state,payload){
      if(payload.ethMeter===0){return}//чтобы не записывало ошибочные нули
      let isReasonableDifference = true;
      if(state[state.currentInfo].historyList) {
        const lastValueInHistory = state[state.currentInfo].historyList[state[state.currentInfo].historyList.length - 1].profit;
        isReasonableDifference = payload.profit > lastValueInHistory + state[state.currentInfo].service.historyDifferenceToUpdate || payload.profit < lastValueInHistory - state[state.currentInfo].service.historyDifferenceToUpdate;
      }
      console.log('history updating', isReasonableDifference)
      if(isReasonableDifference){//не записывать одинак значения или близкие к ним (в интервале 500).
        state[state.currentInfo].historyList.push(payload);
        this.dispatch('updateFB',{info:state.currentInfo, name:'historyList'});
      }
    },
    // updateLocal(state,payload){
    //   console.log('updating local')
    //   localStorage.setItem('infoMain', JSON.stringify(state.infoMain));
    //   localStorage.setItem('infoAK', JSON.stringify(state.infoAK));
    // },
    // rareUpdateStore(state,payload){
    //   state[payload.tab]= payload.value;
    // },
    backup(state){
      localStorage.setItem('backupInfoMain', JSON.stringify(state.infoMain));
      localStorage.setItem('backupInfoAK', JSON.stringify(state.infoAK));
      this.commit('activatePopup', { text:'backed'});
    },
    resetPricesOfTemporaryTradeList(state){
      state.refreshedReserveTradeList=[]
    },
    // loadLocalMyGecko(state){
    //   state.myGeckoList = JSON.parse(localStorage.getItem("savedMyGecko")) || [];
    // },
    // reset(state){
    //   state.tradeList = [];
    //   state.potentialList = [];
    //   localStorage.removeItem('myAlts');
    //   localStorage.removeItem('potentialList');
    //   location.reload();
    // },
    // loadLocal(state){
    //   state.infoMain.tradeList = JSON.parse(localStorage.getItem("myAlts")) || [];
    //   state.infoMain.notes = JSON.parse(localStorage.getItem("notes")) || '';
    //   state.infoMain.potentialList = JSON.parse(localStorage.getItem("potentialList")) || [];
    //   state.infoMain.alarmList = JSON.parse(localStorage.getItem("alarmList")) || [];
    //   state.infoMain.history = JSON.parse(localStorage.getItem("historyList")) || [];
    //   state.infoMain.fundList = JSON.parse(localStorage.getItem("fundList")) || [];
    //   state.infoMain.weightList = JSON.parse(localStorage.getItem("weight")) || [];
    //   state.infoMain.hodlCoins = JSON.parse(localStorage.getItem("hodlCoins")) || [];
    //   state.infoMain.safeGemsCoins = JSON.parse(localStorage.getItem("safeGemsCoins")) || [];
    // },
    // loadPortfolio(state){
    //   const hodlList = state.tradeList.filter(item=>state.portfolio.hodl.coins.find(ite=>ite===item.coin))
    //   const safeList = state.tradeList.filter(item=>state.portfolio.safeGems.coins.find(ite=>ite===item.coin))
    //   state.portfolio.hodl.list = hodlList
    //   state.portfolio.safeGems.list = safeList
    // }
  },
  actions: {//опция actions где возможны синхр и ассинхр операции. Запуск происходит из компонента App.

  }
});



//пример соединения множества запросов
// return axios.all([
//   axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'),
//   axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=2&sparkline=false'),
//   axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=3&sparkline=false'),
//
// ])
//   .then(axios.spread((res1, res2,res3) => {
//     const res = res1.data
//       .concat(res2.data)
//       .concat(res3.data)
//     context.dispatch('getSparklines', res);
//     context.commit('updateCoinGecko', res);
//     this.state.isLoadingSuccess=true;
//   }))
//---------------------------
// loadCoinGecko(context) {
//   this.state.isLoading=true;
//   return axios.all([
//     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'),
//     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=2&sparkline=false'),
//     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=3&sparkline=false'),
//     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=4&sparkline=false'),
//     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=5&sparkline=false'),
//     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=6&sparkline=false'),
//     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=7&sparkline=false'),
//     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=8&sparkline=false'),
//     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=9&sparkline=false'),
//     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=10&sparkline=false'),
//     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=11&sparkline=false'),
//   ])
//     .then(axios.spread((res1, res2,res3, res4,res5,res6, res7, res8, res9,res10,res11) => {
//       const res = res1.data
//         .concat(res2.data)
//         .concat(res3.data)
//         .concat(res4.data)
//         .concat(res5.data)
//         .concat(res6.data)
//         .concat(res7.data)
//         .concat(res8.data)
//         .concat(res9.data)
//         .concat(res10.data)
//         .concat(res11.data)
//       // context.commit('updateCoinGecko', res);
//       console.log('comp:', res.find(item=>item.symbol==='btc'))
//       this.state.isLoadingSuccess=true;
//     }))
//     .catch((err) => {
//       // context.commit('loadSavedGecko');
//       console.log('errorRRR from actions loadCoinGecko:', err);
//       this.state.isLoadingFailed=true;
//     })
//     .then(()=>{
//       this.state.isLoading=false;
//       // context.commit('updateTradeListWithGecko')
//       // context.commit('updatepotentialListWithGecko')
//     })
// },
