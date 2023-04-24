import { Routers } from "routes";
import React, { useEffect } from "react";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
function useRoute() {
  let page = [];
  let subPage = [];
  let folder = [];
  const location = useLocation();
  const pathnameArray = location.pathname.split("/");
  Routers.map(route => {
    if (pathnameArray[1].toLowerCase() === route.name) folder.push(route);
    if (folder !== [] && folder[0]?.child === true && pathnameArray.length >=3 ) pathnameArray[2].toLowerCase() === route.name.toLowerCase()&&page.push(route);
    if (page !== [] && page[0]?.child === true && pathnameArray.length >=4 ) pathnameArray[3].toLowerCase() === route.name.toLowerCase()&&subPage.push(route);
  })
  return [page, subPage, folder];
}
 function BreadCrumb() {
  const [page, subPage, folder] = useRoute();
   const [Breads, setBreads] = React.useState([]);
   const location = useLocation();
   const pathnameArray = location.pathname.split("/");
   useEffect(() => {
     setBreads([])
     const Folder = folder[0];
     setBreads(e => [...e, { title: (<><Folder.icon /><span>{!Folder.label ? Folder?.name : Folder.label}</span></>), href: `${Folder.url}` }])
     if( pathnameArray.length > 2){ const Current = page[0];setBreads(e => [...e, { title: (<><Current.icon /><span>{!Current.label ? Current?.name : Current.label}</span></>),href:`${Current.url}` }])}
     if (subPage !== [] && pathnameArray.length > 3) { const SubPage = subPage[0]; setBreads(e => [...e, { title: (<><SubPage.icon /><span>{!SubPage.label ? SubPage?.name : SubPage.label}</span></>), href: `${SubPage.url}` }]) }
     console.log(page,subPage,folder)
  }, [location.pathname]);
  return <Breadcrumb style={{margin: "16px 0", }} items={Breads} />
}
export default BreadCrumb