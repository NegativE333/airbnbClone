import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {

    const currentUser = await getCurrentUser();
    const listings = await getFavoriteListings();

    if(listings.length === 0){
        return(
            <ClientOnly>
                <EmptyState 
                    title="No Favorites found"
                    subTitle="Looks like you have no favorite listings."
                />
            </ClientOnly>
        )
    }

    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState 
                    title="Unauthorized"
                    subTitle="Please do login."
                />
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
            <FavoritesClient 
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
   
}

export default ListingPage;