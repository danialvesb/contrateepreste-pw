<template>
  <div>
    <container>
        <header class="header-card">
            <div class="category_title">
                {{ work.category_title }}
            </div>

            <div class="id-header-card">
                {{ work.id }}
            </div>
            <div class="text-header-card">
                {{ work.title }}
            </div>

        </header>
        <hr>

        <main class="content-card">
            <div class="text-content-card">
                {{ work.description }}
            </div>
        </main>
        <hr>
        <footer class="footer-card">
            <div class="buttons-footer-card">
                <button class="btn-offer" href="#" disabled="">Ofertar</button>
                <button class="btn-edit" href="#" @click="modalShow = !modalShow">Editar</button>
                <button class="btn-delete" href="#" @click="deleteWork">Apagar</button>
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
        width: 700px;
        height: 400px;
        border-radius: 10px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);

    }

    .header-card {
        min-height: 20%;
        display: flex;
        flex-direction: column;
    }

    .id-header-card {
        max-width: 20%;
        display: flex;
        flex-direction: column;
        font-size: 50px;
        margin-right: 10px;
        color: white;
        background: aqua;
        align-self: flex-end;
        position: relative;
        bottom: 20px;
    }

    .category_title {
        display: flex;
        flex-direction: column;
        /*background: black;*/
        align-self: start;
        margin: 10px;
    }

    .text-header-card {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        margin-right: 10px;
        width: 90%;
        color: white;
        font-size: 20px;
        background: blue;
        position: relative;
        bottom: 40px;

    }
    .content-card {
        min-height: 59%;
        display: flex;
        flex-direction: column;
    }

    .text-content-card {
        color: white;
        padding: 10px;
        flex: 1;
    }

    .footer-card {
        min-height: 19%;
        display: flex;
        width: 95%;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        background:#999;

    }

    .buttons-footer-card {
        margin: 0;
        display: flex;
        flex-direction: row;
    }
    .buttons-footer-card button {
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
        text-decoration: none;
        font-size: 16px;
        border: none;
        color: white;
        outline: none;
        cursor: pointer;
    }

    btn-edit:hover,  btn-offer:hover{
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