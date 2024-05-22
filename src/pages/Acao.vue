<template>
    <div class="wrapper acao_wrapper">
        <div class="container p-0 mt-0 pb-5">
            <div class="mt-5">
                <div class="card p-3 shadow top-card pt-3">
                    <div class="card-body">
                        <div class="card child-card p-3 pb-4 box-card">
                            <div class="card-header-top d-flex justify-content-between align-items-center">
                                <h3>Banco Alimentar - Porto</h3>
                            </div>
                            <div class="card-content">
                                <div class="item-list pt-2 mt-3">
                                    <div class="row">
                                        <div class="col-8">
                                            <h4>Inserir imagens Relevantes para este Evento</h4>
                                        </div>
                                        <div class="col-4">
                                            <div class="icon text-center">
                                                <span>Vídeo/foto</span>
                                                <div class="py-2">
                                                    <base-button @click="openFileDialog" style="font-size: 20px; padding: 5px; text-align: center;">🎦</base-button>
                                                </div>
                                                <span>Limite: 50kb</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Input file escondido -->
                                <input ref="fileInput" type="file" accept="image/*" @change="handleFileChange" style="display: none;" />

                                <!-- Pré-visualização das imagens (opcional) -->
                                <div v-if="images.length" class="image-preview mt-4">
                                    <h5>Imagens Selecionadas:</h5>
                                    <div class="d-flex flex-wrap">
                                        <div v-for="(image, index) in images" :key="index" class="image-item">
                                            <img :src="image" alt="Image Preview" style="max-width: 100px; margin: 5px;" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <base-button @click="downloadImages">Guardar Imagens</base-button>
              </div>
            </div>
          </div>
        </div>
</template>

<script setup>
import { ref } from 'vue';

// Lista de imagens selecionadas
const images = ref([]);
const selectedFiles = ref([]);

// Método para abrir o input file quando o botão é clicado
const openFileDialog = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.multiple = true;
  input.onchange = handleFileChange;
  input.click();
};

// Método para lidar com a seleção de arquivos
const handleFileChange = (event) => {
  // Limpar a lista de imagens e arquivos selecionados
  images.value = [];
  selectedFiles.value = [];

  const files = event.target.files;
  if (files.length) {
    for (const file of files) {
      // Verificar o tamanho do arquivo
      if (file.size <= 50 * 1024) { // Limite de 50kb
        // Adicionar a imagem à lista de imagens
        images.value.push(URL.createObjectURL(file));
        selectedFiles.value.push(file);
      } else {
        alert("O arquivo " + file.name + " excede o limite de 50kb e não será adicionado.");
      }
    }
  }
};

// Método para fazer o download das imagens
const downloadImages = () => {
  if (images.value.length > 0) {
    // Criar um objeto FormData e adicionar as imagens selecionadas
    const formData = new FormData();
    images.value.forEach((file) => {
      formData.append('images[]', file);
    });

    // Criar um objeto Blob contendo o FormData
    const blob = new Blob([formData], { type: 'application/zip' });

    // Criar um URL temporário para o Blob
    const url = URL.createObjectURL(blob);

    // Criar um link para o URL temporário
    const link = document.createElement('a');
    link.href = url;
    link.download = 'imagens_selecionadas.zip';

    // Simular o clique no link para iniciar o download
    link.click();

    // Limpar o URL temporário após o download ser iniciado
    URL.revokeObjectURL(url);
  } else {
    alert('Nenhuma imagem selecionada.');
  }
};
</script>

<style>
.image-preview .image-item {
  border: 1px solid #ccc;
  padding: 5px;
}
</style>
