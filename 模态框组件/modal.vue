<template>
<transition name='slide-fade'>
  <div class="Dialog">
    <div class="modal-background"></div>
    <div class="content">
      <div class="close-dialog">
        <a @click='closeDia'>+</a>
      </div>
       <h3>{{txt}}</h3>
       <p>11111111111</p>
       <p>22222222222</p>
       <div class="buttonBox">
          <input type="text" name="" value="" placeholder='Enter your email'>
          <div class="sendButton">
             <button type="button" name="button">Create Account</button>
          </div>
       </div>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  name: "modal",
  data: () => ({
    a: 1,
    txt: 'text',
    opendialog: true
  }),
  props: ['show'],
  methods: {
    closeDia () {
      // eslint-disable-next-line vue/no-mutating-props
      this.show = this.opendialog
      this.opendialog  = false
      this.$emit('change',this.opendialog)
    }
  }
}
</script>

<style lang="scss" scoped>

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}

 .Dialog{
   .modal-background{
     width: 100%;
     height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background: #333;
      opacity: 0.9;
      z-index: 999;
      transition: all 2s ease-out;
   }

   .close-dialog{
     width: 60px;
     height: 60px;
     background: linear-gradient(45deg, rgb(120,120,120) 0%, rgb(120, 120, 120) 50%, rgb(52, 52, 52) 50%, rgb(34, 34, 34) 61%);
     border-radius: 0 0 0 5px;
     position: absolute;
     top: 0;
     right: 0;
     a{
       color: rgb(120, 120,120);
       font-size: 40px;
       // font-weight: 400;
       position: absolute;
       right: 5px;
       top: -10px;
       transform: rotateZ(45deg);
       cursor: pointer;
     }
  }

   .content{
     width: 720px;
     position: fixed;
     top: 50%;
     left: 50%;
     transform: translate3d(-50%, -50%,0);
     padding: 60px 40px 40px;
     text-align: center;
     background: rgb(51, 51, 51);
     z-index: 1000;
     color: rgb(255, 255, 255);

     h3{
       font-size: 3vw;
       font-weight: 500;
       text-align: center;
       padding: 0;
       margin: 0;
     }

     p{
       padding: 5px;
     }
     .buttonBox{
       padding: 20px;
       width: 100%;
       height: 90px;
       input{
         width: 60%;
         float: left;
         height: 100%;
         border: none;
         text-align: center;
         border-radius: 30px 0 0 30px;
         color: #333;
         outline: none;
       }
       .sendButton{
         float: left;
         width: 40%;
         height: 100%;
         button{
           border: none;
           height: 100%;
           width: 100%;
           color: #333;
           background: orange;
           border-radius: 0 30px 30px 0;
           outline: none;
         }
         button:hover{
           opacity: 0.7;
         }
       }
     }

   }
 }
</style>
