# Antd Admin

[![React](https://img.shields.io/badge/react-^15.6.1-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![Ant Design](https://img.shields.io/badge/ant--design-^2.11.2-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![dva](https://img.shields.io/badge/dva-^2.0.1-orange.svg?style=flat-square)](https://github.com/dvajs/dva)

[![GitHub issues](https://img.shields.io/github/issues/zuiidea/antd-admin.svg?style=flat-square)](https://github.com/zuiidea/antd-admin)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/zuiidea/antd-admin/pulls)
[![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

demo <http://antd-admin.zuiidea.com>


### File Structure

```bash
├── /dist/           # Compiled files 
├── /src/            # Source code
│ ├── /components/   # Resusable components
│ │ ├── skin.less    # Global stylesheet of component
│ │ └── vars.less    # Global less variables
│ ├── /routes/       # Redux router
│ │ └── app.js       # Redux entry
│ ├── /models/       # Redux saga model
│ ├── /services/     # Api services
│ ├── /themes/       # Stylesheet
│ ├── /mock/         # Mock data
│ ├── /utils/         
│ │ ├── config.js    # Configurations
│ │ ├── menu.js      # Website menu
│ │ ├── request.js   # Api service request functions
│ │ └── theme.js     # Global stylesheet configruations
│ ├── route.js       # Router of website
│ ├── index.js       # Entry of website
│ └── index.html     
├── package.json     # Project dependencies 
├── .eslintrc        # Eslint configruations
└── .roadhogrc.js    # roadhog configruations
```


### How to start

Clone project:

```bash
git clone https://github.com/zuiidea/antd-admin.git
```

Install dependencies:

```bash
npm i or yarn install
```

development：

```bash
npm run build:dll #before you npm run dev, you need to build dll at first time
npm run dev
打开 http://localhost:8000
```

build
```bash
npm run build

Generate a new version
npm run build:new
```

lint checking：

```bash
npm run lint
```
