export type ButtonOptions = {
  label?: string
  className?: string
}

export function getButtonClass(opts: ButtonOptions) {
  return `btn ${opts.className ?? ""}`
}
