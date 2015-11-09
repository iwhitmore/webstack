import {Model} from 'falcor'
import Source from 'falcor-http-datasource'

const httpDataSource = new Source('/jsongraph')
export const model = new Model({source: httpDataSource})
export const batchModel = model.batch()
