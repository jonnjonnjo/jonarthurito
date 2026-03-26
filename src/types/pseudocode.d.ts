declare module 'pseudocode' {
  interface RenderOptions {
    captionCount?: number
    caption?: string
    lineNumber?: boolean
    lineNumberPunc?: string
    noEnd?: boolean
    indentSize?: string
    commentDelimiter?: string
  }

  function render(code: string, el: HTMLElement, options?: RenderOptions): void
  function renderToString(code: string, options?: RenderOptions): string

  export default { render, renderToString }
}
