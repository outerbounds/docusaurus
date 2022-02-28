"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8147],{1305:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return h}});var o=a(7462),r=a(3366),i=(a(7294),a(3905)),n=a(2004),s=["components"],l={},c="What is Metaflow",d={unversionedId:"r/introduction/what-is-metaflow",id:"r/introduction/what-is-metaflow",title:"What is Metaflow",description:"Metaflow is a human-friendly library that helps scientists and engineers build and manage real-life data science projects. Metaflow was originally developed at Netflix to boost the productivity of data scientists who work on a wide variety of projects from classical statistics to state-of-the-art deep learning.",source:"@site/docs/r/introduction/what-is-metaflow.md",sourceDirName:"r/introduction",slug:"/r/introduction/what-is-metaflow",permalink:"/docs/r/introduction/what-is-metaflow",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/r/introduction/what-is-metaflow.md",tags:[],version:"current",frontMatter:{},sidebar:"r",previous:{title:"Why Metaflow",permalink:"/docs/r/introduction/why-metaflow"},next:{title:"Release Notes",permalink:"/docs/r/introduction/release-notes"}},u=[{value:"What Metaflow offers for R users",id:"what-metaflow-offers-for-r-users",children:[],level:2},{value:"Should I Use Metaflow?",id:"should-i-use-metaflow",children:[],level:2},{value:"Infrastructure Stack for Data Science",id:"infrastructure-stack-for-data-science",children:[],level:2},{value:"The Philosophy of Metaflow",id:"the-philosophy-of-metaflow",children:[{value:"1. Grounded on common, real-life business-oriented ML use cases",id:"1-grounded-on-common-real-life-business-oriented-ml-use-cases",children:[],level:3},{value:"2. Manage entropy with code",id:"2-manage-entropy-with-code",children:[],level:3},{value:"3. Fanatic focus on usability and ergonomics",id:"3-fanatic-focus-on-usability-and-ergonomics",children:[],level:3},{value:"4. Enable collaboration",id:"4-enable-collaboration",children:[],level:3},{value:"5. First-class support for both prototyping and production",id:"5-first-class-support-for-both-prototyping-and-production",children:[],level:3},{value:"6. Straightforward scalability",id:"6-straightforward-scalability",children:[],level:3},{value:"7. Pragmatic approach to data access and processing",id:"7-pragmatic-approach-to-data-access-and-processing",children:[],level:3},{value:"8. Failures are a feature",id:"8-failures-are-a-feature",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],p={toc:u};function h(e){var t=e.components,l=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-metaflow"},"What is Metaflow"),(0,i.kt)("p",null,"Metaflow is a human-friendly library that helps scientists and engineers build and manage real-life data science projects. Metaflow was originally developed at Netflix to boost the productivity of data scientists who work on a wide variety of projects from classical statistics to state-of-the-art deep learning."),(0,i.kt)("p",null,"Metaflow provides a unified API to the infrastructure stack that is required to execute data science projects, from prototype to production."),(0,i.kt)("p",null,"Under the hood, Metaflow uses the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.metaflow.org"},"Python version")," of Metaflow to power its actions. Hence the R community can benefit from all the battle-hardening and testing that goes into the Python version of Metaflow. Since this is a technical detail, as an R user, you don't have to worry about Python unless you want to."),(0,i.kt)("h2",{id:"what-metaflow-offers-for-r-users"},"What Metaflow offers for R users"),(0,i.kt)("p",null,"We love the data science ecosystem provided by the R community, for example, the ",(0,i.kt)("a",{parentName:"p",href:"https://www.tidyverse.org/"},"tidyverse")," package suite, ergonomic ",(0,i.kt)("a",{parentName:"p",href:"https://dplyr.tidyverse.org/"},"data wrangling")," tools, slick interactive communication tools such as ",(0,i.kt)("a",{parentName:"p",href:"https://shiny.rstudio.com/"},"Shiny"),", a data science-oriented IDE ",(0,i.kt)("a",{parentName:"p",href:"https://rstudio.com/"},"RStudio"),", and cutting-edge libraries for statistical computing on ",(0,i.kt)("a",{parentName:"p",href:"https://cran.r-project.org/web/packages/available_packages_by_name.html"},"CRAN"),". However, oftentimes, it is left to the data scientist to string together all these amazing tools to get their job done, adding to their burden. Metaflow provides a better ",(0,i.kt)("a",{parentName:"p",href:"/docs/r/introduction/what-is-metaflow#infrastructure-stack-for-data-science"},"infrastructure stack")," for data scientists in the R community in an idiomatic manner so that they can focus their energy on data science rather than engineering."),(0,i.kt)("h2",{id:"should-i-use-metaflow"},"Should I Use Metaflow?"),(0,i.kt)("p",null,"If you are working on an existing data science project, or you are planning to start a new one, consider the following questions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Scalability"),": Do you need more than one laptop-size computer in the project?"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Criticality"),": Is it important that results are produced correctly and in a timely manner?"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Complexity"),": Does the project have many moving pieces or many people working together?")),(0,i.kt)("p",null,'If you answered "yes" to any of the above, keep reading - Metaflow can help you. If the answer is "no" to all of the above, which is a valid scenario e.g. when you are doing small-scale experiments on your laptop, Metaflow won\'t provide much benefit for you. You should come back when your project is moving to the next stage!'),(0,i.kt)("h2",{id:"infrastructure-stack-for-data-science"},"Infrastructure Stack for Data Science"),(0,i.kt)("p",null,"Models are only a small part of an end-to-end data science project. Production-grade projects rely on a thick stack of infrastructure. At the minimum, projects need data and a way to perform computation on it. In a business environment like Netflix's, a typical data science project touches all layers of the stack depicted below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(4972).Z,width:"966",height:"404"})),(0,i.kt)("p",null,"Data is accessed from a ",(0,i.kt)("strong",{parentName:"p"},"data warehouse"),", which can be a folder of files, a database, or a multi-petabyte data lake. The modeling code that crunches the data is executed in a ",(0,i.kt)("strong",{parentName:"p"},"compute environment")," which can range from a laptop to a large-scale container management system. A ",(0,i.kt)("strong",{parentName:"p"},"job scheduler")," is often used to orchestrate multiple units of work."),(0,i.kt)("p",null,"How do you ",(0,i.kt)("strong",{parentName:"p"},"architect")," the code to be executed? Should you structure it as an object hierarchy, R functions, or packages? How do you ",(0,i.kt)("strong",{parentName:"p"},"version")," the code, input data, and models produced? Preferably, data scientists wouldn't have to spend too much energy thinking about the software architecture."),(0,i.kt)("p",null,"After the model has been deployed to production, ",(0,i.kt)("strong",{parentName:"p"},"model operations")," become a pertinent question: how do you keep the code running reliably in production? How do you monitor its performance? How do you deploy new versions of the code to run in parallel with the previous version? The software industry has spent over a decade perfecting DevOps best practices for normal software. We are just getting started with data science."),(0,i.kt)("p",null,"At the very top of the stack there's the question of how you produce ",(0,i.kt)("strong",{parentName:"p"},"features")," for your models, and you ",(0,i.kt)("strong",{parentName:"p"},"develop models")," in the first place, maybe using off-the-shelf libraries. This is the area where the skills of a data scientist become most useful."),(0,i.kt)("p",null,"Metaflow provides a unified, human-friendly approach to navigating the stack. Metaflow is more prescriptive about the lower levels of the stack but it is less opinionated about the actual data science at the top of the stack. Metaflow allows you to write your models and business logic as idiomatic R code with not much new to learn."),(0,i.kt)("p",null,"Internally, Metaflow leverages existing infrastructure when feasible. In particular, it is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow-docs/tree/b90f7b9c89a00a9c344df9d41bfd39b23a674bd8/metaflow-on-aws/metaflow-on-aws.md"},"tightly integrated with Amazon Web Services"),". The core value proposition of Metaflow is its integrated full-stack, human-centric API, rather than reinvention of the stack itself."),(0,i.kt)("p",null,"You can find more details about Metaflow's approach to various parts of the stack across the documentation:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Model Development")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../metaflow/basics"},"Basics of Metaflow"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Model Operations")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../metaflow/debugging"},"Debugging with Metaflow")," and ",(0,i.kt)("a",{parentName:"td",href:"../metaflow/failures"},"Dealing with Failures"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Versioning")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../metaflow/client"},"Inspecting Flow and Results")," and ",(0,i.kt)("a",{parentName:"td",href:"../metaflow/tagging"},"Organizing Results"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Architecture")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../metaflow/basics"},"Basics of Metaflow"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Job Scheduler")),(0,i.kt)("td",{parentName:"tr",align:"left"},"coming soon, see ","[Roadmap]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Compute Resources")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../metaflow/scaling"},"Scaling Out and Up"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Data Warehouse")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../metaflow/basics"},"Basics of Metaflow"))))),(0,i.kt)("p",null,"If you are an infrastructure person who wants to know how to deploy and operate Metaflow, take a look at ",(0,i.kt)("a",{parentName:"p",href:"https://admin-docs.metaflow.org"},"Administrator's Guide to Metaflow"),"."),(0,i.kt)("p",null,"If you want to learn more, the Machine Learning Infrastructure team at Netflix has given a number of public presentations about Metaflow prior to its open-sourcing. You can find links to these presentations below."),(0,i.kt)("p",null,"For starters, this presentation gives a comprehensive overview of Metaflow:"),(0,i.kt)(n.Z,{controls:!0,url:"https://www.youtube.com/watch?v=XV5VGddmP24",mdxType:"ReactPlayer"}),(0,i.kt)("p",null,"For other general overviews of Metaflow, see the ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PLGEBSHR02Xbg0oTf7OwZ_Kk86Zx96mAOb"},"Overviews of Metaflow")," playlist. For more technical details, see presentations about the ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PLGEBSHR02XbhC-5Eqy7ERHxpuwiJHes4j"},"Internals of Metaflow"),"."),(0,i.kt)("h2",{id:"the-philosophy-of-metaflow"},"The Philosophy of Metaflow"),(0,i.kt)("p",null,"If you are eager to give Metaflow a try, head to the ",(0,i.kt)("a",{parentName:"p",href:"../getting-started/tutorials/"},"tutorials"),". If you want to learn about the background of Metaflow in more detail, keep on reading."),(0,i.kt)("p",null,"Metaflow was originally designed and built to address practical pain points of data scientist at Netflix. Its design philosophy is influenced by ",(0,i.kt)("a",{parentName:"p",href:"https://jobs.netflix.com/culture"},"the unique culture at Netflix"),". The following eight tenets summarize the philosophy of Metaflow:"),(0,i.kt)("h3",{id:"1-grounded-on-common-real-life-business-oriented-ml-use-cases"},"1. Grounded on common, real-life business-oriented ML use cases"),(0,i.kt)("p",null,"We don\u2019t focus on exotic, large-scale, specific use cases like real-time bidding or self-driving cars. Instead, we focus on the widest variety of ML use cases, many of which are small or medium-sized, which many companies face on a day to day basis."),(0,i.kt)("p",null,"We embrace the fact that the life is full of entropy: There is no elegant, grand unified theory of ML infrastructure. The inputs to ML workflows are noisy, the models may be ridden with special cases, and the outputs need to be integrated with various downstream systems, instead of a single unified UI."),(0,i.kt)("p",null,"We don\u2019t expect the users of Metaflow to be unicorns who are experts in software engineering and machine learning. Nor we expect our users to care about ML infrastructure. Metaflow helps them to get their job done."),(0,i.kt)("h3",{id:"2-manage-entropy-with-code"},"2. Manage entropy with code"),(0,i.kt)("p",null,"The first tenet implies that we must manage a great amount of inherent, irreducible complexity. Many ML infrastructures rely on GUIs, configuration, DSLs, or automation - we don\u2019t. Most of these modalities fail to scale in terms of increasing complexity."),(0,i.kt)("p",null,"We rely on code. General-purpose programming languages are arguably the most effective tool in building functional systems for complex use cases. The main downside of code is a steeper learning curve: for the simplest use cases, almost any other modality would provide a simpler solution. To minimize this cost, we rely on easy to learn, popular languages like Python or R."),(0,i.kt)("h3",{id:"3-fanatic-focus-on-usability-and-ergonomics"},"3. Fanatic focus on usability and ergonomics"),(0,i.kt)("p",null,"The second tenet implies that we don\u2019t try to hide the complexity. Inherently complex problems require complex solutions. However, we can do a lot to reduce the amount of accidental complexity which often results from mismatching abstractions."),(0,i.kt)("p",null,"Since the problems our users solve are complex in nature, the best we can do is to avoid adding unnecessary complexity and cognitive overhead with complicated tools. Metaflow should be simple and highly usable."),(0,i.kt)("p",null,"We don\u2019t expect tools to solve problems. People solve problems. Hence we focus on optimizing data scientist productivity, which we do by providing ergonomic tools, excellent documentation, and fanatic support."),(0,i.kt)("h3",{id:"4-enable-collaboration"},"4. Enable collaboration"),(0,i.kt)("p",null,"Besides the first-person developer experience described in the third tenet, Metaflow is built to enable collaboration. However, we are sensitive to the fact that there is not a single recipe for collaboration. Sometimes it might be just a single developer \u201ccollaborating\u201d with themselves over a long period of time. Sometimes it might be a tightly coupled team working on a common project. Sometimes it is a loosely coupled organization working on separate projects, sharing pieces of code and data. We want to support all these scenarios."),(0,i.kt)("p",null,"Instead of being prescriptive about the ways of collaboration, we remove roadblocks that hinder collaboration. Most importantly, we enable unsurprising, side-effect free reproducibility, which removes the fear of interfering with other people\u2019s work. We also make it easy to discover and access previous results produced by others."),(0,i.kt)("h3",{id:"5-first-class-support-for-both-prototyping-and-production"},"5. First-class support for both prototyping and production"),(0,i.kt)("p",null,"The third and fourth tenets make Metaflow human-centric. People produce complex creative work iteratively. We want to make iterative development the default mode of operation: ",(0,i.kt)("strong",{parentName:"p"},"y"),"ou can start prototyping locally with a very straightforward script, which you can make gradually more capable and scalable, if the results after each iteration seem promising enough."),(0,i.kt)("p",null,"Metaflow should be robust enough for serious production use. However, we recognize that \u201cproduction\u201d is a spectrum: Some projects get pushed from prototype to production quickly in a very experimental shape. This is OK. Some projects have such a short life cycle, or they are not a critical path, so it doesn\u2019t make sense to invest a lot in making them watertight."),(0,i.kt)("p",null,"We want to embrace the idea that most projects are continuous experiments, even when they are being run in production. Consider Metaflow as a meta-algorithm for reinforcement learning with a human in the loop."),(0,i.kt)("h3",{id:"6-straightforward-scalability"},"6. Straightforward scalability"),(0,i.kt)("p",null,"The fifth tenet suggested that the user should be able to scale a Metaflow project gradually. This applies both to time and space."),(0,i.kt)("p",null,"We embrace the fact that R is a slow but expressive language. We encourage our users to write idiomatic R code initially, without worrying too much about performance. If performance becomes an issue, we can provide an arsenal of tools for gradual performance optimization from performance-oriented libraries like Rcpp."),(0,i.kt)("p",null,"We encourage our users to primarily rely on vertical scalability, which allows the user to focus on readable, straightforward code and easy operations. When the user hits the limits of vertical scalability, we make it easy to use horizontal, share-nothing parallelism, or hassle-free distributed learning provided e.g. by AWS Sagemaker."),(0,i.kt)("p",null,"We shy away from custom paradigms for scalability which require code to be ","(","re",")","written with scalability in mind, which can lead to worse readability, harder debuggability, and increased operational burden."),(0,i.kt)("h3",{id:"7-pragmatic-approach-to-data-access-and-processing"},"7. Pragmatic approach to data access and processing"),(0,i.kt)("p",null,"The sixth tenet suggested that our primary tools for scalability and performance are larger servers and faster libraries. Typically, it is larger datasets that demand larger tools. Since the question of big data is so central to ML projects, we want to provide specific data tooling to address these needs."),(0,i.kt)("p",null,"Following the sixth tenet, we don\u2019t want to introduce new paradigms for data processing. Instead, we want to make old, proven paradigms usable again: We make sure that the basic libraries for loading data, representing data in memory, and transforming data are performant and easy to use."),(0,i.kt)("p",null,"We also recognize that this approach has its limits. We leverage other big data tools such as Spark for heavy lifting when necessary."),(0,i.kt)("h3",{id:"8-failures-are-a-feature"},"8. Failures are a feature"),(0,i.kt)("p",null,"We design Metaflow primarily for failure cases, not for the happy case. Most ML infrastructures do the job well enough for the happy case. The true value of the infrastructure is shown when things fail. This is especially true for ML workflows with a high degree of inherent complexity."),(0,i.kt)("p",null,"Most of the lifetime cost of a successful ML project comes from operational cost which is accumulated after the first production deployment, similar to any software project. To minimize this cost, we want to make operational issues easy to diagnose and fix. This is a key motivation for the sixth and the seventh tenets, since many if not most operational issues are related to scalability and data."),(0,i.kt)("p",null,"We provide highly usable tools for proactive monitoring and detection of errors, before things fail catastrophically, as well for reactive debugging."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Don't expect the current version of Metaflow to be a perfect manifestation of these principles. Metaflow is being actively developed. However, much of the foundation exists, and it has proven to be successful at Netflix. If this vision resonates with you, we welcome you to join the project! A good next step is to take a look at the ",(0,i.kt)("a",{parentName:"p",href:"../getting-started/tutorials/"},"tutorials"),"."))}h.isMDXComponent=!0},4972:function(e,t,a){t.Z=a.p+"assets/images/triangles-6ea695b33f2d077b548121779a75895b.png"}}]);