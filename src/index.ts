import * as converter from './converter'
import Cron from './Cron'

export * from './types'

// Support "import { Cron } from 'react-js-cron'"
// Support "import { Cron as ReactJSCron } from 'react-js-cron'"
export { Cron, converter }

// Support "import Cron from 'react-js-cron'"
export default Cron
