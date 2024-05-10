<script setup lang="ts">
  import { ref } from "vue";
  import { RamenType, ToppingType } from "../types";

  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 月は0から始まるため+1する
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  const today = ref<string>(formatDate(new Date()));

  const selectedRamen = ref<RamenType | "">("");
  const selectedToppings = ref<ToppingType[]>([]);
  const eatsSoup = ref(false);
  const asksSeconds = ref(false);
  const secondsCount = ref(1);

  defineExpose({
    selectedRamen,
    selectedToppings,
    eatsSoup,
    asksSeconds,
    secondsCount,
  });
</script>

<template>
  <form class="form_style">
    <div>
      <select name="mode-select" class="atarasii">
        <option >新しいラーメン作成</option>
        <option>ラーメン一覧から選択</option>
      </select>
    </div>
    <br>
    <div>
      <label for="ramen-select"><p class="daimei">ラーメンの種類</p></label>
      <select id="ramen-select" name="ramen-select" v-model="selectedRamen" class="bubun">
        <option disabled value="" >選択してください</option>
        <option>二郎系</option>
        <option>家系</option>
        <option>油そば</option>
        <option>醤油ラーメン</option>
      </select>
    </div>
    <br>
    <div>
      <label for="topping-select" multiple><p class="daimei">トッピング</p></label>
      <select
        id="topping-select"
        name="topping-select"
        v-model="selectedToppings"
        placeholder="なし"
        multiple
        class="bubun"
      >
        <option class="sentakusi">チャーシュー</option>
        <option class="sentakusi">たまご</option>
      </select>
    </div>
    <br>
    <div class="kakunin2">  
      <div class="kakunin">
        <input type="checkbox" id="eats-soup" v-model="eatsSoup"/>
        <label for="eats-soup" >スープのんだ？</label>
      </div>
      <br>
      <div class="kakunin3">
        <input type="checkbox" id="asks-seconds" v-model="asksSeconds" />
        <label for="asks-seconds"  >替え玉した？</label>
        <br>
        <div :class="{ hidden: !asksSeconds }">
          <div>
            <input
              type="number"
              id="seconds-count"
              placeholder="替え玉回数"
              v-model="secondsCount"
            />回
          </div>
        </div>
      </div>
    </div>  
    <br>
    <div class="kakunin4">
      <label for="eat-on">日付　</label>
      <input type="date" id="eat-on" :value="today" class="hizuke"/>
    </div>
  </form>
</template>

<style scoped>

  .hidden {
    display: none;
  }

  .form_style{
    
    justify-content:center;
    text-align:center;
    padding:30px;
    padding-top:0;
    background-color:#dcffda;
    padding-left:40px;
    padding-right:40px;
  }

  .atarasii{
    border-radius:5px / 5px;
    padding:5px;
    background-color:#51a5f9;
    color:white;
    padding-left:30px;
    padding-right:30px;
    border-color:#51a5f9;
  }

  .bubun{
    text-align:center;
    background-color:#23b821;
    color:white;
    font-size:17px;
    padding:3px;
    border-radius:5px / 5px;
    padding-left:40px;
    padding-right:40px;
    border-color:#23b821;
  }

  .kakunin{
    border-radius:5px / 5px;
    width:200px;
    display:flex;
    justify-content:center;
    text-align:center;
    padding:5px;
    background-color:#f19651;
    border:solid 1px #f19651;
    margin-right:5px;
    padding-bottom:30px;
    padding-top:30px;
  }

  .kakunin2{
    display:flex;
  }

.kakunin3{
  border-radius:5px / 5px;
  width:200px;
    justify-content:center;
    text-align:center;
    padding:5px;
    background-color:#f19651;
    border:solid 1px #f19651;
    margin-left:5px;
    padding-bottom:0px;
    padding-top:30px;

}
.kakunin4{
  border-radius:5px / 5px;
    justify-content:center;
    text-align:center;
    padding:5px;
    background-color:#f19651;
    border:solid 1px #f19651;
    margin-left:0;
    padding-top:10px;
    padding-bottom:10px;
}
.daimei{
  margin:0;
  margin-bottom:4px;
}

.sentakusi{
  text-align:center;
  border-radius:5px / 5px;
}

.hizuke{
  border:solid 0px black;
  border-radius:5px / 5px;
  background-color:#f19651;
  padding-top:5px;
  padding-bottom:5px;
}

.hizuke:hover{
  background-color:rgb(200, 178, 159);
}

input[type="checkbox"] {
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid #000;
  vertical-align: -2px;
  -webkit-appearance: none;
    -moz-appearance: none;
          appearance: none;
}

input[type="checkbox"]:checked:before {
  position: absolute;
  top: 1px;
  left: 4px;
  transform: rotate(50deg);
  width: 4px;
  height: 8px;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  content: '';
}

#seconds-count{
  width:100px;
}

.atarasii:hover{
  background-color:#085ea9;
}

.bubun:hover{
  background-color:#055f19;
}

#seconds-count{
  text-align:center;
  font-size:14px;
}

</style>
