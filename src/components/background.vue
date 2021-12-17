<template>
  <div id="background" class="background">
<div class="background2">

    <div class="background3">


</div>
    </div>
        <div class="landing">
         <div class="home">
             <h4>theham is <span>wordpress theme</span></h4>
             <h2>we are creative</h2>
             <p>just buy and enjoy these awesome features</p>
                <button class="b1">view now</button>
                <button class="b2">view now</button>
         </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style >
.background{
    
/* 
   background-size: cover;
  background-position: center;
  background-Repeat: 'no-repeat';
  z-index: -8; 
 width: 100vh;
  height: 100vh;
    background-image: url(../assets/imags/801.jpg); */
    width: 100%;
    height: 90vh;
}
.background2{
  
     background-image: url(../assets/imags/00.jpg);
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -5;
    top: 0;
}
 .landing .home {
    position: absolute;
    left: 0;
    top: 75%;
    transform: translateY(-50%);
    width: 100%;
    padding: 50px;
    /* color: var(--transparent-color); */
    text-align: center;
    color: black;
}
button{
    background-color: initial;
    border: 0;
   
}
.b1{
 margin: 5px;
    width: 100px;
    height: 50px;
    border: 1px 10px 1px 1px;
    border-width: 1px;
    border-style: solid;
    background-color: #167a8f73;
    border-radius: 51%;

}
.b2{
 margin: 5px;
    width: 100px;
    height: 50px;
    border: 1px 10px 1px 1px;
    border-width: 1px;
    border-style: solid;
    background-color: #167a8f73;
    border-radius: 51%;
}
 .b2:hover {
border: 1px;
background-color: fuchsia;
border-style: solid;

}
 .b1:hover {
border: 1px;
background-color: fuchsia;
border-style: solid;

}
</style>