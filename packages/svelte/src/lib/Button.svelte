<script lang="ts">
  import { getButtonClass } from "@binn-ui/core";

  export let label: string = "";
  export let className: string = "";
</script>

<button class={getButtonClass({ className })}>
  {label}
</button>
