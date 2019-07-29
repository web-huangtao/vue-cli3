<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
    <input type="text" v-model="value">
    <mt-button type="default" @click="changeMsg">default</mt-button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class About extends Vue {
  private msg: string = 'hh';
  private value: string = '';
  @Watch('value')
  public changeValue( val: string, oldVal: string ) {
    console.log(val);
    console.log(oldVal);
  }
  public mounted() {
    (this as any).$toast('hh');
    let aa: number = 123;
    aa = 456;
    console.log(aa);
  }
  public changeMsg(): void {
    this.msg = 'cc';
  }
}
</script>

