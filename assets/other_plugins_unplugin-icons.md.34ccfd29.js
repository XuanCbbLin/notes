import{_ as s,c as n,o as a,a as l}from"./app.bc1dcc4b.js";const A=JSON.parse('{"title":"unplugin-icons","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E\u65B9\u5F0F","slug":"\u914D\u7F6E\u65B9\u5F0F","link":"#\u914D\u7F6E\u65B9\u5F0F","children":[{"level":3,"title":"install","slug":"install","link":"#install","children":[]},{"level":3,"title":"config","slug":"config","link":"#config","children":[]}]},{"level":2,"title":"\u53C3\u8003\u8CC7\u6599","slug":"\u53C3\u8003\u8CC7\u6599","link":"#\u53C3\u8003\u8CC7\u6599","children":[]}],"relativePath":"other/plugins/unplugin-icons.md"}'),o={name:"other/plugins/unplugin-icons.md"},p=l(`<h1 id="unplugin-icons" tabindex="-1">unplugin-icons <a class="header-anchor" href="#unplugin-icons" aria-hidden="true">#</a></h1><h2 id="\u914D\u7F6E\u65B9\u5F0F" tabindex="-1">\u914D\u7F6E\u65B9\u5F0F <a class="header-anchor" href="#\u914D\u7F6E\u65B9\u5F0F" aria-hidden="true">#</a></h2><h3 id="install" tabindex="-1">install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h3><ul><li>pnpm i -D @iconify/json</li><li>pnpm i -D unplugin-icons</li><li>pnpm i -D unplugin-vue-components</li></ul><h3 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-hidden="true">#</a></h3><p><code>vite.config.js</code></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Components </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unplugin-vue-components/vite</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Icons </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unplugin-icons/vite</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> IconsResolver </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unplugin-icons/resolver</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">Components</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">resolvers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">IconsResolver</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">Icons</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C3\u8003\u8CC7\u6599" tabindex="-1">\u53C3\u8003\u8CC7\u6599 <a class="header-anchor" href="#\u53C3\u8003\u8CC7\u6599" aria-hidden="true">#</a></h2><p><a href="https://github.com/antfu/unplugin-icons" target="_blank" rel="noreferrer">unplugin-icons</a><br><a href="https://github.com/antfu/unplugin-vue-components#migrate-from-vite-plugin-components" target="_blank" rel="noreferrer">unplugin-vue-components</a></p>`,9),e=[p];function t(c,r,i,D,F,u){return a(),n("div",null,e)}const C=s(o,[["render",t]]);export{A as __pageData,C as default};
