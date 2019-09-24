import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


export const formatDate = (date) => {
  return date && moment(date).format('YYYY-MM-DD');
}
export const days = (d1, d2) => { return moment(d2).diff(moment(d1), 'days') + 1 };


export const deleteCartItem = async (data) => {
  // try {
  //   let response = await post('deleteGearFromCart', data);
  // }
  // catch (error) {
  //   handleError(error);
  // }
}
export const getCarts = (id) => { 
  // JSON.parse(id)
  console.log(" get carts Id :" , id);
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
          const query= firestore.collection("cart").where("userId","==",id);

          const gears=await query.get();
          // console.log("cart detail action",gears.docs())
           if(await gears){
           
            dispatch({ type: 'LIST_CART_GEARS', payload: gears.docs});
            
           }
        
       
        }
      }
 export const addCart = (dates,id) => {
        return (dispatch, getState, { getFirestore }) => {

          const item = getState().gearscat.gearDetaily ;

          const firestore = getFirestore();
          const profile = getState().firebase.profile;
          const userID = getState().firebase.auth.uid;
          console.log("agayai yaha ",id);
          firestore.collection('cart').add({
           ...item,
           ...dates,
            gearid:id,
            userId:userID
          }).then(() => {
            console.log("ap ka kam hogaya ")
            dispatch({ type: 'ADD_CART_SUCCESS' });
          }).catch(err => {
            console.log(" lund pa sai kuch hota hai ")
            dispatch({ type: 'ADD_CART_ERROR' }, err);
          });
        }
      };
 export const addFavourite = (url,categoryName,Model,City,Brand,id,PricePerDay) => {
        return (dispatch, getState, { getFirestore }) => {

          // const item = getState().gearscat.gearDetaily ;
// 
          const firestore = getFirestore();
        
          const userID = getState().firebase.auth.uid;

          // console.log("action :favourite id ",geardetails);
          firestore.collection('favourite').add({

            url,
            categoryName,
            Model,
            City,
           
            Brand,
         
            PricePerDay,
         
            gearid:id,
            userId:userID
          }).then(() => {
            
            dispatch({ type: 'ADD_FAVOURITE_SUCCESS' });
          }).catch(err => {
           
            dispatch({ type: 'ADD_FAVOURITE_ERROR' }, err);
          });
        }
      };
export const createGear = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('rented_listed').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};
export const searchgears = (searchd) => {
  // console.log('this is location', search.location);
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    console.log('check',searchd.search);
        const query= firestore.collection("allgears").where("City","==",searchd.location).where("categoryName","==",searchd.search);
        const searchgears=await query.get();
         if(await searchgears){
          console.log('seatched fears',searchgears.docs);
          dispatch({ type: 'SEARCH_GEAR_SUCCESS', payload: searchgears.docs});
          
         }
     else{
      dispatch({ type: 'SEARCH_GEAR_SUCCESS', payload: "no product found"});
     }
    
  
    
    
  }
}
export const gearsByCategory = (cat) => {

  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
        if(cat === 'all-cat'){
          const query= firestore.collection("allgears");
          const gears=await query.get();
           if(await gears){
            console.log('gears docs',gears.docs);
            dispatch({ type: 'LIST_ALL_GEARS_SUCCESS', payload: gears.docs});
            
           }
        }
        else{
        const query= firestore.collection("allgears").where("categoryId","==",cat);
        const gears=await query.get();
         if(await gears){
          console.log('gears docs',gears.docs);
          dispatch({ type: 'LIST_GEARS_SUCCESS', payload: gears.docs});
          
         }
        }
        }
      }
      export const gearDetail = (cat) => {
        console.log('id in geardetail action',cat);
        return async (dispatch, getState, { getFirebase, getFirestore }) => {
          const firebase = getFirebase();
          const firestore = getFirestore();
          
                const query= firestore.collection("allgears").doc(cat);

                const gears=await query.get();
               
                 if(await gears){
                 
                  dispatch({ type: 'LIST_GEAR_DETAIL', payload: gears.data()});
                  
                 }
              
             
              }
            }
            export const  getFavourite = (id) => {
              console.log('id in geardetail action',id);
              return async (dispatch, getState, { getFirebase, getFirestore }) => {
                const firebase = getFirebase();
                const firestore = getFirestore();
                      const query= firestore.collection("favourite").where("userId","==",id);
            
                      const gears=await query.get();
                      // console.log("cart detail action",gears.docs())
                       if(await gears){
                       
                        dispatch({ type: 'LIST_FAVOURITE_GEARS', payload: gears.docs});
                        
                       }
                    
                   
                    }
                  }
     