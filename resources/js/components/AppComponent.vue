<template>
    <div>
        <!-- Navbar -->
        <NavbarComponent :ruta="ruta"></NavbarComponent>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <SidebarComponent :ruta="ruta"></SidebarComponent>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <!-- /.content-wrapper -->

        <FooterComponent></FooterComponent>
        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
</template>

<script>
import NavbarComponent from './layouts/NavbarComponent';
import SidebarComponent from './layouts/SidebarComponent';
import ContentComponent from './layouts/ContentComponent';
import FooterComponent from './layouts/FooterComponent';

export default {
    props: ['ruta'],
    components: {
        FooterComponent,
        ContentComponent,
        SidebarComponent,
        NavbarComponent
    },
    name: 'AppComponent'
};
</script>

<style scoped></style>
