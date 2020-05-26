## Changelog

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
- Fix infinite loop for bad string like '*/0' or '1-2/0'
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
