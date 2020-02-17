<template>
  <div>
      <nav class="navbar">
          <ul class="itens">
              <li class="options">
                  <a class="options-text">Início</a>
              </li>
              <li class="options">
                  <a class="options-text">Serviços</a>
                  <ul class="submenu">
                      <li class="sub-options"> <a class="sub-options-text">Listar</a> </li>
                      <hr>
                      <li class="sub-options"> <a class="sub-options-text">Cadastrar</a> </li>
                      <hr>
                      <li class="sub-options"> <a class="sub-options-text">Categorias</a> </li>
                  </ul>
              </li>
              <li class="options">
                  <a class="options-text">Usuário</a>
                  <ul class="submenu">
                      <li class="sub-options"> <a class="sub-options-text">Perfil</a> </li>
                      <hr>
                      <li class="sub-options"> <a class="sub-options-text">Sair</a> </li>
                  </ul>
              </li>
          </ul>
      </nav>
  </div>
</template>

<script>


export default {
  
}
</script>

<style scoped>
    .navbar {
        display: flex;
        flex-direction: row;
        height: 40px;
        width: 100%;
    }
    .navbar .itens {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        background: rgb(36, 41, 46);
        color: white;
        width: 100%;
    }
    .navbar .itens .options {
        padding-left: 20px;
        padding-right: 20px;
        cursor: pointer;
        height: 100%;
    }

    .submenu li{
        margin: 0;
        display: none;
        list-style: none;

    }

    li:hover > .submenu .sub-options {
        display: flex;
        flex-direction: row;
        flex: 1;
        align-content: start;

    }
    .options:hover > .submenu{
        position: absolute;
        display: flex;
        flex-direction: column;
    }

    li > .submenu {
        position: relative;
        display: none;
        flex-direction: column;
        top: 40px;
        height: 90px;
        width: 100px;
        background: rgb(36, 41, 46);
    }

    .options-text {

        position: relative;
        top: 10px;
    }

    .sub-options {
        padding: 5px;

    }
    .sub-options:hover {
        padding: 5px;
        background: rgba(0, 0, 0, 0.17);
    }

</style>