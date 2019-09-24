export const  getUserDetails = () => {
    return async (dispatch, getState, {getFirestore ,getFirebase }) => {
        const firestore = getFirestore();
        const authId = getState().firebase.auth.uid;
        // const user =  firebase.auth().currentUser;
        // console.log( "yoo user  " , user );

        try{
            const user = await firestore.collection("users").doc(authId).get()
            dispatch({ type : "USERDATA", payload : user.data() });    
        }
        catch(e){

        }
    }
}

export const getTotalEarnings = () => {
    return async ( dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const authId = getState().firebase.auth.uid;
        let totalEarnings = 0;
        try{
            const orders = await firestore.collection("orders").where("userId", "==" ,authId).get();
            orders.docs.map(( order )=>{
                const Amount = Number(order.data().Amount);
                totalEarnings = totalEarnings + Amount;
            })
            dispatch({
                type : "TOTAL_EARNING",
                payload : totalEarnings
            })

        }
        catch(e){

        }
    }
}

export const getMonthlyAverage = () => {
    
    return async ( dispatch ,getState ,{ getFirestore }) => {
        const firestore = getFirestore();
        let monthlyAverage = 0; 
        let length = 0;
        const authId = getState().firebase.auth.uid;
        const currentMonth = new Date().getMonth() + 1;
        const startDate = new Date(currentMonth + " 1 2019");
        const endDate = new Date(currentMonth + " 31 2019");
        try{
            const orders = await firestore.collection("orders").where("userId","==",authId).where("RentPeriodEnd", ">", startDate ).where("RentPeriodEnd", "<", endDate ).get();
            length = orders.docs.length
            orders.docs.map(( order )=>{
                const Amount  = Number(order.data().Amount);
                monthlyAverage = monthlyAverage + Amount;
            })
            monthlyAverage = monthlyAverage / length;
            dispatch({
                type : "MONTHLY_AVERAGE",
                payload : monthlyAverage
            })
        }
        catch(e)
        {
            console.log(" error :  ", e)
        }

    }
}

export const getInventryValue = () => {
    return async ( dispatch ,getState, {getFirestore}) => {
        const firestore = getFirestore();
        const authId = getState().firebase.auth.uid;
        try{
            const row = await firestore.collection("allgears").where("authorId", "==" , authId).get();
            let totalValue = 0 ;
            row.docs.map(( item )=>{
                const pricePerDay = Number(item.data().PricePerDay);
                totalValue = totalValue + pricePerDay; 
            })
            dispatch({
                type : "INVENTRY_VALUE",
                payload : totalValue
            })
        }
        catch(e){

        }
        
    }
}

export const getTotalGears = () => {
    return async ( dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
       
        const authId = getState().firebase.auth.uid;
        let totalGears = 0;
        let onRent = 0;
        let avaliable = 0;
        let row = null;
        try{
            row = await firestore.collection("allgears").where("authorId", "==" , authId).get();
            totalGears = row.docs.length;
            row = await firestore.collection("rented_listed").where("authorId", "==" , authId).get();
            onRent = row.docs.length;
            avaliable = totalGears - onRent;
            const data = [ totalGears, onRent, avaliable ]
            dispatch({
                type : "TOTAL_GEARS",
                payload : data
            })
        }
        catch(e){
            console.log(" error :  ", e)
        }
    }
}