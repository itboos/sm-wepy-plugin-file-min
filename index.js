const _prettyData = require('pretty-data')

function FileMinPlugin(config = {}) {
  return function () {
    this.register('build-components', comps => {
      const { enable = true } = config
      if (!enable) {
        return comps
      }
      let t = null
      let c = null
      for (let i = 0, len = comps.length; i < len; i++) {
        t = comps[i].sfc.template
        c = comps[i].sfc.config
        if (/^(wxml|xml|json)$/.test(t.lang)) {
          t.outputCode = _prettyData.pd.xmlmin(t.outputCode)
        }
      }
      return comps
    })
  }
}

module.exports = FileMinPlugin