<template>
  <div>
      <nav class="navbar">
          <ul class="itens">
              <li class="options">
                  <a>Início</a>
              </li>
              <li class="options">
                  <a>Serviços</a>
                  <ul class="submenu">
                      <li class="sub-options"> <a>Listar</a> </li>

                      <li class="sub-options"> <a>Cadastrar</a> </li>

                      <li class="sub-options"> <a>Categorias</a> </li>
                  </ul>
              </li>
              <li class="options">
                  <a>Usuário</a>
                  <ul class="submenu">
                      <li class="sub-options"> <a>Perfil</a> </li>

                      <li class="sub-options"> <a>Sair</a> </li>
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
    }

    .submenu li{
        margin: 0;
        display: none;
        list-style: none;
        cursor: pointer;




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
        position: absolute;
        flex-direction: row;
        display: flex;
        background: rgb(36, 41, 46);
    }





</style>