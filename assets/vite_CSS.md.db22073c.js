import{_ as s,c as a,o as n,a as l}from"./app.bc1dcc4b.js";const d=JSON.parse('{"title":"CSS","description":"","frontmatter":{},"headers":[{"level":2,"title":"CSS Modules","slug":"css-modules","link":"#css-modules","children":[]},{"level":2,"title":"CSS Pre-processors","slug":"css-pre-processors","link":"#css-pre-processors","children":[{"level":3,"title":"Disabling CSS injection into the page","slug":"disabling-css-injection-into-the-page","link":"#disabling-css-injection-into-the-page","children":[]}]},{"level":2,"title":"\u53C3\u8003\u8CC7\u6599","slug":"\u53C3\u8003\u8CC7\u6599","link":"#\u53C3\u8003\u8CC7\u6599","children":[]}],"relativePath":"vite/CSS.md"}'),p={name:"vite/CSS.md"},e=l(`<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-hidden="true">#</a></h1><h2 id="css-modules" tabindex="-1">CSS Modules <a class="header-anchor" href="#css-modules" aria-hidden="true">#</a></h2><p>css \u6A94\u540D\u52A0\u4E0A .module.css \u5C31\u53EF\u4EE5\u4EE5\u6A21\u7D44\u65B9\u5F0F\u532F\u51FA</p><p>\u4F8B\u5982 src \u5E95\u4E0B\u65B0\u589E example.module.css , \u5728 main.js \u532F\u5165\u6A21\u7D44</p><p>main.js</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> classes </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./example.module.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">classes</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u8981\u55AE\u7368\u532F\u5165\u67D0\u500B class \u540D\u7A31, \u4F8B\u5982 example.module.css \u7684 .applyColor , \u4E5F\u53EF\u4EE5\u7528\u89E3\u69CB\u65B9\u5F0F\u532F\u9032\u4F86</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">applyColor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./example.module.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">applyColor</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="css-pre-processors" tabindex="-1">CSS Pre-processors <a class="header-anchor" href="#css-pre-processors" aria-hidden="true">#</a></h2><h3 id="disabling-css-injection-into-the-page" tabindex="-1">Disabling CSS injection into the page <a class="header-anchor" href="#disabling-css-injection-into-the-page" aria-hidden="true">#</a></h3><p>\u5982\u679C\u8981\u5C07\u67D0\u500B css \u6A21\u7D44\u7981\u6B62\u532F\u5165\u53EF\u52A0\u4E0A ?inline</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> classes </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./example.module.css?inline</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">h1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">className </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> classes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C3\u8003\u8CC7\u6599" tabindex="-1">\u53C3\u8003\u8CC7\u6599 <a class="header-anchor" href="#\u53C3\u8003\u8CC7\u6599" aria-hidden="true">#</a></h2><p><a href="https://vitejs.dev/guide/features.html#disabling-css-injection-into-the-page" target="_blank" rel="noreferrer">Disabling CSS injection into the page</a><br><a href="https://vitejs.dev/guide/features.html#css-modules" target="_blank" rel="noreferrer">CSS Modules</a></p>`,14),o=[e];function c(t,r,i,D,F,y){return n(),a("div",null,o)}const A=s(p,[["render",c]]);export{d as __pageData,A as default};
