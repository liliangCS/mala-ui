import{i as D}from"./chunks/\u4E03\u5BAB\u667A\u97F303.13599618.js";import{r as F,o as l,c as o,a as y,b as p,d as i,e as t}from"./app.d1a4f3e1.js";const C="/mala-ui/assets/\u4E03\u5BAB\u667A\u97F301.d6989d24.jpg",A="/mala-ui/assets/\u4E03\u5BAB\u667A\u97F302.c466f670.jpg",m="/mala-ui/assets/\u65F6\u5D0E\u72C2\u4E0901.430ac147.jpg",u="/mala-ui/assets/\u65F6\u5D0E\u72C2\u4E0902.201b9903.jpg",d="/mala-ui/assets/\u65F6\u5D0E\u72C2\u4E0903.ac656346.jpg",g="/mala-ui/assets/\u8587\u5C14\u8389\u727901.3557db1f.jpg",h="/mala-ui/assets/\u8587\u5C14\u8389\u727902.e1320ac1.jpg",b="/mala-ui/assets/\u8587\u5C14\u8389\u727903.eeeb880a.jpg",_={class:"album"},f={__name:"Basic",setup(e){const n=[C,A,D,m,u,d,g,h,b],s=F(!1);return(j,a)=>{const r=i("mala-album");return l(),o("div",_,[y("button",{onClick:a[0]||(a[0]=c=>s.value=!0)},"\u6D4F\u89C8\u56FE\u7247"),p(r,{visiable:s.value,onClose:a[1]||(a[1]=c=>s.value=!1),imgList:n},null,8,["visiable"])])}}},q=t('<h1 id="album-\u76F8\u518C\u6D4F\u89C8" tabindex="-1">Album \u76F8\u518C\u6D4F\u89C8 <a class="header-anchor" href="#album-\u76F8\u518C\u6D4F\u89C8" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u57FA\u7840\u4F7F\u7528" tabindex="-1">\u4E00\u3001\u57FA\u7840\u4F7F\u7528 <a class="header-anchor" href="#\u4E00\u3001\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5FC5\u987B\u6307\u5B9A imgList \u5C5E\u6027\uFF0C\u5B83\u5E94\u8BE5\u662F\u4E00\u4E2A\u56FE\u7247\u8DEF\u5F84\u7684\u6570\u7EC4\u3002</p><h3 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h3><br>',5),v=t(`<h3 id="\u6E90\u7801" tabindex="-1">\u6E90\u7801 <a class="header-anchor" href="#\u6E90\u7801" aria-hidden="true">#</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">album</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isShow</span><span style="color:#89DDFF;"> = </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6D4F\u89C8\u56FE\u7247</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mala-album</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">visiable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isShow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">close</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isShow</span><span style="color:#89DDFF;"> = </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">imgList</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">imgList</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> img1 </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../assets/images/\u4E03\u5BAB\u667A\u97F301.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> img2 </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../assets/images/\u4E03\u5BAB\u667A\u97F302.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> img3 </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../assets/images/\u4E03\u5BAB\u667A\u97F303.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> img4 </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../assets/images/\u65F6\u5D0E\u72C2\u4E0901.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> img5 </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../assets/images/\u65F6\u5D0E\u72C2\u4E0902.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> img6 </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../assets/images/\u65F6\u5D0E\u72C2\u4E0903.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> img7 </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../assets/images/\u8587\u5C14\u8389\u727901.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> img8 </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../assets/images/\u8587\u5C14\u8389\u727902.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> img9 </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../assets/images/\u8587\u5C14\u8389\u727903.jpg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> imgList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [img1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> img2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> img3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> img4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> img5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> img6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> img7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> img8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> img9]</span></span>
<span class="line"><span style="color:#676E95;">// \u7EC4\u4EF6\u72B6\u6001</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isShow </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="album-\u7EC4\u4EF6\u5C5E\u6027" tabindex="-1">Album \u7EC4\u4EF6\u5C5E\u6027 <a class="header-anchor" href="#album-\u7EC4\u4EF6\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u8981</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>visiable</td><td>\u63A7\u5236 album \u7EC4\u4EF6\u663E\u793A\u4E0E\u9690\u85CF</td><td>Boolean</td><td>false</td><td>false</td></tr><tr><td>imgList</td><td>\u56FE\u7247\u8D44\u6E90\u6570\u7EC4</td><td>Array</td><td>true</td><td></td></tr></tbody></table><h2 id="album-\u7EC4\u4EF6\u4E8B\u4EF6" tabindex="-1">Album \u7EC4\u4EF6\u4E8B\u4EF6 <a class="header-anchor" href="#album-\u7EC4\u4EF6\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u8981</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>close</td><td>album \u5173\u95ED\u4E8B\u4EF6</td><td>Function</td><td>true</td><td></td></tr></tbody></table>`,6),k=JSON.parse('{"title":"Album \u76F8\u518C\u6D4F\u89C8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u57FA\u7840\u4F7F\u7528","slug":"\u4E00\u3001\u57FA\u7840\u4F7F\u7528","link":"#\u4E00\u3001\u57FA\u7840\u4F7F\u7528","children":[{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[]},{"level":3,"title":"\u6E90\u7801","slug":"\u6E90\u7801","link":"#\u6E90\u7801","children":[]}]},{"level":2,"title":"Album \u7EC4\u4EF6\u5C5E\u6027","slug":"album-\u7EC4\u4EF6\u5C5E\u6027","link":"#album-\u7EC4\u4EF6\u5C5E\u6027","children":[]},{"level":2,"title":"Album \u7EC4\u4EF6\u4E8B\u4EF6","slug":"album-\u7EC4\u4EF6\u4E8B\u4EF6","link":"#album-\u7EC4\u4EF6\u4E8B\u4EF6","children":[]}],"relativePath":"components/album.md","lastUpdated":1668318278000}'),E={name:"components/album.md"},x=Object.assign(E,{setup(e){return(n,s)=>(l(),o("div",null,[q,p(f),v]))}});export{k as __pageData,x as default};
