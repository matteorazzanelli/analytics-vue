<template>
  <div class="category" @click="changeMeasure">
    <div class="category-name">{{ kpi_name }}</div>
    <div class="category-number">{{ kpi_value }}</div>
  </div>
</template>

<script>

export default {
  name: 'Category',
  props: {
    kpi_name: String,
    kpi_value: String
  },
  emits: ['changeGraph'],
  setup(props, context){
    const changeMeasure = () => {
      console.log('clicked ',props.kpi_name);
      context.emit('changeGraph', props.kpi_name);
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