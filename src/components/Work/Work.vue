<template>
  <div>
    <container>
        <header class="header-card">
            <div class="category_title">
                {{ work.category_title }}
            </div>
            <div class="text-header-card">
                {{ work.title }}
            </div>

        </header>
        <hr>

        <main class="content-card">
<!--            <div class="text-content-card">-->
<!--                {{ work.description }}-->
<!--            </div>-->
            <div class="image-content-card">

            </div>
        </main>
        <footer class="footer-card">
            <div class="buttons-footer-card">
                <button class="btn-edit" href="#" @click="modalShow = !modalShow">Editar</button>
            </div>
        </footer>

    </container>

<!--    <b-modal v-model="modalShow" id="modal-1" title="Editar Serviço" hide-footer>-->
<!--        <WorkCreate :formProps="work" class="modal-color"></WorkCreate>-->
<!--    </b-modal>-->

  </div>
</template>

<script>
import { mapActions } from 'vuex'

// import WorkCreate from "../Form/WorkCreate";
// import { BModal, BButton, BCard } from 'bootstrap-vue'




export default {
    components: {
        // 'b-modal': BModal,
        // WorkCreate,
    },
    props: {
        work: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            modalShow: false
        }
    },
    methods: {
        ...mapActions(['removeWork']),
        deleteWork() {
            this.removeWork(this.work.id)
        }
    },
    computed: {
        

    }
}
</script>

<style scoped>
    container {
        margin: 10px;
        background: rgb(63, 68, 72);
        display: flex;
        flex-direction: column;
        width: 255px;
        height: 350px;
        border-radius: 10px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);


    }

    .header-card {
        max-height: 15%;
        display: flex;
        flex-flow: column;
        font-size: 14px;

    }

    .id-header-card {
        display: flex;
        flex-direction: row;
        border-radius: 10px;
        color: white;
        margin: 3px;
        align-self: flex-end;
    }

    .category_title {
        display: flex;
        flex-direction: row;
        border-radius: 10px;
        color: white;
        margin: 3px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
        background: rgb(36, 41, 46);
        padding: 2px;
        cursor: pointer;
        outline: none;
        flex: 1;
    }

    .text-header-card {
        display: flex;
        flex-direction: row;
        margin: 3px;
        color: white;
        padding: 2px;
        flex: 1;




    }

    .content-card {
        font-size: 13px;
        min-height: 60%;
        display: flex;
        flex-direction: column;

    }

    .text-content-card {
        min-height: 30%;
        color: white;
        padding: 10px;
        flex: 1;
    }

    .image-content-card {
        min-height: 100%;
        width: 98%;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        background: gray;
        background-image: url("https://s3.amazonaws.com/mapa-da-obra-producao/wp-content/uploads/2018/08/materiais-para-pintura.jpg");
        border-radius: 10px;
        align-self: center;
        cursor: pointer;
    }

    .footer-card {
        min-height: 10%;
        max-height: 10%;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        margin-top: 30px;

    }

    .buttons-footer-card {
        margin: 0;
        display: flex;
        flex-direction: column;
        background: rgba(128, 128, 128, 0.58);
    }
    .buttons-footer-card button {
        padding: 5px;
        margin: 6px;
        border-radius: 5px;
        text-decoration: none;
        font-size: 15px;
        border: none;
        color: white;
        outline: none;
        cursor: pointer;
    }

    .btn-edit:hover,  .btn-delete:hover{
        background-color: rgb(63, 68, 72);
        color: white;
    }
    .btn-delete {
        background: rgb(235, 83, 82);
    }

    .btn-edit {
        background: rgb(22, 32, 44);
    }

    .btn-offer {
        background: gray;
        cursor: unset;
    }

</style>