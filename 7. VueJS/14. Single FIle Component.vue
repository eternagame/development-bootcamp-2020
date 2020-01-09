<template>
    <!-- We put our component template in here -->
    <div>
        X: {{x}}
        <br>
        Double X: {{doubleX}}
        <br>
        Message: {{message}}
        <br>
        <button @click="doSomething">Do Something</button>
    </div>
</template>

<!-- The script contains our code -->
<script lang="ts">
// Library that helps us with class-based components
import { Component, Prop, Vue } from 'vue-property-decorator';

// We need to specify that this is a component, and we could pass some extra
// configuration in here
@Component({

})
export default class MyComponent extends Vue  {
    // This is just a class, so we can declare our data as regular properties
    x = 5;

    // Declaring properties requires the Prop decorator and a data type
    @Prop() message: string;

    // Computeds are getters
    get doubleX() {
        return this.x * 2;
    }

    // Methods are just methods
    doSomething() {
        console.log("😎");
    }
}
</script>

<!-- And our CSS! We can use scss, and `scoped` limits the effect of this CSS to be just this component -->
<style lang="scss" scoped>
  div {
      color: rebeccapurple;
  }
</style>