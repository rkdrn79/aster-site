var e=/^(`{3,})aster-context(?:[ \t]+(.*?))?[ \t]*$/;function t(e){return e.replace(/[`\r\n]+/g,` `).replace(/\s+/g,` `).trim().slice(0,120)}function n(e){let n=3;for(let t of e.body.matchAll(/`+/g))n=Math.max(n,t[0].length+1);let r="`".repeat(n),i=t(e.label);return[`${r}aster-context${i?` ${i}`:``}`,e.body,r].join(`
`)}function r(e,...t){return[e.trim(),...t.map(n)].filter(Boolean).join(`

`)}function i(n){if(!n.includes(`aster-context`))return null;let r=n.split(`
`),i=[],a=[];for(let n=0;n<r.length;n++){let o=e.exec(r[n].replace(/\r$/,``)),s=o?RegExp(`^${o[1]}\`*[ \\t]*\\r?$`):null,c=-1;for(let e=n+1;s&&e<r.length&&c<0;e++)c=s.test(r[e])?e:-1;!o||c<0?i.push(r[n]):(a.push({label:t(o[2]??``),body:r.slice(n+1,c).join(`
`)}),n=c)}return a.length?{request:i.join(`
`).trim(),contexts:a}:null}export{r as n,i as t};