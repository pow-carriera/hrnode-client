<script lang="ts" setup>
import * as fns from "date-fns";
import { initFlowbite } from "flowbite";
import { onMounted, ref } from "vue";
const props = defineProps(["attendance"]);

onMounted(() => {
  initFlowbite();
});

import { formatISOToReadable } from "@/utilities/time";
</script>
<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{ fns.format(new Date(props.attendance.date), "PP") }}
    </th>
    <td class="px-6 py-4">{{ formatISOToReadable(props.attendance.timeInAm, "p") }}</td>
    <td class="px-6 py-4">{{ formatISOToReadable(props.attendance.timeOutAm, "p") }}</td>
    <td class="px-6 py-4">{{ formatISOToReadable(props.attendance.timeInPm, "p") }}</td>
    <td class="px-6 py-4">{{ formatISOToReadable(props.attendance.timeOutPm, "p") }}</td>
    <td class="px-6 py-4">
      AM: {{ props.attendance.hoursWorkedAm }} | PM: {{ props.attendance.hoursWorkedPm }}
    </td>
    <td>
      <p class="mx-0.5 inline bg-emerald-600 w-10 text-white p-1.5 rounded-lg text-center">
        On Time
      </p>
      <p class="mx-0.5 inline bg-orange-500 w-10 text-white p-1.5 rounded-lg text-center">Late</p>
      <p class="mx-0.5 inline bg-slate-500 w-10 text-white p-1.5 rounded-lg text-center">
        Early Out
      </p>
      <p class="mx-0.5 inline bg-red-600 w-10 text-white p-1.5 rounded-lg text-center">Absent</p>
    </td>
  </tr>
</template>
