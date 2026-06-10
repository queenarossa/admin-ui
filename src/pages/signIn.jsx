import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";

function SignIn() {
    return (
        <AuthLayout title="Log in to your account" type="sign-in">
            <FormSignIn />
        </AuthLayout>
    );
}

export default SignIn;