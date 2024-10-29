"use strict";(self.webpackChunkcrewcrew=self.webpackChunkcrewcrew||[]).push([[801],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/common/input/file-input-wrap/file-sample/file-sample.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FileSample01:()=>FileSample01,__namedExportsOrder:()=>__namedExportsOrder,default:()=>file_sample_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");function FileSample({imgUrl,isBlur,onChange}){const radioInput=(0,react.useRef)(null);return(0,react.useEffect)((()=>{isBlur&&radioInput.current&&(radioInput.current.checked=!1)}),[isBlur]),(0,jsx_runtime.jsxs)("label",{className:"min-w-1/4 relative aspect-square w-1/4 overflow-hidden rounded-xl",children:[(0,jsx_runtime.jsx)("input",{type:"radio",onChange:async()=>{const file=await(async(url,fileName,mimeType)=>{var _url_toString;const res=await fetch(null!==(_url_toString=null==url?void 0:url.toString())&&void 0!==_url_toString?_url_toString:""),blob=await res.blob();return new File([blob],fileName,{type:mimeType})})(imgUrl,"crew-01.webp","image/webp");onChange(file)},ref:radioInput,name:"radio-image",className:"absolute inset-0 hidden"}),(0,jsx_runtime.jsx)(next_image.A,{src:imgUrl,width:282,height:282,alt:"샘플 이미지 1",className:"h-full w-full object-cover"}),radioInput.current&&radioInput.current.checked&&!1===isBlur&&(0,jsx_runtime.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50",children:(0,jsx_runtime.jsx)("p",{className:"text-white",children:"선택"})})]})}FileSample.__docgenInfo={description:"",methods:[],displayName:"FileSample",props:{imgUrl:{required:!0,tsType:{name:"string"},description:""},isBlur:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue: File | null) => void",signature:{arguments:[{type:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},name:"inputValue"}],return:{name:"void"}}},description:""}}};const file_sample_stories={title:"Components/input/file-sample",component:FileSample,argTypes:{imgUrl:{control:"text",description:"샘플 이미지 URL"},isBlur:{control:"boolean",description:"이미지에 블러를 적용할지 여부"},onChange:{action:"onChange",description:"파일 선택 시 호출되는 핸들러"}}},FileSample01=function FileInputStory(args={isBlur:!1,imgUrl:"",onChange:()=>{}}){const[selectedFile,setSelectedFile]=(0,react.useState)(null),[isBlur,setIsBlur]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:"relative",children:(0,jsx_runtime.jsx)(FileSample,{...args,onChange:file=>{setSelectedFile(file),setIsBlur(!1)},isBlur})}),(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setIsBlur((prev=>!prev)),style:{marginTop:"16px",padding:"8px 16px",backgroundColor:"lightgrey"},children:"블러 토글"}),!isBlur&&(0,jsx_runtime.jsx)("p",{children:null==selectedFile?void 0:selectedFile.name})]})}.bind({});FileSample01.args={imgUrl:"https://images.stockcake.com/public/a/7/6/a768d87b-1f99-4b50-9286-f1583af33522_large/team-huddle-celebration-stockcake.jpg",isBlur:!1,onChange:()=>{(0,dist.XI)("onChange")}};const __namedExportsOrder=["FileSample01"];FileSample01.parameters={...FileSample01.parameters,docs:{...FileSample01.parameters?.docs,source:{originalSource:"function FileInputStory(args: FileSampleProps = {\n  isBlur: false,\n  imgUrl: '',\n  onChange: () => {}\n}) {\n  const [selectedFile, setSelectedFile] = useState<File | null>(null);\n  const [isBlur, setIsBlur] = useState(false);\n  const handleFileChange = (file: File | null) => {\n    setSelectedFile(file);\n    setIsBlur(false); // 파일 선택 시 블러 해제\n  };\n  return <div>\r\n      <div className=\"relative\">\r\n        <FileSample {...args} onChange={handleFileChange} isBlur={isBlur} />\r\n      </div>\r\n      <button type=\"button\" onClick={() => setIsBlur(prev => !prev)} style={{\n      marginTop: '16px',\n      padding: '8px 16px',\n      backgroundColor: 'lightgrey'\n    }}>\r\n        블러 토글\r\n      </button>\r\n      {!isBlur && <p>{selectedFile?.name}</p>}\r\n    </div>;\n}",...FileSample01.parameters?.docs?.source}}}}}]);