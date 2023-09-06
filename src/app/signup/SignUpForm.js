"use client"
import { createUser } from "@/redux/user/userSlice";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";



const SignUpForm = () => {

    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = ({name,email,password}) =>{ 
        dispatch(createUser(
        {    email,
            password}
        ))
        console.log(name,email,password)}    
    return (
        <div>

<div className="hero min-h-screen bg-base-200">

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        {/* name */}
        <div className="form-control">
          <label className="name">
            <span className="label-text">Name</span>
          </label>
          <input className="input input-bordered" defaultValue="" {...register("name", { required: true })}  />

        </div>
        {/* email */}
        <div className="form-control">
          <label className="email">
            <span className="label-text">Email</span>
          </label>
          <input className="input input-bordered" defaultValue="" {...register("email", { required: true })}  />

        </div>
        {/* password */}
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

  <input type="submit" value="Signup" className="btn btn-primary" />
        </div>
        <p>Already have account <Link href="/login" className="text-purple-400 "> Login</Link></p>
        {errors.name && <span>Name field is required</span>}
        {errors.email && <span>Email field is required</span>}
        {errors.password && <span>Password field is required</span>}
      </form>
    </div>
  </div>
</div>


    );
};

export default SignUpForm;