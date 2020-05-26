## ReactJS Cron

> A React cron editor with [antd](https://github.com/ant-design/ant-design) inspired by [jqCron](https://github.com/arnapou/jqcron)

[![npm package](https://img.shields.io/npm/v/react-js-cron/latest.svg)](https://www.npmjs.com/package/react-js-cron)

Live **demo** and **usage** at https://xrutayisire.github.io/react-js-cron/

![react-js-cron example](https://raw.githubusercontent.com/xrutayisire/react-js-cron/master/react-js-cron-example.png)

## Install

Be sure that you have these dependencies on your project:
* antd
* react
* react-dom

```bash
# Yarn
yarn add react-js-cron

# NPM
npm install --save react-js-cron
```

## Usage

Learn more at https://xrutayisire.github.io/react-js-cron/

## API

```
CronProps {
  value: string
  setValue: 
    | (value: string) => void
    | Dispatch<SetStateAction<string>> 
  className?: string
  humanizeLabels?: boolean // Default: true
  humanizeValue?: boolean // Default: false
  defaultPeriod?: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' // Default: 'day'
  disabled?: boolean // Default: false
  allowEmpty?: 'always' | 'never' | 'for-default-value' // Default: 'for-default-value'
  clearButton?: boolean // Default: true
  clearButtonProps?: ButtonProps // Extends antd button props without onClick
  displayError?: boolean // Default: true
  setError?: 
    | (error: {
      type: 'invalid_cron'
      description: string
    }) => void
    | Dispatch<SetStateAction<{
      type: 'invalid_cron'
      description: string
    }>>
    | undefined
  locale?: {
    everyText?: string
    emptyMonths?: string
    emptyMonthDays?: string
    emptyMonthDaysShort?: string
    emptyWeekDays?: string
    emptyWeekDaysShort?: string
    emptyHours?: string
    emptyMinutes?: string
    emptyMinutesForHourPeriod?: string
    yearOption?: string
    monthOption?: string
    weekOption?: string
    dayOption?: string
    hourOption?: string
    minuteOption?: string
    prefixPeriod?: string
    prefixMonths?: string
    prefixMonthDays?: string
    prefixWeekDays?: string
    prefixWeekDaysForMonthAndYearPeriod?: string
    prefixHours?: string
    prefixMinutes?: string
    prefixMinutesForHourPeriod?: string
    suffixMinutesForHourPeriod?: string
    errorInvalidCron?: string
    weekDays?: string[]
    months?: string[]
  }  // Default: See file 'src/locale.ts'
}
````

## License

MIT © [xrutayisire](https://github.com/xrutayisire)
  
