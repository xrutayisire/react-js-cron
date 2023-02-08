import Cron from './Cron'
import * as convertor from './converter'

export * from './types'

// Support "import { Cron } from 'react-js-cron'"
// Support "import { Cron as ReactJSCron } from 'react-js-cron'"
export { Cron, convertor }

// Support "import Cron from 'react-js-cron'"
export default Cron
