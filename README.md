# css-customproperties-parser
Parser css custom properties into JS object.

## Api

```javascript
const CSSParser = require('css-customproperties-parser'),
	path = require('path'),
	CSS_FILE_PATH = path.resolve(__dirname, '/relative/path/to/filename.css');

const CSSobject = CSSParser.toJs(CSS_FILE_PATH);
console.log(CSSobject); // this is result object
```


CSS variable file has to be this structure, same name properties will be overwritten:

```css
:root {
	--color-divider: var(--palette-grey-200);
	--color-background: var(--color-white);
	--color-text: var(--palette-grey-900);
	--color-text-secondary: var(--palette-grey-600);
	--color-primary: var(--palette-red-600);
	--color-primary-dark: var(--palette-red-900);
	--color-accent: var(--palette-teal-500);
	--color-accent-dark: var(--palette-teal-900);
	--color-primary-contrast: var(--color-dark-contrast);
	--color-accent-contrast: var(--color-dark-contrast);
}

.test { 
	--color-accent-dark: var(--palette-hoola-900);
}
```

Output: 
```javascript
var result = { 
	'color-divider': 'var(--palette-grey-200)',
	'color-background': 'var(--color-white)',
	'color-text': 'var(--palette-grey-900)',
	'color-text-secondary': 'var(--palette-grey-600)',
	'color-primary': 'var(--palette-red-600)',
	'color-primary-dark': 'var(--palette-red-900)',
	'color-accent': 'var(--palette-teal-500)',
	'color-accent-dark': 'var(--palette-teal-900)',
	'color-primary-contrast': 'var(--color-dark-contrast)',
	'color-accent-contrast': 'var(--color-dark-contrast)' 
}
```
