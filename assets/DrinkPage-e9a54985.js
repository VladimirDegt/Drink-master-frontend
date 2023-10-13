import{s as o,j as t,r as x,C as b,b as j,H as v,N as k,O as w,a as D}from"./index-419968ba.js";import{a as y}from"./operationsFilters-374e5640.js";import{P as z}from"./PageTitle-57f66059.js";import{b as I}from"./favoriteSelectors-c82fd15c.js";import{c as P}from"./operationsDrinks-f16b7d7f.js";import{T}from"./Hourglass-0a39fb34.js";const S=o.li`


  div {
    display: flex;
    justify-content: space-between;
    width: 157px;
  }

  img {
    width: 107px;
    height: 107px;
  }

  p {
    font-size: 14px;
    color:  var(--white-color);
  }

  span {
    font-size: 14px;
    color: var(--whitefifty-color);
  }

  @media (min-width: 768px) {
    div {
      width: 220px;
      margin-bottom: 14px;
    }
    img {
      width: 175px;
      height: 175px;
      
    }
    p {
      font-size: 18px;
    }

    span {
      font-size: 16px;
    }
  }
`,C=o.div`
  margin-bottom: 8px;
border-radius:8px;
  width: 157px;
  height: 157px;
  padding: 25px;
  background-color:  var(--blue-color);

  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
    padding: 22px;
    
  }
`,F="/Drink-master-frontend/assets/coctailPlaceholder-13631aa6.png",$=({photo:i,title:s,measure:r})=>t.jsxs(S,{children:[t.jsx(C,{children:t.jsx("img",{src:i||F})}),t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("span",{children:r})]})]}),E=o.p`
  color: var(--whitefifty-color);
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`,L=o.ul`


  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;


  @media (max-width: 374px) {
justify-content: center;
}

  @media (min-width: 768px) {
    gap: 22px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 100px;
    gap: 35px;
  }
`,R=({coctailInfo:i})=>{const[s,r]=x.useState([]),d=i!==null?i.ingredients:[],c=d.map(n=>n.ingredientId);x.useEffect(()=>{(async()=>{try{const e=await y();if(e.length!==0){const a=e.filter(p=>c.includes(p._id));r(a)}}catch(e){console.log(e.message)}})()},[i]);const m=d.map(n=>{const e=s.find(a=>a._id===n.ingredientId);return{...n,ingredientThumb:e?e.ingredientThumb:null}});return t.jsxs(t.Fragment,{children:[t.jsx(E,{children:"Ingredients"}),t.jsx(L,{children:m.map(({title:n,measure:e,ingredientId:a,ingredientThumb:p})=>t.jsx($,{title:n,measure:e,photo:p},a))})]})},A=o.button`


@media (max-width: 374px) {
      margin-left: 40px;
      
    }

  width: 222px;
  color: var(--blue-color);
  background-color: var(--white-color);
  border-radius: 42px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 14px;
  padding-top: 14px;
  margin-bottom: 80px;
  transition:
    background-color var(--transition),
    color var(--transition);



  &:hover {
    background-color: var(--blue-color);
    color: var(--white-color);
  }

  &:active {
    background-color: var(--blue-color);
    color: var(--white-color);
    box-shadow: 0 0 10px var(--whitefifty-color);
  }

  @media (min-width: 768px) {
    width: 250px;
    font-size: 16px;
    padding-bottom: 18px;
    padding-top: 18px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 0;
  }
`,B=({text:i,onClick:s})=>t.jsx(A,{onClick:s,children:i}),_=o.p`

  margin-bottom: 20px;
  margin-top: 8px;
  color: var(--whitefifty-color);
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`,H=o.p`

@media (max-width: 374px) {
    width: 310px;
  }

  margin-bottom: 40px;
  width: 335px;
  color: var(--white-color);
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }
`,O=o.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    margin-top: 140px;
  }

  @media (min-width: 1280px) {
    margin-top: 132px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
  }
`,N=o.img`
width: 335px;
height: 400px;


@media (min-width: 768px) {
    width: 704px;
    height: 400px;
    object-fit: cover;
    object-position: center top;
}

@media (min-width: 1280px) {
    width: 400px;
    height: 400px;

}
`,q=({photo:i})=>t.jsx(N,{src:i}),G=({coctailInfo:i})=>{const s=b(I),r=i!==null?i.drink:"",d=i!==null?i.glass:"",c=i!==null?i.alcoholic:"",m=i!==null?i.shortDescription:"",n=i!==null?i.drinkThumb:"image",e=i!==null?i._id:"",a=j(),[p,l]=x.useState(!1);x.useEffect(()=>{s.find(u=>u._id===e)&&l(!0)},[s,e]);const f=()=>{a(p?v(e):k(e)),l(!p)};return t.jsxs(O,{children:[t.jsxs("div",{children:[t.jsx(z,{title:r,style:{marginBottom:"10px"}}),t.jsxs(_,{children:[d," / ",c]}),t.jsxs(H,{children:[m," "]}),t.jsx(B,{text:p?"Remove from favorites":"Add to favorite drinks",onClick:f})]}),t.jsx(q,{photo:n})]})},J="/Drink-master-frontend/assets/desktop@1x-8eda6905.jpg",K="/Drink-master-frontend/assets/desktop@2x-0896e2bb.jpg",M="/Drink-master-frontend/assets/tablet@1x-1ce56edb.jpg",Q="/Drink-master-frontend/assets/tablet@2x-11f63109.jpg",h="/Drink-master-frontend/assets/mob@1x-b65eaffd.jpg",U="/Drink-master-frontend/assets/mob@2x-d2eb580b.jpg",V=o.img`
@media (min-width: 1280px) {
 width: 631;
}
@media (min-width: 768px) {
    width: 704;
}
@media (min-width: 375px) {
    width: 335;
}
`,W=()=>t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 1280px)",srcSet:`${J}, ${K} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${M}, ${Q} 2x`,type:"image/jpg"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${h}, ${U} 2x`,type:"image/jpg"}),t.jsx(V,{src:h,alt:"Coctails"})]}),X=o.div`
  margin-bottom: 80px;
  @media (min-width: 768px) {
    margin-bottom: 140px;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Y=o.h3`
  margin-bottom: 40px;
  font-size: 28px;
`,g=o.p`
  @media (max-width: 374px) {
    width: 300px;
  }
  
  width: 335px;
  color: var(--white-color);
  font-size: 14px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 704px;
  }

  @media (min-width: 1280px) {
    width: 549px;
    font-size: 16px;
    margin-bottom: 0;
  }
`,Z=({coctailInfo:i})=>{const s=i!==null?i.instructions:"",r=i!==null?i.description:"";return t.jsxs(t.Fragment,{children:[t.jsx(Y,{children:"Recipe Preparation"}),t.jsxs(X,{children:[t.jsxs("div",{children:[t.jsxs(g,{style:{marginBottom:40},children:[" ",r," "]}),t.jsxs(g,{children:[" ",s," "]})]}),t.jsx(W,{})]})]})},tt=()=>{const[i,s]=x.useState(null),[r,d]=x.useState(!1),{drinkId:c}=w();return x.useEffect(()=>{d(!0),(async()=>{try{const n=await P(c);s(n)}catch(n){console.error(n.message)}finally{d(!1)}})()},[c]),r?t.jsx(D,{children:t.jsx(T,{color:"#f3f3f3",width:"80"})}):t.jsxs(t.Fragment,{children:[t.jsx(G,{coctailInfo:i}),t.jsx(R,{coctailInfo:i}),t.jsx(Z,{coctailInfo:i})]})},at=()=>{const{drinkId:i}=w();return t.jsx(tt,{id:i})};export{at as default};
