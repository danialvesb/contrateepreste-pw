<template>
  <div>
    <b-form v-if="show">
    
      <b-form-group
        id="input-group-title"
        label="Título:"
        label-for="input-title"
        description="Insira um título que atraia o interesse das pessoas.">

        <b-form-input
          id="input-title"
          v-model="form.title"
          type="text"
          required
          placeholder="Insira aqui"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-category" label="Categoria:" label-for="input-category">
        <b-form-select
          id="input-category"
          v-model="form.category"
          :options="foods"
          required>
        </b-form-select>
      </b-form-group>

      <b-form-group id="input-group-description" label="Descrição:" label-for="input-description">
        <b-form-textarea
          id="input-description"
          v-model="form.description"
          placeholder="Descrição do Serviço"
          rows="3"
          max-rows="6"
          required>
          </b-form-textarea>
      </b-form-group>



      <b-button variant="primary" @click="onSubmit" class="mr-3">Salvar Serviço</b-button>
      <b-button variant="danger" @click="onReset">Limpar Campos</b-button>
    </b-form>
    <b-card class="mt-3" header="Dados do Formulário">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
            form: {
                title: '',
                category: '',
                description: '',
                files: ''
            },
            foods: [
                { text: 'Selecione Uma', value: null },
                { text: 'Construção', value: 1 },
                { text: 'Peças de Carros', value: 2 },
                { text: 'Outro', value: 3 },

            ],
        }
    },
    methods: {

        onReset() {
            this.form.title = '',
            this.form.category = '',
            this.form.description = '',
            this.form.files = ''
        },
        onSubmit(event) {
            event.preventDefault()
        }
    }
}
</script>

<style scoped>
    div {
        margin: 10px;
    }
</style>