<template>
  <div class="about">
    <h1>FORM Mahasiswa</h1>
    <form-mahasiswa></form-mahasiswa>
  </div>
</template>


<script>
  import Form from '../components/Form'

  export default {
    name: 'Form',

    components: {
      'form-mahasiswa' : Form,
    },
  }
</script>