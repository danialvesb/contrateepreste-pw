<template>
  <div>
      <nav class="navbar">
          <ul>
              <li>
                  <a>Início</a>
              </li>
              <li>
                  <a>Serviços</a>
                  <ul class="submenu-1">
                      <li> <a>Listar</a> </li>
                      <li> <a>Cadastrar</a> </li>
                      <li> <a>Categorias</a> </li>
                  </ul>
              </li>
              <li>
                  <a>Usuário</a>
                  <ul class="submenu-2">
                      <li> <a>Perfil</a> </li>
                      <li> <a>Sair</a> </li>
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

<style >
    nav {
        background: rgb(36, 41, 46);
    }

    .navbar ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .navbar ul li {
        list-style: none;
        padding: 10px;
    }

    .navbar ul li a {
        text-decoration: none;
        color: white;
    }

    .submenu-1 {
        display: none;
    }

    .submenu-2 {
        display: none;
    }





</style>