import{_ as s,c as a,o as n,b as l}from"./app.8ad79a00.js";const u=JSON.parse('{"title":"\u5FEB\u901F\u4E0A\u624B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u5B89\u88C5","slug":"\u4E00\u3001\u5B89\u88C5","link":"#\u4E00\u3001\u5B89\u88C5","children":[]},{"level":2,"title":"\u4E8C\u3001\u5F15\u5165","slug":"\u4E8C\u3001\u5F15\u5165","link":"#\u4E8C\u3001\u5F15\u5165","children":[]},{"level":2,"title":"\u4E09\u3001\u4F7F\u7528","slug":"\u4E09\u3001\u4F7F\u7528","link":"#\u4E09\u3001\u4F7F\u7528","children":[]}],"relativePath":"guide/\u7EC4\u4EF6\u5E93\u6307\u5357.md","lastUpdated":1665744182000}'),p={name:"guide/\u7EC4\u4EF6\u5E93\u6307\u5357.md"},e=l(`<h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u5B89\u88C5" tabindex="-1">\u4E00\u3001\u5B89\u88C5 <a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u4F7F\u7528npm\u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i mala-ui</span></span>
<span class="line"><span style="color:#676E95;"># \u4F7F\u7528yarn\u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add mala-ui</span></span>
<span class="line"><span style="color:#676E95;"># \u4F7F\u7528pnpm\u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm add mala-ui</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E8C\u3001\u5F15\u5165" tabindex="-1">\u4E8C\u3001\u5F15\u5165 <a class="header-anchor" href="#\u4E8C\u3001\u5F15\u5165" aria-hidden="true">#</a></h2><h4 id="\u5168\u90E8\u5F15\u5165\uFF08\u63A8\u8350\uFF09" tabindex="-1">\u5168\u90E8\u5F15\u5165\uFF08\u63A8\u8350\uFF09 <a class="header-anchor" href="#\u5168\u90E8\u5F15\u5165\uFF08\u63A8\u8350\uFF09" aria-hidden="true">#</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> mala </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mala-ui</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mala-ui/build/css/index.css</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(mala)</span></span>
<span class="line"></span></code></pre></div><h4 id="\u6309\u9700\u5F15\u5165" tabindex="-1">\u6309\u9700\u5F15\u5165 <a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> DemoVue2 </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mala-ui/build/demo-vue2.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mala-ui/build/css/demo-vue2.css</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(DemoVue2)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E09\u3001\u4F7F\u7528" tabindex="-1">\u4E09\u3001\u4F7F\u7528 <a class="header-anchor" href="#\u4E09\u3001\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mala-demo-vue2</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">mala-demo-vue2</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u6CE8\u610F\uFF1A\u5728\u4F7F\u7528mala-ui\u7EC4\u4EF6\u5E93\u7684\u7EC4\u4EF6\u65F6\uFF0C\u7531\u4E8E\u5185\u90E8\u8BBE\u8BA1\uFF0C\u9700\u8981\u5E26\u4E0Amala\u524D\u7F00\u3002</p></blockquote>`,11),o=[e];function t(c,r,i,D,d,y){return n(),a("div",null,o)}const C=s(p,[["render",t]]);export{u as __pageData,C as default};
