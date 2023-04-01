import{j as b,r as A,R as S}from"./react-ba0062d6.js";import{a as M}from"./react-dom-b352295a.js";import{L as P,B as D}from"./react-router-dom-81735dd9.js";import{u as G,H as Q,C as h,O as v,P as u,a as C,b as T,F as L,D as O,c as z,d as R,e as J}from"./@react-three-88298a38.js";import{i as F}from"./maath-7cbc658b.js";import{m as d}from"./framer-motion-f45e43e5.js";import{_ as B}from"./react-tilt-3643c0f9.js";import{d as I}from"./react-vertical-timeline-component-d162091b.js";import{e as Y}from"./@emailjs-f8154c7d.js";import"./@chevrotain-94f2bff3.js";import"./lodash-4ed993c7.js";import"./scheduler-04ce0582.js";import"./react-router-06c4e5d6.js";import"./@remix-run-edbfe580.js";import"./@babel-34ca84e8.js";import"./three-c67857be.js";import"./react-use-measure-5538365e.js";import"./debounce-ae8cc837.js";import"./its-fine-e4cdd89a.js";import"./react-reconciler-db32c92b.js";import"./zustand-96d19ac0.js";import"./@react-spring-7eb7369e.js";import"./lodash.pick-4ed993c7.js";import"./three-stdlib-5145b780.js";import"./mmd-parser-4ed993c7.js";import"./chevrotain-add0ba52.js";import"./regexp-to-ast-4ed993c7.js";import"./opentype.js-4ed993c7.js";import"./lodash.omit-4ed993c7.js";import"./stats.js-4ed993c7.js";import"./react-merge-refs-239dbb3c.js";import"./react-composer-7eb7369e.js";import"./suspend-react-00b64780.js";import"./prop-types-4d501b15.js";import"./classnames-7e4e529b.js";import"./react-intersection-observer-9cd74798.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const w=b.Fragment,e=b.jsx,a=b.jsxs,y=()=>{const{progress:t}=G();return a(Q,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e("span",{className:"canvas-loader"}),a("p",{style:{fontSize:14,color:"#F1F1F1",fontWeight:800,marginTop:40},children:[t.toFixed(2),"%"]})]})},H=()=>{const t=C("./planet/scene.gltf");return e("primitive",{object:t.scene,scale:2.5,"position-y":0,"rotation-y":0})},W=()=>e(h,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:a(A.Suspense,{fallback:e(y,{}),children:[e(v,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e(H,{}),e(u,{all:!0})]})}),Z=t=>{const[n]=T([t.imgUrl]);return a(L,{speed:1.75,rotationIntensity:1,floatIntensity:2,children:[e("ambientLight",{intensity:.25}),e("directionalLight",{position:[0,0,.05]}),a("mesh",{castShadow:!0,receiveShadow:!0,scale:2.75,children:[e("icosahedronGeometry",{args:[1,1]}),e("meshStandardMaterial",{color:"#fff8eb",polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0}),e(O,{position:[0,0,1],rotation:[2*Math.PI,0,6.25],scale:1,map:n,flatShading:!0})]})]})},q=({icon:t})=>a(h,{frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},children:[a(A.Suspense,{fallback:e(y,{}),children:[e(v,{enableZoom:!1}),e(Z,{imgUrl:t})]}),e(u,{all:!0})]}),V=({isMobile:t})=>{const n=C("./desktop_pc/scene.gltf");return a("mesh",{children:[e("hemisphereLight",{intensity:.15,groundColor:"black"}),e("spotLight",{position:[-20,50,10],angle:.12,penumbra:1,intensity:1,castShadow:!0,"shadow-mapSize":1024}),e("pointLight",{intensity:1}),e("primitive",{object:n.scene,scale:t?.7:.75,position:t?[0,-3,-2.2]:[0,-3.25,-1.5],rotation:[-.01,-.2,-.1]})]})},X=()=>{const[t,n]=A.useState(!1);return A.useEffect(()=>{const i=window.matchMedia("(max-width: 500px)");n(i.matches);const c=s=>{n(s.matches)};return i.addEventListener("change",c),()=>{i.removeEventListener("change",c)}},[]),a(h,{frameloop:"demand",shadows:!0,dpr:[1,2],camera:{position:[20,3,5],fov:25},gl:{preserveDrawingBuffer:!0},children:[a(A.Suspense,{fallback:e(y,{}),children:[e(v,{enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e(V,{isMobile:t})]}),e(u,{all:!0})]})},U=t=>{const n=A.useRef(),[i]=A.useState(()=>F(new Float32Array(5e3),{radius:1.2}));return z((c,s)=>{n.current.rotation.x-=s/10,n.current.rotation.y-=s/15}),e("group",{rotation:[0,0,Math.PI/4],children:e(R,{ref:n,positions:i,stride:3,frustumCulled:!0,...t,children:e(J,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},K=()=>e("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:a(h,{camera:{position:[0,0,1]},children:[e(A.Suspense,{fallback:null,children:e(U,{})}),e(u,{all:!0})]})}),l={paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",padding:"sm:px-16 px-6 sm:py-16 py-10",heroHeadText:"font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",heroSubText:"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",sectionHeadText:"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",sectionSubText:"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"},_=()=>a("section",{className:"relative w-full h-screen mx-auto",children:[a("div",{className:`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${l.paddingX} flex flex-row items-start gap-5`,children:[a("div",{className:"flex flex-col justify-center items-center mt-5",children:[e("div",{className:"w-5 h-5 rounded-full bg-[#915EFF]"}),e("div",{className:"w-1 sm:h-80 h-40 violet-gradient"})]}),a("div",{children:[a("h1",{className:`${l.heroHeadText} text-white`,children:["Hi, I'm ",e("span",{className:"text-[#915EFF]",children:"Ajay"})]}),a("p",{className:`${l.heroSubText} mt-2 text-white-100`,children:["I develop 3D visuals, user ",e("br",{className:"sm:block hidden"}),"interfaces and web applications"]})]})]}),e(X,{}),e("div",{className:"absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center",children:e("a",{href:"#about",children:e("div",{className:"w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2",children:e(d.div,{animate:{y:[0,24,0]},transition:{duration:1.5,repeat:1/0,repeatType:"loop"},className:"w-3 h-3 rounded-full bg-secondary mb-1"})})})})]}),$="/assets/logo-c1063d16.svg",ee="/assets/backend-565fc01f.png",te="/assets/creator-dbbffaec.png",ne="/assets/mobile-896ef2f5.png",ae="/assets/web-0d05165f.png",se="/assets/github-3b4e1609.png",ie="/assets/menu-242d80a8.svg",re="/assets/close-ad0e0ca6.svg",oe="/assets/css-79a7f026.png",ce="/assets/docker-602a695a.png",le="/assets/figma-184a11e6.png",Ae="data:image/png;base64,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",de="/assets/html-92b76a73.png",me="data:image/png;base64,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",pe="/assets/mongodb-54000b2b.png",ge="/assets/nodejs-d83eb6dd.png",he="/assets/reactjs-966214a8.png",ue="/assets/redux-171787ca.png",fe="/assets/tailwind-6ece120d.png",xe="data:image/png;base64,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",be="/assets/threejs-1d0654a8.svg",ve="/assets/meta-e386841a.png",we="/assets/shopify-c0fdbc80.png",ye="/assets/starbucks-af2a76fc.png",Ne="/assets/tesla-4c857950.png",Ee="/assets/carrent-aba013d1.png",Ce="/assets/jobit-ecb9d39c.png",Be="/assets/tripguide-892dd3b1.png",N=[{id:"about",title:"About"},{id:"work",title:"Work"},{id:"contact",title:"Contact"}],Ie=[{title:"Web Developer",icon:ae},{title:"React Native Developer",icon:ne},{title:"Backend Developer",icon:ee},{title:"Content Creator",icon:te}],je=[{name:"HTML 5",icon:de},{name:"CSS 3",icon:oe},{name:"JavaScript",icon:me},{name:"TypeScript",icon:xe},{name:"React JS",icon:he},{name:"Redux Toolkit",icon:ue},{name:"Tailwind CSS",icon:fe},{name:"Node JS",icon:ge},{name:"MongoDB",icon:pe},{name:"Three JS",icon:be},{name:"git",icon:Ae},{name:"figma",icon:le},{name:"docker",icon:ce}],ke=[{title:"React.js Developer",company_name:"Starbucks",icon:ye,iconBg:"#383E56",date:"March 2020 - April 2021",points:["Developing and maintaining web applications using React.js and other related technologies.","Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.","Implementing responsive design and ensuring cross-browser compatibility.","Participating in code reviews and providing constructive feedback to other developers."]},{title:"React Native Developer",company_name:"Tesla",icon:Ne,iconBg:"#E6DEDD",date:"Jan 2021 - Feb 2022",points:["Developing and maintaining web applications using React.js and other related technologies.","Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.","Implementing responsive design and ensuring cross-browser compatibility.","Participating in code reviews and providing constructive feedback to other developers."]},{title:"Web Developer",company_name:"Shopify",icon:we,iconBg:"#383E56",date:"Jan 2022 - Jan 2023",points:["Developing and maintaining web applications using React.js and other related technologies.","Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.","Implementing responsive design and ensuring cross-browser compatibility.","Participating in code reviews and providing constructive feedback to other developers."]},{title:"Full stack Developer",company_name:"Meta",icon:ve,iconBg:"#E6DEDD",date:"Jan 2023 - Present",points:["Developing and maintaining web applications using React.js and other related technologies.","Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.","Implementing responsive design and ensuring cross-browser compatibility.","Participating in code reviews and providing constructive feedback to other developers."]}],Se=[{testimonial:"I thought it was impossible to make a website as beautiful as our product, but Ajay proved me wrong.",name:"Sara Lee",designation:"CFO",company:"Acme Co",image:"https://randomuser.me/api/portraits/women/4.jpg"},{testimonial:"I've never met a web developer who truly cares about their clients' success like Ajay does.",name:"Chris Brown",designation:"COO",company:"DEF Corp",image:"https://randomuser.me/api/portraits/men/5.jpg"},{testimonial:"After Ajay optimized our website, our traffic increased by 50%. We can't thank them enough!",name:"Lisa Wang",designation:"CTO",company:"456 Enterprises",image:"https://randomuser.me/api/portraits/women/6.jpg"}],Me=[{name:"Car Rent",description:"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",tags:[{name:"react",color:"blue-text-gradient"},{name:"mongodb",color:"green-text-gradient"},{name:"tailwind",color:"pink-text-gradient"}],image:Ee,source_code_link:"https://github.com/"},{name:"Job IT",description:"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",tags:[{name:"react",color:"blue-text-gradient"},{name:"restapi",color:"green-text-gradient"},{name:"scss",color:"pink-text-gradient"}],image:Ce,source_code_link:"https://github.com/"},{name:"Trip Guide",description:"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",tags:[{name:"nextjs",color:"blue-text-gradient"},{name:"supabase",color:"green-text-gradient"},{name:"css",color:"pink-text-gradient"}],image:Be,source_code_link:"https://github.com/"}],Pe=()=>{const[t,n]=A.useState(""),[i,c]=A.useState(!1),[s,o]=A.useState(!1);return A.useEffect(()=>{const r=()=>{window.scrollY>100?o(!0):o(!1)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),e("nav",{className:`${l.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${s?"bg-primary":"bg-transparent"}`,children:a("div",{className:"w-full flex justify-between items-center max-w-7xl mx-auto",children:[a(P,{to:"/",className:"flex items-center gap-2",onClick:()=>{n(""),window.scrollTo(0,0)},children:[e("img",{src:$,alt:"logo",className:"w-9 h-9 object-contain"}),a("p",{className:"text-white text-[18px] font-bold cursor-pointer flex ",children:["Ajay  ",e("span",{className:"sm:block hidden",children:" | WolfWeb"})]})]}),e("ul",{className:"list-none hidden sm:flex flex-row gap-10",children:N.map(r=>e("li",{className:`${t===r.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`,onClick:()=>n(r.title),children:e("a",{href:`#${r.id}`,children:r.title})},r.id))}),a("div",{className:"sm:hidden flex flex-1 justify-end items-center",children:[e("img",{src:i?re:ie,alt:"menu",className:"w-[28px] h-[28px] object-contain",onClick:()=>c(!i)}),e("div",{className:`${i?"flex":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,children:e("ul",{className:"list-none flex justify-end items-start flex-1 flex-col gap-4",children:N.map(r=>e("li",{className:`font-poppins font-medium cursor-pointer text-[16px] ${t===r.title?"text-white":"text-secondary"}`,onClick:()=>{c(!i),n(r.title)},children:e("a",{href:`#${r.id}`,children:r.title})},r.id))})})]})]})})},f=t=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:t}}}),p=(t,n,i,c)=>({hidden:{x:t==="left"?100:t==="right"?-100:0,y:t==="up"?100:t==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:n,delay:i,duration:c,ease:"easeOut"}}}),E=(t,n,i,c)=>({hidden:{x:t==="left"?"-100%":t==="right"?"100%":0,y:t==="up"||t==="down"?"100%":0},show:{x:0,y:0,transition:{type:n,delay:i,duration:c,ease:"easeOut"}}}),De=(t,n)=>({hidden:{},show:{transition:{staggerChildren:t,delayChildren:n||0}}}),m=(t,n)=>function(){return a(d.section,{variants:De(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${l.padding} max-w-7xl mx-auto relative z-0`,children:[e("span",{className:"hash-span",id:n,children:" "}),e(t,{})]})},Ge=({index:t,title:n,icon:i})=>e(B,{className:"xs:w-[250px] w-full",children:e(d.div,{variants:p("right","spring",t*.5,.75),className:"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card",children:a("div",{options:{max:45,scale:1,speed:450},className:"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col",children:[e("img",{src:i,alt:"web-development",className:"w-16 h-16 object-contain"}),e("h3",{className:"text-white text-[20px] font-bold text-center",children:n})]})})}),Qe=()=>a(w,{children:[a(d.div,{variants:f(),children:[e("p",{className:l.sectionSubText,children:"Introduction"}),e("h2",{className:l.sectionHeadText,children:"Overview."})]}),e(d.p,{variants:p("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!"}),e("div",{className:"mt-20 flex flex-wrap gap-10",children:Ie.map((t,n)=>e(Ge,{index:n,...t},t.title))})]}),Te=m(Qe,"about"),Le=()=>e("div",{className:"flex flex-row flex-wrap justify-center gap-10",children:je.map(t=>e("div",{className:"w-28 h-28",children:e(q,{icon:t.icon})},t.name))}),Oe=m(Le,""),ze=({experience:t})=>a(I.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #232631"},date:t.date,iconStyle:{background:t.iconBg},icon:e("div",{className:"flex justify-center items-center w-full h-full",children:e("img",{src:t.icon,alt:t.company_name,className:"w-[60%] h-[60%] object-contain"})}),children:[a("div",{children:[e("h3",{className:"text-white text-[24px] font-bold",children:t.title}),e("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:t.company_name})]}),e("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:t.points.map((n,i)=>e("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:n},`experience-point-${i}`))})]}),Re=()=>a(w,{children:[a(d.div,{variants:f(),children:[e("p",{className:`${l.sectionSubText} text-center`,children:"What I have done so far"}),e("h2",{className:`${l.sectionHeadText} text-center`,children:"Work Experience."})]}),e("div",{className:"mt-20 flex flex-col",children:e(I.VerticalTimeline,{children:ke.map((t,n)=>e(ze,{experience:t},`experience-${n}`))})})]}),Je=m(Re,"work"),Fe=({index:t,name:n,description:i,tags:c,image:s,source_code_link:o})=>e(d.div,{variants:p("up","spring",t*.5,.75),children:a(B,{options:{max:45,scale:1,speed:450},className:"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",children:[a("div",{className:"relative w-full h-[230px]",children:[e("img",{src:s,alt:"project_image",className:"w-full h-full object-cover rounded-2xl"}),e("div",{className:"absolute inset-0 flex justify-end m-3 card-img_hover",children:e("div",{onClick:()=>window.open(o,"_blank"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:e("img",{src:se,alt:"source code",className:"w-1/2 h-1/2 object-contain"})})})]}),a("div",{className:"mt-5",children:[e("h3",{className:"text-white font-bold text-[24px]",children:n}),e("p",{className:"mt-2 text-secondary text-[14px]",children:i})]}),e("div",{className:"mt-4 flex flex-wrap gap-2",children:c.map(r=>a("p",{className:`text-[14px] ${r.color}`,children:["#",r.name]},`${n}-${r.name}`))})]})}),Ye=()=>a(w,{children:[a(d.div,{variants:f(),children:[e("p",{className:`${l.sectionSubText} `,children:"My work"}),e("h2",{className:`${l.sectionHeadText}`,children:"Projects."})]}),e("div",{className:"w-full flex",children:e(d.p,{variants:p("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."})}),e("div",{className:"mt-20 flex flex-wrap gap-7",children:Me.map((t,n)=>e(Fe,{index:n,...t},`project-${n}`))})]}),He=m(Ye,""),We=({index:t,testimonial:n,name:i,designation:c,company:s,image:o})=>a(d.div,{variants:p("","spring",t*.5,.75),className:"bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full",children:[e("p",{className:"text-white font-black text-[48px]",children:'"'}),a("div",{className:"mt-1",children:[e("p",{className:"text-white tracking-wider text-[18px]",children:n}),a("div",{className:"mt-7 flex justify-between items-center gap-1",children:[a("div",{className:"flex-1 flex flex-col",children:[a("p",{className:"text-white font-medium text-[16px]",children:[e("span",{className:"blue-text-gradient",children:"@"})," ",i]}),a("p",{className:"mt-1 text-secondary text-[12px]",children:[c," of ",s]})]}),e("img",{src:o,alt:`feedback_by-${i}`,className:"w-10 h-10 rounded-full object-cover"})]})]})]}),Ze=()=>a("div",{className:"mt-12 bg-black-100 rounded-[20px]",children:[e("div",{className:`bg-tertiary rounded-2xl ${l.padding} min-h-[300px]`,children:a(d.div,{variants:f(),children:[e("p",{className:l.sectionSubText,children:"What others say"}),e("h2",{className:l.sectionHeadText,children:"Testimonials."})]})}),e("div",{className:`-mt-20 pb-14 ${l.paddingX} flex flex-wrap gap-7`,children:Se.map((t,n)=>e(We,{index:n,...t},t.name))})]}),qe=m(Ze,""),Ve=()=>{const t=A.useRef(),[n,i]=A.useState({name:"",email:"",message:""}),[c,s]=A.useState(!1),o=g=>{const{target:x}=g,{name:j,value:k}=x;i({...n,[j]:k})},r=g=>{g.preventDefault(),s(!0),Y.send({}.VITE_APP_EMAILJS_SERVICE_ID,{}.VITE_APP_EMAILJS_TEMPLATE_ID,{from_name:n.name,to_name:"Ajay Khambhayta",from_email:n.email,to_email:"ajay@zensung.com",message:n.message},{}.VITE_APP_EMAILJS_PUBLIC_KEY).then(()=>{s(!1),alert("Thank you. I will get back to you as soon as possible."),i({name:"",email:"",message:""})},x=>{s(!1),console.error(x),alert("Ahh, something went wrong. Please try again.")})};return a("div",{className:"xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden",children:[a(d.div,{variants:E("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 rounded-2xl",children:[e("p",{className:l.sectionSubText,children:"Get in touch"}),e("h3",{className:l.sectionHeadText,children:"Contact."}),a("form",{ref:t,onSubmit:r,className:"mt-12 flex flex-col gap-8",children:[a("label",{className:"flex flex-col",children:[e("span",{className:"text-white font-medium mb-4",children:"Your Name"}),e("input",{type:"text",name:"name",value:n.name,onChange:o,placeholder:"What's your good name?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),a("label",{className:"flex flex-col",children:[e("span",{className:"text-white font-medium mb-4",children:"Your email"}),e("input",{type:"email",name:"email",value:n.email,onChange:o,placeholder:"What's your web address?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),a("label",{className:"flex flex-col",children:[e("span",{className:"text-white font-medium mb-4",children:"Your Message"}),e("textarea",{rows:7,name:"message",value:n.message,onChange:o,placeholder:"What you want to say?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e("button",{type:"submit",className:"bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary",children:c?"Sending...":"Send"})]})]}),e(d.div,{variants:E("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:e(W,{})})]})},Xe=m(Ve,"contact");function Ue(){return e(D,{children:a("div",{className:"relative z-0 bg-primary",children:[a("div",{className:"bg-hero-pattern bg-cover bg-no-repeat bg-center",children:[e(Pe,{}),e(_,{})]}),e(Te,{}),e(Je,{}),e(Oe,{}),e(He,{}),e(qe,{}),a("div",{className:"relative z-0",children:[e(Xe,{}),e(K,{})]})]})})}M.createRoot(document.getElementById("root")).render(e(S.StrictMode,{children:e(Ue,{})}));
