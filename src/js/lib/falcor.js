import falcor from 'falcor/dist/falcor.browser.min'

const httpDataSource = new falcor.HttpDataSource('/jsongraph')
export const model = new falcor.Model({source: httpDataSource})

export const batchModel = model.batch()
