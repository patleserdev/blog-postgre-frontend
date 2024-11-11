// const URL = "https://blog-postgre-frontend.vercel.app";
const URL = process.env.SITE_URL;
import getSitemap from "@/pages/api/getsitemap";

function generateSiteMap(datas) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <url>
       <loc>${URL}</loc>
     </url>
     <url>
       <loc>${URL}/postcategories</loc>
     </url>
      <url>
       <loc>${URL}/posts</loc>
     </url>
       <url>
       <loc>${URL}/comments</loc>
     </url>
       <url>
       <loc>${URL}/users</loc>
     </url>
        <url>
       <loc>${URL}/cookies</loc>
     </url>
        <url>
       <loc>${URL}/legal</loc>
     </url>
     ${datas.map((e) => {
         return `
           <url>
               <loc>${`${URL}/${e.entity}/${e.identifier}`}</loc>
           </url>
         `;
       })
       .join("")}
   </urlset>
 `;
}
 
export async function getServerSideProps({ res }) {

    // const posts = await getPosts()
    // const categories = await getCategories()
    const datas= await getSitemap()
    // const datas=[...posts,...categories]
    // Generate the XML sitemap with the blog data
    console.log(datas)
    let sitemap = generateSiteMap(datas);
      res.setHeader("Content-Type", "text/xml");
    // Send the XML to the browser
    res.write(sitemap);
    res.end();
   
    return {
      props: {},
    };
  

}
 
export default function SiteMap() {}