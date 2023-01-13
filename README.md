# streamable-validate
Checks the validity of Streamable URLs.

---

# Installation
`npm install streamable-validate`

## URL Validity
Valid URLs are streamable URLs that link to an existing video. Codes are case sensitive
#### Examples
```javascript
const valid1 = "streamable.com/(valid code)"
const valid2 = "wwww.streamable.com/(valid code)"
const valid3 = "https://streamable.com/(valid code)"
const valid4 = "https://www.streamable.com/(valid code)"
const valid5 = "STREAMABLE.COM/(valid code)"
```
#### Invalid Examples
```javascript
const invalid1 = "not-streamable-link"
const invalid2 = "streamable.com"
const invalid3 = "streamable.com/(invalid code)"
```

---

# Usage
```javascript
const {validateStreamableURL} = require('streamable-validate')

validateStreamableURL(url)
    .then (response => {
        // do something
    })
    .catch (error => {
        // handle error
    })
```