<!-- <script setup lang="ts">
import { ref } from 'vue';

// 1. Nossos estados reativos
const count = ref(0);
const historico = ref<number[]>([]); // Definimos que é um array de números

function alterar(valor: number) {
  // Guardamos o valor atual no histórico ANTES de mudar
  historico.value.push(count.value);

  // Somamos o valor (pode ser +1 ou -1)
  const novoValor = count.value + valor;

  // Verificamos os limites: só atualiza se estiver entre 0 e 10
  if (novoValor >= 0 && novoValor <= 10) {
    count.value = novoValor;
  }
}

function limparHistorico() {
  historico.value = [];
}
</script>

<template>
  <main>
    <h2>Contador: {{ count }}</h2>

    <button @click="alterar(-1)" :disabled="count === 0">Diminuir</button>
    <button @click="alterar(1)" :disabled="count === 10">Aumentar</button>

    <p v-if="count === 10" style="color: red; font-weight: bold;">
      ⚠️ Estoque máximo atingido!
    </p>

    <hr />

    <h3>Histórico de estados anteriores:</h3>
    <button @click="limparHistorico" v-if="historico.length > 0">Limpar Histórico</button>

    <ul>
      <li v-for="(valor, index) in historico" :key="index">
        Mudança {{ index + 1 }}: Estava em {{ valor }}
      </li>
    </ul>

    <p v-if="historico.length === 0">Nenhum movimento registrado ainda.</p>
  </main>
</template> -->

