<template>
    <!-- div utama -->
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Test API</div>
                    <div v-if="loading == false">
                        <div class="card-body">
                            I'm an example component.

                            <p class="mt-2">response :</p>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">NAMA</th>
                                  <th scope="col">JENIS KELAMIN</th>
                                  <th scope="col">TANGGAL</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="item in data" :key="item.id">
                                  <td>{{item.nama}}</td>
                                  <td>{{item.jk}}</td>
                                  <td>{{item.created_at}}</td>
                                </tr>
                              </tbody>
                            </table>
                            <div style="color:blue;">
                                {{ data }}
                            </div>    
                        </div>
                    </div>
                    <div v-else>
                        <vue-progress-bar></vue-progress-bar>
                        <!-- loading... -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // export default itu mendefinisikan instansiasi Vue di file app.js
    export default {
        data() {
            return {
                data: [],
                loading: false
            }
        },

        mounted() {
            this.getData()
        },

        methods: {
            getData() {                
                this.loading = true
                this.$Progress.start();
                axios.get('/testapi')
                .then((res) => {
                    this.data = res.data.data
                    this.loading = false
                    this.$Progress.finish();
                })
                .catch((error) => {
                    this.data = error.message
                    this.loading = false
                    this.$Progress.fail();
                })
            }
        }
    }
</script>
