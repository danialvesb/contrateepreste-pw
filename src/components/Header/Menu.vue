<template>
  <b-container fluid class="m-0 p-0">
      <b-row class="m-0 p-0" cols="12">
          <b-col class="m-0 p-0">
              <b-navbar type="dark" variant="dark">
                  <b-navbar-nav >
                      <b-nav-item href="/inicio">Início</b-nav-item>

                      <b-nav-item-dropdown text="Serviços">
                          <b-dropdown-item href="/servicos/listar">Listar</b-dropdown-item>
                          <b-dropdown-item href="/servicos/cadastrar">Cadastrar</b-dropdown-item>
                          <b-dropdown-item href="/servicos/categorias">Categorias</b-dropdown-item>
                      </b-nav-item-dropdown>

                      <b-nav-item-dropdown text="Usuário" class="navbar-item">
                          <b-dropdown-item href="#">Perfil</b-dropdown-item>
                          <b-dropdown-item href="#">Sair</b-dropdown-item>
                      </b-nav-item-dropdown>
                  </b-navbar-nav>
              </b-navbar>
          </b-col>

      </b-row>
  </b-container>
</template>

<script>
import { BNavbar, BNavItem, BNavItemDropdown, BDropdownItem, BNavbarNav } from 'bootstrap-vue'

export default {
    components: {
        'b-navbar': BNavbar,
        'b-nav-item': BNavItem,
        'b-nav-item-dropdown': BNavItemDropdown,
        'b-dropdown-item': BDropdownItem,
        'b-navbar-nav': BNavbarNav
    }
}
</script>

<style scoped>

</style>