import{T as e}from"./index-7ed2c31f.js";async function g(a){try{const{data:r}=await e.get(`/drinks/${a}`);return r}catch(r){console.log(r.message)}}async function l(){try{const{data:a}=await e.get("/drinks/mainpage");return a}catch(a){console.log(a.message)}}async function u(){try{const{data:a}=await e.get("/drinks/popular");return a}catch(a){console.log(a.message)}}async function f(a,r,o,c,n){let t="/drinks/search?";a&&(t=t+"keyword="+a+"&"),r&&(t=t+"category="+r+"&"),o&&(t=t+"ingredient="+o+"&"),c&&(t=t+"page="+c+"&"),n&&(t=t+"per_page="+n);try{e.defaults.params;const{data:s}=await e.get(t);return s}catch(s){console.log(s.message)}}export{f as a,u as b,g as c,l as g};
