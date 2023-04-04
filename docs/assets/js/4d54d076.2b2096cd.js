"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="Contributing",l={unversionedId:"contributing",id:"contributing",title:"Contributing",description:"Development server",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/react-jsonschema-form/docs/contributing",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/contributing.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Quickstart",permalink:"/react-jsonschema-form/docs/quickstart"},next:{title:"JSON Schema",permalink:"/react-jsonschema-form/docs/json-schema"}},s={},p=[{value:"Development server",id:"development-server",level:2},{value:"First time step",id:"first-time-step",level:3},{value:"Optional development process",id:"optional-development-process",level:3},{value:"Cloud builds",id:"cloud-builds",level:2},{value:"Coding style",id:"coding-style",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Tests",id:"tests",level:2},{value:"Snapshot testing",id:"snapshot-testing",level:3},{value:"Code coverage",id:"code-coverage",level:3},{value:"Utils and validator-ajvX code coverage",id:"utils-and-validator-ajvx-code-coverage",level:4},{value:"Releasing",id:"releasing",level:2},{value:"Releasing docs",id:"releasing-docs",level:3},{value:"Releasing the playground",id:"releasing-the-playground",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing"},"Contributing"),(0,r.kt)("h2",{id:"development-server"},"Development server"),(0,r.kt)("p",null,"We are using ",(0,r.kt)("inlineCode",{parentName:"p"},"Vite")," to power our ",(0,r.kt)("inlineCode",{parentName:"p"},"playground"),", which caches all the built ",(0,r.kt)("inlineCode",{parentName:"p"},"@rjsf/*")," distributions.\nIn order to test the ",(0,r.kt)("inlineCode",{parentName:"p"},"playground")," locally after a new clone or fresh pull from ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),", run the following from the root directory of the monorepo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run build\ncd packages/playground\nnpm start\n")),(0,r.kt)("p",null,"This will start the live development server showcasing components at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080"),"."),(0,r.kt)("p",null,"Whenever you make changes to source code, stop the running playground and return to the root directory and rerun ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build"),".\nThanks to ",(0,r.kt)("inlineCode",{parentName:"p"},"nx")," caching, this should only rebuild what is necessary.\nAfter the build is complete, return to the root of the ",(0,r.kt)("inlineCode",{parentName:"p"},"playground")," and restart the server via ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start"),"."),(0,r.kt)("h3",{id:"first-time-step"},"First time step"),(0,r.kt)("p",null,"If this is the first time you have cloned the repo, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run prepare")," script that will set up ",(0,r.kt)("inlineCode",{parentName:"p"},"husky")," to provide a git precommit hook that will format and lint any code you have added to a PR."),(0,r.kt)("h3",{id:"optional-development-process"},"Optional development process"),(0,r.kt)("p",null,"With the large number of packages, sometimes running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," from the root directory will overwhelm an underpowered computer.\nIf that is the situation for you, you can instead use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build-serial")," to build the packages one at a time instead of all at once.\nAlso, if you are only working on one package, you can ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run test")," from within the subdirectory.\nFinally, you can simply ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," inside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"playground")," directory to test changes if you have already built all of your packages, without needing to watch all of the packages via the root directory ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start"),"."),(0,r.kt)("h2",{id:"cloud-builds"},"Cloud builds"),(0,r.kt)("p",null,"When building in environments with limited memory, such as Netlify, it's recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build-serial")," that builds the packages serially."),(0,r.kt)("h2",{id:"coding-style"},"Coding style"),(0,r.kt)("p",null,"All the JavaScript/Typescript code in this project conforms to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prettier/prettier"},"prettier")," coding style.\nCode is automatically prettified upon commit using precommit hooks, assuming you followed the ",(0,r.kt)("inlineCode",{parentName:"p"},"First time step")," above."),(0,r.kt)("p",null,"You can also run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm cs-format")," within any package directory you are changing."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," to build our documentation. To run documentation locally, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd packages/docs\nnpm start\n")),(0,r.kt)("p",null,"Documentation will be served on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"localhost:3000"),"."),(0,r.kt)("h2",{id:"tests"},"Tests"),(0,r.kt)("p",null,"You can run all tests from the root directory OR from ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," subdirectory using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test\n")),(0,r.kt)("h3",{id:"snapshot-testing"},"Snapshot testing"),(0,r.kt)("p",null,"All the themes, including ",(0,r.kt)("inlineCode",{parentName:"p"},"core")," use snapshot testing (NOTE: ",(0,r.kt)("inlineCode",{parentName:"p"},"core")," also has extensive non-snapshot tests).\nThe source-code of these snapshot tests reside in the ",(0,r.kt)("inlineCode",{parentName:"p"},"core")," package in the ",(0,r.kt)("inlineCode",{parentName:"p"},"testSnap")," directory and are shared with all the themes.\nIn order to support the various themes, the code for the tests are actually functions that take two parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Form"),": ComponentType","<","FormProps> - The component from the theme implementation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[customOptions]"),": { ","[key: string]",": TestRendererOptions } - an optional map of ",(0,r.kt)("inlineCode",{parentName:"li"},"react-test-renderer")," ",(0,r.kt)("inlineCode",{parentName:"li"},"TestRendererOptions")," implementations that some themes need to be able properly run")),(0,r.kt)("p",null,"There are functions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"testSnap")," directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"arrayTests"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"formTests")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"objectTests"),", each with its own definition of ",(0,r.kt)("inlineCode",{parentName:"p"},"customOptions")),(0,r.kt)("p",null,"Each theme will basically run these functions by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"Xxx.test.tsx")," file (where ",(0,r.kt)("inlineCode",{parentName:"p"},"Xxx")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Form")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),") that looks like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import arrayTests from '@rjsf/core/testSnap/arrayTests'; // OR\n// import arrayTests from '@rjsf/core/testSnap/formTests'\n// import arrayTests from '@rjsf/core/testSnap/objectTests'\n\nimport Form from '../src';\n\narrayTests(Form); // OR\n// formTests(Form);\n// objectTests(Form);\n")),(0,r.kt)("p",null,"Anytime you add a new feature, be sure to update the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"xxxTests()")," function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"testSnap")," directory and do ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run test")," from the root directory to update all the snapshots.\nIf you add a theme-only feature, it is ok to update the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"Xxx.test.tsx")," file to add (or update) the theme-specific ",(0,r.kt)("inlineCode",{parentName:"p"},"describe()")," block.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport arrayTests from '@rjsf/core/testSnap/formTests';\n\nimport Form from '../src';\n\nformTests(Form);\n\ndescribe('Theme specific tests', () => {\n  it('test a theme-specific option', () => {\n    const schema: RJSFSchema = {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string',\n        },\n      },\n    };\n    const uiSchema: UiSchema = {\n      // Enable the theme specific feature\n    };\n    const tree = renderer.create(<Form schema={schema} uiSchema={uiSchema} validator={validator} />).toJSON();\n    expect(tree).toMatchSnapshot();\n  });\n});\n")),(0,r.kt)("p",null,"See the ",(0,r.kt)("inlineCode",{parentName:"p"},"antd")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Form.test.tsx")," for a specific example of this."),(0,r.kt)("h3",{id:"code-coverage"},"Code coverage"),(0,r.kt)("p",null,"Code coverage reports are currently available only for the ",(0,r.kt)("inlineCode",{parentName:"p"},"@rjsf/core")," theme package.\nThey are generated using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/istanbuljs/nyc"},"nyc")," each time the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test-coverage")," script is run.\nThe full report can be seen by opening ",(0,r.kt)("inlineCode",{parentName:"p"},"./coverage/lcov-report/index.html"),"."),(0,r.kt)("h4",{id:"utils-and-validator-ajvx-code-coverage"},"Utils and validator-ajvX code coverage"),(0,r.kt)("p",null,"100% code coverage is required by the ",(0,r.kt)("inlineCode",{parentName:"p"},"@rjsf/utils")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@rjsf/validator-ajv6")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@rjsf/validator-ajv8")," tests.\nIf you make changes to those libraries, you will have to maintain that coverage, otherwise the tests will fail."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: All three of these directories share the same tests for verifying ",(0,r.kt)("inlineCode",{parentName:"p"},"validator")," based APIs. See the documentation in the ",(0,r.kt)("inlineCode",{parentName:"p"},"getTestValidator()")," functions for more information.")),(0,r.kt)("h2",{id:"releasing"},"Releasing"),(0,r.kt)("p",null,"To release, go to the main branch and then create a new branch with the version number (with an ",(0,r.kt)("inlineCode",{parentName:"p"},"rc")," prefix instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"v"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b rc5.0.1\ngit push\nnpx lerna version\n")),(0,r.kt)("p",null,"Make sure you use ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"semver")," for version numbering when selecting the version.\nThe command above will create a new version tag and push it to GitHub."),(0,r.kt)("p",null,"Note that if you are releasing a new major version, you should bump the peer dependency ",(0,r.kt)("inlineCode",{parentName:"p"},"@rjsf/core")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," files of other packages accordingly."),(0,r.kt)("p",null,'Then, make a PR to main. Merge the PR into main -- make sure you use "merge commit", not squash and merge, so that\nthe original commit where the tag was based on is still present in the main branch.'),(0,r.kt)("p",null,'Then, create a release in the GitHub "Releases" tab, select the new tag that you have added,\nand add a description of the changes in the new release. You can copy\nthe latest changelog entry in ',(0,r.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md")," to make the release notes, and update as necessary."),(0,r.kt)("p",null,"This will trigger a GitHub Actions pipeline that will build and publish all packages to npm."),(0,r.kt)("p",null,"The package is published through an automation token belonging to the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/~rjsf-bot"},"rjsf-bot")," user on npm. This token\nis stored as the ",(0,r.kt)("inlineCode",{parentName:"p"},"NPM_TOKEN")," secret on GitHub Actions."),(0,r.kt)("h3",{id:"releasing-docs"},"Releasing docs"),(0,r.kt)("p",null,"Docs are automatically published to GitHub Pages when the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch is updated."),(0,r.kt)("p",null,"We are currently in the process of automatically configuring versionable documentation on our new docs site."),(0,r.kt)("h3",{id:"releasing-the-playground"},"Releasing the playground"),(0,r.kt)("p",null,"The playground automatically gets deployed from GitHub Pages."),(0,r.kt)("p",null,"If you need to manually publish the latest playground to ",(0,r.kt)("a",{parentName:"p",href:"https://rjsf-team.github.io/react-jsonschema-form/"},"https://rjsf-team.github.io/react-jsonschema-form/"),", though, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd packages/playground\nnpm run publish-to-gh-pages\n")))}m.isMDXComponent=!0}}]);