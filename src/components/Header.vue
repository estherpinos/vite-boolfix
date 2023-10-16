<script>
export default{
  name:'Header'
}

</script>

<template>
  <main>
    <div class="bar bg-black ">
    <div class="contents-bar d-flex justify-content-between align-items-center ">
      <div class="logo d-flex align-items-center ">
        <img src="logo-boolflix.png" alt="">
      </div>
    
      <div class="input-group mb-3 search d-flex align-items-center">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>

      </div>
    </div>
  </div>
  </main>
  
 
</template>

<style lang="scss" scoped>

.bar{
  width: 100%;
  height: 60px;
  padding: 20px;
    .contents-bar{
      height: 100%;
    }
      .logo{
        & img{
          width: 100px;
        }
      }

      .search{
        width:200px;
      }
}

</style>