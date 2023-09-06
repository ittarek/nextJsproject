
import auth from "@/firebase/firebase.config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";




const initialState = {
    name:"",
    email: "",
    isLoading:true,
    isError:false,
    error:"",
};


export const createUser = createAsyncThunk("userSlice/createUser", async({email, password})=>{
  const data = await createUserWithEmailAndPassword(auth,email,password);
  console.log(data);
  return{
    email: data.user.email,
    name:data.user.displayName,
 }
  });
export const signIn = createAsyncThunk("userSlice/signIn", async({email, password}) => {
const data = await signInWithEmailAndPassword(auth, email, password);
return{
    email: data.user.email,
    name:data.user.displayName,
 }
  });

//   const profileUpdate = async (updateUser = {}) => {

//     await updateProfile(auth.currentUser, updateUser);
//     setUser((preUser) => ({ ...preUser, ...updateUser }));
//   };



// for create user in firebase
const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        logout:(state)=>{
            state.name="";

            state.email="";

        }
       
    },


      extraReducers:(builder)=>{
builder.addCase(createUser.pending,(state)=>{
    state.isLoading=true;

    state.isError=false;
    state.email="";
    state.name="";
    state.error="";

});

builder.addCase(createUser.fulfilled,(state,{payload})=>{
    state.isLoading=false;

    state.isError=false;
    state.email=payload.email;
    state.name=payload.name;
    state.error="";

});

builder.addCase(createUser.rejected,(state,action)=>{
    state.isLoading=false;

    state.isError=false;
    state.email="";
    state.name="";
    state.error=action.error.message;

})

    },
});



export const {logout} = userSlice.actions;

export default userSlice.reducer
