export default function (moduleOptions) {
  if (moduleOptions.fontAwesome !== false) {
    this.options.css.push('font-awesome/css/font-awesome.css')
  }
}