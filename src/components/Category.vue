<template>
  <div class="category" @click="changeMeasure">
    <div class="category-name">{{ msg }}</div>
    <div class="category-number">{{ num }}</div>
  </div>
</template>

<script>

export default {
  name: 'Category',
  props: {
    msg: String,
    num: String
  },
  emits: ['changeGraph'],
  setup(props, context){
    const changeMeasure = () => {
      console.log('clicked ',props.msg);
      context.emit('changeGraph', props.msg);
    }

    return {changeMeasure}
  }
}
</script>

<style scoped>
.category{
  background-color: lightgrey;
  width: 200px;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.category-name{
  font-weight: bold;
}

.category-number{
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 32px;
}
</style>