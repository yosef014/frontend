<template>
  <section>
     <el-progress type="circle" :percentage="0" />
    <el-progress type="circle" :percentage="25" />
    <el-progress type="circle" :percentage="100" status="success" />
    <!-- <div class="chrats-container">
      <div class="chart-one">
        <BarChart :chartData="testData" :width="90" :height="90" />
      </div>
      <div class="chart-two">
        <DoughnutChart :chartData="testData" :width="90" :height="90" />
      </div>
    </div> -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BarChart,DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: "Home",
  components: { BarChart ,DoughnutChart},
  setup() {
    const testData = {
      labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
          ],
        },
      ],
    };

    return { testData };
  },
});
</script>
