import React from "react";
import ReactDOM from "react-dom/client";


const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://tse2.mm.bing.net/th/id/OIP.9hl54qFeHA_2o_PIo3JhswAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>

      </div>
    </div>
  )
}
const RestaurantCard=(props)=>{
  const {resData}=props;
  return(
    <div className="res-card" style={{backgroundColor:"#EBE389"}}>
      <img className="res-logo"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId}/>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}⭐</h4>
      <h4>{resData.info.time}</h4>

    </div>
  )
}
const resList=[{"info": {
                      "id": "940284",
                      "name": "Bakingo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/11/311c3b35-84e9-43d1-8e85-d318904ae51e_940284.JPG",
                      "locality": "Mauja Dhoran Khas",
                      "areaName": "Rajeshwar nagar",
                      "costForTwo": "₹299 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.6,
                      "parentId": "3818",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "759",
                      "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-12 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "66% OFF",
                        "subHeader": "UPTO ₹126",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-002b32a9-c5b3-45c6-8671-23991078f2e7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/dehradun/bakingo-mauja-dhoran-khas-rajeshwar-nagar-rest940284",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "687019",
                      "name": "Udupi Cafe Bangalore Idli",
                      "cloudinaryImageId": "d5dec2566e278974bc2d40f4e3136164",
                      "locality": "Sahastradhara Road",
                      "areaName": "Hathibarkala",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "South Indian",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "13549",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.9K+",
                      "promoted": true,
                      "adTrackingId": "cid=32862621~p=4~adgrpid=32862621#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=687019~plpr=COLLECTION~eid=f3b9a806-8f86-4871-a0e0-35922680315e~srvts=1757604640633~collid=115117",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 4.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "4.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-11 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-002b32a9-c5b3-45c6-8671-23991078f2e7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/dehradun/udupi-cafe-bangalore-idli-sahastradhara-road-hathibarkala-rest687019",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "1010454",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/1f22d003-4a90-4ffb-9ecb-04e8d87d5c1a_1010454.jpg",
                      "locality": "Mauza Dhakpatti",
                      "areaName": "Rajpur Road",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.5,
                      "parentId": "166",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "724",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 4.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "4.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-12 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-002b32a9-c5b3-45c6-8671-23991078f2e7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/dehradun/burger-king-mauza-dhakpatti-rajpur-road-rest1010454",
                      "type": "WEBLINK"
                    }
                  }
];

const Body=()=>{
  return( 
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}
const AppLayout=()=>{
  return(
    <div className="app">
      <Header />
      <Body />


    </div>
  )
}

    const root=ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<AppLayout />);
      
        
      
