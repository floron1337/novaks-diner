import { getCollectionProducts } from "lib/shopify";

export async function FourItemsGrid () {
    const homepageItems = await getCollectionProducts({
        collection: 'hidden-homepage-featured-items'
    });
    
    if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2] || !homepageItems[3]) return null;

    return (
        <div className="w-full grid grid-cols-3 grid-rows-2 gap-4 bg-red-500">
            <div className="row-span-2">
                <img src={homepageItems[3].featuredImage.url} width="100%" alt=""/>
            </div>
            <div className="row-span-2 col-start-3 row-start-1">
                <img src={homepageItems[2].featuredImage.url} width="100%" alt=""/>
            </div>
            <div className="col-start-2 row-start-1">
                <img src={homepageItems[1].featuredImage.url} width="100%" alt=""/>
            </div>
            <div className="col-start-2">
                <img src={homepageItems[0].featuredImage.url} width="100%" alt=""/>
            </div>
        </div>
    )
}
