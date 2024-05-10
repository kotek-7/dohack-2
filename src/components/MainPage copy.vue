<script setup lang="ts">
  import { ref } from "vue";
  import {
    DialogRoot,
    DialogTrigger,
    DialogPortal,
    DialogOverlay,
    DialogContent,
    DialogTitle,
    DialogClose,
    DialogDescription,
  } from "radix-vue";
  import NewRamen from "./NewRamen.vue";
  import { createRamenInfo } from "../composables/CreateRamenInfo";

  const kinraStreak = ref(4);
  const calorie = ref(24000);
  const fat = ref(320);
  const carb = ref(460);

  const params = ref<InstanceType<typeof NewRamen> | null>(null);

  function submitButtonHandler() {
    console.log(params.value);
    if (params.value == null) return;
    try {
      alert(createRamenInfo(params.value));
    } catch (e) {
      alert(e);
    }
  }
</script>

<template>
  <DialogRoot>
    <div class="all">
      <div class="defalt">
        <p class="susuranai">SUSURANAI</p>
        
          <p class="kongetu">今月の🈲ラー</p>
        <div class="top">  
          <div>             
              <div class="day"><p class="day2">{{ kinraStreak }}日</p></div>
            </div> 
              <div class="myclass">
                摂取カロリー　{{ calorie }}kcal
                  <br>
                脂質　　　　　{{ fat }}g
                <br>
                糖質　　　　　{{ carb }}g
          </div>  
        </div>
    
        <div class="calendar">Calendar</div>
        <DialogTrigger class="ramentuika">ラーメン<br>追加</DialogTrigger>
      </div>
    </div>
    <DialogPortal>
      <DialogOverlay class="dialog-overlay" />
      <DialogContent class="dialog-content">
        <DialogTitle class="kyounora-men"> 今日のラーメン </DialogTitle>
        <DialogDescription>
          <NewRamen ref="params" />
        </DialogDescription>
        <DialogClose as-child>
          <div class="sousin2">
          <button @click="submitButtonHandler" class="sousin">送信！</button>
          </div>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>
  .class {
    display: flex;
  }
  .dialog-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    background-color: black;
    opacity: 0.7;
  }
  .dialog-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    max-height: 100vh;
    max-width: 100vw;
    background-color:#dcffda;
  }
  .defalt{
    text-align:center; margin-top:40%; 
  }
.day{
  vertical-align:center;
  padding-left:0;
  margin-left:0;
  padding-right:0;
  margin-left:34px;
  width:100px;
  height:100px;
  border:solid 2px #4a89ff; 
  border-radius:50%;
  background-color:#caddff;
}
.day2{
  margin-top:37%;
  vertical-align:center;
}
.top{
  display:flex;
  margin:0;
  padding:0;
  width:43vw;
}
.myclass{
  
  padding-top:0;
  margin-top:3vw;
  white-space:nowrap;
  margin-left:0;
  padding-right:0;
  margin-left:7vw;
  display:flex;
  text-align:left;
}

.day3{
  padding-right:0;
  margin-right:0;
  display:flex;
}
.all{
  padding-bottom:45vh;
  border:solid 2px #e761ff;
  height:100%;
  background-color:#fbe4ff;
}
.ramentuika{
  margin-top:30px;
  font-size:13px;
  width:20vw;
  height:20vw;
  border:solid 3px #ffbe6f; 
  border-radius:50%;
  background-color:#ffbe6f;
}
.susuranai{
  font-weight:bold;
  font-size:40px;
}
.kongetu{
  padding-left:0;
  text-align:left;
  margin-left:40px;
}
template{
  height:100%;
}
.kyounora-men{
  text-align:center;
  margin-bottom:0;
}
.sousin{
  text-align:center;
  padding-top:5px;
  padding-bottom:5px;
  padding-left:20vw;
  padding-right:20vw;
  background-color:#23b821;
  border:solid 1px #23b821;
  border-radius:4px/4px;
  color:white;
}
.sousin:hover{
  background-color:#055f19;
}
.sousin2{
  margin:0;
  padding-top:0;
  display:flex;
  justify-content:center;
  padding-bottom:8px;
}
.calendar{
  margin-top:30px;
}
.ramentuika:hover{
  background-color:rgb(205, 130, 64);
}
</style>
