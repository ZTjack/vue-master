<template>
  <div>
    <div>
      <input
        v-model="input_value"
        type="text"
        placeholder="pls input something"
      />
      <p>
        {{ input_value }}
      </p>
    </div>

    <br />

    <div>
      <select v-model="select_value">
        <option disabled value="">pls choose</option>
        <option v-for="item in select_options" :key="item">
          {{ item }}
        </option>
      </select>
    </div>

    <br />
    <br />
    <br />

    <div>
      <input v-model="ischecked" type="checkbox" />
      <label>want to check</label>
      <br />
      is checked : {{ ischecked ? 'Checked' : 'Unchecked' }}
    </div>

    <br />
    <br />
    <br />

    <div>
      <input v-model="languages" value="java" type="checkbox" />
      <label>java</label>
      <input v-model="languages" value="php" type="checkbox" />
      <label>php</label>
      <input v-model="languages" value="c++" type="checkbox" />
      <label>c++</label>
      <br />
      languages: {{ languages }}
    </div>

    <br />
    <br />
    <br />

    <div>
      <input v-model="sex" type="radio" value="man" />
      <label>man</label>
      <input v-model="sex" type="radio" value="woman" />
      <label>woman</label>
      <br />
      show choose: {{ sex }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormBind',
  data() {
    return {
      input_value: '',
      select_value: '',
      select_options: ['A', 'B', 'C', 'D', 'E', 'F'],
      ischecked: false,
      languages: [],
      sex: 'man'
    }
  }
}
</script>

<style></style>
