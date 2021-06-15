<!DOCTYPE html>
@include('sections.head')

<html lang="en">
    <body class="hold-transition sidebar-mini">
    <div class="wrapper" id="app">
        <app-component ruta="{{ route('basepath')  }}" ></app-component>
    </div>
    @include('sections.script')
</body>
</html>
