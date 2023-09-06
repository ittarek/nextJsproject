"use client"
import { signIn } from "@/redux/user/userSlice";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';


const LoginForm = () => {
const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    //   taost function
    const notify = () => toast('Login successfull.',{  duration: 4000,
        position: 'top-center',});
      const onSubmit = ({email,password}) =>{ 
        dispatch(signIn(
            {    email,
                password}
            ))
            notify();

        console.log(email,password)}    
    return (
        <div>

<div className="hero min-h-screen bg-base-200">

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="email">
            <span className="label-text">Email</span>
          </label>
          <input className="input input-bordered" defaultValue="" {...register("email" , {required :true})}  />

        </div>
        <div className="form-control">
          <label className="password">
            <span className="label-text">Password</span>
          </label>

          <input className="input input-bordered" {...register("password", { required: true })} />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
  <input type="submit" value="Login"  className="btn btn-primary" />
 

        </div>
        <p>New to here Please <Link href="/signup" className="text-purple-400 "> SignUp</Link></p>
        {errors.email && <span>Email field is required</span>}
        {errors.password && <span>Password field is required</span>}
      </form>
    </div>
  </div>
</div>


    );
};

export default LoginForm;