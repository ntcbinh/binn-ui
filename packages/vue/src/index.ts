import { defineComponent, h } from "vue"
import { getButtonClass } from "@binn-ui/core"

export const Button = defineComponent({
  name: "UiButton",
  props: {
    label: { type: String, required: false },
    className: { type: String, required: false }
  },
  setup(props, { attrs }) {
    return () =>
      h(
        "button",
        { class: getButtonClass({ className: props.className }), ...attrs },
        props.label
      )
  }
})
