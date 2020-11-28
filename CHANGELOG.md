## Changelog

#### 1.2.0

- **(New feature)** Issue [#3](https://github.com/xrutayisire/react-js-cron/issues/3): "Add the possibility to translate alternative labels"
- Fix typo in README

#### 1.1.1

- Fix issue [#2](https://github.com/xrutayisire/react-js-cron/issues/2): "antd Select cannot work when using Cron component"
- Add dependencies version in README
- Add link in README to story for clear button action management

#### 1.1.0

- **(Breaking change!)** Drop support of antd version anterior to 4.6.0 due to
  change on rc-virtual-list
- **(Breaking change!)** Fix period change not handling new value, changing
  period now change the value
- Add the possibility to choose clear button action, empty or fill-with-every
- Fix issue [#1](https://github.com/xrutayisire/react-js-cron/issues/1) "Styling of popovers breaks with latest antd version"
- Fix a problem with the onBlur function not triggered by Select component
- Fix antd automatic tree-shaking not working in many cases

#### 1.0.8

- Fix double-click wrong output
- Rewrite the entire cron converter to support some missing cron expressions
- Fix typo in peer dependencies
- Improve read-only mode by hiding week days or month days if not needed

#### 1.0.7

- Improve rendering problems caused by the new responsive management
- Fix locale update not changing some labels
- Rename setError to onError to improve naming
- Update README API section
- Add @reboot to the supported shortcuts
- Change leading zero prop type to be easy to use
- Fix missing locale property for clear button text
- Fix no-prefix class on period field
- The default period should only be read once
- Fix double margin-bottom on fields
- Prevent select dropdown to overlap window by changing dropdown popup direction
- Update demo links in README

#### 1.0.6

- Fix regression on multiple detection
- Add a prop to choose a clock format, 12-hour clock or 24-hour clock
- Fix bug with multiple on months and week days
- Fix display of dropdown options when leadingZero is active
- Update README to add features info and usage
- Improve responsive design management
- Add support for cron shortcuts by default
- Update hooks dependencies to prevent multiple re-render
- Support import with an alias

#### 1.0.5

- Update README image with new features
- Add a prop leadingZero to add a '0' before number lower than 10
- Add a prop to make the component read only
- Add a prop to disable the component
- Set day as default period
- Add missing support for mixing week days with month and month days
- Rename some locale properties to fix typos
- Fix typo in jqCron name

#### 1.0.4

- Add a prop to humanize the value
- The value should not be changed using humanizeLabels

#### 1.0.3

- Fix bug when the input string contains duplicates
- Clear button should have a margin-bottom in case of a break line
- Add prop to humanize labels for week days and months
- Add a prop 'allowEmpty' to choose how the component handles the default value
- Add a prop 'defaultPeriod' used when the default value is an empty string
- Empty string and invalid string should not change the value
- Fix a bug accepting string like '5-0'
- Fix infinite loop for bad string like '\*/0' or '1-2/0'
- Always use 0 for Sunday
- Fix a bug when using 0 for Sunday

#### 1.0.2

- Fix bug that caused the impossibility to unselect last value
- Style modification to display errors correctly over antd default style
- Update peerDependencies to add minimal versions
- Improve custom select onClickOption function
- Fix typo in README

#### 1.0.1

- Update README image example for npm

#### 1.0.0

- Initial release of the library
