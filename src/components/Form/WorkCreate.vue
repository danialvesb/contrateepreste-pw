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
<!--        <b-form-select-->
<!--          id="input-category"-->
<!--          :options="foods"-->
<!--          v-model="form.category"-->
<!--          required>-->
<!--        </b-form-select>-->
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



      <b-button v-if="formProps" variant="primary" @click="onSubmitUpdate(form)" class="mr-3">Atualizar Serviço</b-button>
      <b-button v-else variant="primary" @click="onSubmit(form)" class="mr-3">Salvar Serviço</b-button>
      <b-button variant="danger" @click="onReset">Limpar Campos</b-button>
    </b-form>
    <b-card class="mt-3" header="Dados do Formulário">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
      formProps: {
        type: Object
      }
    },
    data() {
        return {
            show: true,
            form: {
              'id': this.formProps ? this.formProps.id : '',
              'title': this.formProps ? this.formProps.title : '',
              'category': this.formProps ? this.formProps.category : '1',
              'description': this.formProps ? this.formProps.description : '',
              'file': 'ss'
            },
        }
    },
    methods: {
      ...mapActions(['addWork', 'updateWork', 'loadCategories']),
      loadCategoriesLocal() {
        this.loadCategories()
      },

      onReset() {
            this.form.title = '',
            this.form.category = '1',
            this.form.description = ''
        },
      onSubmit(form) {
        this.addWork(form)
        this.onReset()

      },
      onSubmitUpdate() {
          this.updateWork(this.form)
      },
        
    },
    mounted() {
      this.loadCategoriesLocal();
    }
}



</script>

<style scoped>
    div {
        margin: 10px;
    }
</style>