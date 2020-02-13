<template>
  <div>
    <b-navbar class="navbar">
        <b-navbar-nav class="inicio">
          <a href="/inicio">Início</a>
        </b-navbar-nav>

        <b-navbar-nav class="ml-3">
          <b-nav-item-dropdown class="color-dropdown" >
            <template v-slot:button-content>
                Serviços
            </template>
              <b-dropdown-item href="/servicos/listar">
                Listar
              </b-dropdown-item>
              <b-dropdown-item href="/servicos/cadastrar"> 
                Cadastrar
              </b-dropdown-item>
              <b-dropdown-item href="/servicos/categorias">
                Categorias
              </b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>


        <b-navbar-nav class="ml-3">
            <!-- Login -->
            <b-nav-item-dropdown >
              <template v-slot:button-content>
                  Usuário
              </template>
              <b-dropdown-item href="#">Perfil</b-dropdown-item>
              <b-dropdown-item href="#">Sair</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        
    </b-navbar>
  </div>
</template>

<script>


export default {
  
}
</script>

<style>
  .navbar {
    background: rgb(36, 64, 66);
  }

  .inicio a {
    color: white;
    text-decoration: none;
  }

  .color-dropdown {
    background: rgb(36, 64, 66);
  }

</style>