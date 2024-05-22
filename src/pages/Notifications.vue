<template>
  <div class="wrapper human_wrapper">
        <div class="container p-0 mt-0 pb-5">
            <div class="card shadow pt-3">
                <div class="card-body">
                    <div class="card p-2 box-card">
                        <div class="card-header text-end">
                            <h6>Banco Alimentar - Porto</h6>
                        </div>
                        <div class="card-content d-flex align-items-center">
                            <div class="image">
                                <img src="/assets/images/image.png" alt="" style="width: 89px; height: 89px;">
                            </div>
                            <div class="content ms-2">
                                <i class="fa fa-clock"></i><span class="ms-2">9h</span> <br>
                                <i class="fa fa-users"></i><span class="ms-2">10-15</span> <br>
                                <i class="fa fa-download"></i><span class="ms-2">04.06.2024</span> <br>
                                <i class="fa fa-location"></i><span class="ms-2">Porto, Portugal</span>
                            </div>
                        </div>
                        <a :href="getDashboardUrl()">
                            <button class="btn btn-primary mr-7" style="font-size: 16px; padding: 10px;">Abrir</button>
                        </a>
                    </div>
                </div>

                <div class="card-body">
                    <div class="card p-2 box-card">
                        <div class="card-header text-end">
                            <h6>Voluntariado em Africa</h6>
                        </div>
                        <div class="card-content d-flex align-items-center">
                            <div class="image">
                                <img src="/assets/images/img2.png" alt="">
                            </div>
                            <div class="content ms-2">
                                <i class="fa fa-clock"></i><span class="ms-2">13h</span> <br>
                                <i class="fa fa-users"></i><span class="ms-2">10-20</span> <br>
                                <i class="fa fa-download"></i><span class="ms-2">01.04.2024</span> <br>
                                <i class="fa fa-location"></i><span class="ms-2">São Tomé e Príncipe</span>
                            </div>
                        </div>
                        <a>
                            <button class="btn btn-primary mr-7" style="font-size: 16px; padding: 10px;">Fechado</button>
                        </a>
                    </div>
                </div>

                <div class="card-body">
                    <div class="card p-2 box-card">
                        <div class="card-header text-end">
                            <h6>Banco Alimentar</h6>
                        </div>
                        <div class="card-content d-flex align-items-center">
                            <div class="image">
                                <img src="/assets/images/img3.png" alt="">
                            </div>
                            <div class="content ms-2">
                                <i class="fa fa-clock"></i><span class="ms-2">16h</span> <br>
                                <i class="fa fa-users"></i><span class="ms-2">14-20</span> <br>
                                <i class="fa fa-download"></i><span class="ms-2">02.02.2024</span> <br>
                                <i class="fa fa-location"></i><span class="ms-2">Porto, Portugal</span>
                            </div>
                        </div>
                        <a>
                            <button class="btn btn-primary mr-7" style="font-size: 16px; padding: 10px;">Fechado</button>
                        </a>
                    </div>
                </div>
                <div class="shadow-color">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    getDashboardUrl() {
      return this.$router.resolve({ name: 'Indicadores' }).href;
    }
  },
};
</script>
<style>
.image {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>
