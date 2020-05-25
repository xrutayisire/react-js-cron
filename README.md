## ReactJS Cron

> A React cron editor with [antd](https://github.com/ant-design/ant-design) inspired by [jqcron](https://github.com/arnapou/jqcron)

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
  clearButton?: boolean // Default: true
  defaultPeriod?: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' // Default: 'month'
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
    emptyHours?: string
    emptyWeekDays?: string
    emptyMonthDays?: string
    emptyMonths?: string
    emptyMinutes?: string
    emptyMinutesWhenHoursPeriod?: string
    minuteOption?: string
    hourOption?: string
    dayOption?: string
    weekOption?: string
    monthOption?: string
    yearOption?: string
    prefixPeriod?: string
    prefixHours?: string
    prefixWeekDays?: string
    prefixMonthDays?: string
    prefixMonths?: string
    prefixMinutes?: string
    prefixMinutesWhenHoursPeriod?: string
    suffixMinutesWhenHoursPeriod?: string
    errorInvalidCron?: string
    weekDays?: string[]
    months?: string[]
  }  // Default: See file 'src/locale.ts'
}
````

## License

MIT © [xrutayisire](https://github.com/xrutayisire)
  
