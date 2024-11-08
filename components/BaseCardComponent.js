import HoveredCardWithLink from "./HoveredCardWithLink"

export default function BaseCardComponent({post,keypass,little,list,title,incrementer,categorie = null,full=null})
{

    return (
        
            <div key={keypass} className={little ? "w-full flex justify-center lg:w-full xl:w-[33%]  px-2" :"w-full sm:w-[45%]  md:w-[32%] lg:w-[25%] px-2"}>
            {/* <ClassicCardWithLink post={post} key={i}/> */}
            <HoveredCardWithLink
              key={keypass}
              post={post}
              list={incrementer + keypass}
              title={categorie ? title : post.categorie_id}
              little={little ? true : false}
              full={full ? true : false}
            />
          </div>
          

    )
}