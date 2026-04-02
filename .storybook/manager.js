import { addons } from '@storybook/manager-api'
import { STORY_RENDERED } from '@storybook/core-events'

addons.register('TitleAddon', (api) => {
  api.on(STORY_RENDERED, () => {
    document.title = 'ReactJS Cron'
  })
})
